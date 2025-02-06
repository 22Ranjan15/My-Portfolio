
function toggleMenu() {
  // Select the menu container
  const menu = document.querySelector(".menu-links");
  
  // Select the hamburger icon
  const icon = document.querySelector(".hamburger-icon");
  
  // Toggle the "open" class on the menu to show/hide it
  menu.classList.toggle("open");
  
  // Toggle the "open" class on the icon to change its appearance
  icon.classList.toggle("open");
}

