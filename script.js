const bienvenida = document.getElementById("bienvenida");

const flores = document.getElementById("flores");

const entrar = document.getElementById("entrar");

const musica = document.getElementById("musica");

const leerCarta = document.getElementById("leerCarta");

const carta = document.getElementById("carta");

const cerrar = document.getElementById("cerrar");



/* =================================
   ENTRAR A LA PÁGINA
================================= */

entrar.addEventListener("click", () => {


    // Intentar iniciar música

    musica.volume = 0.45;

    musica.play().catch(() => {

        console.log("El navegador bloqueó el audio");

    });


    // Ocultar bienvenida

    bienvenida.style.opacity = "0";

    bienvenida.style.transform = "scale(1.2)";


    setTimeout(() => {

        bienvenida.style.visibility = "hidden";

        flores.classList.add("activa");

    }, 800);


});



/* =================================
   ABRIR CARTA
================================= */

leerCarta.addEventListener("click", () => {

    carta.classList.add("mostrar");

});



/* =================================
   CERRAR CARTA
================================= */

cerrar.addEventListener("click", () => {

    carta.classList.remove("mostrar");

});



/* =================================
   CERRAR TOCANDO AFUERA
================================= */

carta.addEventListener("click", (evento) => {

    if (evento.target === carta) {

        carta.classList.remove("mostrar");

    }

});