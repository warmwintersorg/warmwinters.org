(function(){(function(){feather.replace()})(),function(){const a=document.querySelector(".hero-bg-wrapper");if(!a)return;a.insertAdjacentElement("beforeend",a.children[0].cloneNode());let b=a.children.length,c=1;setInterval(function(){return a.style=`transition: transform 1s;`+`transform: translateY(-${100*c}%)`,c<b-1?c++:void setTimeout(function(){a.style=`transition: transform 0;transform: translateY(0)`,c=1},2e3)},3e3)}(),function(){mediumZoom(document.querySelectorAll(".zoom"))}(),function(){const a=document.querySelector(".js-nav-toggle"),b=a.querySelector("img"),c=document.querySelector("nav");a.addEventListener("click",function(){c.classList.toggle("active"),document.body.classList.toggle("noscroll"),b.src=c.classList.contains("active")?"/img/close.svg":"/img/menu.svg"})}(),function(){window.odometerOptions={auto:!1},Array.from(document.querySelectorAll(".odometer")).forEach(function(a){inViewport(a,{offset:100},function(){const b=new Odometer({el:a,value:0,duration:a.dataset.duration});b.update(a.dataset.value)})})}(),function(){function a(){delete window.onloadLink,document.querySelector("nav").classList.add("hover"),document.removeEventListener("mousemove",b)}function b(b){return window.onloadLink&&window.onloadLink!==b.target&&!window.onloadLink.contains(b.target)?void a():void(document.querySelectorAll("nav a").forEach(function(a){(a===b.target||a.contains(b.target))&&(window.onloadLink=a)}),!window.onloadLink&&a())}document.addEventListener("mousemove",b)}(),function(){Stickyfill.add(document.querySelector("nav"))}()})();