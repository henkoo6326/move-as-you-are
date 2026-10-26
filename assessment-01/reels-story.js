/* Adds Instagram story chrome (progress bars, account row, more and close marks) to every reel card
   that reels.js mounts. The bar count is the number of distinct reels; the current bar follows the video. */
(()=>{'use strict';
const ACCOUNT='moveasyouare.concept',TIME='6시간';
const cards=new Map();
function decorate(card){
  if(cards.has(card))return;
  const group=card.parentElement,list=[...group.children],srcs=[...new Set(list.map(f=>f.querySelector('video')?.getAttribute('src')))];
  const total=window.REELS_STORY_SEGMENTS||srcs.length,index=srcs.indexOf(card.querySelector('video')?.getAttribute('src'))%total;
  const chrome=document.createElement('div');chrome.className='story-chrome';chrome.setAttribute('aria-hidden','true');
  chrome.innerHTML=`<div class="story-bars">${'<i><b></b></i>'.repeat(total)}</div><div class="story-head"><span class="story-av"><i></i></span><span class="story-name">${ACCOUNT}</span><span class="story-time">${TIME}</span><span class="story-more"><i></i><i></i><i></i></span><span class="story-close"></span></div>`;
  const fills=[...chrome.querySelectorAll('.story-bars b')];fills.forEach((b,i)=>{if(i<index)b.style.width='100%';});
  card.append(chrome);cards.set(card,{video:card.querySelector('video'),fill:fills[index]});
}
function scan(){document.querySelectorAll('.reels-card').forEach(decorate);for(const card of cards.keys())if(!card.isConnected)cards.delete(card);}
new MutationObserver(scan).observe(document.documentElement,{childList:true,subtree:true});scan();
function tick(){for(const {video,fill} of cards.values()){if(fill&&video.duration)fill.style.width=(video.currentTime/video.duration*100).toFixed(2)+'%';}requestAnimationFrame(tick);}
requestAnimationFrame(tick);
})();
