const releases=[
  {version:'26.10',date:'26 OCT 2026',type:'MAJOR SYSTEM UPDATE',title:'癌症疫苗、返老還童與動物返場',summary:'個人化癌症疫苗進入大型測試、細胞年齡重置研究解鎖，邦加懶猴重新載入。',url:'./versions/26.10/'},
  {version:'26.9',date:'20 SEP 2026',type:'MAJOR WORLD UPDATE',title:'寵物、深海與角色創建',summary:'新增貓科外觀、31 種海洋生物，以及有限度開放初始天賦篩選。',url:'./versions/26.9/'}
];

const basePath=location.pathname.includes('/about/')?'..':location.pathname.includes('/versions/')?'../..':'.';
const releaseUrl=(path)=>`${basePath}${path}`;
document.querySelectorAll('[data-release-list="recent"]').forEach(list=>{list.innerHTML=releases.slice(0,3).map(item=>`<a class="release-card" href="${releaseUrl(item.url)}"><div><span class="release-date">${item.date}</span><strong>${item.version}</strong></div><div><span class="release-type">${item.type}</span><h3>${item.title}</h3><p>${item.summary}</p></div><span class="card-arrow">↗</span></a>`).join('')});
document.querySelectorAll('[data-release-list="all"]').forEach(list=>{list.innerHTML=releases.map((item,index)=>`<a href="${releaseUrl(item.url)}"><span>${String(index+1).padStart(2,'0')}</span><div><small>${item.date}</small><strong>VERSION ${item.version}</strong><p>${item.title}</p></div><b>↗</b></a>`).join('')});

const drawer=document.querySelector('.release-drawer');
const backdrop=document.querySelector('.drawer-backdrop');
const openButton=document.querySelector('[data-open-drawer]');
const closeDrawer=()=>{if(!drawer)return;drawer.classList.remove('open');backdrop?.classList.remove('open');drawer.setAttribute('aria-hidden','true');openButton?.setAttribute('aria-expanded','false');document.body.classList.remove('drawer-active');openButton?.focus()};
const openDrawer=()=>{if(!drawer)return;drawer.classList.add('open');backdrop?.classList.add('open');drawer.setAttribute('aria-hidden','false');openButton?.setAttribute('aria-expanded','true');document.body.classList.add('drawer-active');drawer.querySelector('button')?.focus()};
openButton?.addEventListener('click',openDrawer);document.querySelectorAll('[data-close-drawer]').forEach(el=>el.addEventListener('click',closeDrawer));document.addEventListener('keydown',e=>{if(e.key==='Escape')closeDrawer()});

const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}}),{threshold:.12});document.querySelectorAll('.enter').forEach(el=>observer.observe(el));
