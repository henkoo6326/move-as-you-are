/* Typography and Color sections, laid out like Campaign Title right above them:
   English eyebrow + Korean title (.bm-heading), two 24px-gap columns in a 1320px frame, description under the right column (.bm-description).
   Runs after page.js. The color application figures are moved, not rebuilt, so their viewer (zoom) handlers keep working. */
(()=>{
// Description: one sentence per line, each balanced so no line ends on a lone word
const S=window.SH,heading=(en,ko)=>`<header class="bm-heading"><div><h2>${en}</h2><h3>${ko}</h3></div></header>`;
const type=document.querySelector('#typography');
if(type){
 type.classList.add('tc-section');
 type.innerHTML=`<div class="bm-wrap">${heading('Typography','캠페인 서체')}<div class="tc-type">
  <div class="tc-en"><div class="tc-label"><span>Archivo Light</span><span>영문 타이틀</span></div><p class="tc-en-title">Move as<br>you are</p><p class="tc-glyphs">Aa Bb Cc Dd Ee Ff Gg Hh<br>0123456789</p></div>
  <div class="tc-ko"><div class="tc-label"><span>Pretendard</span><span>국문</span></div><div class="tc-scale"><p class="tc-ko-title">지금의 나로,<br>나의 속도로</p><p class="tc-ko-body">매트를 펴고, 숨을 고르고,<br>다시 움직이는 순간</p><p class="tc-ko-note">함께 움직이는 시간</p></div><p class="tc-glyphs">가나다라마바사 아자차카타파하<br>0123456789</p></div>
 </div><div class="bm-description"><p><span class="tc-s">영문 타이틀에는 Archivo&nbsp;Light, 국문에는 Pretendard를 사용했습니다.</span> <span class="tc-s">큰 캠페인 문장과 작은 안내 정보의 크기를 구분했습니다.</span></p></div></div>`;
}
const color=document.querySelector('#color');
if(color&&S?.color?.swatches){
 const figs=[...color.querySelectorAll('.color-app>figure')];
 // Band widths show the share each color takes: two base colors wide, the accents narrow, red narrowest (a priority signal only)
 const share={'#FDFDF8':3,'#140F0F':3,'#C0DDFF':2,'#F5FF8E':2,'#C8102E':1},dark=new Set(['#140F0F','#C8102E']);
 const band=S.color.swatches.map(x=>{const hex=x.hex.toUpperCase();return `<div class="tc-chip${dark.has(hex)?' on-dark':''}" style="--c:${x.hex};--w:${share[hex]||2}"><span>${x.name}</span><small>${hex}</small></div>`;}).join('');
 color.classList.add('tc-section');
 color.innerHTML=`<div class="bm-wrap">${heading('Color','캠페인 컬러')}<div class="tc-band" style="grid-template-columns:${S.color.swatches.map(x=>(share[x.hex.toUpperCase()]||2)+'fr').join(' ')}">${band}</div><div class="tc-app"></div><div class="bm-description"><p><span class="tc-s">오프화이트와 오프블랙을 바탕으로 라임·블루·시그니처&nbsp;레드를 강조와 정보에 사용했습니다.</span> <span class="tc-s">사진의 자연광과 피부색은 살리고 그래픽의 기존 컬러 체계를 유지했습니다.</span></p></div></div>`;
 color.querySelector('.tc-app').append(...figs);
}
})();
