function toggleMode() {
  const html = document.documentElement;
  html.classList.toggle("light");

  const img = document.querySelector("#profile img");

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png");
    img.setAttribute(
      "alt",
      "Foto de Luan Prates Sorrindo, usando óculos escuros, camisa amarela e barba. "
    );
  } else {
    img.setAttribute("src", "./assets/avatar.png");
    img.setAttribute(
      "alt",
      "Foto de Luan Prates Sorrindo, usando óculos, camisa amarela e barba, ele está com a mão esquerda atrás da cabeça mostrando seu braço todo tatuado."
    );
  }
}
