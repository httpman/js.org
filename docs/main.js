(()=>{var a=window.location.search.slice(1).replace(/\.js$/,"");(function(e){a&&(e=document.getElementById(e))&&(e.innerHTML=a)})("sd");(function(e){if(e=document.getElementById(e)){let t=5;setInterval(()=>{if(!t--)return window.top.location.href="https://js.org/?"+a;e.innerText=`${t} second${t>1?"s":""}`},1e3)}})("rt");(function(e){window.onload=()=>{if(e=document.getElementById(e)){let t=document.getElementById("_carbonads_projs");t||e.classList.add("blocked"),fetch(`https://js.org/count/${t?"cad":"nocad"}`)}}})("cad");(function(e){if(!(e=document.getElementById(e)))return;let t=document.getElementsByTagName("head")[0],o="cb_"+Math.random().toString(36).substring(2,16),c=document.createElement("script");window[o]=i=>{e.innerHTML=((i.data.watchers||0)/1e3).toFixed(1)+"K"},c.src="https://api.github.com/repos/js-org/js.org?callback="+o,t.insertBefore(c,t.firstChild)})("ghstars");(function(e,t){if(!(e=document.getElementById(e)))return;a&&t.unshift(a.substring(0,8));let o=1e3/4,c=1,i=.2,u=3e3,s=1e3/16,h=1,g=.2,f=500,n=e.innerHTML,r=n.length,m=-1,l=()=>{r-- >0?(e.className="active",e.innerHTML=n.slice(0,r),setTimeout(l,s+s*r/n.length*h+s*g*Math.random())):(n=""+t[m=(m+1)%t.length],setTimeout(d,f))},d=()=>{r++<n.length?(e.innerHTML=n.slice(0,r),setTimeout(d,o+o*-r/n.length*c+o*i*Math.random())):(e.className="",setTimeout(l,u))};d()})("hermes",["your","domain","4free","project","learn","tool","munich"]);})();