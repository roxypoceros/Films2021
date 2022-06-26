console.log("Hola mundo desde JS");
let container = document.querySelector(".container");
console.log(container);

let table = document.querySelector(".table");
console.log(table);

let links = document.querySelectorAll("a")
console.log(links);

/* recorrer arreglo */
links.forEach(function (link) {
    console.log(link);
})

/* ubicar td */
let celdas = document.querySelectorAll("td");
/* recorrer el arreglo */
celdas.forEach(function (td) {
    /* accion a realizar al recorrer el arreglo 
    AddEventListener recibe 2 valores
    1. evento "click"
    2. función que se ejecutará al interactuar
    */

    td.addEventListener("click", function () {
        console.log("Click");
        /* this retorma el elemento que disparó  la ejecución de la función, 
        el que recibió la interacción */
        console.log(this);
    })
});

// obtener los elementos de la clase close
let btnClose = document.querySelectorAll(".close");

// recorrerlos
btnClose.forEach(function (link) {
    // Agregar un evento click a cada uno de ellos.
    link.addEventListener("click", function (ev) {
        // ev es un objeto que tiene toda la info de un evento cuando sucede
        //para eviar comportamiento por defecto, se pasa ev como argumento de función y se escribe:
        ev.preventDefault();
        /*  console.log("Close!"); */
        //también puede retornar falso

        let content = document.querySelector(".content");

        //quito clases con animaciones
        content.classList.remove("animate__animated");
        content.classList.remove("animate__fadeInDownBig");
        //agrego clases con animaciones
        content.classList.add("animate__fadeOutTopLeft");
        content.classList.add("animate__animated");

        /* Para retrasar la ejecución de una instruccion, ejecutan instrucciones después de cierto tiempo:
        setTimeout: Una sola vez después del tiempo que marcamos
        setInterval Lo hace constantemente cada que pasa el tiempo que marcamos
         */
        setTimeout(function () {
            location.href = "/";
        }, 3000);


        return false;
    });
});

/* quitar clases (estrella de fontawesome) 
let stars =document.querySelectorAll("i");
stars.forEach(function(star){
    star.classList.remove("fa-star")
})*/

/* Agregar clases, usando icono de fontawesome
stars =document.querySelectorAll("i");
stars.forEach(function(star){
    star.classList.add("fa-cloud")
}) */

/* cambiar animación de entrada de .contenedor 

let content = document.querySelector(".content");

//quito clases con animaciones
content.classList.remove("animate__animated");
content.classList.remove("animate__fadeInDownBig");
//agrego clases con animaciones
content.classList.add("animate__fadeOutTopLeft");
content.classList.add("animate__animated");
*/

/* Para movernos entre documentos desde JS usamos objeto location
tiene atributo href y cuando cambiamos su valor nos redirige 
location.href = "/";*/