import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{f as y,i as p}from"./assets/vendor-BbbuE1sJ.js";document.head.insertAdjacentHTML("beforeend",`<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Montserrat:ital@0;1&display=swap" rel="stylesheet"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">`);let n=null,i=null;const e=document.querySelector("[data-start]");e.disabled=!0;const r=document.querySelector("#datetime-picker");r.classList.add("datetime-picker");const g={enableTime:!0,dateFormat:"Y-m-d H:i",time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){const o=t[0];o<=new Date?p.error({position:"topCenter",messageColor:"white",backgroundColor:"#ef4040",progressBarColor:"red",theme:"light",icon:"fa-regular fa-circle-xmark fa-beat",iconColor:"white",message:"Please choose a date in the future"}):(n=o,e.disabled=!1,e.style.backgroundColor="#4e75ff",e.style.color="#fff",r.style.border="1px solid #4e75ff")}};y("#datetime-picker",g);e.addEventListener("click",()=>{n&&(e.disabled=!0,r.disabled=!0,r.style.backgroundColor="#fafafa",r.style.border="1px solid #808080",e.style.backgroundColor="#cfcfcf",e.style.color="#989898",i=setInterval(()=>{const o=n-new Date;if(o<=0){clearInterval(i),d(0),r.disabled=!1,r.style.backgroundColor="white",r.style.border="1px solid #808080",e.style.backgroundColor="#cfcfcf",e.style.color="#989898";return}d(o)},1e3))});function d(t){const{days:o,hours:a,minutes:l,seconds:c}=s(t);document.querySelector("[data-days]").textContent=o,document.querySelector("[data-hours]").textContent=String(a).padStart(2,"0"),document.querySelector("[data-minutes]").textContent=String(l).padStart(2,"0"),document.querySelector("[data-seconds]").textContent=String(c).padStart(2,"0")}function s(t){const u=Math.floor(t/864e5),f=Math.floor(t%864e5/36e5),m=Math.floor(t%864e5%36e5/6e4),h=Math.floor(t%864e5%36e5%6e4/1e3);return{days:u,hours:f,minutes:m,seconds:h}}console.log(s(2e3));console.log(s(14e4));console.log(s(2414e4));
//# sourceMappingURL=1-timer.js.map
