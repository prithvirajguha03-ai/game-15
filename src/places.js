/*
 * PLACES - single source of truth for every place illustration.
 * Add a new place by appending one object { id, name, cues, svg }.
 * No game-logic change is required to scale to 100 places.
 */
(function (root) {
  'use strict';

  var PLACES = [
    {
      id: "school",
      name: "School",
      cues: ["SCHOOL sign", "blackboard", "bell", "flag", "children with backpacks"],
      svg: `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="450" viewBox="0 0 800 450" role="img" aria-label="A school with a SCHOOL sign, a bell at the entrance, a blackboard in the window, a flagpole and children with backpacks">
  <defs>
    <linearGradient id="s2sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#9fd0ef"/><stop offset="1" stop-color="#e8f4fd"/>
    </linearGradient>
  </defs>
  <rect width="800" height="450" fill="url(#s2sky)"/>
  <circle cx="700" cy="80" r="42" fill="#ffe9a8"/>
  <rect y="340" width="800" height="110" fill="#9fd08a"/>

  <g>
    <rect x="180" y="170" width="440" height="170" fill="#f4e8d0" stroke="#8d6b4a" stroke-width="4"/>
    <rect x="180" y="170" width="440" height="16" fill="#c8503c"/>
    <polygon points="400,96 640,176 160,176" fill="#a8432f"/>
    <rect x="360" y="200" width="80" height="140" fill="#8d6b4a" stroke="#5f452c" stroke-width="3"/>
    <rect x="360" y="200" width="80" height="8" fill="#6f5238"/>
    <g fill="#8fc6e8" stroke="#5b87a3" stroke-width="3">
      <rect x="215" y="205" width="60" height="50"/>
      <rect x="300" y="205" width="40" height="40"/>
      <rect x="460" y="205" width="40" height="40"/>
      <rect x="525" y="205" width="60" height="50"/>
    </g>
    <g stroke="#5b87a3" stroke-width="3">
      <path d="M245 205 v50 M275 205 v50"/>
      <path d="M480 205 v40 M460 225 h40"/>
      <path d="M555 205 v50 M585 205 v50"/>
    </g>
    <rect x="300" y="205" width="40" height="40" fill="#2f4f42" stroke="#5f452c" stroke-width="3"/>
    <g stroke="#e8e2d0" stroke-width="2" stroke-linecap="round">
      <path d="M306 218 h18 M306 226 h24 M306 234 h14"/>
      <path d="M336 214 v24"/>
    </g>
    <rect x="340" y="178" width="120" height="26" rx="5" fill="#2f6f8f" stroke="#204e66" stroke-width="3"/>
    <text x="400" y="197" font-family="Arial, Helvetica, sans-serif" font-size="15" font-weight="bold" fill="#ffffff" text-anchor="middle" letter-spacing="1">SCHOOL</text>
    <rect x="372" y="230" width="56" height="42" rx="6" fill="#ffe9a8" stroke="#7a5c34" stroke-width="4"/>
    <circle cx="400" cy="251" r="9" fill="#7a5c34"/>
    <path d="M400 232 v38" stroke="#7a5c34" stroke-width="4"/>
    <path d="M400 236 v10" stroke="#7a5c34" stroke-width="3"/>
    <path d="M392 248 q8 8 16 0" fill="none" stroke="#7a5c34" stroke-width="3"/>
    <rect x="640" y="120" width="10" height="220" fill="#c9c9c9"/>
    <path d="M650 124 h60 v34 h-60 z" fill="#4f8f4f"/>
    <path d="M650 124 h60 v17 h-60 z" fill="#e2574c"/>
  </g>

  <g>
    <g>
      <circle cx="490" cy="300" r="12" fill="#f0c9a0" stroke="#6f4d33" stroke-width="2"/>
      <rect x="478" y="310" width="24" height="30" rx="8" fill="#3f8fd0" stroke="#2c6699" stroke-width="2"/>
      <rect x="470" y="314" width="12" height="22" rx="4" fill="#c4483f" stroke="#8f2f28" stroke-width="2"/>
      <rect x="484" y="340" width="6" height="16" fill="#3a4247"/>
      <rect x="494" y="340" width="6" height="16" fill="#3a4247"/>
    </g>
    <g>
      <circle cx="536" cy="302" r="12" fill="#f0c9a0" stroke="#6f4d33" stroke-width="2"/>
      <rect x="524" y="312" width="24" height="28" rx="8" fill="#e2b23c" stroke="#b5871f" stroke-width="2"/>
      <rect x="516" y="316" width="12" height="20" rx="4" fill="#4f9c5c" stroke="#35702f" stroke-width="2"/>
      <rect x="530" y="340" width="6" height="14" fill="#3a4247"/>
      <rect x="540" y="340" width="6" height="14" fill="#3a4247"/>
    </g>
    <g>
      <circle cx="576" cy="306" r="11" fill="#f0c9a0" stroke="#6f4d33" stroke-width="2"/>
      <rect x="565" y="315" width="22" height="26" rx="7" fill="#c4483f" stroke="#8f2f28" stroke-width="2"/>
      <rect x="558" y="319" width="11" height="18" rx="4" fill="#3f8fd0" stroke="#2c6699" stroke-width="2"/>
      <rect x="570" y="341" width="6" height="12" fill="#3a4247"/>
      <rect x="580" y="341" width="6" height="12" fill="#3a4247"/>
    </g>
  </g>

  <g>
    <rect x="60" y="300" width="90" height="10" rx="5" fill="#c07a4a" stroke="#8a5a34" stroke-width="2"/>
    <rect x="60" y="312" width="10" height="28" fill="#8a5a34"/>
    <rect x="140" y="312" width="10" height="28" fill="#8a5a34"/>
    <circle cx="72" cy="352" r="24" fill="#5a4632"/><circle cx="140" cy="352" r="24" fill="#5a4632"/>
  </g>
  <g>
    <path d="M40 290 L80 200 M132 290 L92 200" stroke="#4a7ba8" stroke-width="12" stroke-linecap="round"/>
    <path d="M80 200 L92 200" stroke="#4a7ba8" stroke-width="12" stroke-linecap="round"/>
    <path d="M64 216 h44" stroke="#5b87a3" stroke-width="8" stroke-linecap="round"/>
    <path d="M70 216 v40 M102 216 v40" stroke="#5b87a3" stroke-width="5"/>
    <rect x="62" y="256" width="22" height="10" rx="4" fill="#e2b23c"/>
    <rect x="92" y="256" width="22" height="10" rx="4" fill="#e2b23c"/>
  </g>
  <g>
    <circle cx="700" cy="336" r="34" fill="#7fb56a"/>
    <rect x="692" y="360" width="16" height="30" fill="#7a5233"/>
    <circle cx="640" cy="350" r="22" fill="#8dc27a"/>
    <rect x="634" y="368" width="12" height="22" fill="#7a5233"/>
  </g>
  <path d="M0 340 h800" stroke="#86b273" stroke-width="4"/>
</svg>`
    },
    {
      id: "park",
      name: "Park",
      cues: ["trees", "pond", "bench", "swing set", "flower beds"],
      svg: `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="450" viewBox="0 0 800 450" role="img" aria-label="A park with trees, a pond, a bench, a swing set, flower beds and a winding path">
  <defs>
    <linearGradient id="s4sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#bfe6ff"/><stop offset="1" stop-color="#f0fbf3"/>
    </linearGradient>
  </defs>
  <rect width="800" height="450" fill="url(#s4sky)"/>
  <circle cx="680" cy="80" r="40" fill="#fff0a8"/>
  <rect y="300" width="800" height="150" fill="#8fc978"/>
  <ellipse cx="400" cy="404" rx="300" ry="34" fill="#83bf6d"/>
  <path d="M180 450 C 260 380, 420 360, 620 330 L 700 330 C 520 386, 380 410, 300 450 Z" fill="#d9c9a4"/>

  <g>
    <ellipse cx="600" cy="392" rx="170" ry="42" fill="#6fb2d8"/>
    <ellipse cx="600" cy="392" rx="170" ry="42" fill="none" stroke="#5a9cc4" stroke-width="5"/>
    <path d="M560 388 h44 M600 400 h30" stroke="#cdeaf8" stroke-width="5" stroke-linecap="round"/>
    <g fill="#7fb56a">
      <ellipse cx="520" cy="378" rx="26" ry="9"/><ellipse cx="556" cy="408" rx="20" ry="7"/>
    </g>
  </g>

  <g>
    <rect x="120" y="250" width="26" height="90" fill="#7a5233"/>
    <circle cx="133" cy="236" r="56" fill="#5da35c"/>
    <circle cx="98" cy="256" r="34" fill="#6cb86a"/>
    <circle cx="168" cy="256" r="32" fill="#6cb86a"/>
  </g>
  <g>
    <rect x="290" y="264" width="22" height="76" fill="#7a5233"/>
    <circle cx="301" cy="252" r="44" fill="#5da35c"/>
    <circle cx="272" cy="268" r="26" fill="#6cb86a"/>
    <circle cx="330" cy="268" r="26" fill="#6cb86a"/>
  </g>
  <g>
    <rect x="710" y="268" width="20" height="72" fill="#7a5233"/>
    <circle cx="720" cy="256" r="40" fill="#5da35c"/>
    <circle cx="692" cy="272" r="24" fill="#6cb86a"/>
  </g>

  <g>
    <path d="M348 244 L318 356 M402 244 L432 356" stroke="#6a8fb5" stroke-width="10" stroke-linecap="round"/>
    <path d="M330 244 L420 244" stroke="#6a8fb5" stroke-width="10" stroke-linecap="round"/>
    <path d="M356 250 v54 M392 250 v54" stroke="#5b7fa5" stroke-width="4"/>
    <rect x="346" y="304" width="20" height="10" rx="4" fill="#e2b23c"/>
    <rect x="382" y="304" width="20" height="10" rx="4" fill="#e2b23c"/>
  </g>

  <g fill="#8a5a34">
    <rect x="420" y="316" width="110" height="12" rx="6"/>
    <rect x="420" y="336" width="110" height="12" rx="6"/>
    <rect x="424" y="326" width="10" height="28"/><rect x="516" y="326" width="10" height="28"/>
    <rect x="410" y="300" width="12" height="52" rx="6"/>
  </g>
  <g fill="#e8a33d">
    <circle cx="418" cy="292" r="10"/><circle cx="434" cy="292" r="10"/>
  </g>

  <g>
    <ellipse cx="96" cy="392" rx="66" ry="18" fill="#a97c50" stroke="#7a5233" stroke-width="3"/>
    <g><circle cx="66" cy="388" r="7" fill="#e2574c"/><circle cx="92" cy="384" r="7" fill="#f2b134"/><circle cx="118" cy="388" r="7" fill="#e2574c"/><circle cx="104" cy="396" r="6" fill="#c4483f"/></g>
    <ellipse cx="250" cy="430" rx="72" ry="16" fill="#a97c50" stroke="#7a5233" stroke-width="3"/>
    <g><circle cx="222" cy="426" r="7" fill="#f2b134"/><circle cx="250" cy="422" r="7" fill="#e2574c"/><circle cx="278" cy="426" r="7" fill="#7a5aa8"/></g>
  </g>

  <g fill="#3f5c6b">
    <path d="M440 150 q10 -12 20 0 q-10 8 -20 0" fill="#4d6a78"/>
    <path d="M490 122 q9 -11 18 0 q-9 7 -18 0" fill="#4d6a78"/>
  </g>
</svg>`
    },
    {
      id: "hospital",
      name: "Hospital",
      cues: ["red cross", "H sign", "doctor", "ambulance"],
      svg: `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="450" viewBox="0 0 800 450" role="img" aria-label="A hospital building with a large red cross sign, an H signboard, a doctor in a white coat and an ambulance parked outside">
  <defs>
    <linearGradient id="s5sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#cfe6f7"/><stop offset="1" stop-color="#f4fafe"/>
    </linearGradient>
  </defs>
  <rect width="800" height="450" fill="url(#s5sky)"/>
  <rect y="340" width="800" height="110" fill="#c3ccd2"/>
  <path d="M0 340 h800" stroke="#a9b4bb" stroke-width="4"/>

  <g>
    <rect x="120" y="120" width="400" height="220" fill="#f2f5f7" stroke="#3f5d70" stroke-width="4"/>
    <rect x="120" y="120" width="400" height="18" fill="#d3dde3"/>
    <g fill="#bcd9ea" stroke="#3f5d70" stroke-width="3">
      <rect x="362" y="168" width="50" height="44"/>
      <rect x="446" y="168" width="50" height="44"/>
    </g>
    <rect x="300" y="250" width="90" height="90" fill="#5d7d92" stroke="#3f5d70" stroke-width="4"/>
    <path d="M345 250 v90" stroke="#3f5d70" stroke-width="3"/>
    <rect x="290" y="230" width="110" height="20" fill="#9db6c6" stroke="#3f5d70" stroke-width="3"/>
    <rect x="120" y="330" width="400" height="12" fill="#b9c4cb"/>

    <rect x="148" y="158" width="112" height="112" rx="10" fill="#ffffff" stroke="#3f5d70" stroke-width="4"/>
    <rect x="192" y="170" width="24" height="88" fill="#e23c3c"/>
    <rect x="160" y="202" width="88" height="24" fill="#e23c3c"/>

    <rect x="312" y="180" width="66" height="44" rx="6" fill="#2f6f8f" stroke="#3f5d70" stroke-width="3"/>
    <text x="345" y="213" font-family="Arial, Helvetica, sans-serif" font-size="30" font-weight="bold" fill="#ffffff" text-anchor="middle">H</text>
  </g>

  <g>
    <circle cx="250" cy="296" r="16" fill="#f0c9a0" stroke="#3f5d70" stroke-width="3"/>
    <path d="M236 284 q14 -12 28 0 z" fill="#ffffff" stroke="#3f5d70" stroke-width="3"/>
    <path d="M234 312 q16 -9 32 0 v28 h-32 z" fill="#ffffff" stroke="#3f5d70" stroke-width="3"/>
    <path d="M250 318 v-8" stroke="#3f5d70" stroke-width="3"/>
    <circle cx="250" cy="324" r="4" fill="#3f5d70"/>
    <rect x="240" y="340" width="7" height="18" fill="#3f5d70"/>
    <rect x="253" y="340" width="7" height="18" fill="#3f5d70"/>
  </g>

  <g>
    <rect x="545" y="252" width="195" height="88" rx="12" fill="#ffffff" stroke="#3f5d70" stroke-width="4"/>
    <rect x="545" y="252" width="195" height="16" rx="8" fill="#d3dde3"/>
    <rect x="558" y="276" width="46" height="30" rx="4" fill="#cfe6f2" stroke="#3f5d70" stroke-width="3"/>
    <rect x="614" y="276" width="106" height="30" rx="4" fill="#cfe6f2" stroke="#3f5d70" stroke-width="3"/>
    <rect x="648" y="270" width="52" height="44" fill="#ffffff"/>
    <rect x="668" y="282" width="12" height="24" fill="#e23c3c"/>
    <rect x="652" y="288" width="24" height="12" fill="#e23c3c"/>
    <circle cx="580" cy="340" r="20" fill="#3a4247" stroke="#20262a" stroke-width="3"/>
    <circle cx="580" cy="340" r="8" fill="#c3ccd2"/>
    <circle cx="706" cy="340" r="20" fill="#3a4247" stroke="#20262a" stroke-width="3"/>
    <circle cx="706" cy="340" r="8" fill="#c3ccd2"/>
    <rect x="600" y="240" width="40" height="14" rx="6" fill="#e23c3c" stroke="#3f5d70" stroke-width="3"/>
  </g>
</svg>`
    },
    {
      id: "home",
      name: "Home",
      cues: ["pitched roofs", "mailbox", "house number", "garden gate"],
      svg: `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="450" viewBox="0 0 800 450" role="img" aria-label="A residential street of houses with pitched roofs, a garden gate and potted plants">
  <defs>
    <linearGradient id="s6sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#ffd9b8"/><stop offset="1" stop-color="#fff6ec"/>
    </linearGradient>
  </defs>
  <rect width="800" height="450" fill="url(#s6sky)"/>
  <circle cx="640" cy="86" r="44" fill="#ffe3a3"/>
  <rect y="330" width="800" height="120" fill="#9aa6ad"/>
  <path d="M0 330 h800" stroke="#7f8c94" stroke-width="4"/>

  <g>
    <rect x="70" y="196" width="190" height="134" fill="#f3e2cd"/>
    <polygon points="60,200 165,124 270,200" fill="#c0563f"/>
    <rect x="140" y="252" width="52" height="78" fill="#7a4f36"/>
    <circle cx="184" cy="292" r="5" fill="#f2dcae"/>
    <g fill="#bcd9ea" stroke="#7f9fb2" stroke-width="3">
      <rect x="92" y="216" width="38" height="34"/><rect x="198" y="216" width="38" height="34"/>
    </g>
    <rect x="176" y="140" width="22" height="34" fill="#a55a45"/>
  </g>

  <g>
    <rect x="330" y="206" width="180" height="124" fill="#e9efe6"/>
    <polygon points="320,210 420,138 520,210" fill="#4f7f6d"/>
    <rect x="396" y="256" width="48" height="74" fill="#5b7d6c"/>
    <g fill="#bcd9ea" stroke="#7f9fb2" stroke-width="3">
      <rect x="352" y="228" width="34" height="30"/><rect x="456" y="228" width="34" height="30"/>
    </g>
    <rect x="430" y="152" width="18" height="26" fill="#416b5c"/>
  </g>

  <g>
    <rect x="580" y="192" width="170" height="138" fill="#f6e6f0"/>
    <polygon points="570,196 665,124 760,196" fill="#8a5a8f"/>
    <rect x="640" y="250" width="48" height="80" fill="#6f4a74"/>
    <g fill="#bcd9ea" stroke="#8a6f95" stroke-width="3">
      <rect x="600" y="214" width="34" height="30"/><rect x="690" y="214" width="34" height="30"/>
    </g>
  </g>

  <g>
    <rect x="240" y="286" width="70" height="44" fill="#d8e6dc" stroke="#6f8f7c" stroke-width="4"/>
    <path d="M240 286 l35 -22 l35 22" fill="none" stroke="#6f8f7c" stroke-width="4"/>
    <circle cx="225" cy="270" r="22" fill="#6cb86a"/><rect x="219" y="286" width="12" height="44" fill="#7a5233"/>
    <circle cx="322" cy="272" r="20" fill="#7fc26f"/><rect x="316" y="286" width="12" height="42" fill="#7a5233"/>
  </g>
  <g>
    <rect x="80" y="306" width="20" height="24" rx="4" fill="#c2703f"/>
    <rect x="108" y="306" width="20" height="24" rx="4" fill="#b5623a"/>
    <rect x="746" y="306" width="20" height="24" rx="4" fill="#c2703f"/>
  </g>
  <g>
    <rect x="146" y="230" width="42" height="20" rx="4" fill="#ffffff" stroke="#7f9fb2" stroke-width="3"/>
    <text x="167" y="246" font-family="Arial, Helvetica, sans-serif" font-size="15" font-weight="bold" fill="#3f5d70" text-anchor="middle">1</text>
  </g>
  <g>
    <rect x="556" y="286" width="12" height="46" fill="#8a5a34"/>
    <rect x="536" y="262" width="52" height="34" rx="6" fill="#c4483f" stroke="#8f2f28" stroke-width="3"/>
    <rect x="548" y="274" width="26" height="6" rx="3" fill="#f2dcae"/>
    <path d="M588 272 v-16 h12 v18" fill="#e2b23c" stroke="#b5871f" stroke-width="2"/>
  </g>
  <g>
    <circle cx="350" cy="250" r="14" fill="#f0c9a0" stroke="#6f4d33" stroke-width="3"/>
    <path d="M336 244 q14 -12 28 0 z" fill="#4a3626"/>
    <rect x="338" y="262" width="24" height="38" rx="6" fill="#4f8f4f" stroke="#35702f" stroke-width="2"/>
    <rect x="330" y="266" width="10" height="24" rx="5" fill="#4f8f4f"/>
    <rect x="360" y="266" width="10" height="24" rx="5" fill="#4f8f4f"/>
    <rect x="342" y="300" width="7" height="22" fill="#3a4247"/>
    <rect x="352" y="300" width="7" height="22" fill="#3a4247"/>
  </g>
</svg>`
    },
    {
      id: "railway-station",
      name: "Railway Station",
      cues: ["STATION sign", "train", "tracks", "clock", "passengers"],
      svg: `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="450" viewBox="0 0 800 450" role="img" aria-label="A railway station platform with a train, platform canopy, signboard and tracks">
  <defs>
    <linearGradient id="s7sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#a9cfe8"/><stop offset="1" stop-color="#eaf5fc"/>
    </linearGradient>
  </defs>
  <rect width="800" height="450" fill="url(#s7sky)"/>
  <rect y="290" width="800" height="60" fill="#b0a48f"/>
  <path d="M0 290 h800" stroke="#958a76" stroke-width="4"/>
  <rect y="350" width="800" height="100" fill="#8f8577"/>

  <g>
    <rect x="40" y="150" width="640" height="140" rx="14" fill="#2f6f8f"/>
    <rect x="40" y="150" width="640" height="22" rx="10" fill="#235a75"/>
    <g fill="#d9edf6">
      <rect x="80" y="184" width="66" height="52" rx="6"/><rect x="172" y="184" width="66" height="52" rx="6"/>
      <rect x="264" y="184" width="66" height="52" rx="6"/><rect x="356" y="184" width="66" height="52" rx="6"/>
      <rect x="448" y="184" width="66" height="52" rx="6"/><rect x="540" y="184" width="66" height="52" rx="6"/>
    </g>
    <rect x="632" y="196" width="66" height="80" rx="10" fill="#f0c33c"/>
    <rect x="648" y="212" width="34" height="30" rx="4" fill="#cfe6f2"/>
    <rect x="660" y="286" width="16" height="14" fill="#3c3c3c"/>
    <rect x="700" y="286" width="16" height="14" fill="#3c3c3c"/>
  </g>

  <g>
    <rect x="80" y="70" width="180" height="52" fill="#ffffff" stroke="#2f6f8f" stroke-width="5"/>
    <text x="170" y="106" font-family="Arial, Helvetica, sans-serif" font-size="22" font-weight="bold" fill="#2f6f8f" text-anchor="middle" letter-spacing="2">STATION</text>
    <rect x="120" y="122" width="14" height="60" fill="#8d8578"/>
    <rect x="206" y="122" width="14" height="60" fill="#8d8578"/>
  </g>

  <g>
    <rect x="470" y="60" width="280" height="14" fill="#6f7d88"/>
    <rect x="490" y="74" width="12" height="96" fill="#6f7d88"/>
    <rect x="700" y="74" width="12" height="96" fill="#6f7d88"/>
    <rect x="482" y="170" width="240" height="10" fill="#8d9aa4"/>
  </g>

  <g stroke="#5d5648" stroke-width="6">
    <path d="M0 372 h800"/><path d="M0 404 h800"/>
  </g>
  <g fill="#7a7263">
    <rect x="20" y="360" width="46" height="56" rx="4"/><rect x="130" y="360" width="46" height="56" rx="4"/>
    <rect x="240" y="360" width="46" height="56" rx="4"/><rect x="350" y="360" width="46" height="56" rx="4"/>
    <rect x="460" y="360" width="46" height="56" rx="4"/><rect x="570" y="360" width="46" height="56" rx="4"/>
    <rect x="680" y="360" width="46" height="56" rx="4"/>
  </g>
  <g>
    <rect x="712" y="148" width="6" height="22" fill="#6f7d88"/>
    <circle cx="715" cy="188" r="20" fill="#ffffff" stroke="#6f7d88" stroke-width="4"/>
    <path d="M715 174 v14 h10" stroke="#3a4247" stroke-width="3" fill="none" stroke-linecap="round"/>
  </g>
  <g>
    <circle cx="300" cy="252" r="13" fill="#f0c9a0" stroke="#6f4d33" stroke-width="2"/>
    <rect x="288" y="262" width="24" height="34" rx="7" fill="#3f8fd0" stroke="#2c6699" stroke-width="2"/>
    <rect x="292" y="296" width="7" height="16" fill="#3a4247"/><rect x="302" y="296" width="7" height="16" fill="#3a4247"/>
    <rect x="316" y="272" width="28" height="30" rx="4" fill="#c98a54" stroke="#8a5a34" stroke-width="3"/>
    <path d="M322 272 v30 M338 272 v30" stroke="#8a5a34" stroke-width="2"/>
    <circle cx="360" cy="256" r="12" fill="#f0c9a0" stroke="#6f4d33" stroke-width="2"/>
    <rect x="349" y="266" width="22" height="30" rx="6" fill="#c4483f" stroke="#8f2f28" stroke-width="2"/>
    <rect x="353" y="296" width="6" height="16" fill="#3a4247"/><rect x="363" y="296" width="6" height="16" fill="#3a4247"/>
  </g>
</svg>`
    },
    {
      id: "community-centre",
      name: "Community Centre",
      cues: ["clock tower", "COMMUNITY CENTRE signs", "banner flags", "steps"],
      svg: `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="450" viewBox="0 0 800 450" role="img" aria-label="A community centre with a clock tower, banner and steps outside">
  <defs>
    <linearGradient id="s9sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#bcd8f0"/><stop offset="1" stop-color="#f0f8fd"/>
    </linearGradient>
  </defs>
  <rect width="800" height="450" fill="url(#s9sky)"/>
  <rect y="344" width="800" height="106" fill="#c6bda9"/>
  <path d="M0 344 h800" stroke="#a99f8c" stroke-width="4"/>

  <g>
    <rect x="180" y="180" width="440" height="164" fill="#f0e6d6"/>
    <rect x="180" y="180" width="440" height="14" fill="#d3c3a9"/>
    <rect x="330" y="110" width="140" height="72" fill="#e5d6bd"/>
    <path d="M322 110 L400 62 L478 110 Z" fill="#4a7ba8"/>
    <circle cx="400" cy="140" r="26" fill="#ffffff" stroke="#4a7ba8" stroke-width="5"/>
    <path d="M400 124 v16 l11 8" stroke="#2f4f68" stroke-width="4" fill="none" stroke-linecap="round"/>

    <rect x="220" y="216" width="60" height="128" fill="#bcd9ea" stroke="#7f9fb2" stroke-width="4"/>
    <rect x="520" y="216" width="60" height="128" fill="#bcd9ea" stroke="#7f9fb2" stroke-width="4"/>

    <rect x="330" y="248" width="140" height="96" fill="#7a5c46"/>
    <path d="M400 248 v96" stroke="#5a422f" stroke-width="5"/>
    <rect x="318" y="228" width="164" height="20" fill="#c9a06a"/>

    <rect x="180" y="344" width="440" height="10" fill="#b6a68d"/>
    <rect x="300" y="356" width="200" height="12" fill="#a99a82"/>
  </g>

  <g>
    <rect x="290" y="66" width="16" height="60" fill="#8d8578"/>
    <path d="M298 70 h56 v26 h-56 z" fill="#d9534f"/>
    <rect x="380" y="70" width="20" height="16" fill="#2f6f8f"/>
  </g>
  <g>
    <rect x="140" y="270" width="14" height="74" fill="#8d8578"/>
    <rect x="76" y="300" width="120" height="30" fill="#3f6f4f"/>
    <circle cx="136" cy="315" r="9" fill="#e9f3ec"/>
    <rect x="646" y="270" width="14" height="74" fill="#8d8578"/>
    <rect x="606" y="300" width="120" height="30" fill="#3f6f4f"/>
    <circle cx="666" cy="315" r="9" fill="#e9f3ec"/>
  </g>
  <g>
    <circle cx="94" cy="316" r="22" fill="#6cb86a"/><rect x="88" y="332" width="12" height="34" fill="#7a5233"/>
    <circle cx="718" cy="318" r="20" fill="#7fc26f"/><rect x="712" y="334" width="12" height="32" fill="#7a5233"/>
  </g>
  <g>
    <rect x="186" y="150" width="128" height="30" rx="5" fill="#3f6f4f" stroke="#2c523a" stroke-width="3"/>
    <text x="250" y="171" font-family="Arial, Helvetica, sans-serif" font-size="14" font-weight="bold" fill="#ffffff" text-anchor="middle" letter-spacing="1">COMMUNITY</text>
    <rect x="486" y="150" width="128" height="30" rx="5" fill="#3f6f4f" stroke="#2c523a" stroke-width="3"/>
    <text x="550" y="171" font-family="Arial, Helvetica, sans-serif" font-size="15" font-weight="bold" fill="#ffffff" text-anchor="middle" letter-spacing="2">CENTRE</text>
  </g>
  <g>
    <circle cx="360" cy="290" r="13" fill="#f0c9a0" stroke="#6f4d33" stroke-width="2"/>
    <rect x="348" y="300" width="24" height="34" rx="7" fill="#3f8fd0" stroke="#2c6699" stroke-width="2"/>
    <rect x="352" y="334" width="7" height="14" fill="#3a4247"/><rect x="362" y="334" width="7" height="14" fill="#3a4247"/>
    <circle cx="440" cy="292" r="13" fill="#f0c9a0" stroke="#6f4d33" stroke-width="2"/>
    <rect x="428" y="302" width="24" height="32" rx="7" fill="#c4483f" stroke="#8f2f28" stroke-width="2"/>
    <rect x="432" y="334" width="7" height="14" fill="#3a4247"/><rect x="442" y="334" width="7" height="14" fill="#3a4247"/>
  </g>
</svg>`
    },
    {
      id: "beach",
      name: "Beach",
      cues: ["sea and waves", "palm tree", "sun umbrella", "sandcastle", "beach ball"],
      svg: `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="450" viewBox="0 0 800 450" role="img" aria-label="A beach with sea, waves, a palm tree, sun umbrella and sandcastle">
  <defs>
    <linearGradient id="s10sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#8ed0f2"/><stop offset="1" stop-color="#e6f6ff"/>
    </linearGradient>
  </defs>
  <rect width="800" height="450" fill="url(#s10sky)"/>
  <circle cx="620" cy="96" r="46" fill="#ffe066"/>
  <g fill="#ffffff" opacity="0.9">
    <ellipse cx="200" cy="88" rx="46" ry="22"/><ellipse cx="238" cy="80" rx="34" ry="18"/>
    <ellipse cx="430" cy="120" rx="40" ry="18"/>
  </g>

  <rect y="220" width="800" height="120" fill="#2f8fb5"/>
  <path d="M0 220 q100 26 200 0 t200 0 t200 0 t200 0" fill="#3fa3c9" opacity="0.7"/>
  <g stroke="#d6f2fb" stroke-width="6" stroke-linecap="round" fill="none">
    <path d="M40 262 q22 -14 44 0 t44 0"/>
    <path d="M300 286 q22 -14 44 0 t44 0"/>
    <path d="M600 258 q22 -14 44 0 t44 0"/>
  </g>
  <path d="M0 340 h800" fill="#f2dcae"/>
  <rect y="340" width="800" height="110" fill="#f2dcae"/>
  <path d="M0 344 q200 14 400 0 t400 0 v-6 h-800 z" fill="#fdf3d9"/>

  <g>
    <path d="M150 344 C 150 260, 148 214, 156 176" stroke="#8a5a34" stroke-width="18" fill="none" stroke-linecap="round"/>
    <path d="M156 190 C 120 170, 96 190, 82 216 C 116 216, 142 208, 158 200 Z" fill="#4f9c3c"/>
    <path d="M160 186 C 200 164, 228 188, 240 216 C 202 214, 176 204, 158 196 Z" fill="#5cb04a"/>
    <path d="M158 178 C 152 148, 168 132, 186 126 C 186 148, 176 168, 158 178 Z" fill="#4f9c3c"/>
    <g fill="#7a5233"><circle cx="152" cy="204" r="9"/><circle cx="166" cy="214" r="8"/><circle cx="158" cy="224" r="8"/></g>
  </g>

  <g>
    <path d="M470 300 L560 300 L515 236 Z" fill="#e2574c"/>
    <path d="M515 236 L515 300" stroke="#fff4ec" stroke-width="5"/>
    <rect x="509" y="300" width="12" height="60" fill="#8a5a34"/>
    <path d="M424 372 q90 -34 180 0 z" fill="#fdf3d9"/>
  </g>

  <g>
    <path d="M300 330 h88 v46 h-88 z" fill="#e8c98c"/>
    <path d="M300 330 l44 -26 l44 26 z" fill="#d9b06a"/>
    <rect x="336" y="348" width="18" height="28" fill="#b5874a"/>
    <path d="M344 304 v-24" stroke="#8a5a34" stroke-width="6"/>
    <path d="M344 282 l24 10 l-24 10 z" fill="#e2574c"/>
  </g>
  <g fill="#e2c08a">
    <ellipse cx="700" cy="404" rx="26" ry="9"/><ellipse cx="760" cy="424" rx="20" ry="7"/>
  </g>
  <g>
    <circle cx="250" cy="418" r="24" fill="#ffffff" stroke="#3a4247" stroke-width="3"/>
    <path d="M250 394 a24 24 0 0 1 0 48 z" fill="#e2574c"/>
    <path d="M250 394 a24 24 0 0 0 -17 41 z" fill="#e2b23c"/>
    <path d="M250 394 a17 24 0 0 0 0 48 z" fill="#3f8fd0"/>
  </g>
  <g>
    <rect x="418" y="416" width="86" height="26" rx="4" fill="#7a5aa8" stroke="#5a3f88" stroke-width="2"/>
    <path d="M430 416 v26 M446 416 v26 M462 416 v26 M478 416 v26" stroke="#f0f0f8" stroke-width="4"/>
  </g>
  <g>
    <polygon points="560,412 566,424 580,426 569,434 573,448 560,439 547,448 551,434 540,426 554,424" fill="#e2574c" stroke="#a53a32" stroke-width="2"/>
    <circle cx="560" cy="430" r="3" fill="#ffe9a8"/>
  </g>
</svg>`
    },
    {
      id: "library",
      name: "Library",
      cues: ["bookcases", "rows of books", "reading table", "LIBRARY sign"],
      svg: `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="450" viewBox="0 0 800 450" role="img" aria-label="A library with tall bookcases, reading tables and rows of books">
  <defs>
    <linearGradient id="s11sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#f0e2c8"/><stop offset="1" stop-color="#fbf5e8"/>
    </linearGradient>
  </defs>
  <rect width="800" height="450" fill="url(#s11sky)"/>
  <rect y="360" width="800" height="90" fill="#c9b494"/>
  <path d="M0 360 h800" stroke="#ab9676" stroke-width="4"/>
  <path d="M0 0 h800 v44 h-800 z" fill="#e6d8bb"/>
  <g fill="#6f4526">
    <path d="M292 32 h12 v-14 h-12 z"/><path d="M306 32 h12 v-14 h-12 z"/>
    <path d="M298 18 l6 -8 l6 8 z"/>
  </g>
  <text x="400" y="32" font-family="Arial, Helvetica, sans-serif" font-size="24" font-weight="bold" fill="#6f4526" text-anchor="middle" letter-spacing="5">LIBRARY</text>

  <g>
    <rect x="60" y="70" width="160" height="252" fill="#8a5a34"/>
    <rect x="580" y="70" width="160" height="252" fill="#8a5a34"/>
    <g fill="#6f4526">
      <rect x="60" y="128" width="160" height="10"/><rect x="60" y="186" width="160" height="10"/>
      <rect x="60" y="244" width="160" height="10"/><rect x="60" y="302" width="160" height="10"/>
      <rect x="580" y="128" width="160" height="10"/><rect x="580" y="186" width="160" height="10"/>
      <rect x="580" y="244" width="160" height="10"/><rect x="580" y="302" width="160" height="10"/>
    </g>
    <g>
      <rect x="70" y="88" width="14" height="40" fill="#c4483f"/><rect x="88" y="94" width="12" height="34" fill="#3f7fb5"/>
      <rect x="104" y="86" width="16" height="42" fill="#d79a2e"/><rect x="124" y="96" width="12" height="32" fill="#4f9c5c"/>
      <rect x="140" y="90" width="15" height="38" fill="#7a5aa8"/><rect x="160" y="98" width="12" height="30" fill="#c4483f"/>
      <rect x="176" y="88" width="14" height="40" fill="#3f7fb5"/>
      <rect x="70" y="146" width="14" height="40" fill="#d79a2e"/><rect x="88" y="152" width="12" height="34" fill="#4f9c5c"/>
      <rect x="104" y="144" width="16" height="42" fill="#7a5aa8"/><rect x="124" y="154" width="12" height="32" fill="#c4483f"/>
      <rect x="140" y="148" width="15" height="38" fill="#3f7fb5"/><rect x="160" y="156" width="12" height="30" fill="#d79a2e"/>
      <rect x="176" y="146" width="14" height="40" fill="#4f9c5c"/>
      <rect x="70" y="204" width="14" height="40" fill="#7a5aa8"/><rect x="88" y="210" width="12" height="34" fill="#c4483f"/>
      <rect x="104" y="202" width="16" height="42" fill="#3f7fb5"/><rect x="124" y="212" width="12" height="32" fill="#d79a2e"/>
      <rect x="140" y="206" width="15" height="38" fill="#4f9c5c"/><rect x="160" y="214" width="12" height="30" fill="#7a5aa8"/>
      <rect x="176" y="204" width="14" height="40" fill="#c4483f"/>
      <rect x="70" y="262" width="14" height="40" fill="#3f7fb5"/><rect x="88" y="268" width="12" height="34" fill="#d79a2e"/>
      <rect x="104" y="260" width="16" height="42" fill="#4f9c5c"/><rect x="124" y="270" width="12" height="32" fill="#7a5aa8"/>
      <rect x="140" y="264" width="15" height="38" fill="#c4483f"/><rect x="160" y="272" width="12" height="30" fill="#3f7fb5"/>
      <rect x="176" y="262" width="14" height="40" fill="#d79a2e"/>
      <rect x="590" y="88" width="14" height="40" fill="#c4483f"/><rect x="608" y="94" width="12" height="34" fill="#3f7fb5"/>
      <rect x="624" y="86" width="16" height="42" fill="#d79a2e"/><rect x="644" y="96" width="12" height="32" fill="#4f9c5c"/>
      <rect x="660" y="90" width="15" height="38" fill="#7a5aa8"/><rect x="680" y="98" width="12" height="30" fill="#c4483f"/>
      <rect x="696" y="88" width="14" height="40" fill="#3f7fb5"/>
      <rect x="590" y="146" width="14" height="40" fill="#d79a2e"/><rect x="608" y="152" width="12" height="34" fill="#4f9c5c"/>
      <rect x="624" y="144" width="16" height="42" fill="#7a5aa8"/><rect x="644" y="154" width="12" height="32" fill="#c4483f"/>
      <rect x="660" y="148" width="15" height="38" fill="#3f7fb5"/><rect x="680" y="156" width="12" height="30" fill="#d79a2e"/>
      <rect x="696" y="146" width="14" height="40" fill="#4f9c5c"/>
      <rect x="590" y="204" width="14" height="40" fill="#7a5aa8"/><rect x="608" y="210" width="12" height="34" fill="#c4483f"/>
      <rect x="624" y="202" width="16" height="42" fill="#3f7fb5"/><rect x="644" y="212" width="12" height="32" fill="#d79a2e"/>
      <rect x="660" y="206" width="15" height="38" fill="#4f9c5c"/><rect x="680" y="214" width="12" height="30" fill="#7a5aa8"/>
      <rect x="696" y="204" width="14" height="40" fill="#c4483f"/>
      <rect x="590" y="262" width="14" height="40" fill="#3f7fb5"/><rect x="608" y="268" width="12" height="34" fill="#d79a2e"/>
      <rect x="624" y="260" width="16" height="42" fill="#4f9c5c"/><rect x="644" y="270" width="12" height="32" fill="#7a5aa8"/>
      <rect x="660" y="264" width="15" height="38" fill="#c4483f"/><rect x="680" y="272" width="12" height="30" fill="#3f7fb5"/>
      <rect x="696" y="262" width="14" height="40" fill="#d79a2e"/>
    </g>
  </g>

  <g>
    <rect x="250" y="230" width="300" height="20" rx="6" fill="#a97c50"/>
    <rect x="272" y="250" width="18" height="110" fill="#8a5a34"/>
    <rect x="510" y="250" width="18" height="110" fill="#8a5a34"/>
    <g>
      <rect x="290" y="212" width="66" height="18" rx="4" fill="#e0d3b4"/>
      <rect x="300" y="196" width="46" height="18" rx="4" fill="#cddcb8"/>
      <rect x="380" y="210" width="72" height="20" rx="4" fill="#e6d6b6"/>
      <circle cx="500" cy="216" r="12" fill="#f2f7ee"/>
    </g>
    <g>
      <rect x="290" y="140" width="180" height="12" fill="#a97c50"/>
      <rect x="300" y="152" width="60" height="46" fill="#d9c48f"/>
      <rect x="370" y="152" width="14" height="46" fill="#c4483f"/>
      <rect x="392" y="152" width="60" height="46" fill="#7fa8c9"/>
    </g>
  </g>

  <g>
    <rect x="560" y="330" width="200" height="14" rx="6" fill="#a97c50"/>
    <rect x="576" y="344" width="14" height="18" fill="#8a5a34"/>
    <rect x="730" y="344" width="14" height="18" fill="#8a5a34"/>
  </g>
  <g>
    <circle cx="400" cy="320" r="16" fill="#f0c9a0" stroke="#6f4d33" stroke-width="3"/>
    <path d="M384 314 q16 -14 32 0 z" fill="#4a3626"/>
    <rect x="386" y="336" width="28" height="40" rx="8" fill="#4f8f4f" stroke="#35702f" stroke-width="2"/>
    <rect x="376" y="342" width="12" height="26" rx="5" fill="#4f8f4f"/>
    <rect x="412" y="342" width="12" height="26" rx="5" fill="#4f8f4f"/>
    <path d="M380 372 L420 372 L410 384 L390 384 Z" fill="#e6d6b6" stroke="#8a5a34" stroke-width="2"/>
    <path d="M400 372 v12" stroke="#8a5a34" stroke-width="2"/>
    <rect x="388" y="384" width="8" height="14" fill="#3a4247"/>
    <rect x="404" y="384" width="8" height="14" fill="#3a4247"/>
  </g>
</svg>`
    },
    {
      id: "restaurant",
      name: "Restaurant",
      cues: ["RESTAURANT sign", "fork and spoon", "chef hat", "window tables", "chimney steam"],
      svg: `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="450" viewBox="0 0 800 450" role="img" aria-label="A restaurant with a RESTAURANT sign and cutlery, a chef in a tall white hat, tables with plates, a menu board and steam from a chimney">
  <defs>
    <linearGradient id="s12sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#5f4a6e"/><stop offset="1" stop-color="#f0c99a"/>
    </linearGradient>
    <pattern id="awn12" width="22" height="14" patternUnits="userSpaceOnUse">
      <rect width="22" height="14" fill="#c4483f"/><rect width="11" height="14" fill="#fdf1e6"/>
    </pattern>
  </defs>
  <rect width="800" height="450" fill="url(#s12sky)"/>
  <g fill="#ffe9a8">
    <circle cx="80" cy="52" r="8"/><circle cx="200" cy="44" r="8"/><circle cx="320" cy="54" r="8"/>
    <circle cx="440" cy="44" r="8"/><circle cx="560" cy="54" r="8"/><circle cx="680" cy="46" r="8"/>
  </g>
  <rect y="330" width="800" height="120" fill="#4a3b52"/>

  <g>
    <rect x="180" y="150" width="420" height="180" fill="#f2e0c8" stroke="#6f4a3a" stroke-width="4"/>
    <rect x="170" y="122" width="440" height="32" fill="url(#awn12)"/>
    <rect x="170" y="122" width="440" height="6" fill="#9c3228"/>

    <rect x="300" y="96" width="20" height="40" fill="#6f4a3a" stroke="#57392c" stroke-width="3"/>
    <g stroke="#f0e0c8" stroke-width="4" fill="none" stroke-linecap="round" opacity="0.85">
      <path d="M310 90 q-10 -10 0 -20 q10 -10 0 -20"/>
      <path d="M324 94 q8 -8 0 -16"/>
    </g>

    <rect x="252" y="162" width="296" height="32" rx="6" fill="#3f2f47" stroke="#e0b06a" stroke-width="3"/>
    <text x="400" y="185" font-family="Arial, Helvetica, sans-serif" font-size="20" font-weight="bold" fill="#e0b06a" text-anchor="middle" letter-spacing="1">RESTAURANT</text>
    <g stroke="#e0b06a" stroke-width="3" fill="none">
      <path d="M270 170 v14 M266 170 v8 q0 4 4 4 M274 170 v8 q0 4 -4 4"/>
      <path d="M280 184 q0 -12 6 -12 q6 0 6 12 M286 172 v14"/>
      <path d="M524 170 v14 M520 170 v8 q0 4 4 4 M528 170 v8 q0 4 -4 4"/>
      <path d="M534 184 q0 -12 6 -12 q6 0 6 12 M540 172 v14"/>
    </g>

    <rect x="330" y="216" width="120" height="114" fill="#6f4a3a" stroke="#57392c" stroke-width="3"/>
    <rect x="330" y="216" width="120" height="9" fill="#57392c"/>
    <g>
      <rect x="222" y="196" width="70" height="52" rx="6" fill="#8fbfa8" stroke="#5f8f78" stroke-width="3"/>
      <rect x="228" y="204" width="58" height="36" rx="4" fill="#f6e8cf"/>
      <circle cx="250" cy="226" r="7" fill="#f0f0f0" stroke="#b0b0b0" stroke-width="2"/>
      <rect x="266" y="220" width="14" height="12" rx="2" fill="#d9534f"/>
      <rect x="488" y="196" width="70" height="52" rx="6" fill="#8fbfa8" stroke="#5f8f78" stroke-width="3"/>
      <rect x="494" y="204" width="58" height="36" rx="4" fill="#f6e8cf"/>
      <circle cx="516" cy="226" r="7" fill="#f0f0f0" stroke="#b0b0b0" stroke-width="2"/>
      <rect x="532" y="220" width="14" height="12" rx="2" fill="#4f9c5c"/>
    </g>
    <g fill="#6f4a3a">
      <rect x="250" y="216" width="14" height="8"/><rect x="272" y="216" width="14" height="8"/>
      <rect x="516" y="216" width="14" height="8"/><rect x="538" y="216" width="14" height="8"/>
    </g>
  </g>

  <g>
    <rect x="640" y="150" width="14" height="180" fill="#6f4a3a"/>
    <rect x="606" y="120" width="112" height="80" rx="8" fill="#3f2f47" stroke="#e0b06a" stroke-width="5"/>
    <g stroke="#e0b06a" stroke-width="5" stroke-linecap="round">
      <path d="M622 146 h80"/><path d="M622 168 h56"/><path d="M622 190 h68"/>
    </g>
  </g>

  <g>
    <path d="M220 232 L300 232 L260 172 Z" fill="#f2dcae" stroke="#c9a06a" stroke-width="2"/>
    <rect x="254" y="232" width="12" height="46" fill="#8a6a44"/>
    <ellipse cx="260" cy="300" rx="72" ry="18" fill="#e0c8a4" stroke="#b99a72" stroke-width="2"/>
    <g fill="#7a6a54">
      <rect x="196" y="266" width="12" height="34"/><rect x="312" y="266" width="12" height="34"/>
    </g>
    <g fill="#d9534f"><circle cx="240" cy="292" r="7"/><rect x="252" y="286" width="16" height="12" rx="3"/></g>
  </g>

  <g>
    <path d="M480 232 L560 232 L520 172 Z" fill="#e8c98c" stroke="#c9a06a" stroke-width="2"/>
    <rect x="514" y="232" width="12" height="46" fill="#8a6a44"/>
    <ellipse cx="520" cy="300" rx="72" ry="18" fill="#e0c8a4" stroke="#b99a72" stroke-width="2"/>
    <g fill="#7a6a54">
      <rect x="456" y="266" width="12" height="34"/><rect x="572" y="266" width="12" height="34"/>
    </g>
    <g fill="#4f9c5c"><circle cx="500" cy="292" r="7"/><rect x="512" y="286" width="16" height="12" rx="3"/></g>
  </g>

  <g>
    <circle cx="368" cy="262" r="15" fill="#f0c9a0" stroke="#6f4a3a" stroke-width="3"/>
    <path d="M350 250 q18 -18 36 0 v-8 q-18 -12 -36 0 z" fill="#ffffff" stroke="#6f4a3a" stroke-width="2"/>
    <rect x="358" y="232" width="20" height="14" rx="6" fill="#ffffff" stroke="#6f4a3a" stroke-width="2"/>
    <rect x="348" y="278" width="40" height="34" rx="6" fill="#ffffff" stroke="#6f4a3a" stroke-width="3"/>
    <path d="M348 286 h40" stroke="#d9d9d9" stroke-width="3"/>
    <circle cx="360" cy="300" r="2.5" fill="#6f4a3a"/><circle cx="376" cy="300" r="2.5" fill="#6f4a3a"/><circle cx="368" cy="308" r="2.5" fill="#6f4a3a"/>
    <rect x="356" y="312" width="7" height="18" fill="#6f4a3a"/>
    <rect x="373" y="312" width="7" height="18" fill="#6f4a3a"/>
  </g>
</svg>`
    },
    {
      id: "bus-stop",
      name: "Bus Stop",
      cues: ["bus stop pole", "route 42 plate", "front-view bus", "bench and passenger", "timetable"],
      svg: `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="450" viewBox="0 0 800 450" role="img" aria-label="A bus stop with a route 42 sign, a bench with a waiting passenger, a timetable shelter and a bus arriving with route 42 on the front">
  <defs>
    <linearGradient id="s13sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#b6d9ef"/><stop offset="1" stop-color="#eef8fd"/>
    </linearGradient>
  </defs>
  <rect width="800" height="450" fill="url(#s13sky)"/>
  <rect y="300" width="800" height="150" fill="#a9a49c"/>
  <path d="M0 300 h800" stroke="#8e8a82" stroke-width="4"/>
  <rect y="404" width="800" height="8" fill="#dedad2"/>

  <g>
    <rect x="90" y="150" width="280" height="150" fill="#cfe0ea"/>
    <rect x="90" y="150" width="280" height="150" fill="#7fa8c0" opacity="0.25"/>
    <rect x="76" y="132" width="308" height="22" rx="6" fill="#3f6f8f" stroke="#2f566f" stroke-width="3"/>
    <rect x="86" y="164" width="16" height="136" fill="#5b87a3" stroke="#3f6f8f" stroke-width="3"/>
    <rect x="358" y="164" width="16" height="136" fill="#5b87a3" stroke="#3f6f8f" stroke-width="3"/>
    <rect x="118" y="182" width="100" height="86" fill="#e8f2f8" stroke="#3f6f8f" stroke-width="4"/>
    <g stroke="#5b87a3" stroke-width="3"><path d="M128 200 h80 M128 216 h80 M128 232 h80 M128 248 h80 M128 260 h50"/></g>
    <rect x="240" y="182" width="110" height="12" rx="4" fill="#b5623a" stroke="#7a5233" stroke-width="2"/>
    <rect x="248" y="194" width="8" height="42" fill="#8d6a4c"/>
    <rect x="334" y="194" width="8" height="42" fill="#8d6a4c"/>
  </g>

  <g>
    <circle cx="286" cy="224" r="14" fill="#f0c9a0" stroke="#6f4d33" stroke-width="3"/>
    <path d="M272 216 q14 -12 28 0 z" fill="#4a3626"/>
    <path d="M274 238 q12 -8 24 0 v8 h-24 z" fill="#3f8fd0" stroke="#2c6699" stroke-width="2"/>
    <rect x="272" y="246" width="28" height="10" rx="4" fill="#2f566f"/>
    <rect x="296" y="248" width="34" height="9" rx="4" fill="#2f566f"/>
    <rect x="322" y="256" width="9" height="30" rx="4" fill="#2f566f"/>
  </g>

  <g>
    <rect x="540" y="140" width="12" height="160" fill="#6f7d88" stroke="#4f5b64" stroke-width="3"/>
    <rect x="492" y="56" width="108" height="84" rx="8" fill="#2f6f8f" stroke="#204e66" stroke-width="4"/>
    <rect x="506" y="66" width="32" height="22" rx="5" fill="#eef8fd"/>
    <rect x="548" y="66" width="32" height="22" rx="5" fill="#eef8fd"/>
    <circle cx="514" cy="92" r="5" fill="#eef8fd"/>
    <circle cx="572" cy="92" r="5" fill="#eef8fd"/>
    <rect x="506" y="104" width="80" height="26" rx="5" fill="#ffe9a8" stroke="#204e66" stroke-width="2"/>
    <text x="546" y="124" font-family="Arial, Helvetica, sans-serif" font-size="20" font-weight="bold" fill="#204e66" text-anchor="middle">42</text>
  </g>

  <g>
    <rect x="620" y="176" width="170" height="152" rx="18" fill="#e0a83a" stroke="#8a6208" stroke-width="4"/>
    <rect x="620" y="176" width="170" height="18" rx="9" fill="#c98c22"/>
    <rect x="642" y="186" width="126" height="26" rx="5" fill="#2f5f7a" stroke="#204e66" stroke-width="3"/>
    <text x="705" y="206" font-family="Arial, Helvetica, sans-serif" font-size="20" font-weight="bold" fill="#ffe9a8" text-anchor="middle">42</text>
    <rect x="642" y="222" width="126" height="60" rx="6" fill="#cfe6f2" stroke="#8a6208" stroke-width="3"/>
    <path d="M660 224 l12 58 M740 224 l-12 58" stroke="#8a6208" stroke-width="3"/>
    <circle cx="656" cy="300" r="10" fill="#ffe9a8" stroke="#8a6208" stroke-width="3"/>
    <circle cx="754" cy="300" r="10" fill="#ffe9a8" stroke="#8a6208" stroke-width="3"/>
    <rect x="662" y="292" width="86" height="16" rx="4" fill="#c98c22" stroke="#8a6208" stroke-width="3"/>
    <rect x="628" y="314" width="154" height="14" rx="6" fill="#c98c22" stroke="#8a6208" stroke-width="3"/>
    <circle cx="664" cy="330" r="20" fill="#3a4247" stroke="#20262a" stroke-width="3"/>
    <circle cx="664" cy="330" r="8" fill="#c3ccd2"/>
    <circle cx="748" cy="330" r="20" fill="#3a4247" stroke="#20262a" stroke-width="3"/>
    <circle cx="748" cy="330" r="8" fill="#c3ccd2"/>
    <rect x="610" y="214" width="10" height="30" rx="4" fill="#3a4247"/>
    <rect x="792" y="214" width="10" height="30" rx="4" fill="#3a4247"/>
  </g>

  <g>
    <rect x="420" y="300" width="16" height="32" rx="6" fill="#8a5a34"/>
    <circle cx="428" cy="290" r="20" fill="#6cb86a"/>
  </g>
</svg>`
    },
    {
      id: "street",
      name: "Street",
      cues: ["road", "zebra crossing", "parked cars", "lamp post", "STREET sign"],
      svg: `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="450" viewBox="0 0 800 450" role="img" aria-label="A residential street with parked cars, a lamp post, crossing and pavement">
  <defs>
    <linearGradient id="s14sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#cfe0f0"/><stop offset="1" stop-color="#f4f9fd"/>
    </linearGradient>
  </defs>
  <rect width="800" height="450" fill="url(#s14sky)"/>
  <g fill="#e8e2d6">
    <rect x="40" y="120" width="180" height="180"/>
    <rect x="580" y="140" width="190" height="160"/>
  </g>
  <g fill="#cfc6b6">
    <rect x="40" y="110" width="180" height="14"/><rect x="580" y="130" width="190" height="14"/>
  </g>
  <g fill="#b8d4e6" stroke="#8fa8b8" stroke-width="3">
    <rect x="70" y="150" width="40" height="36"/><rect x="140" y="150" width="40" height="36"/>
    <rect x="70" y="212" width="40" height="36"/><rect x="140" y="212" width="40" height="36"/>
    <rect x="612" y="170" width="40" height="36"/><rect x="682" y="170" width="40" height="36"/>
    <rect x="612" y="232" width="40" height="36"/><rect x="682" y="232" width="40" height="36"/>
  </g>

  <rect y="300" width="800" height="24" fill="#cfc7ba"/>
  <rect y="324" width="800" height="126" fill="#7e848a"/>
  <path d="M0 324 h800" stroke="#6a7076" stroke-width="4"/>
  <g fill="#e8e6df">
    <rect x="60" y="380" width="70" height="12"/><rect x="190" y="380" width="70" height="12"/>
    <rect x="320" y="380" width="70" height="12"/><rect x="450" y="380" width="70" height="12"/>
    <rect x="580" y="380" width="70" height="12"/>
  </g>
  <g fill="#f2f0ea">
    <rect x="290" y="404" width="90" height="12"/><rect x="430" y="404" width="90" height="12"/>
  </g>

  <g>
    <rect x="252" y="120" width="14" height="182" fill="#6f7d88"/>
    <path d="M259 120 q-40 6 -40 34 h80 q0 -28 -40 -34" fill="#ffe9a8"/>
    <circle cx="259" cy="256" r="12" fill="#c9a06a"/>
  </g>

  <g>
    <path d="M380 268 h120 l14 22 v20 h-148 v-20 z" fill="#c4483f"/>
    <path d="M392 272 h96 l10 18 h-116 z" fill="#cfe6f2"/>
    <circle cx="400" cy="312" r="16" fill="#3a4247"/><circle cx="486" cy="312" r="16" fill="#3a4247"/>
    <rect x="380" y="268" width="120" height="8" rx="4" fill="#a53a32"/>
  </g>
  <g>
    <path d="M560 276 h100 l12 18 v16 h-124 v-16 z" fill="#3f7fb5"/>
    <path d="M570 280 h80 l9 14 h-98 z" fill="#cfe6f2"/>
    <circle cx="578" cy="312" r="14" fill="#3a4247"/><circle cx="648" cy="312" r="14" fill="#3a4247"/>
  </g>

  <g fill="#5c6f7d">
    <circle cx="742" cy="252" r="13"/><rect x="731" y="265" width="22" height="30" rx="10"/>
    <circle cx="52" cy="262" r="12"/><rect x="42" y="274" width="20" height="26" rx="9"/>
  </g>
  <g>
    <rect x="206" y="150" width="106" height="24" rx="4" fill="#3f6f4f" stroke="#2c523a" stroke-width="3"/>
    <text x="259" y="167" font-family="Arial, Helvetica, sans-serif" font-size="13" font-weight="bold" fill="#ffffff" text-anchor="middle" letter-spacing="1">STREET</text>
  </g>
  <g>
    <rect x="705" y="200" width="10" height="100" fill="#4f5b64"/>
    <rect x="686" y="150" width="48" height="74" rx="8" fill="#3a4247" stroke="#20262a" stroke-width="3"/>
    <circle cx="710" cy="170" r="8" fill="#d9534f"/>
    <circle cx="710" cy="188" r="8" fill="#e2b23c"/>
    <circle cx="710" cy="206" r="8" fill="#4f9c5c"/>
  </g>
</svg>`
    },
    {
      id: "playground",
      name: "Playground",
      cues: ["slide", "swings", "roundabout", "children"],
      svg: `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="450" viewBox="0 0 800 450" role="img" aria-label="A playground with a slide, swings, a roundabout and a climbing frame on grass">
  <defs>
    <linearGradient id="s15sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#a8dcf5"/><stop offset="1" stop-color="#eafaf2"/>
    </linearGradient>
  </defs>
  <rect width="800" height="450" fill="url(#s15sky)"/>
  <circle cx="640" cy="80" r="40" fill="#ffe9a8"/>
  <rect y="300" width="800" height="150" fill="#8fc978"/>
  <path d="M0 300 h800" stroke="#77b862" stroke-width="4"/>

  <g>
    <path d="M180 140 L180 320 M232 140 L232 320" stroke="#4a7ba8" stroke-width="14" stroke-linecap="round"/>
    <path d="M180 140 L232 140" stroke="#4a7ba8" stroke-width="14" stroke-linecap="round"/>
    <path d="M206 140 v180 h74 v22" fill="none" stroke="#e2574c" stroke-width="16" stroke-linecap="round"/>
    <rect x="280" y="180" width="150" height="26" rx="13" fill="#e2b23c"/>
    <rect x="404" y="180" width="34" height="150" rx="14" fill="#3f8fd0"/>
    <g fill="#e2574c"><circle cx="206" cy="230" r="16"/><rect x="192" y="246" width="30" height="46" rx="12"/></g>
  </g>

  <g>
    <path d="M520 320 L580 140 M640 320 L600 140" stroke="#6a8fb5" stroke-width="14" stroke-linecap="round"/>
    <path d="M580 140 L600 140" stroke="#6a8fb5" stroke-width="14" stroke-linecap="round"/>
    <path d="M540 160 h100" stroke="#5b7fa5" stroke-width="10" stroke-linecap="round"/>
    <path d="M556 160 v50" stroke="#5b7fa5" stroke-width="6"/>
    <path d="M584 160 v50" stroke="#5b7fa5" stroke-width="6"/>
    <rect x="546" y="210" width="26" height="12" rx="4" fill="#e2b23c"/>
    <rect x="574" y="210" width="26" height="12" rx="4" fill="#e2b23c"/>
  </g>

  <g>
    <ellipse cx="400" cy="404" rx="70" ry="20" fill="#b8c4cc"/>
    <rect x="394" y="330" width="12" height="60" fill="#8fa2ad"/>
    <rect x="360" y="330" width="80" height="14" rx="7" fill="#4a9c8f"/>
    <circle cx="400" cy="316" r="12" fill="#e2574c"/>
  </g>

  <g stroke="#d9a441" stroke-width="10" fill="none">
    <rect x="60" y="180" width="80" height="140" rx="8"/>
    <path d="M60 210 h80 M60 240 h80 M60 270 h80 M60 300 h80"/>
    <path d="M88 180 v140 M112 180 v140"/>
  </g>

  <g>
    <circle cx="712" cy="368" r="26" fill="#6cb86a"/><rect x="706" y="388" width="12" height="32" fill="#7a5233"/>
  </g>
  <g>
    <circle cx="250" cy="352" r="12" fill="#f0c9a0" stroke="#6f4d33" stroke-width="2"/>
    <path d="M238 346 q12 -10 24 0 z" fill="#4a3626"/>
    <rect x="239" y="362" width="22" height="28" rx="7" fill="#e2b23c" stroke="#b5871f" stroke-width="2"/>
    <rect x="228" y="364" width="11" height="20" rx="5" fill="#e2b23c"/>
    <rect x="261" y="364" width="11" height="20" rx="5" fill="#e2b23c"/>
    <rect x="243" y="390" width="6" height="14" fill="#3a4247"/>
    <rect x="253" y="390" width="6" height="14" fill="#3a4247"/>
  </g>
  <g>
    <circle cx="470" cy="356" r="11" fill="#f0c9a0" stroke="#6f4d33" stroke-width="2"/>
    <path d="M459 350 q11 -10 22 0 z" fill="#4a3626"/>
    <rect x="460" y="365" width="20" height="26" rx="6" fill="#4f9c5c" stroke="#35702f" stroke-width="2"/>
    <rect x="464" y="391" width="6" height="12" fill="#3a4247"/>
    <rect x="474" y="391" width="6" height="12" fill="#3a4247"/>
  </g>
</svg>`
    },
    {
      id: "garden",
      name: "Garden",
      cues: ["greenhouse", "shed", "raised beds", "watering cans", "wheelbarrow"],
      svg: `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="450" viewBox="0 0 800 450" role="img" aria-label="A community garden with raised beds, a greenhouse, watering cans and a garden shed">
  <defs>
    <linearGradient id="s16sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#c4e8f7"/><stop offset="1" stop-color="#f2fbf1"/>
    </linearGradient>
  </defs>
  <rect width="800" height="450" fill="url(#s16sky)"/>
  <rect y="300" width="800" height="150" fill="#8dc978"/>
  <path d="M0 300 h800" stroke="#77b862" stroke-width="4"/>

  <g>
    <path d="M500 300 L500 190 L610 150 L720 190 L720 300 Z" fill="#cfe6f2" opacity="0.75"/>
    <path d="M500 300 L500 190 L610 150 L720 190 L720 300" fill="none" stroke="#7f9fb2" stroke-width="6"/>
    <path d="M610 150 L610 300 M500 240 L720 240 M555 220 L555 300 M665 220 L665 300" stroke="#a9c6d8" stroke-width="4"/>
    <g fill="#6cb86a">
      <rect x="520" y="256" width="24" height="40" rx="6"/><rect x="556" y="264" width="24" height="32" rx="6"/>
      <rect x="672" y="256" width="24" height="40" rx="6"/>
    </g>
  </g>

  <g>
    <rect x="70" y="200" width="180" height="100" fill="#c98a54"/>
    <path d="M58 200 L160 148 L262 200 Z" fill="#8a5a34"/>
    <rect x="130" y="240" width="60" height="60" fill="#7a5233"/>
    <circle cx="180" cy="272" r="5" fill="#f2dcae"/>
  </g>

  <g>
    <rect x="60" y="330" width="200" height="46" fill="#a97c50"/>
    <rect x="60" y="318" width="200" height="16" fill="#c19a68"/>
    <g fill="#4f9c5c">
      <circle cx="90" cy="312" r="10"/><circle cx="126" cy="306" r="12"/><circle cx="162" cy="312" r="10"/>
      <circle cx="198" cy="306" r="12"/><circle cx="234" cy="312" r="10"/>
    </g>
    <rect x="290" y="330" width="200" height="46" fill="#a97c50"/>
    <rect x="290" y="318" width="200" height="16" fill="#c19a68"/>
    <g fill="#d9534f">
      <circle cx="320" cy="310" r="9"/><circle cx="356" cy="304" r="11"/><circle cx="392" cy="310" r="9"/>
      <circle cx="428" cy="304" r="11"/><circle cx="464" cy="310" r="9"/>
    </g>
  </g>

  <g>
    <rect x="300" y="392" width="46" height="34" rx="6" fill="#5b87a3"/>
    <path d="M346 400 q22 -14 44 0" fill="none" stroke="#5b87a3" stroke-width="7"/>
    <rect x="410" y="396" width="40" height="30" rx="6" fill="#e2b23c"/>
    <path d="M450 402 q18 -12 36 0" fill="none" stroke="#e2b23c" stroke-width="6"/>
  </g>

  <g>
    <circle cx="640" cy="380" r="30" fill="#6cb86a"/><rect x="634" y="404" width="12" height="42" fill="#7a5233"/>
    <circle cx="712" cy="392" r="24" fill="#7fc26f"/><rect x="706" y="412" width="12" height="34" fill="#7a5233"/>
  </g>
  <g>
    <rect x="108" y="216" width="104" height="24" rx="4" fill="#6f4526" stroke="#4a2f1a" stroke-width="3"/>
    <text x="160" y="233" font-family="Arial, Helvetica, sans-serif" font-size="13" font-weight="bold" fill="#ffffff" text-anchor="middle" letter-spacing="1">GARDEN</text>
  </g>
  <g>
    <circle cx="540" cy="352" r="14" fill="#f0c9a0" stroke="#6f4d33" stroke-width="2"/>
    <ellipse cx="540" cy="342" rx="22" ry="7" fill="#e2b23c" stroke="#b5871f" stroke-width="2"/>
    <rect x="528" y="364" width="24" height="38" rx="7" fill="#4f8f4f" stroke="#35702f" stroke-width="2"/>
    <rect x="518" y="368" width="10" height="26" rx="5" fill="#4f8f4f"/>
    <rect x="552" y="368" width="10" height="26" rx="5" fill="#4f8f4f"/>
    <path d="M562 380 q18 -6 20 8 q-11 2 -20 2 z" fill="#5b87a3" stroke="#3f6f8f" stroke-width="2"/>
    <path d="M578 376 q10 -8 16 4 q-8 4 -16 2 z" fill="#5b87a3"/>
    <rect x="532" y="402" width="7" height="20" fill="#3a4247"/>
    <rect x="542" y="402" width="7" height="20" fill="#3a4247"/>
  </g>
  <g>
    <path d="M150 410 L250 410 L235 384 L165 384 Z" fill="#5b87a3" stroke="#3f6f8f" stroke-width="3"/>
    <circle cx="200" cy="426" r="14" fill="#3a4247" stroke="#20262a" stroke-width="3"/>
    <path d="M165 384 L120 366 M235 384 L280 370" stroke="#8a5a34" stroke-width="6" stroke-linecap="round"/>
    <circle cx="182" cy="392" r="11" fill="#4f9c5c"/>
    <circle cx="208" cy="394" r="11" fill="#d9534f"/>
    <circle cx="196" cy="386" r="10" fill="#e2b23c"/>
  </g>
</svg>`
    },
    {
      id: "police-station",
      name: "Police Station",
      cues: ["khaki building", "police car", "blue-uniform figure"],
      svg: `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="450" viewBox="0 0 800 450" role="img" aria-label="A khaki police station with a POLICE sign and blue beacon, a white and blue police car with a light bar, and an officer in a blue uniform">
  <rect width="800" height="450" fill="#c3ddf0"/>
  <rect y="340" width="800" height="110" fill="#b8b2a0"/>
  <path d="M0 340 h800" stroke="#9a9481" stroke-width="4"/>

  <g>
    <rect x="150" y="150" width="330" height="190" fill="#d9c78e" stroke="#6d5a2c" stroke-width="4"/>
    <rect x="140" y="132" width="350" height="22" fill="#b8a35e" stroke="#6d5a2c" stroke-width="4"/>
    <rect x="205" y="100" width="220" height="40" rx="6" fill="#2f5fa8" stroke="#1f4278" stroke-width="4"/>
    <text x="315" y="128" font-family="Arial, Helvetica, sans-serif" font-size="24" font-weight="bold" fill="#ffffff" text-anchor="middle" letter-spacing="2">POLICE</text>
    <g fill="#bcd9ea" stroke="#4a6b82" stroke-width="3">
      <rect x="185" y="182" width="70" height="54"/>
      <rect x="375" y="182" width="70" height="54"/>
    </g>
    <path d="M220 182 v54 M185 209 h70 M410 182 v54 M375 209 h70" stroke="#4a6b82" stroke-width="3"/>
    <rect x="285" y="252" width="80" height="88" fill="#7a6a3f" stroke="#5a4d2c" stroke-width="3"/>
    <path d="M325 252 v88" stroke="#5a4d2c" stroke-width="3"/>
    <circle cx="315" cy="298" r="4" fill="#f2dcae"/>
    <circle cx="336" cy="298" r="4" fill="#f2dcae"/>
    <rect x="166" y="120" width="26" height="16" rx="6" fill="#3f7fd0" stroke="#1f4278" stroke-width="3"/>
  </g>

  <g>
    <circle cx="500" cy="258" r="15" fill="#f0c9a0" stroke="#6f4d33" stroke-width="3"/>
    <rect x="482" y="240" width="36" height="12" rx="4" fill="#2f5fa8" stroke="#1f4278" stroke-width="3"/>
    <rect x="478" y="250" width="44" height="6" rx="3" fill="#1f4278"/>
    <rect x="486" y="272" width="28" height="44" rx="7" fill="#2f5fa8" stroke="#1f4278" stroke-width="3"/>
    <circle cx="500" cy="286" r="5" fill="#f2c75b" stroke="#a5871f" stroke-width="2"/>
    <rect x="470" y="276" width="16" height="30" rx="6" fill="#2f5fa8" stroke="#1f4278" stroke-width="3"/>
    <rect x="514" y="276" width="16" height="30" rx="6" fill="#2f5fa8" stroke="#1f4278" stroke-width="3"/>
    <rect x="490" y="316" width="8" height="26" fill="#1f4278"/>
    <rect x="502" y="316" width="8" height="26" fill="#1f4278"/>
  </g>

  <g>
    <rect x="560" y="252" width="150" height="34" rx="8" fill="#ffffff" stroke="#33445c" stroke-width="4"/>
    <rect x="572" y="260" width="52" height="20" fill="#bcd9ea" stroke="#33445c" stroke-width="3"/>
    <rect x="636" y="260" width="62" height="20" fill="#bcd9ea" stroke="#33445c" stroke-width="3"/>
    <rect x="520" y="286" width="240" height="70" rx="10" fill="#ffffff" stroke="#33445c" stroke-width="4"/>
    <rect x="520" y="316" width="240" height="12" fill="#2f5fa8"/>
    <text x="640" y="308" font-family="Arial, Helvetica, sans-serif" font-size="20" font-weight="bold" fill="#2f5fa8" text-anchor="middle">POLICE</text>
    <rect x="608" y="238" width="34" height="16" rx="5" fill="#e23c3c" stroke="#33445c" stroke-width="3"/>
    <rect x="642" y="238" width="34" height="16" rx="5" fill="#3f7fd0" stroke="#33445c" stroke-width="3"/>
    <circle cx="572" cy="358" r="22" fill="#2b2f36" stroke="#14171b" stroke-width="3"/>
    <circle cx="572" cy="358" r="8" fill="#c3ccd2"/>
    <circle cx="708" cy="358" r="22" fill="#2b2f36" stroke="#14171b" stroke-width="3"/>
    <circle cx="708" cy="358" r="8" fill="#c3ccd2"/>
  </g>
</svg>`
    },
    {
      id: "fire-station",
      name: "Fire Station",
      cues: ["red fire truck", "ladder", "fire helmet"],
      svg: `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="450" viewBox="0 0 800 450" role="img" aria-label="A red fire station with FIRE sign and garage doors, a red fire truck with a silver ladder on top, and a firefighter wearing a yellow helmet">
  <rect width="800" height="450" fill="#cfe3f2"/>
  <rect y="340" width="800" height="110" fill="#a9a290"/>
  <path d="M0 340 h800" stroke="#8f8878" stroke-width="4"/>

  <g>
    <rect x="80" y="150" width="360" height="190" fill="#d9534f" stroke="#8f2f28" stroke-width="4"/>
    <rect x="70" y="132" width="380" height="22" fill="#b23c33" stroke="#8f2f28" stroke-width="4"/>
    <rect x="150" y="168" width="220" height="38" rx="6" fill="#ffffff" stroke="#8f2f28" stroke-width="4"/>
    <text x="260" y="196" font-family="Arial, Helvetica, sans-serif" font-size="24" font-weight="bold" fill="#d9534f" text-anchor="middle" letter-spacing="2">FIRE</text>
    <g fill="#5a5f66" stroke="#3a3f46" stroke-width="4">
      <rect x="108" y="220" width="140" height="120"/>
      <rect x="272" y="220" width="140" height="120"/>
    </g>
    <g stroke="#3a3f46" stroke-width="3">
      <path d="M108 252 h140 M108 284 h140 M108 316 h140"/>
      <path d="M272 252 h140 M272 284 h140 M272 316 h140"/>
    </g>
    <rect x="244" y="112" width="46" height="18" rx="6" fill="#e23c3c" stroke="#8f2f28" stroke-width="3"/>
  </g>

  <g>
    <circle cx="462" cy="270" r="14" fill="#f0c9a0" stroke="#6f4d33" stroke-width="3"/>
    <path d="M446 268 a16 16 0 0 1 32 0 z" fill="#e2b23c" stroke="#a5871f" stroke-width="3"/>
    <rect x="442" y="266" width="40" height="6" rx="3" fill="#e2b23c" stroke="#a5871f" stroke-width="3"/>
    <rect x="450" y="284" width="24" height="42" rx="6" fill="#e2b23c" stroke="#a5871f" stroke-width="3"/>
    <path d="M450 298 h24 M450 310 h24" stroke="#f2f2f2" stroke-width="4"/>
    <rect x="436" y="288" width="14" height="28" rx="6" fill="#e2b23c" stroke="#a5871f" stroke-width="3"/>
    <rect x="476" y="288" width="14" height="28" rx="6" fill="#e2b23c" stroke="#a5871f" stroke-width="3"/>
    <rect x="452" y="326" width="8" height="22" fill="#3a4247"/>
    <rect x="464" y="326" width="8" height="22" fill="#3a4247"/>
  </g>

  <g>
    <rect x="500" y="272" width="270" height="76" rx="10" fill="#e23c3c" stroke="#8f2f28" stroke-width="4"/>
    <rect x="660" y="230" width="100" height="48" rx="8" fill="#e23c3c" stroke="#8f2f28" stroke-width="4"/>
    <rect x="672" y="240" width="76" height="28" fill="#bcd9ea" stroke="#8f2f28" stroke-width="3"/>
    <rect x="500" y="302" width="270" height="12" fill="#ffffff"/>
    <text x="590" y="332" font-family="Arial, Helvetica, sans-serif" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle">FIRE</text>
    <g stroke="#5a5f66" stroke-width="9" stroke-linecap="round">
      <path d="M520 214 H760"/>
      <path d="M520 198 H760"/>
      <path d="M540 198 v16 M570 198 v16 M600 198 v16 M630 198 v16 M660 198 v16 M690 198 v16 M720 198 v16 M750 198 v16"/>
    </g>
    <g stroke="#d0d4d8" stroke-width="5" stroke-linecap="round">
      <path d="M520 214 H760"/>
      <path d="M520 198 H760"/>
      <path d="M540 198 v16 M570 198 v16 M600 198 v16 M630 198 v16 M660 198 v16 M690 198 v16 M720 198 v16 M750 198 v16"/>
    </g>
    <circle cx="560" cy="358" r="22" fill="#2b2f36" stroke="#14171b" stroke-width="3"/>
    <circle cx="560" cy="358" r="8" fill="#c3ccd2"/>
    <circle cx="715" cy="358" r="22" fill="#2b2f36" stroke="#14171b" stroke-width="3"/>
    <circle cx="715" cy="358" r="8" fill="#c3ccd2"/>
  </g>
</svg>`
    },
    {
      id: "post-office",
      name: "Post Office",
      cues: ["red post box", "envelope icon", "mail van"],
      svg: `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="450" viewBox="0 0 800 450" role="img" aria-label="A post office with a POST OFFICE sign, a big envelope icon on the wall, a red pillar post box and a yellow mail van">
  <rect width="800" height="450" fill="#cfe6f7"/>
  <rect y="340" width="800" height="110" fill="#bdb5a2"/>
  <path d="M0 340 h800" stroke="#9a9280" stroke-width="4"/>

  <g>
    <rect x="90" y="150" width="360" height="190" fill="#f0e0c0" stroke="#8a6a3a" stroke-width="4"/>
    <rect x="80" y="132" width="380" height="22" fill="#c4483f" stroke="#8f2f28" stroke-width="4"/>
    <rect x="130" y="100" width="280" height="40" rx="6" fill="#c4483f" stroke="#8f2f28" stroke-width="4"/>
    <text x="270" y="128" font-family="Arial, Helvetica, sans-serif" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle" letter-spacing="1">POST OFFICE</text>
    <rect x="140" y="196" width="96" height="64" rx="6" fill="#ffffff" stroke="#3a4247" stroke-width="4"/>
    <path d="M140 196 L188 234 L236 196" fill="none" stroke="#c4483f" stroke-width="5"/>
    <rect x="300" y="240" width="90" height="100" fill="#8a6a3a" stroke="#5a4226" stroke-width="3"/>
    <path d="M345 240 v100" stroke="#5a4226" stroke-width="3"/>
    <rect x="360" y="262" width="40" height="30" fill="#bcd9ea" stroke="#5a4226" stroke-width="3"/>
    <circle cx="330" cy="290" r="4" fill="#f2dcae"/>
  </g>

  <g>
    <path d="M470 286 a30 26 0 0 1 60 0 z" fill="#e23c3c" stroke="#8f2f28" stroke-width="4"/>
    <rect x="470" y="286" width="60" height="60" fill="#e23c3c" stroke="#8f2f28" stroke-width="4"/>
    <rect x="482" y="304" width="36" height="10" rx="4" fill="#5a1f1a"/>
    <rect x="476" y="346" width="48" height="12" rx="4" fill="#8f2f28"/>
    <rect x="492" y="318" width="16" height="20" rx="3" fill="#ffffff"/>
  </g>

  <g>
    <rect x="560" y="258" width="80" height="42" rx="8" fill="#e2b23c" stroke="#a5871f" stroke-width="4"/>
    <rect x="572" y="266" width="56" height="24" fill="#bcd9ea" stroke="#a5871f" stroke-width="3"/>
    <rect x="560" y="292" width="200" height="66" rx="8" fill="#e2b23c" stroke="#a5871f" stroke-width="4"/>
    <rect x="560" y="318" width="200" height="12" fill="#c4483f"/>
    <text x="680" y="312" font-family="Arial, Helvetica, sans-serif" font-size="18" font-weight="bold" fill="#8f2f28" text-anchor="middle">MAIL</text>
    <circle cx="600" cy="358" r="20" fill="#2b2f36" stroke="#14171b" stroke-width="3"/>
    <circle cx="600" cy="358" r="7" fill="#c3ccd2"/>
    <circle cx="720" cy="358" r="20" fill="#2b2f36" stroke="#14171b" stroke-width="3"/>
    <circle cx="720" cy="358" r="7" fill="#c3ccd2"/>
  </g>
</svg>`
    },
    {
      id: "bank",
      name: "Bank",
      cues: ["ATM machine", "rupee signboard", "queue of people"],
      svg: `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="450" viewBox="0 0 800 450" role="img" aria-label="A bank with columns and a rupee symbol signboard, an ATM machine on the right and three people queuing in front">
  <rect width="800" height="450" fill="#cfe3f2"/>
  <rect y="336" width="800" height="114" fill="#c3bda9"/>
  <path d="M0 336 h800" stroke="#a49e8a" stroke-width="4"/>

  <g>
    <polygon points="90,150 300,84 510,150" fill="#e6dcc2" stroke="#6f6a58" stroke-width="4"/>
    <rect x="100" y="150" width="400" height="186" fill="#f2eee4" stroke="#6f6a58" stroke-width="4"/>
    <rect x="170" y="158" width="260" height="40" rx="6" fill="#2f6f4f" stroke="#1f4f38" stroke-width="4"/>
    <text x="300" y="186" font-family="Arial, Helvetica, sans-serif" font-size="22" font-weight="bold" fill="#ffffff" text-anchor="middle" letter-spacing="1">&#8377; BANK</text>
    <g fill="#f2eee4" stroke="#6f6a58" stroke-width="3">
      <rect x="140" y="216" width="30" height="120"/>
      <rect x="220" y="216" width="30" height="120"/>
      <rect x="300" y="216" width="30" height="120"/>
      <rect x="380" y="216" width="30" height="120"/>
    </g>
    <rect x="90" y="336" width="420" height="12" fill="#cfc7b0" stroke="#8a8370" stroke-width="3"/>
    <rect x="110" y="324" width="380" height="12" fill="#cfc7b0" stroke="#8a8370" stroke-width="3"/>
  </g>

  <g>
    <rect x="640" y="228" width="130" height="122" rx="10" fill="#2f6f4f" stroke="#1f4f38" stroke-width="4"/>
    <rect x="656" y="244" width="98" height="52" fill="#bcd9ea" stroke="#1f4f38" stroke-width="3"/>
    <text x="705" y="282" font-family="Arial, Helvetica, sans-serif" font-size="30" font-weight="bold" fill="#1f4f38" text-anchor="middle">&#8377;</text>
    <rect x="660" y="306" width="52" height="30" rx="4" fill="#d9d9d9" stroke="#1f4f38" stroke-width="3"/>
    <rect x="724" y="312" width="30" height="8" rx="3" fill="#1f4f38"/>
    <text x="705" y="344" font-family="Arial, Helvetica, sans-serif" font-size="13" font-weight="bold" fill="#ffffff" text-anchor="middle" letter-spacing="1">ATM</text>
  </g>

  <g>
    <circle cx="536" cy="258" r="13" fill="#f0c9a0" stroke="#6f4d33" stroke-width="3"/>
    <rect x="526" y="270" width="22" height="40" rx="7" fill="#3f8fd0" stroke="#2c6699" stroke-width="3"/>
    <rect x="530" y="310" width="6" height="26" fill="#3a4247"/>
    <rect x="540" y="310" width="6" height="26" fill="#3a4247"/>
    <circle cx="580" cy="258" r="13" fill="#f0c9a0" stroke="#6f4d33" stroke-width="3"/>
    <rect x="570" y="270" width="22" height="40" rx="7" fill="#c4483f" stroke="#8f2f28" stroke-width="3"/>
    <rect x="574" y="310" width="6" height="26" fill="#3a4247"/>
    <rect x="584" y="310" width="6" height="26" fill="#3a4247"/>
    <circle cx="624" cy="258" r="13" fill="#f0c9a0" stroke="#6f4d33" stroke-width="3"/>
    <rect x="614" y="270" width="22" height="40" rx="7" fill="#4f9c5c" stroke="#35702f" stroke-width="3"/>
    <rect x="618" y="310" width="6" height="26" fill="#3a4247"/>
    <rect x="628" y="310" width="6" height="26" fill="#3a4247"/>
  </g>
</svg>`
    },
    {
      id: "airport",
      name: "Airport",
      cues: ["airplane", "control tower", "runway"],
      svg: `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="450" viewBox="0 0 800 450" role="img" aria-label="An airport scene with a white and blue airplane flying over a runway with a dashed centre line and a control tower with a radar on the right">
  <rect width="800" height="450" fill="#a9d6f0"/>
  <circle cx="120" cy="80" r="34" fill="#ffe9a8"/>
  <rect y="300" width="800" height="150" fill="#9aa0a6"/>
  <path d="M0 300 h800" stroke="#7f858b" stroke-width="4"/>
  <path d="M120 450 L300 300 L520 300 L700 450 Z" fill="#4a4f55" stroke="#33373c" stroke-width="3"/>
  <g stroke="#f2f2f2" stroke-width="7" stroke-linecap="round">
    <path d="M410 448 v-18"/>
    <path d="M410 416 v-18"/>
    <path d="M410 384 v-18"/>
    <path d="M410 352 v-18"/>
    <path d="M410 320 v-14"/>
  </g>

  <g transform="translate(300 150) rotate(-6)">
    <path d="M-150 -20 q-24 -46 -46 -60 h30 q26 18 40 60 z" fill="#2f5fa8" stroke="#33445c" stroke-width="4"/>
    <rect x="-150" y="-20" width="290" height="40" rx="20" fill="#ffffff" stroke="#33445c" stroke-width="4"/>
    <path d="M140 -20 q46 20 0 40 z" fill="#ffffff" stroke="#33445c" stroke-width="4"/>
    <rect x="-150" y="4" width="290" height="10" fill="#2f5fa8"/>
    <g fill="#bcd9ea" stroke="#33445c" stroke-width="2">
      <circle cx="-110" cy="-6" r="5"/><circle cx="-88" cy="-6" r="5"/><circle cx="-66" cy="-6" r="5"/>
      <circle cx="-44" cy="-6" r="5"/><circle cx="-22" cy="-6" r="5"/><circle cx="0" cy="-6" r="5"/>
      <circle cx="22" cy="-6" r="5"/><circle cx="44" cy="-6" r="5"/><circle cx="66" cy="-6" r="5"/>
      <circle cx="88" cy="-6" r="5"/><circle cx="110" cy="-6" r="5"/>
    </g>
    <path d="M-20 20 l-70 74 h44 l66 -74 z" fill="#e2e8ee" stroke="#33445c" stroke-width="3"/>
    <rect x="-90" y="24" width="70" height="26" rx="13" fill="#c3ccd2" stroke="#33445c" stroke-width="3"/>
    <path d="M-150 4 l-26 14 h30 z" fill="#2f5fa8" stroke="#33445c" stroke-width="3"/>
  </g>

  <g>
    <rect x="640" y="248" width="70" height="122" fill="#d9d2c2" stroke="#6f6a58" stroke-width="4"/>
    <rect x="622" y="212" width="106" height="46" rx="6" fill="#bcd9ea" stroke="#33445c" stroke-width="4"/>
    <path d="M648 212 v46 M675 212 v46 M702 212 v46" stroke="#33445c" stroke-width="3"/>
    <rect x="616" y="202" width="118" height="12" rx="4" fill="#2f5fa8" stroke="#1f4278" stroke-width="3"/>
    <path d="M650 190 a25 25 0 0 1 50 0" fill="none" stroke="#6f6a58" stroke-width="4"/>
    <path d="M675 190 v-18" stroke="#6f6a58" stroke-width="4"/>
    <circle cx="675" cy="168" r="8" fill="#e23c3c" stroke="#8f2f28" stroke-width="3"/>
    <rect x="660" y="330" width="30" height="40" fill="#8a8370" stroke="#6f6a58" stroke-width="3"/>
  </g>
</svg>`
    },
    {
      id: "shop",
      name: "Shop",
      cues: ["single storefront with striped awning", "shopkeeper behind counter", "products on shelf"],
      svg: `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="450" viewBox="0 0 800 450" role="img" aria-label="A single small shop with a striped awning and a SHOP sign, a shopkeeper behind the counter and colourful products on shelves">
  <rect width="800" height="450" fill="#cfe6f7"/>
  <rect y="350" width="800" height="100" fill="#bdb3a4"/>
  <path d="M0 350 h800" stroke="#9a9080" stroke-width="4"/>
  <g>
    <rect x="240" y="170" width="320" height="180" fill="#f6ece0" stroke="#7a5c3a" stroke-width="4"/>
    <rect x="226" y="140" width="348" height="36" fill="#e2574c" stroke="#a53a32" stroke-width="4"/>
    <g fill="#fff4ec">
      <rect x="238" y="144" width="26" height="28"/>
      <rect x="290" y="144" width="26" height="28"/>
      <rect x="342" y="144" width="26" height="28"/>
      <rect x="394" y="144" width="26" height="28"/>
      <rect x="446" y="144" width="26" height="28"/>
      <rect x="498" y="144" width="26" height="28"/>
      <rect x="550" y="144" width="14" height="28"/>
    </g>
    <rect x="300" y="96" width="200" height="42" rx="6" fill="#2f8f7a" stroke="#1c5a4d" stroke-width="4"/>
    <text x="400" y="126" font-family="Arial, Helvetica, sans-serif" font-size="24" font-weight="bold" fill="#ffffff" text-anchor="middle" letter-spacing="3">SHOP</text>
    <rect x="262" y="200" width="110" height="80" fill="#bcd9ea" stroke="#7a5c3a" stroke-width="3"/>
    <path d="M317 200 v80 M262 240 h110" stroke="#7a5c3a" stroke-width="3"/>
    <rect x="430" y="200" width="110" height="80" fill="#cfe6ef" stroke="#7a5c3a" stroke-width="3"/>
    <path d="M430 226 h110 M430 253 h110" stroke="#8fb6c4" stroke-width="3"/>
    <g>
      <rect x="440" y="204" width="12" height="20" rx="2" fill="#e2574c"/>
      <rect x="458" y="206" width="12" height="18" rx="2" fill="#e8a33d"/>
      <rect x="476" y="204" width="12" height="20" rx="2" fill="#3f8fd0"/>
      <circle cx="500" cy="214" r="8" fill="#79b93c"/>
      <rect x="516" y="205" width="12" height="19" rx="2" fill="#c4483f"/>
      <rect x="440" y="230" width="14" height="20" rx="2" fill="#7a5aa8"/>
      <rect x="462" y="232" width="12" height="18" rx="2" fill="#e2574c"/>
      <circle cx="490" cy="240" r="8" fill="#e8a33d"/>
      <rect x="506" y="230" width="12" height="20" rx="2" fill="#3f8fd0"/>
    </g>
    <rect x="250" y="292" width="300" height="34" fill="#8d6a4c" stroke="#5a3f2c" stroke-width="4"/>
    <path d="M250 308 h300" stroke="#5a3f2c" stroke-width="3"/>
    <circle cx="400" cy="262" r="17" fill="#f0c9a0" stroke="#6f4f38" stroke-width="3"/>
    <path d="M383 254 q17 -16 34 0 z" fill="#4a3626"/>
    <rect x="382" y="280" width="36" height="34" rx="6" fill="#f0f7f4" stroke="#6f4f38" stroke-width="3"/>
    <path d="M382 296 h36" stroke="#2f8f7a" stroke-width="6"/>
  </g>
</svg>`
    },
    {
      id: "market",
      name: "Market",
      cues: ["multiple stalls with colourful canopies", "vegetable baskets in front", "crowd of people"],
      svg: `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="450" viewBox="0 0 800 450" role="img" aria-label="An open air market with four colourful canopy stalls, vegetable baskets and a crowd of shoppers, under a MARKET banner">
  <rect width="800" height="450" fill="#bfe3f7"/>
  <rect y="330" width="800" height="120" fill="#c9bda8"/>
  <path d="M0 330 h800" stroke="#a9977f" stroke-width="4"/>
  <g>
    <rect x="300" y="52" width="200" height="46" rx="6" fill="#e2b23c" stroke="#a5871f" stroke-width="4"/>
    <text x="400" y="84" font-family="Arial, Helvetica, sans-serif" font-size="24" font-weight="bold" fill="#4a3626" text-anchor="middle" letter-spacing="2">MARKET</text>
    <rect x="320" y="98" width="8" height="60" fill="#8a5a34"/>
    <rect x="472" y="98" width="8" height="60" fill="#8a5a34"/>
  </g>
  <g>
    <rect x="40" y="180" width="150" height="150" fill="#efe0c6" stroke="#8d6e4f" stroke-width="4"/>
    <rect x="30" y="150" width="170" height="34" fill="#e2574c" stroke="#a53a32" stroke-width="4"/>
    <rect x="58" y="216" width="114" height="70" fill="#8d6e4f" stroke="#5a3f2c" stroke-width="3"/>
    <g fill="#f2b134"><circle cx="76" cy="240" r="8"/><circle cx="98" cy="234" r="8"/><circle cx="120" cy="240" r="8"/><circle cx="142" cy="234" r="8"/></g>
    <path d="M62 286 q8 14 18 0 M110 286 q8 14 18 0" stroke="#a53a32" stroke-width="4" fill="none" stroke-linecap="round"/>
  </g>
  <g>
    <rect x="215" y="180" width="150" height="150" fill="#e6d6bb" stroke="#8d6e4f" stroke-width="4"/>
    <rect x="205" y="150" width="170" height="34" fill="#3f8fd0" stroke="#2a6ea6" stroke-width="4"/>
    <rect x="233" y="216" width="114" height="70" fill="#6f5138" stroke="#4a3626" stroke-width="3"/>
    <g fill="#e2513f"><circle cx="252" cy="240" r="8"/><circle cx="274" cy="234" r="8"/><circle cx="296" cy="240" r="8"/><circle cx="318" cy="234" r="8"/></g>
  </g>
  <g>
    <rect x="390" y="180" width="150" height="150" fill="#efe0c6" stroke="#8d6e4f" stroke-width="4"/>
    <rect x="380" y="150" width="170" height="34" fill="#e8a33d" stroke="#c9811f" stroke-width="4"/>
    <rect x="408" y="216" width="114" height="70" fill="#7d5b3d" stroke="#4a3626" stroke-width="3"/>
    <g fill="#79b93c"><circle cx="428" cy="240" r="8"/><circle cx="450" cy="234" r="8"/><circle cx="472" cy="240" r="8"/><circle cx="494" cy="234" r="8"/></g>
  </g>
  <g>
    <rect x="565" y="180" width="150" height="150" fill="#e9dcc6" stroke="#8d6e4f" stroke-width="4"/>
    <rect x="555" y="150" width="170" height="34" fill="#4f9c5c" stroke="#2f6f3a" stroke-width="4"/>
    <rect x="583" y="216" width="114" height="70" fill="#8d6e4f" stroke="#5a3f2c" stroke-width="3"/>
    <g fill="#f2b134"><circle cx="602" cy="240" r="8"/><circle cx="624" cy="234" r="8"/><circle cx="646" cy="240" r="8"/><circle cx="668" cy="234" r="8"/></g>
  </g>
  <g>
    <ellipse cx="130" cy="352" rx="46" ry="15" fill="#a97c50" stroke="#7a5233" stroke-width="3"/>
    <g><circle cx="110" cy="346" r="7" fill="#e2513f"/><circle cx="130" cy="342" r="7" fill="#f2b134"/><circle cx="150" cy="346" r="7" fill="#79b93c"/></g>
    <ellipse cx="470" cy="356" rx="46" ry="15" fill="#a97c50" stroke="#7a5233" stroke-width="3"/>
    <g><circle cx="450" cy="350" r="7" fill="#8ab33d"/><circle cx="470" cy="346" r="7" fill="#c4523f"/><circle cx="490" cy="350" r="7" fill="#e9c34a"/></g>
    <ellipse cx="700" cy="352" rx="46" ry="15" fill="#a97c50" stroke="#7a5233" stroke-width="3"/>
    <g><circle cx="680" cy="346" r="7" fill="#e2513f"/><circle cx="700" cy="342" r="7" fill="#79b93c"/><circle cx="720" cy="346" r="7" fill="#f2b134"/></g>
  </g>
  <g fill="#5c6f7d">
    <circle cx="200" cy="300" r="12"/><rect x="189" y="312" width="22" height="34" rx="9"/>
    <circle cx="366" cy="306" r="12"/><rect x="355" y="318" width="22" height="32" rx="9"/>
    <circle cx="540" cy="302" r="12"/><rect x="529" y="314" width="22" height="34" rx="9"/>
  </g>
</svg>`
    },
    {
      id: "grocery-store",
      name: "Grocery Store",
      cues: ["rice bags stacked", "pulses in open sacks", "weighing scale on counter"],
      svg: `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="450" viewBox="0 0 800 450" role="img" aria-label="Inside a grocery store with a GROCERY sign, a shelf of packaged goods, stacked rice sacks, open sacks of pulses and a weighing scale on the counter">
  <rect width="800" height="450" fill="#efe3cf"/>
  <rect y="330" width="800" height="120" fill="#c9b494"/>
  <path d="M0 330 h800" stroke="#ab9676" stroke-width="4"/>
  <text x="400" y="54" font-family="Arial, Helvetica, sans-serif" font-size="30" font-weight="bold" fill="#6f4526" text-anchor="middle" letter-spacing="5">GROCERY</text>
  <g>
    <rect x="40" y="90" width="240" height="230" fill="#c9a06a" stroke="#8a5a34" stroke-width="4"/>
    <g stroke="#8a5a34" stroke-width="4"><path d="M40 148 h240 M40 206 h240 M40 264 h240"/></g>
    <rect x="54" y="104" width="22" height="40" rx="3" fill="#3f8fd0"/><rect x="82" y="112" width="18" height="32" rx="3" fill="#e2574c"/>
    <rect x="106" y="100" width="24" height="44" rx="3" fill="#e8a33d"/><rect x="136" y="110" width="18" height="34" rx="3" fill="#79b93c"/>
    <rect x="160" y="104" width="22" height="40" rx="3" fill="#c4483f"/><rect x="188" y="112" width="18" height="32" rx="3" fill="#7a5aa8"/>
    <rect x="212" y="100" width="24" height="44" rx="3" fill="#2f8f7a"/><rect x="242" y="108" width="18" height="36" rx="3" fill="#e2574c"/>
    <rect x="54" y="162" width="24" height="40" rx="3" fill="#e8a33d"/><rect x="84" y="170" width="18" height="32" rx="3" fill="#3f8fd0"/>
    <rect x="110" y="160" width="22" height="42" rx="3" fill="#79b93c"/><rect x="138" y="168" width="18" height="34" rx="3" fill="#c4483f"/>
    <rect x="162" y="162" width="24" height="40" rx="3" fill="#7a5aa8"/><rect x="192" y="170" width="18" height="32" rx="3" fill="#2f8f7a"/>
    <rect x="216" y="160" width="22" height="42" rx="3" fill="#e2574c"/><rect x="244" y="168" width="18" height="34" rx="3" fill="#e8a33d"/>
    <rect x="54" y="220" width="22" height="40" rx="3" fill="#c4483f"/><rect x="82" y="228" width="18" height="32" rx="3" fill="#79b93c"/>
    <rect x="106" y="218" width="24" height="42" rx="3" fill="#3f8fd0"/><rect x="136" y="226" width="18" height="34" rx="3" fill="#e2574c"/>
    <rect x="160" y="220" width="22" height="40" rx="3" fill="#2f8f7a"/><rect x="188" y="228" width="18" height="32" rx="3" fill="#e8a33d"/>
    <rect x="212" y="218" width="24" height="42" rx="3" fill="#7a5aa8"/><rect x="242" y="226" width="18" height="34" rx="3" fill="#79b93c"/>
  </g>
  <g>
    <rect x="300" y="300" width="220" height="40" fill="#8a5a34" stroke="#5a3f2c" stroke-width="4"/>
    <path d="M300 312 h220" stroke="#5a3f2c" stroke-width="3"/>
    <rect x="404" y="236" width="12" height="64" fill="#6f6a58" stroke="#4a463c" stroke-width="2"/>
    <path d="M340 240 h140" stroke="#6f6a58" stroke-width="8" stroke-linecap="round"/>
    <path d="M410 240 v-14" stroke="#6f6a58" stroke-width="4"/>
    <circle cx="410" cy="222" r="7" fill="#c3ccd2" stroke="#6f6a58" stroke-width="2"/>
    <path d="M336 240 l-14 26 h28 z" fill="#c3ccd2" stroke="#6f6a58" stroke-width="3"/>
    <path d="M484 240 l-14 26 h28 z" fill="#c3ccd2" stroke="#6f6a58" stroke-width="3"/>
    <path d="M322 266 h28" stroke="#6f6a58" stroke-width="4"/>
    <path d="M470 266 h28" stroke="#6f6a58" stroke-width="4"/>
  </g>
  <g>
    <rect x="556" y="252" width="88" height="52" rx="8" fill="#f2e6d0" stroke="#b09060" stroke-width="3"/>
    <path d="M556 262 h88" stroke="#d8c4a0" stroke-width="3"/>
    <text x="600" y="290" font-family="Arial, Helvetica, sans-serif" font-size="14" font-weight="bold" fill="#8a5a34" text-anchor="middle">RICE</text>
    <rect x="600" y="304" width="88" height="52" rx="8" fill="#f2e6d0" stroke="#b09060" stroke-width="3"/>
    <path d="M600 314 h88" stroke="#d8c4a0" stroke-width="3"/>
    <text x="644" y="342" font-family="Arial, Helvetica, sans-serif" font-size="14" font-weight="bold" fill="#8a5a34" text-anchor="middle">RICE</text>
    <rect x="512" y="304" width="88" height="52" rx="8" fill="#f2e6d0" stroke="#b09060" stroke-width="3"/>
    <path d="M512 314 h88" stroke="#d8c4a0" stroke-width="3"/>
    <text x="556" y="342" font-family="Arial, Helvetica, sans-serif" font-size="14" font-weight="bold" fill="#8a5a34" text-anchor="middle">RICE</text>
  </g>
  <g>
    <path d="M360 380 q34 -16 68 0 q-8 26 -34 26 q-26 0 -34 -26 z" fill="#c98a54" stroke="#8a5a34" stroke-width="3"/>
    <path d="M368 380 q26 -14 52 0" fill="none" stroke="#8a5a34" stroke-width="3"/>
    <g fill="#f2b134"><circle cx="382" cy="388" r="5"/><circle cx="398" cy="384" r="5"/><circle cx="414" cy="388" r="5"/></g>
    <path d="M470 384 q34 -16 68 0 q-8 26 -34 26 q-26 0 -34 -26 z" fill="#b58a5a" stroke="#8a5a34" stroke-width="3"/>
    <path d="M478 384 q26 -14 52 0" fill="none" stroke="#8a5a34" stroke-width="3"/>
    <g fill="#79b93c"><circle cx="492" cy="392" r="5"/><circle cx="508" cy="388" r="5"/><circle cx="524" cy="392" r="5"/></g>
    <g fill="#e2574c"><circle cx="500" cy="398" r="4"/><circle cx="516" cy="396" r="4"/></g>
  </g>
</svg>`
    },
    {
      id: "bakery",
      name: "Bakery",
      cues: ["bread loaves and buns on display", "oven with chimney", "chef with tall white hat"],
      svg: `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="450" viewBox="0 0 800 450" role="img" aria-label="A bakery with a BAKERY sign, a brick oven with a chimney, loaves and buns on display and a chef in a tall white hat">
  <rect width="800" height="450" fill="#f6e0c0"/>
  <rect y="330" width="800" height="120" fill="#c98a4a"/>
  <path d="M0 330 h800" stroke="#a56f38" stroke-width="4"/>
  <rect x="240" y="60" width="320" height="46" rx="6" fill="#c4483f" stroke="#8f2f28" stroke-width="4"/>
  <text x="400" y="92" font-family="Arial, Helvetica, sans-serif" font-size="26" font-weight="bold" fill="#ffffff" text-anchor="middle" letter-spacing="3">BAKERY</text>
  <g>
    <rect x="470" y="150" width="270" height="180" fill="#b55a3f" stroke="#6f3423" stroke-width="4"/>
    <rect x="500" y="60" width="40" height="90" fill="#8a5a34" stroke="#5a3f2c" stroke-width="4"/>
    <rect x="494" y="52" width="52" height="12" rx="3" fill="#6f4526"/>
    <g fill="#cdd3d8"><circle cx="520" cy="40" r="10"/><circle cx="540" cy="26" r="8"/><circle cx="506" cy="26" r="7"/></g>
    <path d="M540 240 a60 55 0 0 1 120 0 v90 h-120 z" fill="#5a2f1f" stroke="#3f1f14" stroke-width="4"/>
    <path d="M556 270 a44 40 0 0 1 88 0 v60 h-88 z" fill="#f2b134" stroke="#c9811f" stroke-width="3"/>
    <g fill="#e2582a"><circle cx="580" cy="330" r="7"/><circle cx="620" cy="332" r="7"/><circle cx="600" cy="336" r="7"/></g>
    <rect x="500" y="336" width="200" height="14" fill="#8a5a34" stroke="#5a3f2c" stroke-width="3"/>
  </g>
  <g>
    <rect x="60" y="230" width="300" height="20" fill="#a97c50" stroke="#7a5233" stroke-width="3"/>
    <rect x="80" y="250" width="16" height="90" fill="#8a5a34"/>
    <rect x="320" y="250" width="16" height="90" fill="#8a5a34"/>
    <g>
      <ellipse cx="120" cy="214" rx="34" ry="20" fill="#e0a54f" stroke="#a56f38" stroke-width="3"/>
      <path d="M96 206 q24 -14 48 0" fill="none" stroke="#a56f38" stroke-width="3"/>
      <ellipse cx="180" cy="214" rx="34" ry="20" fill="#d98f3d" stroke="#a56f38" stroke-width="3"/>
      <path d="M156 206 q24 -14 48 0" fill="none" stroke="#a56f38" stroke-width="3"/>
      <ellipse cx="250" cy="216" rx="30" ry="17" fill="#e8b566" stroke="#a56f38" stroke-width="3"/>
      <ellipse cx="305" cy="216" rx="30" ry="17" fill="#d98f3d" stroke="#a56f38" stroke-width="3"/>
    </g>
    <g fill="#e8b566" stroke="#a56f38" stroke-width="3">
      <circle cx="120" cy="242" r="12"/><circle cx="150" cy="244" r="12"/><circle cx="180" cy="242" r="12"/>
      <circle cx="210" cy="244" r="12"/><circle cx="240" cy="242" r="12"/><circle cx="270" cy="244" r="12"/><circle cx="300" cy="242" r="12"/>
    </g>
  </g>
  <g>
    <circle cx="410" cy="240" r="18" fill="#f0c9a0" stroke="#6f4d33" stroke-width="3"/>
    <path d="M392 232 q18 -16 36 0 z" fill="#4a3626"/>
    <rect x="388" y="212" width="44" height="26" rx="8" fill="#ffffff" stroke="#33445c" stroke-width="3"/>
    <rect x="388" y="234" width="44" height="8" rx="3" fill="#ffffff" stroke="#33445c" stroke-width="3"/>
    <rect x="392" y="260" width="36" height="50" rx="8" fill="#ffffff" stroke="#33445c" stroke-width="3"/>
    <path d="M410 268 v34" stroke="#33445c" stroke-width="3"/>
    <circle cx="410" cy="280" r="3" fill="#33445c"/><circle cx="410" cy="292" r="3" fill="#33445c"/>
    <rect x="378" y="266" width="14" height="30" rx="6" fill="#ffffff" stroke="#33445c" stroke-width="3"/>
    <rect x="428" y="266" width="14" height="30" rx="6" fill="#ffffff" stroke="#33445c" stroke-width="3"/>
    <rect x="394" y="310" width="10" height="26" fill="#33445c"/>
    <rect x="416" y="310" width="10" height="26" fill="#33445c"/>
  </g>
</svg>`
    },
    {
      id: "sweet-shop",
      name: "Sweet Shop",
      cues: ["trays of colourful mithai", "glass display counter", "silver foil pieces"],
      svg: `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="450" viewBox="0 0 800 450" role="img" aria-label="A sweet shop with a SWEETS sign, a glass display counter full of colourful laddoo and barfi sweets and silver foil pieces">
  <rect width="800" height="450" fill="#f2d9b0"/>
  <rect y="330" width="800" height="120" fill="#b58a5a"/>
  <path d="M0 330 h800" stroke="#96703f" stroke-width="4"/>
  <rect x="250" y="56" width="300" height="46" rx="6" fill="#c4483f" stroke="#8f2f28" stroke-width="4"/>
  <text x="400" y="88" font-family="Arial, Helvetica, sans-serif" font-size="26" font-weight="bold" fill="#ffffff" text-anchor="middle" letter-spacing="3">SWEETS</text>
  <g>
    <rect x="140" y="200" width="520" height="130" rx="10" fill="#cfe6ef" stroke="#5b87a3" stroke-width="4"/>
    <rect x="140" y="200" width="520" height="20" fill="#bcd9ea" stroke="#5b87a3" stroke-width="3"/>
    <rect x="140" y="322" width="520" height="18" fill="#8a5a34" stroke="#5a3f2c" stroke-width="4"/>
    <g stroke="#5b87a3" stroke-width="3"><path d="M270 200 v130 M400 200 v130 M530 200 v130"/></g>
    <g>
      <circle cx="200" cy="250" r="18" fill="#f2a63c" stroke="#c9811f" stroke-width="3"/>
      <circle cx="200" cy="288" r="18" fill="#e8b23c" stroke="#c9811f" stroke-width="3"/>
      <circle cx="240" cy="268" r="18" fill="#f2a63c" stroke="#c9811f" stroke-width="3"/>
      <circle cx="240" cy="230" r="18" fill="#e88a3c" stroke="#c9811f" stroke-width="3"/>
    </g>
    <g>
      <path d="M300 236 l22 22 l-22 22 l-22 -22 z" fill="#e2574c" stroke="#a53a32" stroke-width="3"/>
      <path d="M344 236 l22 22 l-22 22 l-22 -22 z" fill="#f2d24b" stroke="#c9a51f" stroke-width="3"/>
      <path d="M322 274 l22 22 l-22 22 l-22 -22 z" fill="#79b93c" stroke="#4f8a2a" stroke-width="3"/>
    </g>
    <g>
      <rect x="430" y="232" width="44" height="44" rx="8" fill="#f2d24b" stroke="#c9a51f" stroke-width="3"/>
      <rect x="490" y="232" width="44" height="44" rx="8" fill="#c98a54" stroke="#8a5a34" stroke-width="3"/>
      <rect x="460" y="282" width="44" height="26" rx="6" fill="#e2574c" stroke="#a53a32" stroke-width="3"/>
    </g>
    <g>
      <path d="M580 236 l20 20 l-20 20 l-20 -20 z" fill="#f2f2f2" stroke="#9aa0a6" stroke-width="3"/>
      <path d="M620 236 l20 20 l-20 20 l-20 -20 z" fill="#e8eef2" stroke="#9aa0a6" stroke-width="3"/>
      <circle cx="600" cy="300" r="20" fill="#f2a63c" stroke="#c9811f" stroke-width="3"/>
    </g>
  </g>
</svg>`
    },
    {
      id: "tea-stall",
      name: "Tea Stall",
      cues: ["large kettle with steam", "small cups on tray", "wooden bench with a person"],
      svg: `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="450" viewBox="0 0 800 450" role="img" aria-label="A tea stall with a TEA sign, a big kettle with steam, a tray of small cups and a wooden bench with a person sitting">
  <rect width="800" height="450" fill="#cfe6f7"/>
  <rect y="340" width="800" height="110" fill="#9aa08a"/>
  <path d="M0 340 h800" stroke="#7f8570" stroke-width="4"/>
  <rect x="300" y="60" width="200" height="44" rx="6" fill="#c4483f" stroke="#8f2f28" stroke-width="4"/>
  <text x="400" y="90" font-family="Arial, Helvetica, sans-serif" font-size="26" font-weight="bold" fill="#ffffff" text-anchor="middle" letter-spacing="3">TEA</text>
  <g>
    <rect x="200" y="250" width="360" height="100" fill="#a97c50" stroke="#7a5233" stroke-width="4"/>
    <rect x="190" y="238" width="380" height="18" rx="4" fill="#c98a54" stroke="#7a5233" stroke-width="3"/>
    <path d="M200 288 h360" stroke="#7a5233" stroke-width="3"/>
  </g>
  <g>
    <path d="M300 238 q-16 -22 0 -40 q16 -18 0 -34" fill="none" stroke="#dfe6ea" stroke-width="6" stroke-linecap="round"/>
    <path d="M360 238 q-16 -22 0 -40 q16 -18 0 -34" fill="none" stroke="#dfe6ea" stroke-width="6" stroke-linecap="round"/>
    <rect x="270" y="150" width="120" height="88" rx="12" fill="#3a4247" stroke="#20262a" stroke-width="4"/>
    <rect x="270" y="150" width="120" height="14" rx="6" fill="#5a6268"/>
    <path d="M390 172 q40 6 40 34 q0 28 -40 34" fill="none" stroke="#20262a" stroke-width="8"/>
    <rect x="318" y="122" width="24" height="30" rx="6" fill="#3a4247" stroke="#20262a" stroke-width="3"/>
    <rect x="330" y="138" width="70" height="12" rx="6" fill="#3a4247" stroke="#20262a" stroke-width="3"/>
    <circle cx="330" cy="196" r="7" fill="#f2d24b"/>
  </g>
  <g>
    <rect x="430" y="250" width="150" height="14" rx="4" fill="#c98a54" stroke="#7a5233" stroke-width="3"/>
    <rect x="452" y="264" width="10" height="24" fill="#8a5a34"/>
    <rect x="548" y="264" width="10" height="24" fill="#8a5a34"/>
    <g>
      <rect x="444" y="230" width="24" height="20" rx="3" fill="#ffffff" stroke="#8a5a34" stroke-width="3"/>
      <rect x="474" y="230" width="24" height="20" rx="3" fill="#ffffff" stroke="#8a5a34" stroke-width="3"/>
      <rect x="504" y="230" width="24" height="20" rx="3" fill="#ffffff" stroke="#8a5a34" stroke-width="3"/>
      <rect x="534" y="230" width="24" height="20" rx="3" fill="#ffffff" stroke="#8a5a34" stroke-width="3"/>
      <path d="M486 230 q6 -10 12 0" fill="none" stroke="#dfe6ea" stroke-width="3"/>
      <path d="M516 230 q6 -10 12 0" fill="none" stroke="#dfe6ea" stroke-width="3"/>
    </g>
  </g>
  <g>
    <rect x="620" y="300" width="130" height="16" rx="4" fill="#a97c50" stroke="#7a5233" stroke-width="3"/>
    <rect x="628" y="316" width="12" height="34" fill="#8a5a34"/>
    <rect x="730" y="316" width="12" height="34" fill="#8a5a34"/>
    <rect x="620" y="270" width="130" height="14" rx="4" fill="#a97c50" stroke="#7a5233" stroke-width="3"/>
    <circle cx="650" cy="250" r="16" fill="#f0c9a0" stroke="#6f4d33" stroke-width="3"/>
    <path d="M634 242 q16 -14 32 0 z" fill="#4a3626"/>
    <rect x="636" y="266" width="28" height="40" rx="8" fill="#3f8fd0" stroke="#2c6699" stroke-width="3"/>
    <rect x="628" y="284" width="16" height="8" rx="4" fill="#2c6699"/>
    <rect x="656" y="284" width="16" height="8" rx="4" fill="#2c6699"/>
  </g>
</svg>`
    },
    {
      id: "vegetable-market",
      name: "Vegetable Market",
      cues: ["green vegetables in baskets", "vendor figure", "weighing scale"],
      svg: `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="450" viewBox="0 0 800 450" role="img" aria-label="A vegetable market with a SABZI MANDI sign, baskets of green vegetables, a vendor and a weighing scale">
  <rect width="800" height="450" fill="#bfe3f7"/>
  <rect y="330" width="800" height="120" fill="#c9bda8"/>
  <path d="M0 330 h800" stroke="#a9977f" stroke-width="4"/>
  <g>
    <rect x="230" y="52" width="340" height="48" rx="6" fill="#2f8f4a" stroke="#1c5a2e" stroke-width="4"/>
    <text x="400" y="86" font-family="Arial, Helvetica, sans-serif" font-size="26" font-weight="bold" fill="#ffffff" text-anchor="middle" letter-spacing="2">SABZI MANDI</text>
    <rect x="250" y="100" width="8" height="60" fill="#8a5a34"/>
    <rect x="542" y="100" width="8" height="60" fill="#8a5a34"/>
  </g>
  <g>
    <ellipse cx="150" cy="300" rx="70" ry="24" fill="#a97c50" stroke="#7a5233" stroke-width="4"/>
    <path d="M80 300 h140 M104 288 h92" stroke="#7a5233" stroke-width="3"/>
    <g>
      <path d="M110 288 q10 -30 -4 -46" stroke="#4f9c3c" stroke-width="8" fill="none" stroke-linecap="round"/>
      <path d="M130 286 q10 -32 -2 -50" stroke="#5cb04a" stroke-width="8" fill="none" stroke-linecap="round"/>
      <path d="M150 288 q10 -30 -4 -46" stroke="#4f9c3c" stroke-width="8" fill="none" stroke-linecap="round"/>
      <path d="M170 286 q10 -32 -2 -50" stroke="#5cb04a" stroke-width="8" fill="none" stroke-linecap="round"/>
      <path d="M190 288 q10 -30 -4 -46" stroke="#4f9c3c" stroke-width="8" fill="none" stroke-linecap="round"/>
    </g>
  </g>
  <g>
    <ellipse cx="360" cy="306" rx="72" ry="26" fill="#a97c50" stroke="#7a5233" stroke-width="4"/>
    <path d="M288 306 h144 M314 292 h92" stroke="#7a5233" stroke-width="3"/>
    <g>
      <circle cx="320" cy="284" r="12" fill="#e2574c" stroke="#a53a32" stroke-width="2"/>
      <circle cx="348" cy="280" r="12" fill="#5cb04a" stroke="#35702f" stroke-width="2"/>
      <circle cx="376" cy="284" r="12" fill="#e2574c" stroke="#a53a32" stroke-width="2"/>
      <circle cx="404" cy="280" r="12" fill="#5cb04a" stroke="#35702f" stroke-width="2"/>
      <circle cx="334" cy="296" r="12" fill="#e88a3c" stroke="#b5651f" stroke-width="2"/>
      <circle cx="362" cy="298" r="12" fill="#e2574c" stroke="#a53a32" stroke-width="2"/>
      <circle cx="390" cy="296" r="12" fill="#e88a3c" stroke="#b5651f" stroke-width="2"/>
    </g>
  </g>
  <g>
    <ellipse cx="600" cy="302" rx="70" ry="24" fill="#a97c50" stroke="#7a5233" stroke-width="4"/>
    <g>
      <path d="M560 292 q6 -34 -2 -52" stroke="#4f9c3c" stroke-width="9" fill="none" stroke-linecap="round"/>
      <path d="M582 290 q6 -36 -2 -54" stroke="#5cb04a" stroke-width="9" fill="none" stroke-linecap="round"/>
      <path d="M604 292 q6 -34 -2 -52" stroke="#4f9c3c" stroke-width="9" fill="none" stroke-linecap="round"/>
      <path d="M626 290 q6 -36 -2 -54" stroke="#5cb04a" stroke-width="9" fill="none" stroke-linecap="round"/>
      <path d="M648 292 q6 -34 -2 -52" stroke="#4f9c3c" stroke-width="9" fill="none" stroke-linecap="round"/>
    </g>
  </g>
  <g>
    <circle cx="490" cy="220" r="17" fill="#f0c9a0" stroke="#6f4d33" stroke-width="3"/>
    <path d="M473 212 q17 -16 34 0 z" fill="#4a3626"/>
    <rect x="472" y="240" width="36" height="60" rx="8" fill="#e2b23c" stroke="#a5871f" stroke-width="3"/>
    <rect x="460" y="246" width="16" height="34" rx="7" fill="#e2b23c" stroke="#a5871f" stroke-width="3"/>
    <rect x="504" y="246" width="16" height="34" rx="7" fill="#e2b23c" stroke="#a5871f" stroke-width="3"/>
    <rect x="478" y="300" width="9" height="30" fill="#7a5233"/>
    <rect x="492" y="300" width="9" height="30" fill="#7a5233"/>
  </g>
  <g>
    <rect x="640" y="200" width="12" height="90" fill="#6f6a58" stroke="#4a463c" stroke-width="2"/>
    <path d="M590 200 h112" stroke="#6f6a58" stroke-width="7" stroke-linecap="round"/>
    <path d="M646 200 v-16" stroke="#6f6a58" stroke-width="4"/>
    <path d="M584 200 l-14 26 h28 z" fill="#c3ccd2" stroke="#6f6a58" stroke-width="3"/>
    <path d="M708 200 l-14 26 h28 z" fill="#c3ccd2" stroke="#6f6a58" stroke-width="3"/>
  </g>
</svg>`
    },
    {
      id: "fruit-market",
      name: "Fruit Market",
      cues: ["mangoes and bananas in a cart", "fruit vendor", "colourful fruit pile"],
      svg: `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="450" viewBox="0 0 800 450" role="img" aria-label="A fruit market with a FRUITS sign, a wooden cart piled with colourful mangoes and bananas, a fruit vendor and a pile of fruit">
  <rect width="800" height="450" fill="#ffe0b3"/>
  <rect y="340" width="800" height="110" fill="#c9bda8"/>
  <path d="M0 340 h800" stroke="#a9977f" stroke-width="4"/>
  <rect x="270" y="56" width="260" height="46" rx="6" fill="#e2574c" stroke="#a53a32" stroke-width="4"/>
  <text x="400" y="88" font-family="Arial, Helvetica, sans-serif" font-size="26" font-weight="bold" fill="#ffffff" text-anchor="middle" letter-spacing="3">FRUITS</text>
  <g>
    <path d="M170 360 h420 l-30 -70 h-360 z" fill="#c98a54" stroke="#8a5a34" stroke-width="4"/>
    <rect x="150" y="360" width="460" height="18" rx="6" fill="#a97c50" stroke="#7a5233" stroke-width="4"/>
    <circle cx="230" cy="392" r="26" fill="#3a4247" stroke="#20262a" stroke-width="3"/><circle cx="230" cy="392" r="9" fill="#c3ccd2"/>
    <circle cx="530" cy="392" r="26" fill="#3a4247" stroke="#20262a" stroke-width="3"/><circle cx="530" cy="392" r="9" fill="#c3ccd2"/>
    <path d="M150 368 l-30 12" stroke="#7a5233" stroke-width="8" stroke-linecap="round"/>
  </g>
  <g>
    <g fill="#f2b134" stroke="#c9811f" stroke-width="3">
      <circle cx="250" cy="300" r="24"/><circle cx="300" cy="288" r="24"/><circle cx="350" cy="300" r="24"/>
      <circle cx="400" cy="286" r="24"/><circle cx="450" cy="300" r="24"/>
      <circle cx="275" cy="258" r="24"/><circle cx="325" cy="246" r="24"/><circle cx="375" cy="258" r="24"/><circle cx="425" cy="246" r="24"/>
      <circle cx="300" cy="216" r="24"/><circle cx="350" cy="206" r="24"/><circle cx="400" cy="216" r="24"/>
    </g>
    <g stroke="#b5651f" stroke-width="3" fill="none">
      <path d="M250 276 v-8 M300 264 v-8 M350 276 v-8 M400 262 v-8 M450 276 v-8"/>
    </g>
  </g>
  <g>
    <path d="M470 230 q60 -20 120 10 q-8 30 -60 30 q-52 0 -60 -40 z" fill="#f2d24b" stroke="#c9a51f" stroke-width="3"/>
    <g fill="#f2d24b" stroke="#c9a51f" stroke-width="3">
      <path d="M486 224 q6 -14 16 -4 q-8 10 -16 4 z"/>
      <path d="M512 216 q8 -14 18 -6 q-6 12 -18 6 z"/>
      <path d="M540 214 q8 -14 18 -6 q-6 12 -18 6 z"/>
      <path d="M568 220 q8 -14 18 -6 q-6 12 -18 6 z"/>
    </g>
  </g>
  <g>
    <circle cx="600" cy="180" r="18" fill="#f0c9a0" stroke="#6f4d33" stroke-width="3"/>
    <path d="M582 172 q18 -18 36 0 z" fill="#4a3626"/>
    <path d="M582 172 q-14 2 -16 12 q12 0 18 -6 z" fill="#4a3626"/>
    <rect x="582" y="200" width="36" height="60" rx="8" fill="#3f8fd0" stroke="#2c6699" stroke-width="3"/>
    <rect x="570" y="206" width="16" height="36" rx="7" fill="#3f8fd0" stroke="#2c6699" stroke-width="3"/>
    <rect x="614" y="206" width="16" height="36" rx="7" fill="#3f8fd0" stroke="#2c6699" stroke-width="3"/>
    <rect x="588" y="260" width="9" height="80" fill="#3a4247"/>
    <rect x="602" y="260" width="9" height="80" fill="#3a4247"/>
  </g>
  <g>
    <ellipse cx="150" cy="392" rx="40" ry="14" fill="#a97c50" stroke="#7a5233" stroke-width="3"/>
    <g fill="#e2574c"><circle cx="132" cy="386" r="8"/><circle cx="152" cy="382" r="8"/><circle cx="170" cy="386" r="8"/></g>
    <g fill="#7a5aa8"><circle cx="660" cy="384" r="8"/><circle cx="680" cy="380" r="8"/><circle cx="700" cy="384" r="8"/></g>
  </g>
</svg>`
    },
    {
      id: "flower-shop",
      name: "Flower Shop",
      cues: ["flower garlands hanging", "roses in pots", "flower vendor arranging"],
      svg: `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="450" viewBox="0 0 800 450" role="img" aria-label="A flower shop with a FLOWERS sign, hanging flower garlands, roses in pots and a flower vendor arranging a bouquet">
  <rect width="800" height="450" fill="#e8f4fd"/>
  <rect y="340" width="800" height="110" fill="#b9a98f"/>
  <path d="M0 340 h800" stroke="#9a8a70" stroke-width="4"/>
  <rect x="260" y="60" width="280" height="46" rx="6" fill="#c4483f" stroke="#8f2f28" stroke-width="4"/>
  <text x="400" y="92" font-family="Arial, Helvetica, sans-serif" font-size="26" font-weight="bold" fill="#ffffff" text-anchor="middle" letter-spacing="2">FLOWERS</text>
  <g>
    <rect x="120" y="120" width="560" height="16" rx="6" fill="#8a5a34" stroke="#5a3f2c" stroke-width="3"/>
    <rect x="130" y="136" width="10" height="40" fill="#8a5a34"/>
    <rect x="660" y="136" width="10" height="40" fill="#8a5a34"/>
  </g>
  <g>
    <g stroke="#4f9c3c" stroke-width="4">
      <path d="M170 128 v120 M200 128 v140 M230 128 v110 M260 128 v130"/>
    </g>
    <g>
      <circle cx="170" cy="160" r="13" fill="#e2574c"/><circle cx="170" cy="196" r="13" fill="#f2a63c"/><circle cx="170" cy="232" r="13" fill="#e2574c"/>
      <circle cx="200" cy="160" r="13" fill="#f2d24b"/><circle cx="200" cy="196" r="13" fill="#e2574c"/><circle cx="200" cy="232" r="13" fill="#ff8fb0"/><circle cx="200" cy="266" r="13" fill="#f2d24b"/>
      <circle cx="230" cy="160" r="13" fill="#ff8fb0"/><circle cx="230" cy="196" r="13" fill="#e2574c"/><circle cx="230" cy="232" r="13" fill="#f2a63c"/>
      <circle cx="260" cy="160" r="13" fill="#e2574c"/><circle cx="260" cy="196" r="13" fill="#f2d24b"/><circle cx="260" cy="232" r="13" fill="#ff8fb0"/>
    </g>
  </g>
  <g>
    <g stroke="#7a5233" stroke-width="4">
      <rect x="620" y="200" width="10" height="140"/>
      <rect x="700" y="200" width="10" height="140"/>
    </g>
    <g>
      <circle cx="625" cy="180" r="14" fill="#ff8fb0"/><circle cx="625" cy="216" r="14" fill="#e2574c"/><circle cx="625" cy="252" r="14" fill="#f2a63c"/>
      <circle cx="705" cy="180" r="14" fill="#e2574c"/><circle cx="705" cy="216" r="14" fill="#f2d24b"/><circle cx="705" cy="252" r="14" fill="#ff8fb0"/>
    </g>
  </g>
  <g>
    <path d="M380 260 h120 l-14 80 h-92 z" fill="#c98a54" stroke="#8a5a34" stroke-width="4"/>
    <g>
      <circle cx="410" cy="230" r="22" fill="#e2574c" stroke="#a53a32" stroke-width="2"/>
      <circle cx="440" cy="212" r="22" fill="#ff8fb0" stroke="#c96a86" stroke-width="2"/>
      <circle cx="470" cy="230" r="22" fill="#f2d24b" stroke="#c9a51f" stroke-width="2"/>
      <circle cx="440" cy="248" r="22" fill="#f2a63c" stroke="#c9811f" stroke-width="2"/>
    </g>
    <path d="M440 268 v-40" stroke="#4f9c3c" stroke-width="5"/>
  </g>
  <g>
    <circle cx="540" cy="250" r="17" fill="#f0c9a0" stroke="#6f4d33" stroke-width="3"/>
    <path d="M523 242 q17 -16 34 0 z" fill="#4a3626"/>
    <rect x="522" y="270" width="36" height="60" rx="8" fill="#4f9c5c" stroke="#35702f" stroke-width="3"/>
    <rect x="510" y="276" width="16" height="34" rx="7" fill="#4f9c5c" stroke="#35702f" stroke-width="3"/>
    <rect x="554" y="276" width="16" height="34" rx="7" fill="#4f9c5c" stroke="#35702f" stroke-width="3"/>
    <rect x="528" y="330" width="9" height="30" fill="#3a4247"/>
    <rect x="542" y="330" width="9" height="30" fill="#3a4247"/>
  </g>
</svg>`
    },
    {
      id: "bookstore",
      name: "Bookstore",
      cues: ["books on wooden shelves", "reading chair with book", "stack of books on floor"],
      svg: `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="450" viewBox="0 0 800 450" role="img" aria-label="A bookstore with a BOOKS sign, wooden shelves full of colourful books, a red reading armchair with an open book and a stack of books on the floor">
  <rect width="800" height="450" fill="#f0e2c8"/>
  <rect y="340" width="800" height="110" fill="#b58a5a"/>
  <path d="M0 340 h800" stroke="#96703f" stroke-width="4"/>
  <rect x="270" y="52" width="260" height="46" rx="6" fill="#2f6f8f" stroke="#204e66" stroke-width="4"/>
  <text x="400" y="84" font-family="Arial, Helvetica, sans-serif" font-size="26" font-weight="bold" fill="#ffffff" text-anchor="middle" letter-spacing="3">BOOKS</text>
  <g>
    <rect x="50" y="110" width="260" height="230" fill="#8a5a34" stroke="#5a3f2c" stroke-width="4"/>
    <g stroke="#5a3f2c" stroke-width="4"><path d="M50 168 h260 M50 226 h260 M50 284 h260"/></g>
    <g>
      <rect x="64" y="122" width="16" height="42" rx="2" fill="#e2574c"/><rect x="82" y="128" width="14" height="36" rx="2" fill="#3f8fd0"/>
      <rect x="98" y="120" width="18" height="44" rx="2" fill="#f2a63c"/><rect x="118" y="130" width="14" height="34" rx="2" fill="#4f9c5c"/>
      <rect x="134" y="124" width="16" height="40" rx="2" fill="#7a5aa8"/><rect x="152" y="132" width="14" height="32" rx="2" fill="#c4483f"/>
      <rect x="168" y="120" width="18" height="44" rx="2" fill="#2f8f7a"/><rect x="188" y="130" width="14" height="34" rx="2" fill="#e8a33d"/>
      <rect x="204" y="124" width="16" height="40" rx="2" fill="#3f8fd0"/><rect x="222" y="132" width="14" height="32" rx="2" fill="#e2574c"/>
      <rect x="238" y="120" width="18" height="44" rx="2" fill="#4f9c5c"/><rect x="258" y="130" width="14" height="34" rx="2" fill="#f2a63c"/>
      <rect x="64" y="180" width="16" height="42" rx="2" fill="#7a5aa8"/><rect x="82" y="186" width="14" height="36" rx="2" fill="#e2574c"/>
      <rect x="98" y="178" width="18" height="44" rx="2" fill="#3f8fd0"/><rect x="118" y="188" width="14" height="34" rx="2" fill="#4f9c5c"/>
      <rect x="134" y="182" width="16" height="40" rx="2" fill="#f2a63c"/><rect x="152" y="190" width="14" height="32" rx="2" fill="#2f8f7a"/>
      <rect x="168" y="178" width="18" height="44" rx="2" fill="#c4483f"/><rect x="188" y="188" width="14" height="34" rx="2" fill="#3f8fd0"/>
      <rect x="204" y="182" width="16" height="40" rx="2" fill="#4f9c5c"/><rect x="222" y="190" width="14" height="32" rx="2" fill="#7a5aa8"/>
      <rect x="238" y="178" width="18" height="44" rx="2" fill="#e8a33d"/><rect x="258" y="188" width="14" height="34" rx="2" fill="#e2574c"/>
      <rect x="64" y="238" width="16" height="42" rx="2" fill="#3f8fd0"/><rect x="82" y="244" width="14" height="36" rx="2" fill="#f2a63c"/>
      <rect x="98" y="236" width="18" height="44" rx="2" fill="#4f9c5c"/><rect x="118" y="246" width="14" height="34" rx="2" fill="#7a5aa8"/>
      <rect x="134" y="240" width="16" height="40" rx="2" fill="#e2574c"/><rect x="152" y="248" width="14" height="32" rx="2" fill="#2f8f7a"/>
      <rect x="168" y="236" width="18" height="44" rx="2" fill="#3f8fd0"/><rect x="188" y="246" width="14" height="34" rx="2" fill="#e8a33d"/>
      <rect x="204" y="240" width="16" height="40" rx="2" fill="#7a5aa8"/><rect x="222" y="248" width="14" height="32" rx="2" fill="#4f9c5c"/>
      <rect x="238" y="236" width="18" height="44" rx="2" fill="#c4483f"/><rect x="258" y="246" width="14" height="34" rx="2" fill="#3f8fd0"/>
    </g>
  </g>
  <g>
    <rect x="520" y="150" width="230" height="190" fill="#8a5a34" stroke="#5a3f2c" stroke-width="4"/>
    <g stroke="#5a3f2c" stroke-width="4"><path d="M520 214 h230 M520 278 h230"/></g>
    <g>
      <rect x="536" y="164" width="16" height="42" rx="2" fill="#e2574c"/><rect x="554" y="172" width="14" height="34" rx="2" fill="#3f8fd0"/>
      <rect x="570" y="162" width="18" height="44" rx="2" fill="#f2a63c"/><rect x="590" y="172" width="14" height="34" rx="2" fill="#4f9c5c"/>
      <rect x="606" y="166" width="16" height="40" rx="2" fill="#7a5aa8"/><rect x="624" y="174" width="14" height="32" rx="2" fill="#c4483f"/>
      <rect x="640" y="162" width="18" height="44" rx="2" fill="#2f8f7a"/><rect x="660" y="172" width="14" height="34" rx="2" fill="#e8a33d"/>
      <rect x="676" y="166" width="16" height="40" rx="2" fill="#3f8fd0"/><rect x="694" y="174" width="14" height="32" rx="2" fill="#e2574c"/>
      <rect x="710" y="162" width="18" height="44" rx="2" fill="#4f9c5c"/><rect x="730" y="172" width="14" height="34" rx="2" fill="#f2a63c"/>
      <rect x="536" y="228" width="16" height="42" rx="2" fill="#7a5aa8"/><rect x="554" y="236" width="14" height="34" rx="2" fill="#e2574c"/>
      <rect x="570" y="226" width="18" height="44" rx="2" fill="#3f8fd0"/><rect x="590" y="236" width="14" height="34" rx="2" fill="#4f9c5c"/>
      <rect x="606" y="230" width="16" height="40" rx="2" fill="#f2a63c"/><rect x="624" y="238" width="14" height="32" rx="2" fill="#2f8f7a"/>
      <rect x="640" y="226" width="18" height="44" rx="2" fill="#c4483f"/><rect x="660" y="236" width="14" height="34" rx="2" fill="#3f8fd0"/>
      <rect x="676" y="230" width="16" height="40" rx="2" fill="#4f9c5c"/><rect x="694" y="238" width="14" height="32" rx="2" fill="#7a5aa8"/>
      <rect x="710" y="226" width="18" height="44" rx="2" fill="#e8a33d"/><rect x="730" y="236" width="14" height="34" rx="2" fill="#e2574c"/>
    </g>
  </g>
  <g>
    <path d="M340 300 q0 -40 40 -40 h60 q40 0 40 40 v40 h-140 z" fill="#c4483f" stroke="#8f2f28" stroke-width="4"/>
    <path d="M350 300 q0 -28 30 -28 h60 q30 0 30 28 v20 h-120 z" fill="#f2e0c8" stroke="#8f2f28" stroke-width="3"/>
    <rect x="330" y="340" width="160" height="16" rx="4" fill="#8f2f28"/>
    <rect x="356" y="356" width="14" height="26" fill="#5a3f2c"/>
    <rect x="450" y="356" width="14" height="26" fill="#5a3f2c"/>
    <rect x="380" y="286" width="60" height="16" rx="4" fill="#ffffff" stroke="#33445c" stroke-width="3"/>
    <path d="M410 286 v16" stroke="#33445c" stroke-width="3"/>
    <path d="M380 294 h60" stroke="#33445c" stroke-width="3"/>
  </g>
  <g>
    <rect x="200" y="360" width="90" height="18" rx="3" fill="#e2574c" stroke="#a53a32" stroke-width="3"/>
    <rect x="206" y="342" width="80" height="18" rx="3" fill="#3f8fd0" stroke="#2c6699" stroke-width="3"/>
    <rect x="212" y="324" width="70" height="18" rx="3" fill="#f2a63c" stroke="#c9811f" stroke-width="3"/>
    <rect x="220" y="306" width="54" height="18" rx="3" fill="#4f9c5c" stroke="#35702f" stroke-width="3"/>
  </g>
</svg>`
    },
    {
      id: "temple",
      name: "Temple",
      cues: ["shikhara/dome with small flag on top", "diya (oil lamp) glowing near entrance", "hanging bell at the doorway"],
      svg: `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="450" viewBox="0 0 800 450" role="img" aria-label="A Hindu temple with a tall shikhara tower topped by a flag, a glowing diya near the entrance and a hanging bell at the doorway">
  <rect width="800" height="450" fill="#bfe3f5"/>
  <rect y="360" width="800" height="90" fill="#e6d7a8"/>
  <rect x="170" y="360" width="460" height="40" rx="4" fill="#d9b877" stroke="#8a6a34" stroke-width="4"/>
  <rect x="330" y="392" width="140" height="14" fill="#c9a86a" stroke="#8a6a34" stroke-width="3"/>
  <rect x="350" y="378" width="100" height="14" fill="#d9b877" stroke="#8a6a34" stroke-width="3"/>
  <rect x="250" y="250" width="300" height="112" fill="#edc27a" stroke="#8a5a2f" stroke-width="5"/>
  <path d="M250 250 Q400 40 550 250 Z" fill="#d98a4a" stroke="#8a4a22" stroke-width="5"/>
  <g stroke="#b06a30" stroke-width="4" fill="none">
    <path d="M282 210 Q400 120 518 210"/>
    <path d="M312 165 Q400 100 488 165"/>
    <path d="M340 122 Q400 76 460 122"/>
  </g>
  <circle cx="400" cy="52" r="12" fill="#f2c94c" stroke="#b8860b" stroke-width="4"/>
  <path d="M400 40 v-14" stroke="#b8860b" stroke-width="5"/>
  <path d="M400 26 L452 38 L400 50 Z" fill="#e2483b" stroke="#a52a20" stroke-width="3"/>
  <rect x="368" y="298" width="64" height="64" rx="30" fill="#7a2f22" stroke="#5a1f18" stroke-width="4"/>
  <rect x="368" y="332" width="64" height="30" fill="#7a2f22" stroke="#5a1f18" stroke-width="4"/>
  <rect x="312" y="300" width="26" height="62" rx="12" fill="#c9743a" stroke="#8a4a22" stroke-width="4"/>
  <rect x="462" y="300" width="26" height="62" rx="12" fill="#c9743a" stroke="#8a4a22" stroke-width="4"/>
  <path d="M400 262 v10" stroke="#6b4a1f" stroke-width="4"/>
  <path d="M386 274 h28 l-6 22 h-16 Z" fill="#f2c94c" stroke="#b8860b" stroke-width="4"/>
  <ellipse cx="332" cy="396" rx="22" ry="9" fill="#b5651d" stroke="#7a4010" stroke-width="3"/>
  <path d="M332 388 q6 -12 0 -20 q-6 8 0 20 Z" fill="#ffb703" stroke="#e07a00" stroke-width="2"/>
  <circle cx="332" cy="381" r="4" fill="#fff3b0"/>
</svg>`
    },
    {
      id: "mosque",
      name: "Mosque",
      cues: ["large dome", "tall minaret", "crescent moon symbol on top"],
      svg: `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="450" viewBox="0 0 800 450" role="img" aria-label="A mosque with a large green dome, a tall minaret and a crescent moon symbol on top">
  <rect width="800" height="450" fill="#cfe8f5"/>
  <rect y="360" width="800" height="90" fill="#e8dcbb"/>
  <rect x="200" y="270" width="340" height="110" fill="#f4efe2" stroke="#b0a184" stroke-width="5"/>
  <rect x="230" y="250" width="280" height="26" rx="6" fill="#f4efe2" stroke="#b0a184" stroke-width="4"/>
  <path d="M240 252 A110 104 0 0 1 500 252 Z" fill="#2f8f6f" stroke="#1f6a50" stroke-width="5"/>
  <path d="M400 148 v-16" stroke="#c89b1e" stroke-width="6"/>
  <path d="M405 108 a22 22 0 1 0 0 44 a17 17 0 1 1 0 -44 Z" fill="#f2c94c" stroke="#b8860b" stroke-width="3"/>
  <path d="M352 258 v-14 a14 14 0 0 1 28 0 v14" fill="none" stroke="#b0a184" stroke-width="4"/>
  <rect x="330" y="300" width="80" height="80" rx="40" fill="#2f8f6f" stroke="#1f6a50" stroke-width="4"/>
  <rect x="330" y="340" width="80" height="40" fill="#2f8f6f" stroke="#1f6a50" stroke-width="4"/>
  <g fill="#8fd0bd" stroke="#1f6a50" stroke-width="3">
    <path d="M250 320 v-24 a18 18 0 0 1 36 0 v24 Z"/>
    <path d="M514 320 v-24 a18 18 0 0 1 36 0 v24 Z"/>
  </g>
  <rect x="600" y="100" width="54" height="280" fill="#f4efe2" stroke="#b0a184" stroke-width="5"/>
  <rect x="592" y="170" width="70" height="18" fill="#e0a72e" stroke="#b8860b" stroke-width="4"/>
  <rect x="592" y="230" width="70" height="18" fill="#e0a72e" stroke="#b8860b" stroke-width="4"/>
  <path d="M600 100 A27 30 0 0 1 654 100 Z" fill="#2f8f6f" stroke="#1f6a50" stroke-width="4"/>
  <path d="M627 70 v-10" stroke="#c89b1e" stroke-width="5"/>
  <path d="M631 44 a13 13 0 1 0 0 26 a10 10 0 1 1 0 -26 Z" fill="#f2c94c" stroke="#b8860b" stroke-width="3"/>
  <rect x="200" y="360" width="340" height="20" fill="#e0d4b0" stroke="#b0a184" stroke-width="4"/>
</svg>`
    },
    {
      id: "church",
      name: "Church",
      cues: ["cross on top of steeple", "pointed roof", "stained-glass arched window"],
      svg: `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="450" viewBox="0 0 800 450" role="img" aria-label="A church with a cross on top of a steeple, a pointed roof and a colourful stained-glass arched window">
  <rect width="800" height="450" fill="#cfe8f5"/>
  <rect y="360" width="800" height="90" fill="#dfe8c8"/>
  <rect x="230" y="250" width="340" height="130" fill="#f0e6cf" stroke="#9a8560" stroke-width="5"/>
  <path d="M214 250 L400 150 L586 250 Z" fill="#a34a3a" stroke="#6f2f24" stroke-width="5"/>
  <rect x="358" y="96" width="84" height="160" fill="#f0e6cf" stroke="#9a8560" stroke-width="5"/>
  <path d="M350 96 L400 44 L450 96 Z" fill="#a34a3a" stroke="#6f2f24" stroke-width="5"/>
  <rect x="396" y="10" width="8" height="58" fill="#f2c94c" stroke="#b8860b" stroke-width="3"/>
  <rect x="378" y="26" width="44" height="8" fill="#f2c94c" stroke="#b8860b" stroke-width="3"/>
  <rect x="366" y="306" width="68" height="74" rx="34" fill="#7a5a2f" stroke="#5a3f1f" stroke-width="4"/>
  <rect x="366" y="340" width="68" height="40" fill="#7a5a2f" stroke="#5a3f1f" stroke-width="4"/>
  <path d="M266 380 v-64 a46 46 0 0 1 92 0 v64 Z" fill="#bfe3f5" stroke="#9a8560" stroke-width="5"/>
  <g stroke-width="3">
    <path d="M312 132 v248 M266 234 h92 M276 190 h72 M276 278 h72" stroke="#9a8560"/>
    <path d="M312 132 L266 234 M312 132 L358 234 M312 380 L266 278 M312 380 L358 278" stroke="#9a8560"/>
  </g>
  <path d="M312 132 L266 190 L276 234 L312 234 Z" fill="#e2574c"/>
  <path d="M312 132 L358 190 L348 234 L312 234 Z" fill="#3f8fd0"/>
  <path d="M312 234 L276 234 L266 278 L312 278 Z" fill="#4f9c5c"/>
  <path d="M312 234 L348 234 L358 278 L312 278 Z" fill="#f2a63c"/>
  <path d="M312 278 L266 278 L266 316 L312 316 Z" fill="#7a5aa8"/>
  <path d="M312 278 L358 278 L358 316 L312 316 Z" fill="#2f8f7a"/>
</svg>`
    },
    {
      id: "gurudwara",
      name: "Gurudwara",
      cues: ["Nishan Sahib triangular flag on tall pole", "golden dome", "arched entrance"],
      svg: `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="450" viewBox="0 0 800 450" role="img" aria-label="A gurudwara with a golden dome, an arched entrance and a tall Nishan Sahib pole with a triangular flag">
  <rect width="800" height="450" fill="#d6ecf7"/>
  <rect y="355" width="800" height="95" fill="#e6e0c8"/>
  <rect x="230" y="255" width="340" height="110" fill="#f7f3e8" stroke="#c2b596" stroke-width="5"/>
  <rect x="215" y="235" width="370" height="24" rx="6" fill="#f7f3e8" stroke="#c2b596" stroke-width="4"/>
  <path d="M290 236 A110 96 0 0 1 510 236 Z" fill="#e0a72e" stroke="#a9770b" stroke-width="5"/>
  <rect x="330" y="206" width="140" height="32" rx="8" fill="#f7f3e8" stroke="#c2b596" stroke-width="4"/>
  <path d="M400 150 v-14" stroke="#a9770b" stroke-width="6"/>
  <circle cx="400" cy="132" r="10" fill="#f2c94c" stroke="#a9770b" stroke-width="4"/>
  <path d="M330 300 v-26 a34 34 0 0 1 68 0 v26 Z" fill="#8a5a2f" stroke="#5a3f1f" stroke-width="4"/>
  <rect x="330" y="330" width="68" height="35" fill="#8a5a2f" stroke="#5a3f1f" stroke-width="4"/>
  <g fill="#cfe3ef" stroke="#c2b596" stroke-width="3">
    <path d="M262 300 v-22 a16 16 0 0 1 32 0 v22 Z"/>
    <path d="M506 300 v-22 a16 16 0 0 1 32 0 v22 Z"/>
  </g>
  <rect x="620" y="90" width="10" height="275" fill="#8a5a2f" stroke="#5a3f1f" stroke-width="3"/>
  <rect x="598" y="118" width="54" height="8" fill="#e0a72e" stroke="#a9770b" stroke-width="3"/>
  <path d="M628 118 L628 58 L694 88 Z" fill="#2f6f8f" stroke="#1f4f66" stroke-width="4"/>
  <circle cx="632" cy="118" r="8" fill="#e0a72e" stroke="#a9770b" stroke-width="3"/>
</svg>`
    },
    {
      id: "monastery",
      name: "Monastery",
      cues: ["colorful prayer flags strung across", "monk in saffron robe", "prayer wheels at base"],
      svg: `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="450" viewBox="0 0 800 450" role="img" aria-label="A monastery with colourful prayer flags strung across the sky, a monk in a saffron robe and a row of prayer wheels at the base">
  <rect width="800" height="450" fill="#cfe8f5"/>
  <rect y="355" width="800" height="95" fill="#e0d7b8"/>
  <rect x="250" y="225" width="300" height="135" fill="#f0e6cf" stroke="#9a8560" stroke-width="5"/>
  <rect x="235" y="203" width="330" height="26" fill="#a34a3a" stroke="#6f2f24" stroke-width="4"/>
  <path d="M285 203 L400 138 L515 203 Z" fill="#e0a72e" stroke="#a9770b" stroke-width="5"/>
  <path d="M400 138 v-16" stroke="#a9770b" stroke-width="5"/>
  <circle cx="400" cy="122" r="8" fill="#f2c94c" stroke="#a9770b" stroke-width="4"/>
  <g fill="#cfe3ef" stroke="#9a8560" stroke-width="3">
    <path d="M300 320 v-40 a24 24 0 0 1 48 0 v40 Z"/>
    <path d="M452 320 v-40 a24 24 0 0 1 48 0 v40 Z"/>
  </g>
  <rect x="378" y="290" width="44" height="70" rx="10" fill="#8a5a2f" stroke="#5a3f1f" stroke-width="4"/>
  <g fill="#e0a72e" stroke="#a9770b" stroke-width="3">
    <rect x="286" y="342" width="34" height="44" rx="8"/>
    <rect x="330" y="342" width="34" height="44" rx="8"/>
    <rect x="374" y="342" width="34" height="44" rx="8"/>
    <rect x="418" y="342" width="34" height="44" rx="8"/>
    <rect x="462" y="342" width="34" height="44" rx="8"/>
  </g>
  <g stroke="#a9770b" stroke-width="3"><path d="M303 342 v44 M347 342 v44 M391 342 v44 M435 342 v44 M479 342 v44"/></g>
  <circle cx="652" cy="270" r="16" fill="#e8b98a" stroke="#b07a4a" stroke-width="4"/>
  <path d="M630 292 Q652 280 674 292 L684 358 L620 358 Z" fill="#f08a1e" stroke="#b35f00" stroke-width="4"/>
  <path d="M630 306 Q652 316 674 306" fill="none" stroke="#b35f00" stroke-width="4"/>
  <path d="M60 80 Q400 168 740 80" fill="none" stroke="#5a4a3a" stroke-width="4"/>
  <path d="M90 86 L110 86 L100 114 Z" fill="#3f8fd0" stroke="#2c6699" stroke-width="2"/>
  <path d="M170 103 L190 103 L180 131 Z" fill="#f2f2f2" stroke="#9aa0a6" stroke-width="2"/>
  <path d="M250 122 L270 122 L260 150 Z" fill="#e2574c" stroke="#a53a32" stroke-width="2"/>
  <path d="M330 136 L350 136 L340 164 Z" fill="#4f9c5c" stroke="#35702f" stroke-width="2"/>
  <path d="M410 138 L430 138 L420 166 Z" fill="#f2c94c" stroke="#b8860b" stroke-width="2"/>
  <path d="M490 128 L510 128 L500 156 Z" fill="#3f8fd0" stroke="#2c6699" stroke-width="2"/>
  <path d="M570 108 L590 108 L580 136 Z" fill="#f2f2f2" stroke="#9aa0a6" stroke-width="2"/>
  <path d="M650 91 L670 91 L660 119 Z" fill="#e2574c" stroke="#a53a32" stroke-width="2"/>
  <path d="M730 82 L750 82 L740 110 Z" fill="#4f9c5c" stroke="#35702f" stroke-width="2"/>
</svg>`
    },
    {
      id: "community-hall",
      name: "Community Hall",
      cues: ["banner saying \"COMMUNITY HALL\"", "stage with podium", "rows of chairs"],
      svg: `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="450" viewBox="0 0 800 450" role="img" aria-label="A community hall with a banner reading COMMUNITY HALL, a stage with a podium and rows of chairs">
  <rect width="800" height="450" fill="#f5ecd8"/>
  <rect y="340" width="800" height="110" fill="#d9c6a0"/>
  <rect y="330" width="800" height="14" fill="#c2ab80"/>
  <rect x="150" y="170" width="500" height="120" fill="#b58a5a" stroke="#8a5a2f" stroke-width="5"/>
  <rect x="150" y="278" width="500" height="14" fill="#8a5a2f"/>
  <rect x="150" y="110" width="66" height="182" fill="#c4483f" stroke="#8f2f28" stroke-width="4"/>
  <rect x="584" y="110" width="66" height="182" fill="#c4483f" stroke="#8f2f28" stroke-width="4"/>
  <rect x="170" y="40" width="460" height="64" rx="8" fill="#2f6f8f" stroke="#1f4f66" stroke-width="4"/>
  <text x="400" y="84" font-family="Arial, Helvetica, sans-serif" font-size="34" font-weight="bold" fill="#ffffff" text-anchor="middle" letter-spacing="2">COMMUNITY HALL</text>
  <rect x="356" y="110" width="88" height="60" fill="#8a5a2f" stroke="#5a3f1f" stroke-width="4"/>
  <rect x="368" y="96" width="64" height="20" rx="6" fill="#a9773f" stroke="#5a3f1f" stroke-width="4"/>
  <path d="M400 96 v-24" stroke="#3a3a3a" stroke-width="5"/>
  <circle cx="400" cy="68" r="8" fill="#3a3a3a"/>
  <g>
    <rect x="176" y="306" width="52" height="40" rx="6" fill="#4f9c5c" stroke="#35702f" stroke-width="3"/>
    <rect x="170" y="342" width="64" height="12" rx="3" fill="#4f9c5c" stroke="#35702f" stroke-width="3"/>
    <rect x="176" y="352" width="10" height="26" fill="#35702f"/><rect x="218" y="352" width="10" height="26" fill="#35702f"/>
    <rect x="296" y="306" width="52" height="40" rx="6" fill="#4f9c5c" stroke="#35702f" stroke-width="3"/>
    <rect x="290" y="342" width="64" height="12" rx="3" fill="#4f9c5c" stroke="#35702f" stroke-width="3"/>
    <rect x="296" y="352" width="10" height="26" fill="#35702f"/><rect x="338" y="352" width="10" height="26" fill="#35702f"/>
    <rect x="416" y="306" width="52" height="40" rx="6" fill="#4f9c5c" stroke="#35702f" stroke-width="3"/>
    <rect x="410" y="342" width="64" height="12" rx="3" fill="#4f9c5c" stroke="#35702f" stroke-width="3"/>
    <rect x="416" y="352" width="10" height="26" fill="#35702f"/><rect x="458" y="352" width="10" height="26" fill="#35702f"/>
    <rect x="536" y="306" width="52" height="40" rx="6" fill="#4f9c5c" stroke="#35702f" stroke-width="3"/>
    <rect x="530" y="342" width="64" height="12" rx="3" fill="#4f9c5c" stroke="#35702f" stroke-width="3"/>
    <rect x="536" y="352" width="10" height="26" fill="#35702f"/><rect x="578" y="352" width="10" height="26" fill="#35702f"/>
  </g>
  <g>
    <rect x="120" y="378" width="64" height="48" rx="6" fill="#3f8fd0" stroke="#2c6699" stroke-width="3"/>
    <rect x="112" y="420" width="80" height="14" rx="3" fill="#3f8fd0" stroke="#2c6699" stroke-width="3"/>
    <rect x="120" y="432" width="12" height="18" fill="#2c6699"/><rect x="172" y="432" width="12" height="18" fill="#2c6699"/>
    <rect x="256" y="378" width="64" height="48" rx="6" fill="#3f8fd0" stroke="#2c6699" stroke-width="3"/>
    <rect x="248" y="420" width="80" height="14" rx="3" fill="#3f8fd0" stroke="#2c6699" stroke-width="3"/>
    <rect x="256" y="432" width="12" height="18" fill="#2c6699"/><rect x="308" y="432" width="12" height="18" fill="#2c6699"/>
    <rect x="392" y="378" width="64" height="48" rx="6" fill="#3f8fd0" stroke="#2c6699" stroke-width="3"/>
    <rect x="384" y="420" width="80" height="14" rx="3" fill="#3f8fd0" stroke="#2c6699" stroke-width="3"/>
    <rect x="392" y="432" width="12" height="18" fill="#2c6699"/><rect x="444" y="432" width="12" height="18" fill="#2c6699"/>
    <rect x="528" y="378" width="64" height="48" rx="6" fill="#3f8fd0" stroke="#2c6699" stroke-width="3"/>
    <rect x="520" y="420" width="80" height="14" rx="3" fill="#3f8fd0" stroke="#2c6699" stroke-width="3"/>
    <rect x="528" y="432" width="12" height="18" fill="#2c6699"/><rect x="580" y="432" width="12" height="18" fill="#2c6699"/>
  </g>
</svg>`
    },
    {
      id: "wedding-hall",
      name: "Wedding Hall",
      cues: ["decorated mandap with flowers", "string lights hanging", "floral arch at entrance"],
      svg: `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="450" viewBox="0 0 800 450" role="img" aria-label="A wedding hall with a flower-decorated mandap, string lights hanging and a floral arch at the entrance">
  <rect width="800" height="450" fill="#fbe8ee"/>
  <rect y="340" width="800" height="110" fill="#ecd3c4"/>
  <g fill="none" stroke="#7a6a4a" stroke-width="4">
    <path d="M60 60 Q220 150 380 60"/>
    <path d="M300 60 Q460 150 620 60"/>
    <path d="M540 60 Q660 130 780 60"/>
  </g>
  <g fill="#ffd23f" stroke="#b8860b" stroke-width="2">
    <circle cx="110" cy="86" r="6"/><circle cx="170" cy="104" r="6"/><circle cx="230" cy="112" r="6"/><circle cx="290" cy="104" r="6"/><circle cx="350" cy="82" r="6"/>
    <circle cx="410" cy="92" r="6"/><circle cx="470" cy="110" r="6"/><circle cx="530" cy="116" r="6"/><circle cx="590" cy="104" r="6"/>
    <circle cx="600" cy="78" r="6"/><circle cx="650" cy="92" r="6"/><circle cx="710" cy="86" r="6"/>
  </g>
  <g>
    <rect x="320" y="128" width="160" height="34" rx="12" fill="#e2574c" stroke="#a53a32" stroke-width="4"/>
    <rect x="332" y="156" width="18" height="150" rx="6" fill="#c99a5a" stroke="#8a5a2f" stroke-width="4"/>
    <rect x="450" y="156" width="18" height="150" rx="6" fill="#c99a5a" stroke="#8a5a2f" stroke-width="4"/>
    <rect x="382" y="152" width="16" height="154" rx="6" fill="#d9aa6a" stroke="#8a5a2f" stroke-width="4"/>
    <rect x="402" y="152" width="16" height="154" rx="6" fill="#d9aa6a" stroke="#8a5a2f" stroke-width="4"/>
    <g fill="#ffffff" stroke="#d98fb0" stroke-width="2">
      <circle cx="341" cy="150" r="7"/><circle cx="365" cy="146" r="7"/><circle cx="390" cy="146" r="7"/><circle cx="410" cy="146" r="7"/><circle cx="435" cy="146" r="7"/><circle cx="459" cy="150" r="7"/>
    </g>
    <rect x="392" y="250" width="36" height="56" rx="8" fill="#f2c94c" stroke="#b8860b" stroke-width="3"/>
  </g>
  <g>
    <path d="M240 450 Q240 200 400 200" fill="none" stroke="#4f9c5c" stroke-width="22"/>
    <path d="M560 450 Q560 200 400 200" fill="none" stroke="#4f9c5c" stroke-width="22"/>
    <g fill="#e2574c" stroke="#a53a32" stroke-width="2">
      <circle cx="240" cy="410" r="15"/><circle cx="248" cy="350" r="15"/><circle cx="264" cy="292" r="15"/><circle cx="296" cy="244" r="15"/><circle cx="342" cy="214" r="15"/><circle cx="400" cy="204" r="15"/>
    </g>
    <g fill="#ffffff" stroke="#d98fb0" stroke-width="2">
      <circle cx="244" cy="380" r="13"/><circle cx="256" cy="320" r="13"/><circle cx="280" cy="268" r="13"/><circle cx="318" cy="228" r="13"/><circle cx="370" cy="208" r="13"/>
    </g>
    <g fill="#e2574c" stroke="#a53a32" stroke-width="2">
      <circle cx="560" cy="410" r="15"/><circle cx="552" cy="350" r="15"/><circle cx="536" cy="292" r="15"/><circle cx="504" cy="244" r="15"/><circle cx="458" cy="214" r="15"/>
    </g>
    <g fill="#ffffff" stroke="#d98fb0" stroke-width="2">
      <circle cx="556" cy="380" r="13"/><circle cx="544" cy="320" r="13"/><circle cx="520" cy="268" r="13"/><circle cx="482" cy="228" r="13"/><circle cx="430" cy="208" r="13"/>
    </g>
  </g>
</svg>`
    },
    {
      id: "museum",
      name: "Museum",
      cues: ["artifacts in glass display cases", "\"MUSEUM\" signboard", "guide figure with a stick"],
      svg: `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="450" viewBox="0 0 800 450" role="img" aria-label="A museum with artifacts inside glass display cases, a MUSEUM signboard and a guide holding a pointer stick">
  <rect width="800" height="450" fill="#efe4cf"/>
  <rect y="330" width="800" height="120" fill="#cbb79a"/>
  <rect y="322" width="800" height="12" fill="#b09a7a"/>
  <rect x="270" y="34" width="260" height="64" rx="8" fill="#6b4a8f" stroke="#4a3266" stroke-width="4"/>
  <text x="400" y="78" font-family="Arial, Helvetica, sans-serif" font-size="32" font-weight="bold" fill="#ffffff" text-anchor="middle" letter-spacing="3">MUSEUM</text>
  <rect x="150" y="288" width="150" height="46" fill="#8a5a2f" stroke="#5a3f1f" stroke-width="4"/>
  <rect x="158" y="178" width="134" height="112" fill="#cfe8f5" fill-opacity="0.55" stroke="#5f95b0" stroke-width="4"/>
  <ellipse cx="225" cy="248" rx="30" ry="38" fill="#c98a3a" stroke="#8a5a1f" stroke-width="3"/>
  <rect x="212" y="196" width="26" height="20" fill="#c98a3a" stroke="#8a5a1f" stroke-width="3"/>
  <rect x="204" y="186" width="42" height="12" rx="4" fill="#8a5a1f"/>
  <path d="M196 214 q-16 6 0 16 M254 214 q16 6 0 16" fill="none" stroke="#8a5a1f" stroke-width="4"/>
  <path d="M196 240 h58 M200 258 h50" stroke="#8a5a1f" stroke-width="4"/>
  <rect x="360" y="288" width="150" height="46" fill="#8a5a2f" stroke="#5a3f1f" stroke-width="4"/>
  <rect x="368" y="178" width="134" height="112" fill="#cfe8f5" fill-opacity="0.55" stroke="#5f95b0" stroke-width="4"/>
  <rect x="418" y="270" width="46" height="16" fill="#8a7a5a" stroke="#5a4a34" stroke-width="3"/>
  <path d="M424 270 L432 206 h20 L458 270 Z" fill="#b8b0a0" stroke="#6a6258" stroke-width="3"/>
  <circle cx="442" cy="196" r="13" fill="#cfc7b8" stroke="#6a6258" stroke-width="3"/>
  <path d="M426 226 L416 248 M458 226 L468 248" stroke="#6a6258" stroke-width="4"/>
  <rect x="640" y="222" width="18" height="16" rx="4" fill="#f2c94c" stroke="#b8860b" stroke-width="3"/>
  <circle cx="694" cy="240" r="20" fill="#e8b98a" stroke="#b07a4a" stroke-width="4"/>
  <rect x="672" y="214" width="44" height="14" rx="6" fill="#2f6f8f" stroke="#1f4f66" stroke-width="3"/>
  <path d="M660 300 Q694 282 728 300 L736 400 L652 400 Z" fill="#2f6f8f" stroke="#1f4f66" stroke-width="4"/>
  <rect x="678" y="312" width="26" height="22" rx="3" fill="#f2c94c" stroke="#b8860b" stroke-width="3"/>
  <path d="M660 312 L586 288" stroke="#6b4a2f" stroke-width="7"/>
  <rect x="656" y="400" width="18" height="30" fill="#1f3f54"/>
  <rect x="688" y="400" width="18" height="30" fill="#1f3f54"/>
</svg>`
    },
    {
      id: "cinema-hall",
      name: "Cinema Hall",
      cues: ["big screen with film strip border", "popcorn bucket", "ticket counter"],
      svg: `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="450" viewBox="0 0 800 450" role="img" aria-label="A cinema hall with a big screen bordered like a film strip, a popcorn bucket and a ticket counter">
  <rect width="800" height="450" fill="#2b2b3a"/>
  <rect y="350" width="800" height="100" fill="#1c1c28"/>
  <rect y="342" width="800" height="12" fill="#3a3a4e"/>
  <rect x="270" y="22" width="160" height="40" rx="8" fill="#e2574c" stroke="#a53a32" stroke-width="4"/>
  <text x="350" y="50" font-family="Arial, Helvetica, sans-serif" font-size="24" font-weight="bold" fill="#ffffff" text-anchor="middle" letter-spacing="3">CINEMA</text>
  <rect x="150" y="70" width="400" height="250" fill="#111111" stroke="#000000" stroke-width="4"/>
  <rect x="178" y="98" width="344" height="194" fill="#bfe3f5" stroke="#0a0a0a" stroke-width="4"/>
  <circle cx="252" cy="150" r="26" fill="#ffd23f" stroke="#e0a100" stroke-width="3"/>
  <path d="M178 292 L250 208 L322 292 Z" fill="#4f9c5c" stroke="#35702f" stroke-width="3"/>
  <path d="M300 292 L382 188 L464 292 Z" fill="#3f8fd0" stroke="#2c6699" stroke-width="3"/>
  <rect x="178" y="266" width="344" height="26" fill="#e8c07a" stroke="#b8860b" stroke-width="3"/>
  <g fill="#f2f2f2">
    <rect x="162" y="78" width="12" height="12"/><rect x="190" y="78" width="12" height="12"/><rect x="218" y="78" width="12" height="12"/><rect x="246" y="78" width="12" height="12"/><rect x="274" y="78" width="12" height="12"/><rect x="302" y="78" width="12" height="12"/><rect x="330" y="78" width="12" height="12"/><rect x="358" y="78" width="12" height="12"/><rect x="386" y="78" width="12" height="12"/><rect x="414" y="78" width="12" height="12"/><rect x="442" y="78" width="12" height="12"/><rect x="470" y="78" width="12" height="12"/><rect x="498" y="78" width="12" height="12"/><rect x="526" y="78" width="12" height="12"/>
    <rect x="162" y="300" width="12" height="12"/><rect x="190" y="300" width="12" height="12"/><rect x="218" y="300" width="12" height="12"/><rect x="246" y="300" width="12" height="12"/><rect x="274" y="300" width="12" height="12"/><rect x="302" y="300" width="12" height="12"/><rect x="330" y="300" width="12" height="12"/><rect x="358" y="300" width="12" height="12"/><rect x="386" y="300" width="12" height="12"/><rect x="414" y="300" width="12" height="12"/><rect x="442" y="300" width="12" height="12"/><rect x="470" y="300" width="12" height="12"/><rect x="498" y="300" width="12" height="12"/><rect x="526" y="300" width="12" height="12"/>
  </g>
  <rect x="600" y="250" width="180" height="110" fill="#7a5a8f" stroke="#4a3266" stroke-width="5"/>
  <rect x="616" y="214" width="148" height="42" rx="6" fill="#e0a72e" stroke="#a9770b" stroke-width="4"/>
  <text x="690" y="244" font-family="Arial, Helvetica, sans-serif" font-size="22" font-weight="bold" fill="#3a2a00" text-anchor="middle" letter-spacing="2">TICKETS</text>
  <rect x="620" y="276" width="140" height="70" fill="#cfe8f5" stroke="#4a3266" stroke-width="4"/>
  <path d="M120 356 L164 356 L154 442 L130 442 Z" fill="#e2574c" stroke="#a53a32" stroke-width="4"/>
  <path d="M134 356 L136 442 M148 356 L146 442" stroke="#ffffff" stroke-width="6"/>
  <g fill="#f2d98a" stroke="#c9a94a" stroke-width="2">
    <circle cx="126" cy="352" r="9"/><circle cx="142" cy="344" r="9"/><circle cx="158" cy="352" r="9"/><circle cx="134" cy="338" r="9"/><circle cx="150" cy="336" r="9"/>
  </g>
</svg>`
    },
    {
      id: "stadium",
      name: "Stadium",
      cues: ["cricket pitch in center", "tiered stands with crowd", "large scoreboard"],
      svg: `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="450" viewBox="0 0 800 450" role="img" aria-label="A cricket stadium with a pitch in the centre, tiered stands filled with a crowd and a large scoreboard">
  <rect width="800" height="450" fill="#bfe3f5"/>
  <rect x="58" y="86" width="54" height="40" rx="4" fill="#f2f2f2" stroke="#5a5a66" stroke-width="3"/>
  <rect x="76" y="126" width="10" height="150" fill="#8a8a96" stroke="#5a5a66" stroke-width="3"/>
  <rect x="688" y="86" width="54" height="40" rx="4" fill="#f2f2f2" stroke="#5a5a66" stroke-width="3"/>
  <rect x="714" y="126" width="10" height="150" fill="#8a8a96" stroke="#5a5a66" stroke-width="3"/>
  <path d="M30 214 L770 214 L742 90 L58 90 Z" fill="#d8d8e0" stroke="#9a9aa6" stroke-width="4"/>
  <g stroke="#b8b8c4" stroke-width="3"><path d="M36 152 L764 152 M48 120 L752 120"/></g>
  <g r="7">
    <circle cx="80" cy="110" r="7" fill="#e2574c"/><circle cx="138" cy="110" r="7" fill="#3f8fd0"/><circle cx="196" cy="110" r="7" fill="#f2c94c"/><circle cx="254" cy="110" r="7" fill="#4f9c5c"/><circle cx="312" cy="110" r="7" fill="#e2574c"/>
    <circle cx="370" cy="110" r="7" fill="#7a5aa8"/><circle cx="428" cy="110" r="7" fill="#3f8fd0"/><circle cx="486" cy="110" r="7" fill="#f2c94c"/><circle cx="544" cy="110" r="7" fill="#4f9c5c"/><circle cx="602" cy="110" r="7" fill="#e2574c"/>
    <circle cx="660" cy="110" r="7" fill="#3f8fd0"/><circle cx="718" cy="110" r="7" fill="#f2c94c"/>
    <circle cx="80" cy="142" r="7" fill="#4f9c5c"/><circle cx="138" cy="142" r="7" fill="#f2c94c"/><circle cx="196" cy="142" r="7" fill="#e2574c"/><circle cx="254" cy="142" r="7" fill="#7a5aa8"/><circle cx="312" cy="142" r="7" fill="#3f8fd0"/>
    <circle cx="370" cy="142" r="7" fill="#4f9c5c"/><circle cx="428" cy="142" r="7" fill="#e2574c"/><circle cx="486" cy="142" r="7" fill="#3f8fd0"/><circle cx="544" cy="142" r="7" fill="#f2c94c"/><circle cx="602" cy="142" r="7" fill="#7a5aa8"/>
    <circle cx="660" cy="142" r="7" fill="#e2574c"/><circle cx="718" cy="142" r="7" fill="#4f9c5c"/>
    <circle cx="80" cy="176" r="7" fill="#f2c94c"/><circle cx="138" cy="176" r="7" fill="#e2574c"/><circle cx="196" cy="176" r="7" fill="#3f8fd0"/><circle cx="254" cy="176" r="7" fill="#4f9c5c"/><circle cx="312" cy="176" r="7" fill="#7a5aa8"/>
    <circle cx="370" cy="176" r="7" fill="#f2c94c"/><circle cx="428" cy="176" r="7" fill="#4f9c5c"/><circle cx="486" cy="176" r="7" fill="#e2574c"/><circle cx="544" cy="176" r="7" fill="#3f8fd0"/><circle cx="602" cy="176" r="7" fill="#f2c94c"/>
    <circle cx="660" cy="176" r="7" fill="#4f9c5c"/><circle cx="718" cy="176" r="7" fill="#e2574c"/>
  </g>
  <rect y="214" width="800" height="236" fill="#5aa85a"/>
  <rect y="214" width="800" height="8" fill="#3f8f3f"/>
  <rect x="340" y="240" width="120" height="186" fill="#d8c48a" stroke="#b09a5a" stroke-width="4"/>
  <path d="M348 258 h104 M348 408 h104" stroke="#ffffff" stroke-width="4"/>
  <g stroke="#6b4a2f" stroke-width="4"><path d="M390 240 v20 M400 240 v20 M410 240 v20 M390 406 v20 M400 406 v20 M410 406 v20"/></g>
  <g stroke="#c98a3a" stroke-width="3"><path d="M388 240 h24 M388 426 h24"/></g>
  <rect x="310" y="16" width="180" height="78" rx="8" fill="#1c2440" stroke="#000000" stroke-width="4"/>
  <text x="400" y="56" font-family="Arial, Helvetica, sans-serif" font-size="30" font-weight="bold" fill="#f2c94c" text-anchor="middle">120/3</text>
  <text x="400" y="82" font-family="Arial, Helvetica, sans-serif" font-size="18" font-weight="bold" fill="#ffffff" text-anchor="middle" letter-spacing="1">OVERS 18.2</text>
</svg>`
    }
  ];

  root.PLACES = PLACES;
})(typeof window !== 'undefined' ? window : this);
