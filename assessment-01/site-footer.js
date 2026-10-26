/* Footer: a closing off-black band — campaign mark and page index, then logo, course, professor and student, then one notice line.
   page.js still writes the plain #credits footer; this replaces its contents with the same information. */
(()=>{'use strict';
const f=document.getElementById('credits');if(!f)return;
f.classList.add('site-footer');
f.innerHTML=`<div class="sf-wrap">
<div class="sf-top">
 <div class="sf-mark" role="img" aria-label="Move as you are"><i class="sf-m1"></i><i class="sf-m2"></i></div>
 <nav class="sf-nav" aria-label="페이지 안 이동"><a href="#planning">Planning</a><a href="#identity">Identity</a><a href="#campaign">Campaign</a><a href="#top">맨 위로</a></nav>
</div>
<div class="sf-info">
 <div class="sf-brand"><span class="sf-logo" role="img" aria-label="lululemon"></span><p>As I am now, at my own pace</p></div>
 <div class="sf-col"><h2>Course</h2><p>경험디자인B</p></div>
 <div class="sf-col"><h2>Prof.</h2><p>조선영 교수님</p></div>
 <div class="sf-col"><h2>Student</h2><p>22561005 고해은</p></div>
</div>
<p class="sf-notice">수업용 비공식 캠페인 제안입니다. Midjourney&nbsp;생성&nbsp;이미지와 Google&nbsp;Flow&nbsp;생성&nbsp;영상, <span class="sf-nb">그래픽 조판·합성을</span> 사용했으며 실제 캠페인 집행 기록이 아닙니다.</p>
</div>`;
})();
