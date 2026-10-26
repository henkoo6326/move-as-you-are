/* Closing section: "Today's pace" plan carousel.
   Card geometry measured from the reference video (3000×2000, six cards): card 1298×1317, gap 54, 2.15 cards in view.
   Motion keeps the reference's hold-and-step: each move is the measured 1.05s on cubic-bezier(.6,0,.05,1),
   but the hold is shortened from the reference's 0.95s to HOLD so the cards rarely sit still.
   It loops without end; only the pause button or leaving the screen stops it, after the move in progress finishes.
   Copy is the campaign's own "Today's pace" poster: Stretch 10분 · Breathe 5분 · Walk 20분 · Rest 언제든 · Again 다음 주 화요일.
   The red caption rule is the campaign's threshold line: English invitation above, Korean information below.
   Under the line: the campaign icon and the Korean action on the left (매트 · 쉼 · 이동 · 정지 · 다시 · 시간),
   its time on the right, set large and light to balance it. */
(()=>{
const A='../assets/',L=A+'logo/campaign-soft-motion/',HOLD=.3,MOVE=1.05;
const CARDS=[
 {kind:'type',tone:'white',caption:'몸 풀기',icon:'mat',time:'10분',art:`<div class="pc-lockup"><img src="${L}move-as.svg" alt=""><img src="${L}you-are.svg" alt=""></div><p class="pc-word pc-corner">Stretch</p>`},
 {kind:'photo',caption:'숨 고르기',icon:'rest',time:'5분',src:A+'img/pace/02.webp',pos:'50% 12%',label:'Breathe'},
 {kind:'type',tone:'lime',caption:'가볍게 걷기',icon:'arrow',time:'20분',art:`<p class="pc-word pc-center">Walk</p><i class="pc-logo"></i>`},
 {kind:'photo',caption:'쉬어 가기',icon:'pause',time:'언제든',src:A+'img/pace/08.webp',pos:'50% 55%',label:'Rest'},
 {kind:'type',tone:'blue',caption:'다시 오기',icon:'return',time:'다음 주 화요일',art:`<p class="pc-repeat">${'Again<br>'.repeat(5)}</p>`},
 {kind:'photo',caption:'지금의 나로, 나의 속도로',icon:'time',time:'As I am now',src:A+'img/pace/11.webp',pos:'40% 50%',label:'Move as you are'}];
const card=(c,hidden)=>`<li class="pc-card pc-is-${c.kind}${c.tone?' pc-'+c.tone:''}"${hidden?' aria-hidden="true"':''}>${c.kind==='photo'?`<img class="pc-photo" src="${c.src}" alt="" loading="lazy" style="object-position:${c.pos}"><div class="pc-tag"><span>${c.label}</span><i class="pc-logo"></i></div>`:`<div class="pc-art">${c.art}</div>`}<div class="pc-foot"><span class="pc-cap"><i class="pc-ic" style="--ic:url(${A}icons/${c.icon}.svg)"></i>${c.caption}</span><span class="pc-time">${c.time}</span></div></li>`;
const n=CARDS.length;
const el=document.createElement('section');el.className='pace-section';el.id='pace';el.setAttribute('aria-label',"Today's pace, 오늘 가능한 만큼");
// Three copies: the middle one is read by assistive tech, the outer ones keep the loop and the left sliver seamless
el.innerHTML=`<header class="pc-head"><div><h2>Today's pace</h2><p>오늘 가능한 만큼</p></div><button class="pc-dots" type="button" aria-label="자동 흐름 멈춤" aria-pressed="false">${'<i></i>'.repeat(n)}</button></header><div class="pc-window"><ul class="pc-track">${[0,1,2].map(k=>CARDS.map(c=>card(c,k!==1)).join('')).join('')}</ul></div>`;
const mount=()=>{(document.querySelector('main')||document.body).append(el);start();};
function start(){
 const win=el.querySelector('.pc-window'),track=el.querySelector('.pc-track'),dots=[...el.querySelectorAll('.pc-dots i')],btn=el.querySelector('.pc-dots');
 const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
 // step = cards passed (0…n-1), t = time into the current hold+move; drawn from the middle copy so the left sliver always has a card
 let step=0,t=0,pos=0,pitch=0,last=0,paused=false,onscreen=false,dot=-1;
 // cubic-bezier(.6,0,.05,1) solved for y at x
 const ease=x=>{let lo=0,hi=1,u=x;for(let k=0;k<20;k++){u=(lo+hi)/2;const v=3*(1-u)*(1-u)*u*.6+3*(1-u)*u*u*.05+u*u*u;if(v<x)lo=u;else hi=u;}return 3*(1-u)*u*u+u*u*u;};
 const draw=()=>{track.style.transform=`translateX(${-(n+pos)*pitch}px)`;const d=Math.round(pos)%n;if(d!==dot){dot=d;dots.forEach((x,k)=>x.classList.toggle('on',k===d));}};
 const measure=()=>{const c=track.children[0];pitch=c.getBoundingClientRect().width+parseFloat(getComputedStyle(track).columnGap||0);draw();};
 const running=()=>!reduced&&!paused&&onscreen&&!document.hidden;
 const tick=now=>{const dt=last?Math.min((now-last)/1000,.05):0;last=now;
  const moving=t>HOLD;
  if(running()||moving){t+=dt;if(t>=HOLD+MOVE){t=running()?t-HOLD-MOVE:0;step=(step+1)%n;}
   pos=(step+(t>HOLD?ease((t-HOLD)/MOVE):0))%n;draw();}
  requestAnimationFrame(tick);};
 new ResizeObserver(measure).observe(win);measure();
 new IntersectionObserver(es=>{onscreen=es[0].isIntersecting;},{threshold:.2}).observe(win);
 btn.addEventListener('click',()=>{paused=!paused;btn.setAttribute('aria-pressed',String(paused));btn.setAttribute('aria-label',paused?'자동 흐름 재생':'자동 흐름 멈춤');btn.classList.toggle('paused',paused);});
 if(reduced)btn.hidden=true;else requestAnimationFrame(tick);
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',mount);else mount();
})();
