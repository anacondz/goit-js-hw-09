const e=document.querySelector("body"),t=document.querySelector("[data-start]"),d=document.querySelector("[data-stop]");let a=null;t.addEventListener("click",(function(){t.disabled=!0,d.disabled=!1,a=setInterval((()=>{e.style.background=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3)})),d.addEventListener("click",(function(){t.disabled=!1,d.disabled=!0,clearInterval(a)}));
//# sourceMappingURL=01-color-switcher.78aa13f8.js.map