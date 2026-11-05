
// MENÚ DE NAVEGACIÓN PARA CELULARES

const botonMenu = document.getElementById("boton-menu");
const menu = document.getElementById("menu");

botonMenu.addEventListener("click", function () {
    menu.classList.toggle("activo");

    const menuAbierto = menu.classList.contains("activo");

    botonMenu.textContent = menuAbierto ? "✕" : "☰";
    botonMenu.setAttribute("aria-expanded", menuAbierto);
});

// CERRAR EL MENÚ AL SELECCIONAR UNA SECCIÓN

const enlacesMenu = document.querySelectorAll(".menu a");

enlacesMenu.forEach(function (enlace) {
    enlace.addEventListener("click", function () {
        menu.classList.remove("activo");
        botonMenu.textContent = "☰";
        botonMenu.setAttribute("aria-expanded", "false");
    });
});

// ACTUALIZAR EL AÑO AUTOMÁTICAMENTE

document.getElementById("anio").textContent =
    new Date().getFullYear();
