/* Feed section phones: Apple's official iPhone 17 Pro bezel (Apple Design Resources) over live HTML screens.
   Status bar = Apple iOS 26 Community kit SVG (9:41, cellular, Wi-Fi, battery). Screen is 402×874pt. */
(()=>{
const dev='../assets/device/',logo='../assets/logo/lululemon.svg',ACCOUNT='moveasyouare.concept';
const ic=(d,fill)=>`<svg viewBox="0 0 24 24" aria-hidden="true" ${fill?'fill="currentColor"':'fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"'}>${d}</svg>`;
const I={
 plus:ic('<rect x="3" y="3" width="18" height="18" rx="5"/><path d="M12 8v8M8 12h8"/>'),
 menu:ic('<path d="M4 7h16M4 12h16M4 17h16"/>'),
 grid:ic('<rect x="3.5" y="3.5" width="17" height="17" rx="1.5"/><path d="M9.2 3.5v17M14.8 3.5v17M3.5 9.2h17M3.5 14.8h17"/>'),
 reels:ic('<rect x="3" y="3" width="18" height="18" rx="5"/><path d="M3 8.5h18M8.5 3l2.5 5.5M14 3l2.5 5.5"/><path d="M10.2 12v5l4.3-2.5z" fill="currentColor"/>'),
 home:ic('<path d="M3.5 10.2 12 3.3l8.5 6.9V20a.9.9 0 0 1-.9.9h-5.1v-6.4h-5v6.4H4.4a.9.9 0 0 1-.9-.9z"/>',true),
 search:ic('<circle cx="10.8" cy="10.8" r="6.8"/><path d="m16 16 4.5 4.5"/>'),
 add:ic('<rect x="3" y="3" width="18" height="18" rx="5"/><path d="M12 8v8M8 12h8"/>'),
 heart:ic('<path d="M12 20.3S3.5 15.4 3.5 9.3A4.6 4.6 0 0 1 12 6.8a4.6 4.6 0 0 1 8.5 2.5c0 6.1-8.5 11-8.5 11z"/>'),
 comment:ic('<path d="M20.4 15.9A9 9 0 1 0 17 19.5l3.9 1.1z"/>'),
 send:ic('<path d="M21 3 10.2 13.8M21 3l-6.4 18-4.4-7.2L3 9.4z"/>'),
 save:ic('<path d="M19 21 12 15.3 5 21V3.8h14z"/>'),
 more:ic('<circle cx="5" cy="12" r="1.5"/><circle cx="12" cy="12" r="1.5"/><circle cx="19" cy="12" r="1.5"/>',true),
 back:ic('<path d="M15 4.5 7.5 12l7.5 7.5"/>'),
 tagged:ic('<rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="12" cy="10" r="3.2"/><path d="M6.5 20.5a5.8 5.8 0 0 1 11 0"/>')
};
const avatar=cls=>`<span class="ip-avatar ${cls||''}"><i></i></span>`;
const tabbar=`<nav class="ip-tabbar" aria-hidden="true"><span>${I.home}</span><span>${I.reels}</span><span>${I.send}</span><span>${I.search}</span>${avatar('ip-me')}</nav>`;
const phone=(screen,label)=>`<figure class="ip-figure"><div class="iphone" role="img" aria-label="${label}"><div class="ip-screen"><div class="ip-content"><img class="ip-status" src="${dev}ios26-status-bar-dark.svg" alt="">${screen}${tabbar}<span class="ip-home"></span></div></div><img class="ip-bezel" src="${dev}iphone-17-pro-silver.png" alt=""></div></figure>`;
window.feedPhones=S=>{
 const f=S.feed.items;
 const profile=`<header class="ip-bar"><b>${ACCOUNT}</b><span class="ip-actions">${I.plus}${I.menu}</span></header><div class="ip-profile"><div class="ip-head">${avatar('ip-pic')}<dl class="ip-stats"><div><dt>게시물</dt><dd>${f.length}</dd></div><div><dt>팔로워</dt><dd>1,248</dd></div><div><dt>팔로잉</dt><dd>32</dd></div></dl></div><h4>Move as you are</h4><p>지금의 나로, 나의 속도로.<br>시작하고, 쉬고, 다시 움직이는 순간.</p><div class="ip-btns"><span class="ip-btn">프로필 편집</span><span class="ip-btn">프로필 공유</span></div></div><div class="ip-tabs"><span class="on">${I.grid}</span><span>${I.reels}</span><span>${I.tagged}</span></div><div class="ip-grid">${f.map(x=>`<img src="${x.small||x.src}" alt="" loading="lazy">`).join('')}</div>`;
 const post=`<header class="ip-bar ip-post-bar"><span class="ip-back">${I.back}</span><b>게시물</b><span></span></header><div class="ip-author">${avatar()}<b>${ACCOUNT}</b>${I.more}</div><img class="ip-photo" src="${f[0].src}" alt="" loading="lazy"><div class="ip-react"><span>${I.heart}${I.comment}${I.send}</span>${I.save}</div><p class="ip-caption"><b>${ACCOUNT}</b> Move as you are<br>지금, 몸을 깨우는 순간.<br>오늘 가능한 움직임으로 시작해요.<br>지금의 나로, 나의 속도로.</p>`;
 return phone(profile,'아홉 게시물을 배치한 가상 프로필 화면, 아이폰 17 Pro')+phone(post,'첫 번째 캠페인 게시물을 연 가상 모바일 화면, 아이폰 17 Pro');
};
})();
