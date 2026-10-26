(()=>{'use strict';let cleanup=()=>{};
window.mountReels=(config,host)=>{cleanup();document.querySelector('#campaign-reels')?.remove();const items=config?.items||[];if(!items.length)return;
// With config.target, the reels fill an existing section below its own heading instead of adding a new section.
const target=!host&&config.target&&document.querySelector(config.target),windowHtml='<div class="reels-window" aria-label="가로로 흐르는 캠페인 릴스"><div class="reels-track"></div></div>';
const el=document.createElement(target?'div':'section');el.id='campaign-reels';
if(target){el.className='reels-embed';el.innerHTML=windowHtml;target.querySelectorAll(':scope>:not(.section-head)').forEach(n=>n.remove());target.append(el);}
else{el.className='reels-section';el.innerHTML='<header class="reels-heading"><div><h2>Instagram Reels</h2><h3>인스타그램 릴스</h3></div></header>'+windowHtml;if(host)host.append(el);else(document.querySelector('#videography')||document.querySelector('#campaign-title')).after(el);}
const stage=el.querySelector('.reels-window'),track=el.querySelector('.reels-track'),button=el.querySelector('button'),reduced=matchMedia('(prefers-reduced-motion: reduce)');let paused=reduced.matches,onscreen=false,offset=0,cycle=1,pitch=1,last=0,elapsed=0,raf,visible=new Set();
const base=Array.from({length:Math.max(6,items.length)},(_,i)=>items[i%items.length]);
for(let c=0;c<2;c++){const group=document.createElement('div');group.className='reels-group';if(c)group.setAttribute('aria-hidden','true');for(const item of base){const figure=document.createElement('figure');figure.className='reels-card';const v=document.createElement('video');v.src=item.src;if(item.poster)v.poster=item.poster;v.muted=true;v.loop=true;v.playsInline=true;v.preload='metadata';v.setAttribute('aria-label',item.title||'캠페인 릴스');v.disablePictureInPicture=true;figure.append(v);group.append(figure);}track.append(group);}
const videos=[...el.querySelectorAll('video')];function sync(){if(button){button.textContent=paused?'재생':'멈춤';button.setAttribute('aria-pressed',String(paused));}videos.forEach(v=>{if(!paused&&onscreen&&!document.hidden&&visible.has(v))v.play().catch(()=>{});else v.pause();});}
function measure(){const gap=parseFloat(getComputedStyle(track).gap)||0;cycle=track.firstElementChild.getBoundingClientRect().width+gap;pitch=track.querySelector('.reels-card').getBoundingClientRect().width+gap;offset%=cycle;}
const resize=new ResizeObserver(measure);resize.observe(stage);measure();
const outer=new IntersectionObserver(es=>{onscreen=es[0].isIntersecting;sync();},{threshold:.15});outer.observe(stage);
const inner=new IntersectionObserver(es=>{es.forEach(e=>{if(e.isIntersecting)visible.add(e.target);else visible.delete(e.target);});sync();},{root:stage,threshold:.01});videos.forEach(v=>inner.observe(v));
if(button)button.onclick=()=>{paused=!paused;sync();};
// Measured reference: hold, quick advance, long deceleration. Curve is a fitted approximation.
function ease(x){const cx=.15,dx=.20,cy=.60,dy=1;let lo=0,hi=1,u=x;for(let i=0;i<18;i++){u=(lo+hi)/2;const v=3*(1-u)*(1-u)*u*cx+3*(1-u)*u*u*dx+u*u*u;if(v<x)lo=u;else hi=u;}return 3*(1-u)*(1-u)*u*cy+3*(1-u)*u*u*dy+u*u*u;}
function tick(now){const dt=last?Math.min((now-last)/1000,.05):0;last=now;if(!paused&&onscreen&&!document.hidden){elapsed+=dt;const period=config.secondsPerCard||2.25,step=Math.floor(elapsed/period),phase=elapsed%period,progress=ease(Math.max(0,Math.min(1,(phase-period*.222222)/(period*.733333))));const next=((step+progress)*pitch)%cycle;if(next<offset){for(let i=0;i<base.length;i++){const a=videos[i],b=videos[i+base.length];if(Number.isFinite(b.duration))a.currentTime=b.currentTime;}}offset=next;track.style.transform=`translateX(${-offset}px)`;}raf=requestAnimationFrame(tick);}raf=requestAnimationFrame(tick);
const visibility=()=>sync();document.addEventListener('visibilitychange',visibility);sync();cleanup=()=>{cancelAnimationFrame(raf);resize.disconnect();outer.disconnect();inner.disconnect();videos.forEach(v=>v.pause());document.removeEventListener('visibilitychange',visibility);};return el;
};
window.mountReels(window.REELS_CONFIG);
})();
