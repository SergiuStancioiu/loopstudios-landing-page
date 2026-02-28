function showMobileNavLinks() {
  const navLinkButton = document.querySelector('.hamburger-container');
  const navLinkMeniu = document.querySelector('.mobile-navbar');
  const mobileCloseMenu = document.querySelector('.mobile-close-menu');
  const mobileNavLinks = document.querySelectorAll('.mobile-navbar a');

  navLinkButton.addEventListener('click', () => {
    navLinksMeniu.classList.toggle('show-mobile-links');
    document.body.classList.toggle('hide-sidebar');
  });

  mobileCloseMenu.addEventListener('click', () => {
    closeMenu();
  });

  mobileNavLinks.forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  function closeMenu() {
    navLinksMeniu.classList.remove('show-mobile-links');
    document.body.classList.remove('hide-sidebar');
  }
}

showMobileNavLinks();
