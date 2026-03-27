function submitForm() {
  alert('Responderemos em Breve!');
  document.getElementById('contactForm').reset();
}

function toggleMenu() {
  var menu = document.querySelector('.menu');
  menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
}

function hideMenu() {
  if (window.innerWidth <= 800) {
    var menu = document.querySelector('.menu');
    menu.style.display = 'none';
  } else {
      menu.style.display = 'block';
    }
}
hideMenu();