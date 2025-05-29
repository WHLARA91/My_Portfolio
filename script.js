document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const formData = new FormData(this);
  const data = Object.fromEntries(formData.entries());

  console.log("Simulando POST:");
  console.log(JSON.stringify(data));

  console.log("Simulando GET:");
  console.log("Nombre:", data.nombre);
  console.log("Email:", data.email);

  data.mensaje = "[Actualizado] " + data.mensaje;
  console.log("Simulando PUT:");
  console.log(JSON.stringify(data));
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    document.body.classList.add("scrolled");
  } else {
    document.body.classList.remove("scrolled");
  }
});
