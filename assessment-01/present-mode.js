/* Runs first. 1) On desktop, send the page into frame.html (fixed MacBook proportions); ?framed=… marks the page inside it.
   2) The showing always plays its motion and videos, even when the OS asks for reduced motion (author's decision);
      pause buttons stay available. */
(()=>{const q=new URLSearchParams(location.search),framed=q.get('framed');
if(window.top===window&&framed===null&&innerWidth>=1024){location.replace('frame.html'+location.search+location.hash);return;}
if(framed==='1')document.documentElement.classList.add('framed');
const mm=window.matchMedia.bind(window);
window.matchMedia=query=>/prefers-reduced-motion/.test(query)?{matches:false,media:query,onchange:null,addListener(){},removeListener(){},addEventListener(){},removeEventListener(){},dispatchEvent(){return false}}:mm(query);
})();
