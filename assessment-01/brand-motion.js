(()=>{'use strict';
const root='../assets/video/brand-motion/';
const films=[{id:'curve',title:'곡선에서 심볼로'},{id:'wordmark',title:'나의 속도로'}];
const section=document.createElement('section');section.id='campaign-title';section.className='section';
section.innerHTML=`<div class="bm-wrap"><header class="bm-heading"><div><h2>Campaign Title</h2><h3>캠페인 로고</h3></div></header><div class="bm-films">${films.map(f=>`<figure><video disablepictureinpicture disableremoteplayback autoplay muted playsinline loop preload="metadata" aria-label="${f.title}" poster="${root+f.id}.png" src="${root+f.id}.mp4"></video></figure>`).join('')}</div><div class="bm-description"><p>캠페인 로고의 열린 곡선을 움직임으로 확장했습니다. 고정된&nbsp;자세보다 움직이는 과정에 주목하는&nbsp;캠페인의 태도를 심볼이 그려지는 순간과 워드마크의&nbsp;흐름에 담았습니다.</p><p>두 영상은 같은 형태를 서로 다른 흐름으로 보여줍니다. ‘지금의&nbsp;나로,&nbsp;나의&nbsp;속도로’라는 메시지를 문장으로 읽는 데서 나아가 로고가 움직이는 모습에서도 느낄&nbsp;수 있게 했습니다.</p></div></div>`;
document.querySelector('#identity').after(section);
const videos=[...section.querySelectorAll('video')],visible=new Set();
function play(video){video.muted=true;video.loop=true;video.play().catch(()=>{});}
const observer=new IntersectionObserver(entries=>{for(const e of entries){if(e.isIntersecting){visible.add(e.target);if(!document.hidden)play(e.target);}else{visible.delete(e.target);e.target.pause();}}},{threshold:.2});videos.forEach(v=>observer.observe(v));
document.addEventListener('visibilitychange',()=>{videos.forEach(v=>{if(document.hidden)v.pause();else if(visible.has(v))play(v);});});
})();
