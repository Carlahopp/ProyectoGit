// Escuchamos el evento de envío del formulario usando querySelector
document.querySelector("#form1").addEventListener("submit", (event) => {
    // 1. Evitamos que la página se recargue
    event.preventDefault(); 
    
    // 2. Obtenemos los valores por name (como lo tenías)
    const nombre = document.querySelector('input[name="fname"]').value;
    const apellido = document.querySelector('input[name="lname"]').value;
    // Si agregas más campos para hacerlo real:
    const email = document.querySelector('input[name="email"]')?.value || "No capturado";

    // 3. Validación rápida
    if(nombre.trim() === "" || apellido.trim() === "") {
        console.warn("⚠️ Campos vacíos");
        return;
    }
    
    // 4. Impresión LIMPIA que pide la rúbrica (F12 -> Consola)
    console.clear();
    console.log("%c--- Datos Capturados Task 2 ---", "color:#34c759; font-weight:bold; font-size:14px;");
    console.log("Nombre:", nombre);
    console.log("Apellido:", apellido);
    console.log("Email:", email);
    console.table({ nombre, apellido, email });

    // 5. Impresión VISUAL en la página (en lugar del alert feo)
    const resultado = document.getElementById("resultado");
    if(resultado) {
        resultado.style.display = "block";
        resultado.innerHTML = `✅ <b>¡Datos Procesados!</b><br>Nombre: ${nombre} ${apellido}<br><small>Revisa la consola con F12</small>`;
    }

    // Opcional: guardar para tu dashboard
    localStorage.setItem("nombreDev", nombre);
});