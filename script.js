function toggleDropdown() {
  //target links class and children
  const dropdown = document.querySelector(".dropdown-links");
  const icon = document.querySelector(".dropdown-icon");
  dropdown.classList.toggle("open");
  icon.classList.toggle("open");
}
