/* BIS board: Videography shows the Reels phone (cloned from #reels, so the UI is identical) held on the frame at 0.625 s
   ("지금, 몸을 깨우는 순간"); Color becomes five stacked bands with the name inside. Runs after reels-phone.js. */
(()=>{'use strict';
const board=document.querySelector('#identity .approved-bis');if(!board)return;
const film=board.querySelector('.film'),phone=document.querySelector('#reels .iphone');
if(film&&phone){
  const p=phone.cloneNode(true);p.setAttribute('aria-label','릴스 화면, 지금, 몸을 깨우는 순간 장면');
  film.querySelector('img')?.remove();film.append(p);
  // reel-01.mp4의 0.625 s 프레임을 그대로 뽑은 정지 화면(1080×1920). 영상을 불러오지 않아 늘 같은 장면이 보인다
  const v=p.querySelector('video');v.removeAttribute('src');v.removeAttribute('loop');v.preload='none';v.poster='../assets/img/bis/reel-01-0625.webp';
}
const chips=board.querySelector('.palette .chips');
if(chips){
  const sw=(window.BIS_SOURCE||window.SH).color.swatches,dark=new Set(['#140F0F','#C8102E']);
  chips.className='bands';
  chips.innerHTML=sw.map(x=>`<div style="background:${x.hex};color:${dark.has(x.hex)?'#FDFDF8':'#140F0F'}"><b>${x.name}</b><span>${x.hex}</span></div>`).join('');
}
})();
