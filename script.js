const words=["Secure Development","Cyber Defense","Future Ready Systems"];
let i=0;
setInterval(()=>{
document.getElementById("typing").innerText=words[i];
i=(i+1)%words.length;
},2000);

function login(){fetch('/api/login',{method:'POST'})}
function signup(){fetch('/api/signup',{method:'POST'})}

const c=document.getElementById('matrix');
const ctx=c.getContext('2d');
c.width=window.innerWidth;
c.height=window.innerHeight;
let letters='01';letters=letters.split('');
let drops=[];for(let x=0;x<300;x++)drops[x]=1;
function draw(){ctx.fillStyle='rgba(0,0,0,.05)';ctx.fillRect(0,0,c.width,c.height);ctx.fillStyle='#0f0';for(let i=0;i<drops.length;i++){let text=letters[Math.floor(Math.random()*letters.length)];ctx.fillText(text,i*10,drops[i]*10);if(drops[i]*10>c.height&&Math.random()>0.975)drops[i]=0;drops[i]++;}}
setInterval(draw,33);