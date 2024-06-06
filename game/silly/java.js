window.onload = inicio;
let reyes = [];
let errorCount = 0;
let cuenta;
let cookies = 0;
let factoryprice = 5;
let catprice = 100;
let factories = 0;
let cats = 0;
let base = 1;
let cpsbase = 0;

function inicio() {
    setInterval(autoloop,1000);
    document.querySelector(".buybox").insertAdjacentHTML("beforeend", `<button id="factory"></button>`)
    document.querySelector(".buybox").insertAdjacentHTML("beforeend", `<div class="factories">0 Factories</div>`)
    document.querySelector(".buybox").insertAdjacentHTML("beforeend", `<button id="cat"></button>`)
    document.querySelector(".buybox").insertAdjacentHTML("beforeend", `<div class="cats">0 Cats</div>`)

    

    document.querySelector("#agregar").onclick = agregar;
    document.querySelector(".info").insertAdjacentHTML("beforeend", `<button id="delete">Delete all</button>`)
    document.querySelector("#delete").onclick=deleteall;
    document.querySelector("#nombre").onkeydown = enter;

    document.querySelector("#thecookie").onclick = pluscookies;
    document.querySelector("#factory").innerHTML = `Factory, ${factoryprice} cookies`;
    document.querySelector("#cat").innerHTML = `Cat, ${catprice} cookies`;
    document.querySelector("#factory").onclick = factoryupgrade;
    document.querySelector("#cat").onclick = catupgrade;
}

function deleteall(){
    document.querySelector("#lista").innerHTML="";
    reyes.length=0;
}

 function autoloop(){ 
        cpsbase=0+(cats*5);
        cookies=cookies+cpsbase;
         document.querySelector(".amount").innerHTML = `${cookies} cookies`
    }


function factoryupgrade() {
    if (cookies >= factoryprice) {
        factories++
        document.querySelector(".factories").innerHTML = `${factories} factories`;
        cookies = cookies - factoryprice;
        document.querySelector(".amount").innerHTML = `${cookies} cookies`
        factoryprice = Math.floor(factoryprice * 1.7);
        document.querySelector("#factory").innerHTML = `Factory, ${factoryprice} cookies`;
       drawfac();
        
    }
}

function drawfac(){
    document.querySelector("#facdrawings").innerHTML="";
    for(k=0;k<factories;k++){
        document.querySelector("#facdrawings").insertAdjacentHTML("beforeend", `<img src="../ppl/Factory.png">`);
    }
}

function drawcat(){
    document.querySelector("#catdrawings").innerHTML="";
    for(k=0;k<cats;k++){
        document.querySelector("#catdrawings").insertAdjacentHTML("beforeend", `<img src="../ppl/Cat.png">`);
    }
}

function catupgrade() {
    if (cookies >= catprice) {
        cats++
        document.querySelector(".cats").innerHTML = `${cats} cats`;
        cookies = cookies - catprice;
        document.querySelector(".amount").innerHTML = `${cookies} cookies`
        catprice = Math.floor(catprice * 1.5);
        document.querySelector("#cat").innerHTML = `Cat, ${catprice} cookies`;
        cpsbase=0+cats;
        document.querySelector("#auto").innerHTML = `Auto Cookies per second:${cpsbase}`;
        drawcat();
    }
}

function pluscookies() {
    base = 1 + factories;
    cookies += base;
    document.querySelector(".amount").innerHTML = `${cookies} cookies`
    if(cookies>=2000){
        document.querySelector("#congrats2").innerHTML=`<div>You're a cookie legend, the final character is cookiemonster.</div><img src="../ppl/Eva.gif">`
    }
}

function enter(e) {
    const tecla = e.key
    if (tecla == "Enter") {
        agregar();
    }
}

function agregar() {
    const resp = document.querySelector("#nombre").value.trim().toLowerCase();
    const existe = reyes.some(a => a == resp);
    if (!existe) {
        reyes.push(resp);
        mostrar();
    }
    vaciar();

}



function mostrar() {
    document.querySelector("#lista").innerHTML = "";
    reyes.forEach(nombre => {
        document.querySelector("#lista").insertAdjacentHTML("beforeend", `<div class="person"> <img class="valida filter" src="../ppl/${nombre}"
        onerror="errores(this)"/> <div class="personame"> ${convertir(nombre)}</div> </div>`);
        const ultimo = document.querySelectorAll(".person").length - 1;
        document.querySelectorAll(".person")[ultimo].onclick = eliminar;
    })
    cuenta = document.querySelectorAll('#lista .valida').length;
    setTimeout(encontrados, 1000);
}

function encontrados() {
    document.querySelector("#collection").innerHTML = `You've found ${cuenta}/21 characters`;
    if (cuenta == 21) {
        document.querySelector("#congrats").innerHTML = `<div> Congrats!! You're a true pro. </div> <img src="../ppl/dog.gif">`;
    }
}
function eliminar() {

    const texto = this.querySelector(".personame").innerText.toLowerCase();
    const buscar = reyes.indexOf(texto);
    reyes.splice(buscar, 1)
    this.remove();
    cuenta = document.querySelectorAll('#lista .valida').length;
    setTimeout(encontrados, 1000);
}

function errores(g) {
    g.src = "../ppl/invalido.jpg";
    g.classList.remove("valida");
    cuenta = document.querySelectorAll('#lista .valida').length;
    console.log(cuenta);

}

function convertir(n) {
    return n.substring(0, 1).toUpperCase() + n.substring(1).toLowerCase();
}

function vaciar() {
    document.querySelector("#nombre").value = "";
    document.querySelector("#nombre").focus();
}