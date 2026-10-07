const videos=[...document.querySelectorAll('.comparison-panels video')];
const gallery=document.getElementById('case-gallery'),playButton=document.getElementById('comparison-play'),seekBar=document.getElementById('comparison-seek');
let active=0,playing=false;
const timeLabel=t=>`${Math.floor(t/60)}:${String(Math.floor(t%60)).padStart(2,'0')}`;
function pauseComparison(){playing=false;videos.forEach(v=>v.pause());playButton.textContent='Play'}
function updateTime(){const t=videos[0].currentTime||0;seekBar.value=t;document.getElementById('comparison-time').textContent=`${timeLabel(t)} / ${timeLabel(CASES[active].seconds)}`}
function selectCase(index){
 const c=CASES[index];pauseComparison();active=index;
 videos.forEach((v,i)=>{const method=['SF','SGF','SGFplus'][i];v.poster=`assets/videos/${c.key}/${method}.jpg`;v.src=`https://github.com/Zihan-Su/self-gradient-forcing-plus/releases/download/media-v1/${c.key}-${method}.mp4`;v.load();v.muted=true;v.playbackRate=Number(document.getElementById('speed').value)});
 document.getElementById('case-title').textContent=c.title;
 document.getElementById('case-tag').textContent=`${c.mode.toUpperCase()} · ${c.seconds} SECONDS`;
 document.getElementById('case-description').textContent=c.description;
 document.getElementById('full-prompt').textContent=c.prompt;
 seekBar.max=c.seconds;updateTime();
 [...gallery.children].forEach((b,i)=>b.setAttribute('aria-pressed',String(i===index)));
}
CASES.forEach((c,i)=>{const b=document.createElement('button');b.className='case-card';b.type='button';b.setAttribute('aria-pressed',String(i===0));b.setAttribute('aria-label',`View ${c.title}, ${c.mode}, ${c.seconds} seconds`);const img=document.createElement('img');img.src=`assets/videos/${c.key}.jpg`;img.alt='';img.loading='lazy';const body=document.createElement('div');const title=document.createElement('strong');title.textContent=c.title;const meta=document.createElement('span');meta.textContent=`${c.mode==='chunkwise'?'Chunkwise':'Framewise'} · ${c.seconds}s`;body.append(title,meta);b.append(img,body);b.onclick=()=>selectCase(i);gallery.append(b)});
function sizeGallery(){const cards=[...gallery.children];if(cards.length<8)return;const columns=getComputedStyle(gallery).gridTemplateColumns.split(' ').length;let height=0;for(let i=0;i<8;i+=columns)height+=Math.max(...cards.slice(i,i+columns).map(c=>c.getBoundingClientRect().height));height+=(Math.ceil(8/columns)-1)*parseFloat(getComputedStyle(gallery).rowGap);gallery.style.maxHeight=`${Math.ceil(height)}px`}
new ResizeObserver(sizeGallery).observe(gallery);gallery.querySelectorAll('img').forEach(img=>img.addEventListener('load',sizeGallery));
selectCase(0);sizeGallery();
playButton.onclick=()=>{if(playing)pauseComparison();else{playing=true;playButton.textContent='Pause'}};
function seekTo(t){videos.forEach(v=>{if(v.readyState>=1)v.currentTime=t;else v.addEventListener('loadedmetadata',()=>{v.currentTime=t},{once:true})});updateTime()}
seekBar.oninput=()=>seekTo(Number(seekBar.value));
document.getElementById('speed').onchange=e=>videos.forEach(v=>{v.playbackRate=Number(e.target.value)});
document.querySelectorAll('[data-fraction]').forEach(b=>b.onclick=()=>seekTo(Number(b.dataset.fraction)*CASES[active].seconds));
document.getElementById('comparison-fullscreen').onclick=()=>document.getElementById('comparison-panels').requestFullscreen();
videos.forEach(v=>v.addEventListener('ended',pauseComparison));
setInterval(()=>{if(playing){if(videos.some(v=>v.readyState<3||v.seeking)){videos.forEach(v=>v.pause());playButton.textContent='Buffering…'}else{playButton.textContent='Pause';const t=videos[0].currentTime;videos.slice(1).forEach(v=>{if(Math.abs(v.currentTime-t)>.12)v.currentTime=t});videos.forEach(v=>{if(v.paused)v.play().catch(()=>{})})}}updateTime()},180);
function renderResults(){const values=RESULTS[Number(document.getElementById('result-setting').value)];const best=values[0].map((_,j)=>Math.max(...values.map(r=>r[j])));const body=document.getElementById('results-body');body.replaceChildren();['SF','SGF','SGF+ (Ours)'].forEach((name,i)=>{const tr=document.createElement('tr');const label=document.createElement('td');label.textContent=name;tr.append(label);values[i].forEach((v,j)=>{const td=document.createElement('td');td.textContent=v.toFixed(2);if(v===best[j])td.className='best';tr.append(td)});body.append(tr)})}
document.getElementById('result-setting').onchange=renderResults;renderResults();

const copyCitation=document.getElementById('copy-citation');
copyCitation.addEventListener('click',async()=>{
 const status=document.getElementById('citation-status');
 try{await navigator.clipboard.writeText(document.getElementById('bibtex').textContent);status.textContent='BibTeX copied.';}
 catch{status.textContent='Select the BibTeX text to copy it, or download the .bib file.';}
});
