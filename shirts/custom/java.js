window.onload = inicio;
let people = ["bocchi", "franzy", "kyass", "notfine", "para", "taiga", "xave", "xholeda", "banana"];
let camisetas = ["camisetaBlanca.png", "camisetaNegra.png"];
let camisetaActual = 0;
let personaActual = Math.floor(Math.random() * people.length);
let Mayusculas = people[personaActual].substring(0, 1).toUpperCase() + people[personaActual].substring(1).toLowerCase();
let textColor = Number(!camisetaActual);
let colores = ["white", "black"];
let size = 2;

function inicio() {
    document.querySelector(".camiseta").insertAdjacentHTML("beforeend", `<img class="dibujo" src="../img10/${camisetas[camisetaActual]}">`)
    document.querySelector(".dibujo").onclick = cambiarCamiseta;
    document.querySelector(".texto").innerHTML = `I ♡ ${Mayusculas}`;
    document.querySelector(".texto").style.color = colores[textColor];
    document.querySelector(".imagen").innerHTML = `<img class="persona" src="../img10/${people[personaActual]}.png">`
    document.querySelector(".persona").onclick = cambiarPersona;
    window.onkeydown = teclado;
    document.querySelector("#imprimir").onclick=imprimir;
}

function teclado(e) {
    let longitud = document.querySelector(".texto").innerHTML.length;
    let excepciones=["Delete", "Backspace", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "Control", "Shift"]
    if (longitud>30 && excepciones.indexOf(e.key)==-1){
        e.preventDefault();
    } else {
        let codigo = e.key;
        if (codigo == "Control") {
            if (size < 3) {
                size += .1;
            }
            document.querySelector(".texto").style.fontSize = size + "em";
            e.preventDefault();
        }
        if (codigo == "Shift") {
            if (size > 1) {
                size -= .1;
            }
            document.querySelector(".texto").style.fontSize = size + "em";
            e.preventDefault();
        }
    }
}

function cambiarCamiseta() {
    camisetaActual = Number(!camisetaActual);
    textColor = Number(!camisetaActual);
    document.querySelector(".dibujo").src = `../img10/${camisetas[camisetaActual]}`;
    document.querySelector(".texto").style.color = colores[textColor];
}

function cambiarPersona() {
    personaActual++
    if (personaActual >= people.length) {
        personaActual = 0;
    }
    Mayusculas = people[personaActual].substring(0, 1).toUpperCase() + people[personaActual].substring(1).toLowerCase();

    document.querySelector(".persona").src = `../img10/${people[personaActual]}.png`;
    let inicios=document.querySelector(".texto").innerHTML.substring(0,3);
    if(inicios=="I ♡" || inicios==""){
    document.querySelector(".texto").innerHTML = `I ♡ ${Mayusculas}`;
    }
}

function imprimir(){
    document.querySelector("#imprimir").style.display="none";
    window.print();
    document.querySelector("#imprimir").style.display="block";
   
    
}