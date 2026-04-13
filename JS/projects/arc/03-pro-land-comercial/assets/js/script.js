window.onload = function() {
   document.querySelector(".menuMobile").addEventListener("click", function() {
       let menu = document.querySelector(".menu nav ul");
       menu.style.display = (menu.style.display === 'flex') ? 'none' : 'flex';
   });
};