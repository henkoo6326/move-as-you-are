/* Photography gallery: the lone last photo sits in the right column (final-photos.css). Pull it up under the
   photo directly above it (its previous sibling at 3 and 2 columns), so the gap matches the grid gap instead of
   inheriting the empty space left by a shorter photo in a taller row. */
(()=>{'use strict';
const gallery=document.querySelector('.final-photo-gallery');if(!gallery)return;
const last=gallery.lastElementChild,above=last&&last.previousElementSibling;if(!above)return;
function pack(){
  last.style.marginTop='';
  const img=above.querySelector('img');if(!img||!img.complete)return;
  const slack=above.getBoundingClientRect().bottom-img.getBoundingClientRect().bottom;
  if(slack>1)last.style.marginTop=-Math.round(slack)+'px';
}
[...gallery.querySelectorAll('img')].forEach(i=>i.complete||i.addEventListener('load',pack,{once:true}));
new ResizeObserver(pack).observe(gallery);pack();
})();
