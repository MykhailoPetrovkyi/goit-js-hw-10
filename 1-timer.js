import"./assets/modulepreload-polyfill-B5Qt9EMX.js";import{f as l,i as m}from"./assets/vendor-BbbuE1sJ.js";const a=document.querySelector("#datetime-picker"),n=document.querySelector("[data-start]"),h=document.querySelector("[data-days]"),y=document.querySelector("[data-hours]"),f=document.querySelector("[data-minutes]"),p=document.querySelector("[data-seconds]");let s=null;const S={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){s=t[0],s<new Date?(n.disabled=!0,m.error({message:"Pick a date in the future!",position:"topRight"})):n.disabled=!1,console.log(t[0])}};l(a,S);n.addEventListener("click",()=>{a.disabled=!0,n.disabled=!0,setInterval(()=>{let t=s-new Date;console.log(r(t));const e=r(t);h.textContent=o(e.days),y.textContent=o(e.hours),f.textContent=o(e.minutes),p.textContent=o(e.seconds)},1e3)});function o(t){return String(t).padStart(2,"0")}function r(t){const c=Math.floor(t/864e5),u=Math.floor(t%864e5/36e5),d=Math.floor(t%864e5%36e5/6e4),i=Math.floor(t%864e5%36e5%6e4/1e3);return{days:c,hours:u,minutes:d,seconds:i}}
//# sourceMappingURL=1-timer.js.map