// Esperamos a que cargue todo el DOM para que no falle
  document.addEventListener("DOMContentLoaded", () => {
    const boton = document.querySelector("#tema");
    const guardado = localStorage.getItem("tema");

    console.log("Tema guardado:", guardado); // para que veas en consola si guarda

    if (guardado === "oscuro") {
      document.body.classList.add("oscuro");
      boton.textContent = "☀️ Cambiar a Modo Claro";
    }

    boton.addEventListener("click", () => {
      document.body.classList.toggle("oscuro");
      const activo = document.body.classList.contains("oscuro");
      
      localStorage.setItem("tema", activo ? "oscuro" : "claro");
      boton.textContent = activo ? "☀️ Cambiar a Modo Claro" : "🌓 Cambiar a Modo Oscuro";
    });
  });