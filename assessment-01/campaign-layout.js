/* Posters section re-layout. Runs after page.js and moves its figures (zoom handlers and live mockups keep working):
   heading like Campaign Title · poster mosaic (lead + two stacked, bottoms aligned) with the title position per poster ·
   a ruled sub-head, then where the posters are placed: subway full-bleed, bus shelter + studio stair at one height. */
(()=>{
const sec=document.querySelector('#campaign');if(!sec)return;
const lead=sec.querySelector('figure.poster-lead'),series=[...sec.querySelectorAll('.poster-series>figure')],subway=sec.querySelector('figure.ooh'),pair=[...sec.querySelectorAll('.ooh-pair>figure')];
if(!lead||series.length!==2||!subway||pair.length!==2)return;
// Title position per poster, split from the section description (가운데 · 왼쪽 아래 · 인물 양옆)
const cap=()=>{}; // 사용자 지시(10/26): 이미지 아래 설명 캡션은 넣지 않는다
cap(lead,'01','두 인물 사이, 가운데');cap(series[0],'02','기댄 인물 곁, 왼쪽 아래');cap(series[1],'03','달리는 인물 양옆으로 나눔');
cap(pair[0],'','버스 정류장');cap(pair[1],'','스튜디오 계단');
sec.classList.add('cl-section');
sec.innerHTML=`<div class="cl-wrap"><header class="bm-heading"><div><h2>Posters</h2><h3>같은 문장, 다른 자리</h3></div><p><span class="tc-s">세 장의 가로 포스터에 같은 캠페인 문장을 담았습니다.</span> <span class="tc-s">장면마다 인물이 비워 둔 자리를 따라 타이틀을 옮겼습니다.</span></p></header>
 <div class="cl-posters"><div class="cl-lead"></div><div class="cl-side"></div></div>
 <div class="cl-place"><div class="cl-sub"><h4>Out of home</h4><p>포스터가 놓이는 세 자리</p></div><div class="cl-subway"></div><div class="cl-pair"></div></div></div>`;
sec.querySelector('.cl-lead').append(lead);sec.querySelector('.cl-side').append(...series);
sec.querySelector('.cl-subway').append(subway);sec.querySelector('.cl-pair').append(...pair);
})();
