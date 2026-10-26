/* Photo mockups: campaign artwork laid onto blank screens in real photos (hand-held phone, bus shelter, subway corridor).
   To swap artwork, change `src` in PHOTO_MOCKUPS below — nothing is baked into the photos.
   Each slot's quad is the screen's four corners (TL, TR, BR, BL) in photo pixels, measured by 29_photo_mockups/analyze.py.
   Layers: photo → artwork warped with matrix3d and clipped by the screen mask → photo's own light falloff (multiply). */
(()=>{
const M='../assets/mockup/',F='../assets/img/figma-posters/',R='../assets/img/final-18/';
window.PHOTO_MOCKUPS={
 subway:{photo:'subway-corridor',size:[1456,816],alt:'지하철 통로 벽의 라이트박스 세 개에 세 장의 가로 포스터를 적용한 목업',slots:[
  {quad:[[102.07,203.13],[591.5,260.1],[591.5,529.21],[100.55,590.8]],box:[1500,1000],src:F+'PF01.webp?v=1'},
  {quad:[[787.79,281.28],[973.5,302.01],[973.5,480.07],[786.96,503.93]],box:[1500,1000],src:F+'PF02-960.webp?v=1'},
  {quad:[[1064.5,312.12],[1159.5,322.98],[1159.5,456.66],[1064.5,468.62]],box:[1500,1000],src:F+'PF03-960.webp?v=1'}]},
 bus:{photo:'bus-shelter',size:[960,1200],alt:'저녁 버스정류장 라이트박스에 세로 캠페인 포스터를 적용한 목업',slots:[
  {quad:[[344.5,430.68],[528.69,447.14],[528.2,823.59],[344.5,840.58]],box:[1000,1500],src:R+'P01.webp?v=3'}]},
 hand:{photo:'hand-phone',size:[960,1200],alt:'손에 든 아이폰에 Start 스토리를 띄운 목업',slots:[
  {quad:[[298.47,320.41],[486.71,299.71],[562.09,735.07],[371.83,756.87]],box:[390,844],story:{src:R+'ST01-960.webp?v=3',index:0,total:3}}]}
};
// 8×8 linear solve for the projective map of the box corners onto the quad
function solve(A,b){const n=b.length;for(let i=0;i<n;i++){let p=i;for(let r=i+1;r<n;r++)if(Math.abs(A[r][i])>Math.abs(A[p][i]))p=r;[A[i],A[p]]=[A[p],A[i]];[b[i],b[p]]=[b[p],b[i]];for(let r=i+1;r<n;r++){const f=A[r][i]/A[i][i];for(let c=i;c<n;c++)A[r][c]-=f*A[i][c];b[r]-=f*b[i];}}const x=Array(n).fill(0);for(let i=n-1;i>=0;i--){let s=b[i];for(let c=i+1;c<n;c++)s-=A[i][c]*x[c];x[i]=s/A[i][i];}return x;}
function matrix3d([w,h],quad){
 // push corners 1.5px outward so the warped edge sits under the mask's soft edge, never inside it
 const cx=quad.reduce((s,p)=>s+p[0],0)/4,cy=quad.reduce((s,p)=>s+p[1],0)/4;
 const q=quad.map(([x,y])=>{const d=Math.hypot(x-cx,y-cy);return [x+(x-cx)/d*1.5,y+(y-cy)/d*1.5];});
 const A=[],b=[];[[0,0],[w,0],[w,h],[0,h]].forEach(([x,y],i)=>{const [X,Y]=q[i];A.push([x,y,1,0,0,0,-x*X,-y*X]);b.push(X);A.push([0,0,0,x,y,1,-x*Y,-y*Y]);b.push(Y);});
 const [a,bb,c,d,e,f,g,h2]=solve(A,b);
 return `matrix3d(${[a,d,0,g,bb,e,0,h2,0,0,1,0,c,f,0,1].map(v=>+v.toFixed(10)).join(',')})`;
}
const ic=d=>`<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${d}</svg>`;
// Instagram story on a notch iPhone (390×844pt): status bar, 9:16 story card with progress bars, reply bar, home indicator.
// The account row is left out: the story's own title sits where it would go.
const story=s=>`<div class="pm-story"><img class="pm-sb" src="${M}ios-status-bar-notch-light.svg" alt=""><div class="pm-card"><img src="${s.src}" alt=""><div class="pm-bars">${Array.from({length:s.total},(_,i)=>`<i><b style="width:${i<s.index?100:i===s.index?38:0}%"></b></i>`).join('')}</div></div><div class="pm-reply"><span>메시지 보내기</span>${ic('<path d="M12 20.3S3.5 15.4 3.5 9.3A4.6 4.6 0 0 1 12 6.8a4.6 4.6 0 0 1 8.5 2.5c0 6.1-8.5 11-8.5 11z"/>')}${ic('<path d="M21 3 10.2 13.8M21 3l-6.4 18-4.4-7.2L3 9.4z"/>')}</div><span class="pm-home"></span></div>`;
const slot=s=>`<div class="pm-slot" style="width:${s.box[0]}px;height:${s.box[1]}px;transform:${matrix3d(s.box,s.quad)}">${s.story?story(s.story):`<img src="${s.src}" alt="" loading="lazy">`}</div>`;
window.photoMockup=(key,cls='')=>{const m=PHOTO_MOCKUPS[key],[W,H]=m.size,mask=`url(${M}${m.photo}-mask.png)`;
 return `<figure class="pm ${cls}"><div class="pm-frame" role="img" aria-label="${m.alt}" style="aspect-ratio:${W}/${H}" data-w="${W}"><div class="pm-stage" style="width:${W}px;height:${H}px"><img class="pm-photo" src="${M}${m.photo}.webp" alt="" loading="lazy"><div class="pm-screens" style="-webkit-mask-image:${mask};mask-image:${mask}">${m.slots.map(slot).join('')}</div><img class="pm-shade" src="${M}${m.photo}-shade.webp" alt=""></div></div></figure>`;};
// Scale each fixed-size stage to its frame width
const fit=new ResizeObserver(es=>es.forEach(e=>{const f=e.target;f.firstElementChild.style.transform=`scale(${f.clientWidth/f.dataset.w})`;}));
function mount(){
 // Stories: the hand-held phone closes the section, under the story films (reels.js empties the section first)
 const st=document.querySelector('#stories');
 document.querySelectorAll('.pm-frame').forEach(f=>fit.observe(f));
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',mount);else mount();
// Posters section: the subway and bus slots render as live mockups through page.js pic()
const S=window.SH;if(S&&S.ooh){S.ooh.subway={...S.ooh.subway,mockup:'subway'};S.ooh.bus={...S.ooh.bus,mockup:'bus'};}
})();
