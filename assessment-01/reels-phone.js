/* Reels section: three reels (three scenes each + campaign end card), each on an Instagram Reels screen.
   Reuses the iPhone 17 Pro frame from phone-mockups.css; the Reels UI itself is dark, so it has its own styles. */
(()=>{'use strict';
const ACCOUNT='moveasyouare.concept',V='../assets/video/social/';
const ic=(d,fill)=>`<svg viewBox="0 0 24 24" aria-hidden="true" ${fill?'fill="currentColor"':'fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"'}>${d}</svg>`;
const I={
 camera:ic('<path d="M4 8.5A2.5 2.5 0 0 1 6.5 6h1.7l1.3-2h5l1.3 2h1.7A2.5 2.5 0 0 1 20 8.5v9a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 4 17.5z"/><circle cx="12" cy="12.8" r="3.6"/>'),
 down:ic('<path d="m7 10 5 5 5-5"/>'),
 heart:ic('<path d="M12 20.3S3.5 15.4 3.5 9.3A4.6 4.6 0 0 1 12 6.8a4.6 4.6 0 0 1 8.5 2.5c0 6.1-8.5 11-8.5 11z"/>'),
 comment:ic('<path d="M20.4 15.9A9 9 0 1 0 17 19.5l3.9 1.1z"/>'),
 send:ic('<path d="M21 3 10.2 13.8M21 3l-6.4 18-4.4-7.2L3 9.4z"/>'),
 more:ic('<circle cx="5" cy="12" r="1.5"/><circle cx="12" cy="12" r="1.5"/><circle cx="19" cy="12" r="1.5"/>',true),
 note:ic('<path d="M9 18V5l11-2v13"/><circle cx="6.5" cy="18" r="2.5"/><circle cx="17.5" cy="16" r="2.5"/>'),
 home:ic('<path d="M3.5 10.2 12 3.3l8.5 6.9V20a.9.9 0 0 1-.9.9h-5.1v-6.4h-5v6.4H4.4a.9.9 0 0 1-.9-.9z"/>'),
 search:ic('<circle cx="10.8" cy="10.8" r="6.8"/><path d="m16 16 4.5 4.5"/>'),
 reels:ic('<rect x="3" y="3" width="18" height="18" rx="5"/><path d="M3 8.5h18M8.5 3l2.5 5.5M14 3l2.5 5.5"/><path d="M10.2 12v5l4.3-2.5z" fill="currentColor"/>')
};
const avatar=`<span class="rp-avatar"><i></i></span>`;
const REELS=[
 {id:'01',label:'Start, Rest, Return 장면',caption:'지금의 나로, 나의 속도로. 시작하고, 쉬고, 다시',counts:['1.2만','248','512']},
 {id:'02',label:'몸을 깨우는 비틀기, 스트레칭, 호흡 장면',caption:'준비는 가볍게. 오늘 가능한 만큼만 움직여요',counts:['9,804','173','366']},
 {id:'03',label:'다시 일어서고, 비틀기를 풀고, 돌아보는 장면',caption:'멈춘 시간도 운동의 일부. 다시, 움직일 준비',counts:['1.5만','312','704']}];
const screen=r=>`<video class="rp-video" src="${V}reel-${r.id}.mp4" poster="${V}reel-${r.id}-poster.webp" muted loop playsinline preload="metadata" disablepictureinpicture></video><div class="rp-ui" aria-hidden="true">
<img class="ip-status rp-status" src="../assets/device/ios26-status-bar-dark.svg" alt=""><header class="rp-top"><b>릴스</b>${I.down}<span>${I.camera}</span></header>
<div class="rp-actions"><span>${I.heart}<small>${r.counts[0]}</small></span><span>${I.comment}<small>${r.counts[1]}</small></span><span>${I.send}<small>${r.counts[2]}</small></span><span>${I.more}</span><span class="rp-disc">${avatar}</span></div>
<div class="rp-meta"><div class="rp-author">${avatar}<b>${ACCOUNT}</b><em>팔로우</em></div><p>${r.caption} <span>… 더 보기</span></p><div class="rp-audio">${I.note}${ACCOUNT} · 원본 오디오</div></div>
<nav class="rp-tabbar"><span>${I.home}</span><span>${I.search}</span><span class="on">${I.reels}</span><span>${I.send}</span>${avatar}</nav><span class="ip-home rp-home"></span></div>`;
const phone=r=>`<figure class="ip-figure"><div class="iphone" role="img" aria-label="${r.label}과 캠페인 로고로 이어지는 릴스 화면, 아이폰 17 Pro"><div class="ip-screen"><div class="ip-content rp-content">${screen(r)}</div></div><img class="ip-bezel" src="../assets/device/iphone-17-pro-silver.png" alt=""></div></figure>`;
const section=document.createElement('section');section.id='reels';section.className='section';
section.innerHTML=`<header class="section-head"><h2 class="eyebrow">Reels</h2><div><p>시작하고 쉬고 다시 움직이는 순간에 몸을 깨우는 장면과 다시 일어서는 장면을 더해 릴스 세 편을 만들었습니다. 장면마다 캠페인 문장을 한 줄씩 띄우고, 마지막은 캠페인 로고로 마무리했습니다.</p></div></header><div class="reel-stage">${REELS.map(phone).join('')}</div>`;
(document.querySelector('#videography')||document.querySelector('#stories')||document.querySelector('#feed')).after(section);
const videos=[...section.querySelectorAll('video')];
if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;
const seen=new Set(),play=v=>{if(seen.has(v)&&!document.hidden)v.play().catch(()=>{});else v.pause();};
const io=new IntersectionObserver(es=>{es.forEach(e=>{if(e.isIntersecting)seen.add(e.target);else seen.delete(e.target);play(e.target);});},{threshold:.25});
videos.forEach(v=>io.observe(v));document.addEventListener('visibilitychange',()=>videos.forEach(play));
})();
