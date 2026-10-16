const btn = document.querySelector("#btn-publicar");
const listaUL = document.querySelector("#lista-comentarios-ul"); // COMENTARIOS ACTIVOS
const listaOL = document.querySelector("#lista-mapeo-ol");       // MAPEO TÉCNICO
let contador = 4; // ya tienes one, two, three

btn.addEventListener("click", () => {
  // Evitar duplicado: si ya existe "cuatro", ahora será "cinco"
  const textoComentario = contador === 4 
    ? `cuatro - ¡Acabas de agregar este comentario en vivo!`
    : `${contador} - Comentario nuevo #${contador} agregado dinámicamente`;

  // 1. Crear LI para UL (vista bonita)
  const nuevoLI = document.createElement("li");
  nuevoLI.textContent = textoComentario;
  nuevoLI.style.cssText = "background:#e8f5e9; border-left:4px solid #34c759; padding:10px 15px; border-radius:12px; margin-bottom:8px; list-style:none;";
  listaUL.appendChild(nuevoLI);

  // 2. Crear LI para OL (mapeo técnico)
  const nuevoOL = document.createElement("li");
  nuevoOL.textContent = contador === 4 ? "four" : `comment-${contador}`;
  nuevoOL.style.fontWeight = "bold";
  nuevoOL.style.color = "#5856d6";
  listaOL.appendChild(nuevoOL);

  // 3. Log limpio para rúbrica
  console.log(`%c Nuevo comentario agregado: ${textoComentario}`, "color:#34c759; font-weight:bold;");
  
  contador++;
  // Desactivar botón después de la primera vez si quieres que solo agregue "cuatro" una vez
  // btn.disabled = true; 
});