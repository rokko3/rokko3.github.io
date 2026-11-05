const menus = document.querySelectorAll('details');

menus.forEach((menu) => {
  menu.addEventListener('toggle', () => {
    if (!menu.open) return;

    menus.forEach((otherMenu) => {
      if (otherMenu !== menu) {
        otherMenu.open = false;
      }
    });
  });
});