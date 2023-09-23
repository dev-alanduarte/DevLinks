function togglemodel() {
  const html = document.documentElement;
  html.classList.toggle("light");

  const img = document.querySelector("#profile img");

  if (html.classList.contains("light")) {
    img.setAttribute("src", "././assets/alan-avatar-light.png");
  } else {
    img.setAttribute("src", "./assets/alan-avatar-moon.png");
  }
}
