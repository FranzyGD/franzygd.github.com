window.onload=inicio;

let iconos=["play_arrow", "pause"]
let estado=0;
let crono;
let segundos=4;
let minutos=0;

function inicio(){
    document.querySelector(".boton").onclick=cambiarEstado;
}

function cambiarEstado(){
    estado=!estado;
    
    if(estado){
        activar();
    } else{
        desactivar();
    }
    actualizarEstado();
}

function cronometro(){
    if(minutos+segundos>0){
    segundos--;
    segundos=ponerCero(segundos);
    document.querySelectorAll(".numero")[2].innerHTML=String(segundos).substring(0,1)
    document.querySelectorAll(".numero")[3].innerHTML=String(segundos).substring(1,2)
    if(segundos<=0 && minutos==0){
        document.querySelector("audio").play();
        desactivar();
        estado=0;
        actualizarEstado();
    }
}
}

function ponerCero(numero){
    if(String(numero).length<2){
        return "0"+numero;
    } else{
        return numero;
    }
}

function activar(){
    crono=setInterval(cronometro, 1000);
    cronometro();
}

function desactivar(){
    clearInterval(crono);
}

function actualizarEstado(){
    document.querySelector(".material-icons").innerHTML=iconos[Number(estado)];
}