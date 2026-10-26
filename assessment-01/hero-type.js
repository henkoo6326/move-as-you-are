/* Hero typography options over the full-bleed campaign photo (runner facing left, open sky on the right).
   Main page: F is the hero; ?hero=a…e previews another option and ?hero=off shows the original hero.
   hero-type-options.html renders all six side by side from the same markup.
   depth:true puts a cut-out of the runner (person mask from macOS Vision, assets/img/hero/11-person-mask.png) above the type,
   so the type passes behind her. */
(()=>{
const IMG='../assets/img/final-18/11.png',ALT='파란 하늘 아래 난간 옆을 달리는 인물';
const V={
 a:{name:'A / 하늘 여백',note:'인물이 향하는 반대편, 비어 있는 하늘에 두 줄 문장을 크게 둡니다. 사진을 먼저 보고 문장으로 넘어가는 기본형입니다.',
  html:`<div class="ht-copy"><h1>Move as<br>you are</h1><p>지금의 나로, 나의 속도로</p></div>`},
 b:{name:'B / 화면 폭 한 줄',note:'문장을 화면 폭에 맞춰 한 줄로 깔아, 첫 화면에서 캠페인 이름이 가장 먼저 읽히게 합니다. 인물의 머리 위를 가로지르는 잡지 표지형입니다.',
  html:`<h1 class="ht-fit" data-fit=".9">Move as you are</h1><p class="ht-ko">지금의 나로, 나의 속도로</p>`},
 c:{name:'C / 문턱선',depth:true,note:'캠페인 장치인 적색 문턱선을 화면 높이 38%에 긋고, 달리는 인물이 그 선 앞을 지나가게 했습니다. 선 위에 영문 초대, 선 아래에 국문 문장과 크레딧을 영문의 30% 크기로 둡니다.',
  html:`<div class="ht-line" aria-hidden="true"></div><h1>Move as you are</h1><div class="ht-below"><p>지금의 나로, 나의 속도로</p><p>경험디자인B · 직무수행능력평가 1</p></div>`},
 d:{name:'D / 동사 하나',depth:true,note:'Come as you are에서 바꾼 단어는 동사 하나뿐입니다. 그 동사 Move만 크게 키워 인물 뒤에 두고, 나머지는 작게 붙였습니다.',
  html:`<h1><span class="ht-verb">Move</span><span class="ht-rest">as you are</span></h1><p class="ht-ko">지금의 나로, 나의 속도로</p>`},
 e:{name:'E / 네 모서리',note:'문장을 네 모서리에 작게 나눠 두고 화면 가운데는 사진에 내줍니다. 크기 대신 위치로 질서를 만듭니다.',
  html:`<h1 class="ht-tl">Move as you are</h1><p class="ht-tr">지금의 나로, 나의 속도로</p><p class="ht-bl">As I am now, at my own pace</p><p class="ht-br">경험디자인B · 고해은</p>`},
 f:{name:'F / 캠페인 로고',note:'포스터와 같은 캠페인 로고를 화면 가운데 높이에 두고, 로고의 네 변에서 가는 구성선을 화면 끝까지 그었습니다. 태그라인과 크레딧은 같은 세로선에 왼쪽 정렬합니다.',
  html:`<div class="ht-grid" aria-hidden="true"><i class="gv"></i><i class="gv gv2"></i><i class="gh"></i><i class="gh gh2"></i></div><h1 class="ht-mark" aria-label="Move as you are"><i class="m1"></i><i class="m2"></i></h1><p class="ht-en">As I am now,<br>at my own pace</p>`}
};
// B: scale the one-line title so it spans the given share of the hero width
const fit=root=>root.querySelectorAll('[data-fit]').forEach(el=>{const w=el.closest('.ht').clientWidth*+el.dataset.fit;el.style.fontSize='100px';el.style.fontSize=(100*w/el.scrollWidth)+'px';});
const watch=hero=>{new ResizeObserver(()=>fit(hero)).observe(hero);document.fonts?.ready.then(()=>fit(hero));};
window.HERO_TYPES=V;
const cut=`<img class="ht-cut" src="${IMG}" alt="" aria-hidden="true">`;
window.heroTypeSection=(key,cls='')=>`<section class="ht ht-${key} ${cls}"><img class="ht-img" src="${IMG}" alt="${ALT}">${V[key].html}${V[key].depth?cut:''}</section>`;
window.heroTypeWatch=watch;
// Main page preview
const key=new URLSearchParams(location.search).get('hero')||'f',hero=document.querySelector('#top.hero');
if(hero&&V[key]){hero.classList.add('ht','ht-'+key);hero.querySelector('.hero-copy')?.remove();hero.querySelector('.hero-img')?.classList.add('ht-img');hero.insertAdjacentHTML('beforeend',V[key].html+(V[key].depth?cut:''));watch(hero);}
})();
