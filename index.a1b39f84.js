var modal=document.getElementById("myModal"),image=document.querySelectorAll(".more-photo__img"),modalImg=document.getElementById("img01"),captionText=document.getElementById("caption");image.forEach((function(e){e.addEventListener("click",(function(){modal.style.display="block",modalImg.src=e.src,captionText.innerHTML=e.alt}))}));var span=document.getElementsByClassName("button__close")[0];span.onclick=function(){modal.style.display="none"};
//# sourceMappingURL=index.a1b39f84.js.map
