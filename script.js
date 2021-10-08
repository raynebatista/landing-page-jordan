// Efeito de digitação com a biblioteca typed.js
var typed = new Typed("#typed", {
  stringsElement: "#typed-strings",
  typeSpeed: 30,
});

// Efeito no scroll da página
const sr = ScrollReveal({
  origin: "top",
  distance: "50px",
  duration: 2000,
  reset: false,
});

ScrollReveal().reveal(".main-container", { delay: 200 });
ScrollReveal().reveal(".produtos", { delay: 400 });
