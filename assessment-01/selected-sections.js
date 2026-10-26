(()=>{
const image=(src,alt)=>`<img src="${src}" alt="${alt}" loading="lazy">`;
const assets='../assets/';const photo=assets+'img/final-18/';
const brand=document.querySelector('#planning');brand.className='section selected-brand';
brand.innerHTML=`<header class="sb-head"><div><h2>Brand</h2><h3>함께 움직이는 경험을 만드는 브랜드</h3></div><p>움직임을 개인의 운동에서 함께하는 경험으로 넓힌 점에 주목했습니다.<br>미션의 세 단어 Sweat,&nbsp;Grow,&nbsp;Connect에서 기록보다 과정을 읽고,<br>이 방향을 운동을 시작하고 이어가는 순간으로 연결했습니다.</p></header><div class="sb-weave"><figure class="sb-group">${image(photo+'14.png','하늘을 배경으로 함께 서 있는 두 인물')}</figure><div class="sb-words">Sweat<br>Grow<br>Connect<span>움직임 · 성장 · 연결</span></div><figure class="sb-detail">${image(photo+'09.png','햇빛 아래 몸을 옆으로 기울이는 인물')}</figure><div class="sb-logo">${image(assets+'logo/lululemon.svg','lululemon 공식 로고')}<p>인물의 움직임을 가까이 보여주는 사진</p></div></div>`;
const opening=document.querySelector('.planning-opening');opening.className='planning-opening selected-opening';
opening.innerHTML=`<figure>${image(photo+'02.png','몸을 비틀어 움직이는 인물')}</figure><header><h2>Planning</h2><h3>다시 시작하는 운동<br>각자의 속도로</h3><p>운동을 다시 시작하고 싶지만 실력과 준비 상태를 먼저 걱정하는<br>사람을 대상으로 설정했습니다. 시작과 쉼을 함께 보여주며,<br>각자의 속도로 참여하는 경험을 제안합니다.</p></header><figure>${image(photo+'08.png','앉아서 숨을 고르는 인물')}</figure>`;
const checklist=document.querySelector('.check-document');checklist.className='check-document selected-checklist';checklist.id='campaign-checklist';
const checklistItems=[['브랜드 인지도 제고','함께 움직이는 장면과 공식 로고를 연결했습니다.'],['일관된 브랜드 메시지','같은 캠페인 문장을 포스터와 피드에 적용했습니다.'],['감정적 연결','시작과 쉼, 다시 움직이는 장면을 담았습니다.'],['시장 차별화','함께하는 공간에서 각자의 속도를 존중하는 경험을 제안합니다.'],['장기적 매출 효과','할인·증정 대신 브랜드의 태도를 전하는 메시지를 선택했습니다.']];
checklist.innerHTML=`<header class="sc-list-heading"><h3>체크리스트</h3></header><ul class="sc-list">${checklistItems.map(([title,body])=>`<li><span class="sc-check" aria-label="기획 반영">✓</span><h4>${title}</h4><p>${body}</p></li>`).join('')}</ul>`;
const bis=document.querySelector('#planning-bis');
bis.classList.add('selected-language-bis');
bis.innerHTML=`<div class="doc-title"><h3>기획 BIS</h3></div><div class="lb-cross"><div class="lb-top"><div class="lb-name"><span>Name</span><p>Move as you are</p></div><div class="lb-essence"><span>Essence</span><p>성취보다 움직임</p></div></div><div class="lb-bottom"><div class="lb-purpose"><div><span>Vision</span><p>각자의 상태와 속도로<br>움직일 수 있는 일상</p></div><div><span>Mission</span><p>참여를 망설이게 하는 조건을 낮추는 경험을 제안합니다.</p></div></div><div class="lb-values"><span>Values</span><div><p>지금의 나로</p><p>나의 속도로</p><p>다시</p></div></div></div></div>`;
})();