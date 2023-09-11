const hamburgerMenu = document.querySelector('.hamburger-menu');
hamburgerMenu.addEventListener('click', () => {
    const links = document.querySelector('.links');
    links.classList.toggle('active');

    const hamburgerIcon = document.querySelector('.hamburger-menu .material-symbols-outlined');
    if (links.classList.contains('active')) {
      hamburgerIcon.innerText = 'close';
    } else {
      hamburgerIcon.innerText = 'menu';
    }
});

const links = document.querySelectorAll('.link');
links.forEach(link => {
  link.addEventListener('click', () => {
    const navbarLinks = document.querySelector('.links');
    navbarLinks.classList.toggle('active');

    const hamburgerIcon = document.querySelector('.hamburger-menu .material-symbols-outlined');
    if (navbarLinks.classList.contains('active')) {
      hamburgerIcon.innerText = 'close';
    } else {
      hamburgerIcon.innerText = 'menu';
    }
  });
});