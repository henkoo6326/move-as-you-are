/* Sentence-aware line breaks for header and intro paragraphs.
   Each sentence starts a line; a sentence wider than its column breaks at a comma, and only then at a
   natural phrase ending (never between an object and its verb, or before a bound noun such as 때·장·편). */
(()=>{'use strict';
const SEL='main section header p, .bm-description p, .concept-intro p, .selected-opening p, .opening-head p';
const GOOD=/(고|며|면|서|지만|는데|도|까지|부터|에서|으로|로|면서|하며|,)$/;   // phrase endings that read well at a line end
const BOUND=/^(때|수|것|번|장|편|곳|중|뿐|만큼|등|곁|위|앞|뒤|속|안|옆|사이)(은|는|이|가|을|를|의|에|에서|도|만|과|와|로|으로|부터|까지)?[.,]?$/;          // bound nouns and place words that stay with the word before
const BADEND=/(의|을|를)$/;                                                           // possessive / object right before what it governs
const VERB=/(다|다\.|고|며|어|아|여|해|워)$/;                                         // next word is a verb form
const ADNOMINAL=/(하는|되는|있는|없는|않는|이는|오는|가는|주는|한|운|던|될|할)$/;      // modifier forms that belong to the next noun
const probe=document.createElement('span');probe.style.cssText='position:absolute;visibility:hidden;white-space:nowrap;left:-9999px;top:0';
let targets=[];
function width(p,text){probe.style.font=getComputedStyle(p).font;probe.style.letterSpacing=getComputedStyle(p).letterSpacing;probe.textContent=text;return probe.getBoundingClientRect().width;}
// Best single break in an over-long run: balanced halves, preferring good endings, avoiding bad ones.
function split(p,text,avail){
  if(width(p,text)<=avail)return [text];
  const words=text.split(' ');if(words.length<2)return [text];   // nbsp is not a break point
  let best=null;
  for(let i=1;i<words.length;i++){
    const a=words.slice(0,i).join(' '),b=words.slice(i).join(' '),wa=width(p,a);
    if(wa>avail)break;
    const wb=width(p,b);let cost=Math.abs(wa-wb)/avail;
    if(Math.min(wa,wb)<avail*.4)cost+=1;   // never leave a stub line
    if(GOOD.test(words[i-1]))cost-=.6;
    if(ADNOMINAL.test(words[i-1])&&words[i-1].length>1)cost+=.9;
    if(BADEND.test(words[i-1])&&(/(의)$/.test(words[i-1])||VERB.test(words[i])))cost+=.6;
    if(BOUND.test(words[i]))cost+=2;
    if(words[i-1].length<=1||words[i].length<=1)cost+=.8;
    if(!best||cost<best.cost)best={i,cost};
  }
  if(!best)return [text];
  return [...split(p,words.slice(0,best.i).join(' '),avail),...split(p,words.slice(best.i).join(' '),avail)];
}
function lines(p,sentence,avail){
  if(width(p,sentence)<=avail)return [sentence];
  // Split clauses at regular spaces only, so nbsp-joined phrases stay whole.
  const clauses=sentence.split(/(?<=,) +/),out=[];let cur='';
  for(const c of clauses){const next=cur?cur+' '+c:c;if(width(p,next)<=avail)cur=next;else{if(cur)out.push(cur);cur=c;}}
  if(cur)out.push(cur);
  const result=out.flatMap(l=>split(p,l,avail));
  // A comma split that leaves a stub line reads worse than a balanced phrase break.
  return result.some(l=>width(p,l)<avail*.4)?split(p,sentence,avail):result;
}
function set(p,text=p.dataset.lbText){
  const avail=p.clientWidth-1;if(avail<80)return;
  const sentences=text.split(/(?<=[.?!])\s+/);
  p.innerHTML=sentences.flatMap(s=>lines(p,s,avail)).map(l=>`<span class="lb">${l.replace(/&/g,'&amp;').replace(/</g,'&lt;')}</span>`).join('');
}
// Paragraphs with hand-set <br> breaks keep them while they are shown; when CSS hides them (narrow screens)
// the text is broken here instead, and the original markup comes back when the breaks show again.
function manual(p){
  if(!p.dataset.lbHtml){if(!p.querySelector(':scope>br'))return false;p.dataset.lbHtml=p.innerHTML;}
  const probeBr=document.createElement('br');p.append(probeBr);const hidden=getComputedStyle(probeBr).display==='none';probeBr.remove();
  if(!hidden){if(p.innerHTML!==p.dataset.lbHtml)p.innerHTML=p.dataset.lbHtml;return true;}
  const tmp=document.createElement('div');tmp.innerHTML=p.dataset.lbHtml.replace(/<br\s*\/?>/g,' ');
  p.dataset.lbManualText=tmp.textContent.replace(/[ \t\n]+/g,' ').trim();set(p,p.dataset.lbManualText);return true;
}
function run(){
  document.body.append(probe);
  document.querySelectorAll(SEL).forEach(p=>{if(p.dataset.lbHtml||p.querySelector(':scope>br'))manual(p);});
  targets=[...document.querySelectorAll(SEL)].filter(p=>{
    if(p.dataset.lbHtml)return false;
    if(p.dataset.lbText)return true;
    // Plain text only; a no-wrap span (e.g. an English line) is kept as one unbreakable phrase.
    if([...p.children].some(c=>!(c.tagName==='SPAN'&&/nowrap/.test(c.getAttribute('style')||''))))return false;
    p.querySelectorAll(':scope>span').forEach(c=>c.replaceWith(c.textContent.replace(/ /g,'\u00a0')));
    p.dataset.lbText=p.textContent.replace(/[ \t\n]+/g,' ').trim();return p.dataset.lbText.length>25;});
  targets.forEach(p=>set(p));probe.remove();
}
let t;addEventListener('resize',()=>{clearTimeout(t);t=setTimeout(run,120);});
(document.fonts?document.fonts.ready:Promise.resolve()).then(run);
})();
