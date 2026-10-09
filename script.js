(function(){
  'use strict';
  const CONFIG = {TOTAL_ROUNDS: 10, BEST_KEY: 'where-is-that.best.v1', DIFF_KEY: 'where-is-that-difficulty'};
  const DIFFICULTY_ORDER = ['simple','normal','difficult'];
  const DIFFICULTY_LEGACY = {easy:'simple',medium:'normal',hard:'difficult'};
  const DIFFICULTY_META = {
    simple:{label:'Simple',badge:'\ud83c\udf31 SIMPLE'},
    normal:{label:'Normal',badge:'\u2b50 NORMAL'},
    difficult:{label:'Difficult',badge:'\ud83d\udd25 DIFFICULT'}
  };
  const DEFAULT_DIFFICULTY = 'normal';
  const FILLER_NAMES = ['Zoo','Harbour','Observatory','Aquarium','Circus'];
  const STATE = Object.freeze({START:'START',PLAYING:'PLAYING',FEEDBACK:'FEEDBACK',COMPLETED:'COMPLETED'});
  const BADGE = {};
  BADGE[STATE.START] = {icon: '\u25CF', text: 'READY'};
  BADGE[STATE.PLAYING] = {icon: '\ud83d\udc40', text: 'PLAYING'};
  BADGE[STATE.FEEDBACK] = {icon: '\u2728', text: 'THINKING'};
  BADGE[STATE.COMPLETED] = {icon: '\u2b50', text: 'COMPLETE'};
  const POSITIVE_FEEDBACK = ['That is right!','Wonderful!','Great job!','Well done!','Perfect!','Excellent!'];
  const CLUES = [
    'Look carefully at the surroundings.',
    'Can you recognise this familiar place?',
    'Notice the details that give it away.',
    'Think of the places you know well.'
  ];
  const PLACE_DATA = (typeof window !== 'undefined' && Array.isArray(window.PLACES)) ? window.PLACES : [];
  const toSvgDataUri = function(svg){return 'data:image/svg+xml;charset=UTF-8,'+encodeURIComponent(svg);};
  const places = PLACE_DATA.map(function(p){
    return {id:p.id, name:p.name, cues:p.cues, difficulty:p.difficulty||DEFAULT_DIFFICULTY, svg:p.svg, image:toSvgDataUri(p.svg)};
  });
  function getFilteredPlaces(difficulty){
    const pool = places.filter(function(p){return p.difficulty===difficulty;});
    return pool.length>0?pool:places;
  }
  const OPTION_COUNT = 4;
  const $ = function(id){return document.getElementById(id);};
  const el = {
    badgeIcon:stateBadgeIcon,badgeText:stateBadgeText,statRound:statRound,statTotal:statTotal,statCorrect:statCorrect,statBest:statBest,
    startScreen:startScreen,gameScreen:gameScreen,completeScreen:completeScreen,questionText:questionText,placeImage:placeImage,optionsGrid:optionsGrid,feedback:feedback,nextContainer:nextContainer,completeMessage:completeMessage,completeBest:completeBest,sceneFrame:document.querySelector('.scene-frame'),clueText:document.getElementById('clueText'),announcer:announcer
  };
  const btn = {start:btnStart,next:btnNext,playAgain:btnPlayAgain};
  const game = {state:STATE.START,round:0,totalRounds:CONFIG.TOTAL_ROUNDS,correctCount:0,best:{score:0,total:CONFIG.TOTAL_ROUNDS},currentPlace:null,usedPlaceIds:[],options:[],answered:false,difficulty:DEFAULT_DIFFICULTY};
  function readBest(){try{const r=localStorage.getItem(CONFIG.BEST_KEY);if(r===null)return{score:0,total:CONFIG.TOTAL_ROUNDS};const p=JSON.parse(r);if(typeof p.score==='number'&&typeof p.total==='number')return{score:p.score,total:p.total};return{score:0,total:CONFIG.TOTAL_ROUNDS};}catch(e){return{score:0,total:CONFIG.TOTAL_ROUNDS};}}
  function saveBest(s,t){try{localStorage.setItem(CONFIG.BEST_KEY,JSON.stringify({score:s,total:t}));}catch(e){}}
  function readDifficulty(){
    try{
      const raw=localStorage.getItem(CONFIG.DIFF_KEY);
      const v=DIFFICULTY_LEGACY[raw]||raw;
      if(DIFFICULTY_ORDER.indexOf(v)!==-1){if(v!==raw)saveDifficulty(v);return v;}
    }catch(e){}
    return DEFAULT_DIFFICULTY;
  }
  function saveDifficulty(d){try{localStorage.setItem(CONFIG.DIFF_KEY,d);}catch(e){}}
  function difficultyMeta(d){return DIFFICULTY_META[d]||DIFFICULTY_META[DEFAULT_DIFFICULTY];}
  function renderDifficultyUI(){
    const btns=document.querySelectorAll('[data-difficulty]');
    for(let i=0;i<btns.length;i++){const on=btns[i].getAttribute('data-difficulty')===game.difficulty;btns[i].classList.toggle('active',on);btns[i].setAttribute('aria-pressed',on?'true':'false');}
    const badge=document.getElementById('diffBadge');
    if(badge!==null)badge.textContent=difficultyMeta(game.difficulty).badge;
  }
  function showToast(msg){
    const t=document.getElementById('diffToast');
    if(t===null)return;
    t.textContent=msg;t.classList.add('show');
    clearTimeout(showToast._timer);
    showToast._timer=setTimeout(function(){t.classList.remove('show');},2600);
  }
  function setDifficulty(d){
    if(DIFFICULTY_ORDER.indexOf(d)===-1||d===game.difficulty)return;
    game.difficulty=d;
    saveDifficulty(d);
    renderDifficultyUI();
    const gameVisible=el.gameScreen!==null&&!el.gameScreen.classList.contains('hidden');
    if(gameVisible)showToast('Difficulty changed to '+difficultyMeta(d).label+'. Applies from next round.');
  }
  function setState(n){game.state=n;const b=BADGE[n];if(b){el.badgeIcon.textContent=b.icon;el.badgeText.textContent=b.text;}}
  function updateHud(){el.statRound.textContent=String(game.round);el.statTotal.textContent=String(game.totalRounds);el.statCorrect.textContent=String(game.correctCount);el.statBest.textContent=game.best.score+' / '+game.best.total;}
  function shuffleArray(arr){const a=arr.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));const tmp=a[i];a[i]=a[j];a[j]=tmp;}return a;}
  function getRandomPlace(ex,pool){
    const source=pool.length>0?pool:places;
    const es=new Set(ex);
    const c=[];
    for(let i=0;i<source.length;i++){if(!es.has(source[i].id))c.push(source[i]);}
    if(c.length===0){const last=game.currentPlace!==null?game.currentPlace.id:-1;const o=[];for(let i=0;i<source.length;i++){if(source[i].id!==last)o.push(source[i]);}if(o.length===0)return source[Math.floor(Math.random()*source.length)];return o[Math.floor(Math.random()*o.length)];}
    return c[Math.floor(Math.random()*c.length)];
  }
  function generateOptions(cp,pool){
    const source=pool.length>0?pool:places;
    const target=Math.min(OPTION_COUNT,Math.max(source.length,FILLER_NAMES.length+1));
    const others=shuffleArray(source.filter(function(p){return p.id!==cp.id;}));
    const opts=[cp];
    for(let i=0;i<others.length&&opts.length<target;i++)opts.push(others[i]);
    if(opts.length<OPTION_COUNT){
      const fillers=shuffleArray(FILLER_NAMES.map(function(n,i){return {id:'filler-'+i,name:n,cues:[],difficulty:cp.difficulty,svg:'',image:''};}));
      for(let i=0;i<fillers.length&&opts.length<OPTION_COUNT;i++)opts.push(fillers[i]);
    }
    return shuffleArray(opts);
  }
  function generateQuestion(){
    const pool=getFilteredPlaces(game.difficulty);
    const ex=game.usedPlaceIds.slice();if(game.round>0&&game.currentPlace!==null)ex.push(game.currentPlace.id);
    const p=getRandomPlace(ex,pool);
    game.currentPlace=p;game.usedPlaceIds.push(p.id);if(game.usedPlaceIds.length>places.length)game.usedPlaceIds.shift();
    game.options=generateOptions(p,pool);game.answered=false;
  }
  function retriggerSceneAnimation(){if(el.sceneFrame===null)return;el.sceneFrame.classList.remove('scene-frame');void el.sceneFrame.offsetWidth;el.sceneFrame.classList.add('scene-frame');}
  function showQuestion(){if(game.currentPlace===null)return;el.placeImage.src=game.currentPlace.image;el.placeImage.alt='Scene of a familiar place: choose the place name that matches';el.questionText.textContent='Where is this?';if(el.clueText!==null&&el.clueText!==undefined)el.clueText.textContent=CLUES[Math.floor(Math.random()*CLUES.length)];el.feedback.textContent='';el.nextContainer.classList.add('hidden');retriggerSceneAnimation();el.optionsGrid.innerHTML='';for(let i=0;i<game.options.length;i++){const option=game.options[i];const b=document.createElement('button');b.type='button';b.className='option-btn';b.textContent=option.name;b.dataset.optionId=String(option.id);b.addEventListener('click',(function(opt,be){return function(){handleAnswer(opt,be);};})(option,b));el.optionsGrid.appendChild(b);}el.optionsGrid.style.pointerEvents='auto';}
  function handleAnswer(sel,btnEl){if(game.answered||game.state===STATE.FEEDBACK)return;game.answered=true;el.optionsGrid.style.pointerEvents='none';setState(STATE.FEEDBACK);const isCorrect=sel.id===game.currentPlace.id;let correctOpt=null;for(let i=0;i<game.options.length;i++){if(game.options[i].id===game.currentPlace.id){correctOpt=game.options[i];break;}}const btns=el.optionsGrid.querySelectorAll('.option-btn');if(isCorrect){game.correctCount+=1;btnEl.classList.add('correct');const idx=Math.floor(Math.random()*POSITIVE_FEEDBACK.length);const ft=POSITIVE_FEEDBACK[idx];el.feedback.textContent=ft;announce(ft);}else{btnEl.classList.add('incorrect');for(let i=0;i<btns.length;i++){if(btns[i].dataset.optionId===String(correctOpt.id))btns[i].classList.add('correct');}const ft='That is okay - this was '+game.currentPlace.name+'.';el.feedback.textContent=ft;announce(ft);}updateHud();el.nextContainer.classList.remove('hidden');}
  function nextRound(){game.round+=1;if(game.round>game.totalRounds){finishGame();return;}generateQuestion();showQuestion();setState(STATE.PLAYING);updateHud();announce('Round '+game.round+' of '+game.totalRounds+'. Where is this?');}
  function finishGame(){setState(STATE.COMPLETED);el.gameScreen.classList.add('hidden');el.completeScreen.classList.remove('hidden');const score=game.correctCount;const total=game.totalRounds;const best=game.best;const msg='You recognised '+score+' out of '+total+' places.';el.completeMessage.textContent=msg;if(score>best.score){game.best={score:score,total:total};saveBest(score,total);el.completeBest.textContent='Best Score: '+score+' / '+total;el.completeBest.classList.remove('hidden');announce('Well done! '+msg+' New best score!');}else{el.completeBest.textContent='Best Score: '+best.score+' / '+best.total;el.completeBest.classList.remove('hidden');announce('Well done! '+msg);}updateHud();}
  function startGame(){game.round=0;game.correctCount=0;game.usedPlaceIds=[];game.currentPlace=null;game.answered=false;setState(STATE.START);el.startScreen.classList.add('hidden');el.completeScreen.classList.add('hidden');el.gameScreen.classList.remove('hidden');nextRound();updateHud();}
  function restartGame(){startGame();}
  function announce(m){if(el.announcer===null)return;el.announcer.textContent='';setTimeout(function(){el.announcer.textContent=m;},0);}
  function bindEvents(){btn.start.addEventListener('click',startGame);btn.next.addEventListener('click',nextRound);btn.playAgain.addEventListener('click',restartGame);document.addEventListener('click',function(event){const t=event.target;if(!(t instanceof Element))return;const b=t.closest('[data-difficulty]');if(b!==null)setDifficulty(b.getAttribute('data-difficulty'));});window.addEventListener('keydown',function(event){if(event.key!=='Enter'&&event.key!==' ')return;const t=event.target;const on=t instanceof Element&&t.closest('button, a[href], input, select, textarea');if(on)return;if(game.state===STATE.START){event.preventDefault();startGame();}else if(game.state===STATE.FEEDBACK){event.preventDefault();nextRound();}else if(game.state===STATE.COMPLETED){event.preventDefault();restartGame();}});}
  function init(){game.totalRounds=CONFIG.TOTAL_ROUNDS;game.best=readBest();game.difficulty=readDifficulty();saveDifficulty(game.difficulty);renderDifficultyUI();updateHud();setState(STATE.START);el.startScreen.classList.remove('hidden');el.gameScreen.classList.add('hidden');el.completeScreen.classList.add('hidden');bindEvents();announce('Where Is That? Recognition game. No rush, take your time.');}
  init();
})();