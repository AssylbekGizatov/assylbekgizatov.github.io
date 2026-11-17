const body=document.body,theme=document.getElementById('theme');
function setTheme(light){body.classList.toggle('light',light);theme.textContent=light?'Тёмная тема':'Светлая тема';try{localStorage.setItem('braincode-theme',light?'light':'dark')}catch(e){}}
try{setTheme(localStorage.getItem('braincode-theme')==='light')}catch(e){}
theme.addEventListener('click',()=>setTheme(!body.classList.contains('light')));
function progress(){const h=document.documentElement;document.getElementById('progress').style.width=(h.scrollHeight===h.clientHeight?0:h.scrollTop/(h.scrollHeight-h.clientHeight)*100)+'%'}addEventListener('scroll',progress,{passive:true});addEventListener('resize',progress);progress();
document.querySelectorAll('.copy').forEach(b=>b.addEventListener('click',async()=>{try{await navigator.clipboard.writeText(b.parentElement.nextElementSibling.textContent);b.textContent='Скопировано';setTimeout(()=>b.textContent='Скопировать',1700)}catch(e){b.textContent='Выделите код вручную'}}));
const mode=document.getElementById('join-mode'),result=document.getElementById('join-result');
function join(){result.textContent=mode.value==='left'?'168 заявок · 308 400 ₸ · заявка 1093 / Z99 сохранена. Неизвестная зона остаётся отдельной строкой отчёта.':'167 заявок · 305 700 ₸ · заявка 1093 / Z99 потеряна. Из отчёта исчезли 1 заявка и 2700 ₸.'}mode.addEventListener('change',join);join();
