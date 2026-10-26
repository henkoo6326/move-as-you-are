/* 2026-10-26 image refresh; assessment-01 scoped overrides. */
(()=>{
 const S=window.SH,root='../assets/img/final-18/';
 const img=(name,alt)=>({src:root+name+'.webp?v=3',small:root+name+'-960.webp?v=3',alt});
 const photos={"arrive": ["02", "라임색 상의를 입고 몸을 비트는 인물"], "wide": ["10", "코트 위 서로 다른 위치에서 움직이는 세 사람"], "rest": ["08", "햇빛 아래 앉아서 쉬는 인물"], "again": ["11", "파란 코트를 달리는 인물"], "feet": ["07", "낮은 시점에서 바라본 움직이는 다리"], "waist": ["12", "블루 상의와 허리에 얹은 손"], "walkin": ["15", "벽 앞에서 무릎에 손을 얹고 몸을 기울이는 인물"], "stretch": ["04", "팔을 머리 위로 올린 인물"], "returnMat": ["18", "앉아 있는 인물을 위에서 바라본 장면"], "duo": ["16", "파란 코트에서 함께 쉬는 두 사람"]};
 Object.entries(photos).forEach(([k,[id,alt]])=>S.photo[k]={src:root+id+".png",alt});
 S.posters.items=['지금, 몸을 깨우는 순간','같은 공간, 각자의 시작','숨을 고르고, 내 속도로','다시 한 걸음'].map((alt,i)=>({id:'P0'+(i+1),...img('P0'+(i+1),alt+' — 캠페인 포스터')}));
 S.ooh={subway:img('MK_subway','새 캠페인 포스터를 적용한 지하철 광고 목업'),bus:img('MK_busshelter','새 캠페인 포스터를 적용한 버스정류장 목업'),stair:img('MK_stair','새 캠페인 포스터를 적용한 스튜디오 계단 목업')};
 const alts=['캠페인 로고를 얹은 팔을 들어 올린 인물 사진','블루 바탕에 캠페인 로고의 열린 곡선','Start — 재생 아이콘과 시작하는 인물','Today’s pace — 오늘 가능한 움직임 목록','Rest — 쉼 아이콘과 앉아서 쉬는 인물','Begin again — 두 낱말 사이를 달리는 인물','Return — 다시 아이콘과 뛰어오르는 인물','시작·쉼·복귀를 담은 캠페인 선언문','캠페인 로고를 얹은 뒤돌아보는 인물 사진'];
 const feed=n=>({src:'../assets/img/feed-v2/'+n+'.webp?v=3',small:'../assets/img/feed-v2/'+n+'-960.webp?v=3'}); // 2026-10-26 feed redesign (30_feed_redesign_20261026)
 S.feed.items=alts.map((alt,i)=>({id:'F0'+(i+1),...feed('F0'+(i+1)),alt}));S.feed.alts=Object.fromEntries(S.feed.items.map(x=>[x.id,x.alt]));
 S.feed.profile=img('SOCIAL_profile','개편한 아홉 게시물을 배치한 가상 프로필');S.feed.post=img('SOCIAL_post','새 캠페인 게시물의 가상 모바일 화면');
 S.stories.items=['Start','Rest','Return'].map((title,i)=>({title,...img('ST0'+(i+1),title+' 스토리'),still:root+'ST0'+(i+1)+'.webp'}));
 Object.assign(window.BIS_SOURCE.photo,S.photo); window.BIS_SOURCE.posters.items=S.posters.items; window.BIS_SOURCE.stories.items=S.stories.items.map(x=>({...x,poster:x.src}));
})();
