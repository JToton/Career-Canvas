function toggleMenu() {
  //function to control hamburger drop down menu
  const dropdown = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  dropdown.classList.toggle("open");
  icon.classList.toggle("open");
}
