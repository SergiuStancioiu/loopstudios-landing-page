function showMobileNavLinks() {
  const navLinkButton = document.querySelector('.hamburger-container');
  const navLinksMeniu = document.querySelector('.mobile-navbar');
  const mobileCloseMenu = document.querySelector('.mobile-close-menu');

  navLinkButton.addEventListener('click', () => {
    navLinksMeniu.classList.toggle('show-mobile-links');
    document.body.classList.toggle('hide-sidebar');
  });

  mobileCloseMenu.addEventListener('click', () => {
    navLinksMeniu.classList.remove('show-mobile-links');
    document.body.classList.remove('hide-sidebar');
  });
}

showMobileNavLinks();
