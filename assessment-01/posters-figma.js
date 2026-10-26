/* 2026-10-26 posters from the author's Figma file (Move as you are · Soft Motion 벡터 마스터, section 43:1154).
   po[1] stays the lead/key-visual slot used by page.js and the BIS board. */
(()=>{
 const S=window.SH,root='../assets/img/figma-posters/';
 const img=(name,alt)=>({src:root+name+'.webp?v=1',small:root+name+'-960.webp?v=1',alt});
 S.posters.items=[
  {id:'PF02',...img('PF02','하늘을 배경으로 기댄 두 인물, 왼쪽 아래에 move as you are를 둔 가로 포스터')},
  {id:'PF01',...img('PF01','파란 코트에 앉은 두 인물 사이에 move as you are를 둔 가로 포스터')},
  {id:'PF03',...img('PF03','바닷가 난간 앞을 달리는 인물 양옆으로 move와 as you are를 나눈 가로 포스터')}];
 S.ooh={
  subway:img('MK_subway','지하철 통로 벽의 라이트박스 세 개에 세 장의 가로 포스터를 적용한 목업'),
  bus:img('MK_street','거리 건물 벽의 가로 포스터 판에 하늘 배경 포스터를 적용한 목업'),
  stair:img('MK_studio','스튜디오 계단 옆 벽에 달리는 인물 포스터를 붙인 목업')};
 if(window.BIS_SOURCE)window.BIS_SOURCE.posters.items=S.posters.items;
})();
