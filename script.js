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
function toggleChat(){
const box=document.getElementById("chatbox");

box.style.display=
box.style.display==="block"
? "none"
: "block";
}

function handleEnter(e){
if(e.key==="Enter"){
replyBot();
}
}

function replyBot(){

const input=
document.getElementById("userInput");

const msg=input.value.toLowerCase();

const chat=
document.getElementById("chat-messages");

chat.innerHTML+=`<p><b>You:</b> ${msg}</p>`;

let reply="Please contact SAMSEC via email or WhatsApp.";

if(msg.includes("services")){
reply="We offer website development, security audits, malware removal, bug fixing and consultation.";
}

else if(msg.includes("contact")){
reply="Contact us via Email or WhatsApp in the Contact section.";
}

else if(msg.includes("price")){
reply="Pricing depends on project complexity. Click Hire Me to request a quote.";
}

else if(msg.includes("audit")){
reply="Security audits identify vulnerabilities and improve website protection.";
}

chat.innerHTML+=`<p><b>SAMSEC:</b> ${reply}</p>`;

input.value="";
}