// Replace each pair of YouTube IDs with the two consecutive 12-hour SGF+ uploads.
// Set preview to false only after replacing ALL six examples and their titles.
const LONG_VIDEO_CONFIG = {
 preview: false,
 source: 'https://echo-team-joy-future-academy-jd.github.io/Echo-Infinity/',
 cases: [
  {preview:false,mode:'Chunkwise',title:'White Cat in a Basket',poster:'assets/images/white-cat.jpg',parts:['4UKioNees9s','4h0mJnKlYoo']},
  {preview:false,mode:'Chunkwise',title:'Surfing Otter',poster:'assets/images/surfing-otter.jpg',parts:['dEWoXP-Tz6M','SLr4aVOl5QY']},
  {preview:false,mode:'Framewise',title:'Morning Beach',poster:'assets/images/morning-beach.jpg',parts:['QZW-3nGWDq0','QR93aWB1-CM']},
  {preview:false,mode:'Framewise',title:'Gwen Reading',poster:'assets/images/gwen-reading.jpg',parts:['GffPMBcc_wY','NkPzTcwWr5M']},
  {uploading:true,mode:'Framewise',title:'Flower Coast',poster:'assets/images/flower-coast-hq.jpg',parts:[]},
  {uploading:true,mode:'Chunkwise',title:'Willow Reflections',poster:'assets/images/willow-reflections.jpg',parts:[]}
 ]
};
(()=>{
 const config=LONG_VIDEO_CONFIG,el=id=>document.getElementById(id);let current=0,part=0;
 const thumb=id=>`https://i.ytimg.com/vi/${encodeURIComponent(id)}/hqdefault.jpg`;
 function render(load=false,offset=0){
  const c=config.cases[current],id=c.parts[part];
  el('long-title').textContent=c.title;
  document.querySelector('.long-player-footer').style.display=c.uploading?'none':'';
  document.querySelector('.long-timeline').style.display=c.uploading?'none':'';
  if(c.uploading){
   const message=document.createElement('div');message.className='long-uploading';
   const poster=document.createElement('img');poster.src=c.poster;poster.alt='';
   const label=document.createElement('span');label.textContent='Uploading';
   message.append(poster,label);el('long-stage').replaceChildren(message);return;
  }
  el('long-part-caption').textContent=part===0?'Part 1 · 00:00–12:00 h':'Part 2 · 12:00–24:00 h';
  el('long-youtube').href=`https://www.youtube.com/watch?v=${encodeURIComponent(id)}&t=${offset}s`;
  el('long-parts').querySelectorAll('button').forEach((b,i)=>b.setAttribute('aria-pressed',String(i===part)));
  el('long-stage').replaceChildren();
  if(load){const iframe=document.createElement('iframe');iframe.src=`https://www.youtube.com/embed/${encodeURIComponent(id)}?autoplay=1&rel=0&playsinline=1&start=${offset}`;iframe.title=`${(c.preview??config.preview)?'Echo-Infinity preview: ':''}${c.title} — Part ${part+1}`;iframe.allow='autoplay; encrypted-media; picture-in-picture; fullscreen';iframe.allowFullscreen=true;iframe.referrerPolicy='strict-origin-when-cross-origin';el('long-stage').append(iframe)}
  else{const b=document.createElement('button');b.className='long-cover';b.type='button';b.setAttribute('aria-label',`Play ${c.title}, Part ${part+1}`);const im=document.createElement('img');im.src=thumb(id);im.alt='';const label=document.createElement('span');label.textContent=`▶  Play Part ${part+1}`;b.append(im,label);b.onclick=()=>render(true);el('long-stage').append(b)}
 }
 config.cases.forEach((c,i)=>{const b=document.createElement('button');b.type='button';b.className='long-card';const im=document.createElement('img');im.src=c.poster||thumb(c.parts[0]);im.alt='';im.loading='lazy';const name=document.createElement('strong');name.textContent=c.title;const meta=document.createElement('span');meta.textContent=c.mode?`${c.mode} · 24 hours`:'24 hours';const cover=document.createElement('div');cover.className='long-card-cover';cover.append(im);b.append(cover,name,meta);b.setAttribute('aria-haspopup','dialog');b.onclick=()=>{current=i;part=0;el('long-dialog').showModal();document.body.style.overflow='hidden';render(true)};el('long-cases').append(b)});
 el('long-parts').querySelectorAll('button').forEach((b,i)=>b.onclick=()=>{part=i;render(true)});
 el('long-jumps').querySelectorAll('button').forEach(b=>b.onclick=()=>{const hour=Number(b.dataset.hour);part=hour>=12?1:0;render(true,Math.floor((hour-part*12)*3600))});
 const dialog=el('long-dialog');
 el('long-close').onclick=()=>dialog.close();
 dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close()}});
 dialog.addEventListener('close',()=>{el('long-stage').replaceChildren();document.body.style.overflow=''});
})();
