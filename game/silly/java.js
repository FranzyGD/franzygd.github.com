window.onload=inicio;
let reyes =[];
let errorCount=0;
let cuenta;

function inicio(){
    document.querySelector("#agregar").onclick=agregar;
    document.querySelector("#nombre").onkeydown=enter;
}

function enter(e){
    const tecla= e.key
    if(tecla=="Enter"){
        agregar();
    }
}

function agregar(){
    const resp=document.querySelector("#nombre").value.trim().toLowerCase();
    const existe=reyes.some(a => a==resp);
    if(!existe){
        reyes.push(resp);
        mostrar();
    }
        vaciar();   

}



function mostrar(){
    document.querySelector("#lista").innerHTML="";
    reyes.forEach(nombre => {
        document.querySelector("#lista").insertAdjacentHTML("beforeend", `<div class="person"> <img class="valida" src="../ppl/${nombre}"
        onerror="errores(this)"/> <div class="personame"> ${convertir(nombre)}</div> </div>`);
        const ultimo=document.querySelectorAll(".person").length-1;
        document.querySelectorAll(".person")[ultimo].onclick=eliminar;
    })
    cuenta=document.querySelectorAll('#lista .valida').length;
    setTimeout(encontrados,1000);
}

function encontrados(){
    document.querySelector("#collection").innerHTML=`You've found ${cuenta}/11 characters`;
    if(cuenta==11){
        document.querySelector("#congrats").innerHTML=`<div> Congrats!! You're a true pro. </div> <img src="../ppl/dog.gif">`;
    }
}
function eliminar(){

    const texto=this.querySelector(".personame").innerText.toLowerCase();
    const buscar=reyes.indexOf(texto);
    reyes.splice(buscar,1)
    this.remove();
    cuenta=document.querySelectorAll('#lista .valida').length;
    setTimeout(encontrados,1000);
}

function errores(g){
   g.src="../ppl/invalido.jpg";
   g.classList.remove("valida");
   cuenta=document.querySelectorAll('#lista .valida').length;
   console.log(cuenta);

}

function convertir(n){
    return n.substring(0,1).toUpperCase()+n.substring(1).toLowerCase();
}

function vaciar(){
     document.querySelector("#nombre").value="";
     document.querySelector("#nombre").focus();
}