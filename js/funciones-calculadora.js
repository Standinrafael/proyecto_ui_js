var numero1;
var numero2;
var operacion;
var respuesta;

function init(){

    var resultado= document.getElementById("resultado");
    var siete= document.getElementById("siete");
    var ocho= document.getElementById("ocho");
    var nueve= document.getElementById("nueve");
    var division= document.getElementById("division");
    var cuatro= document.getElementById("cuatro");
    var cinco= document.getElementById("cinco");
    var seis= document.getElementById("seis");
    var multiplicacion= document.getElementById("multiplicacion");
    var uno= document.getElementById("uno");
    var dos= document.getElementById("dos");
    var tres= document.getElementById("tres");
    var suma= document.getElementById("suma");
    var cero= document.getElementById("cero");
    var igual= document.getElementById("igual");
    var reset= document.getElementById("reset");
    var resta= document.getElementById("resta");

    //Eventos
    cero.onclick=function(e){
        resultado.textContent=resultado.textContent+"0";
    }

    uno.onclick=function(e){
        resultado.textContent=resultado.textContent+"1";
    }

    dos.onclick=function(e){
        resultado.textContent=resultado.textContent+"2";
    }

    tres.onclick=function(e){
        resultado.textContent=resultado.textContent+"3";
    }

    cuatro.onclick=function(e){
        resultado.textContent=resultado.textContent+"4";
    }

    cinco.onclick=function(e){
        resultado.textContent=resultado.textContent+"5";
    }

    seis.onclick=function(e){
        resultado.textContent=resultado.textContent+"6";
    }

    siete.onclick=function(e){
        resultado.textContent=resultado.textContent+"7";
    }

    ocho.onclick=function(e){
        resultado.textContent=resultado.textContent+"8";
    }

    nueve.onclick=function(e){
        resultado.textContent=resultado.textContent+"9";
    }

    reset.onclick=function(e){
        limpiar();
    }

    suma.onclick=function(e){
        numero1=resultado.textContent;
        operacion="+"
        resultado.textContent=resultado.textContent+("+")
    }

    resta.onclick=function(e){
        numero1=resultado.textContent;
        operacion="-"
        resultado.textContent=resultado.textContent+("-")        
    }

    multiplicacion.onclick=function(e){
        numero1=resultado.textContent;
        operacion="*"
        resultado.textContent=resultado.textContent+("*")        
    }

    division.onclick=function(e){
        numero1=resultado.textContent;
        operacion="/"
        resultado.textContent=resultado.textContent+("/")        
    }

    igual.onclick=function(e){
        numero2=resultado.textContent;
        respuesta=eval(numero2);
        resultado.textContent=respuesta;      
    }
}


function limpiar(){
    resultado.textContent="";
    operacion="";
    numero1=0;
    numero2=0;
    respuesta=0;  
}


