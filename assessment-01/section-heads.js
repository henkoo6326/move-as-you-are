/* Varied section headers from Key Visual down. page.js and reels-phone.js keep building the plain
   eyebrow + paragraph header; this pass gives each one its own arrangement and a Korean title. */
(()=>{'use strict';
const HEADS=[
 ['keyvisual','sh-split','한 장으로 전하는<br>캠페인의 태도'],
 ['iconography','sh-inline','참여에 필요한 열 가지 정보'],
 ['videography','sh-display','Start Rest Return'],
 ['reels','sh-split','세 장면을 잇는<br>릴스 세 편'],
 ['campaign','sh-stack','장면마다 달라지는<br>타이틀의 자리'],
 ['stories','sh-dark',''],
 ['feed','sh-end','하나씩 보고,<br>한눈에 읽는 피드']];
document.querySelector('#videography>.section-head p')?.remove();   // Videography: the display line carries the section
for(const [id,cls,title] of HEADS){
  const head=document.querySelector(`#${id}>.section-head`);if(!head)continue;
  head.classList.add('sh',cls);
  const body=head.querySelector(':scope>div');if(!body||!title||body.querySelector('h3'))continue;
  const h=document.createElement('h3');h.innerHTML=title;if(cls==='sh-display')h.lang='en';
  body.prepend(h);
}
// Keep counted phrases on one line in the header copy (non-breaking spaces).
document.querySelectorAll('.sh p').forEach(p=>{for(const t of ['한 번 더','세 편의','세 장면을','세 장의','아홉 게시물에'])if(p.innerHTML.includes(t))p.innerHTML=p.innerHTML.replace(t,t.replace(/ /g,'\u00a0'));});
})();
