window.onload = inicio;
const people = [
    { nombre: "franzy", precio: 56 },
    { nombre: "kyass", precio: 61 },
    { nombre: "para", precio: 67 },
    { nombre: "xholeda", precio: 72 },
    { nombre: "bocchi", precio: 150 },
    { nombre: "xave", precio: 59 },
    { nombre: "krakow", precio: 55 },
    { nombre: "taiga", precio: 120 },
    { nombre: "notfine", precio: 66 },
    { nombre: "nanachi", precio: 161 }
];
let ordenNewList = [];


function inicio() {
    document.querySelector("body").insertAdjacentHTML("beforeend", `
       <div id="velo">
        <div id="mensaje">
            <img src="../ppl/cerrar.png">
            <div id="texto">Hola como estas</div>
            <img src="">
        </div>
       </div>
        `)
    document.querySelector("body").insertAdjacentHTML("beforeend", `<div class="elemento"></div>`)
    ordenar();
    mostrar();
    document.querySelectorAll("#mensaje img")[0].onclick=cerrar;

}

    
    function cerrar(){
        document.querySelector("#velo").style.display="none";
    }

function ordenar() {
    let ordenList = people.map((valor, indice) => indice);

    do {
        let azar = Math.floor(Math.random() * ordenList.length);
        ordenNewList.push(ordenList[azar])
        ordenList.splice(azar, 1);
    } while (ordenList.length > 0);
    console.log(ordenNewList);
}

function mostrar() {
    for (let k = 0; k < ordenNewList.length; k++) {
        document.querySelector(".elemento").insertAdjacentHTML("beforeend", `<div class="persona" franzy="${ordenNewList[k]}">
            <img src="../ppl/${people[ordenNewList[k]].nombre}">
            <div class="nombre">${people[ordenNewList[k]].nombre}</div>
            </div>
            `)
        document.querySelectorAll(".elemento img")[k].onclick = paginar;
    }
}

function miOrden(valor, indice) {
    return indice;
}

function paginar() {
    let hijos = this.parentNode.parentNode.children;
    for (let k = 0; k < hijos.length; k++)
        if (hijos[k] == this.parentNode) {
            let pricePage = people[ordenNewList[k]].precio;
           document.querySelector("#velo").style.display="flex";
           document.querySelector("#texto").innerHTML=`You've bought ${people[ordenNewList[k]].nombre} for a price of $${pricePage}`
           document.querySelectorAll("#mensaje img")[1].src=`../ppl/${people[ordenNewList[k]].nombre}`
        }



}

