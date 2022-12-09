function prueba(){

    var valor='Valor';

    let valorSRC=document.getElementById('img1').src
    const IVA=12;
    console.log(valor)
    console.log(IVA)
    console.log(valorSRC)

    if(valorSRC.includes('indice1.jpg')){

    }

    //Arreglos
    let dias=["Lunes","Martes","Miercoles","Jueves"]
    dias.push("Jueves")
    console.log(dias)

    /* Desestructuracion: tomar un objeto y partirlo */
    const diasCompletos=["Lunes","Martes","Miercoles","Jueves","Viernes","Sabado","Domingo"]
    const [dia1,dia2,dia3,dia4,dia5,dia6,dia7]=diasCompletos
    console.log(dia5)

    const [d1,d2]=["Lunes","Martes","Miercoles","Jueves","Viernes","Sabado","Domingo"]
    console.log(d1)
    console.log(d2)

    /* Manejo de objetos*/
    const jorge={
        cedula: "1105166299" ,
        nombre: "Jorge" ,
        apellido: "Sanchez" ,
        edad: 23 ,
        ciudad: "Loja",
        direccion: {
            calle: "Napo",
            numero: "zzz-66",
            referencia: "frente a Esmeraldas"
        },
        materia:{
            nombre: "PWEB",
            creditos:6


        }
    }

    console.log(jorge)

    /* Desestructuracion de objetos*/
    const {cedula, ciudad}= jorge
    console.log(cedula)
    console.log(ciudad)

   const{materia}=jorge
   console.log(materia)

   const{creditos, nombre}=materia
   console.log(creditos)
   console.log(nombre)

   const {edad,ciudad1,hobby}={
    cedula: "1105166299" ,
    nombre: "Jorge" ,
    apellido: "Sanchez" ,
    edad: 23 ,
    ciudad: "Loja",
    
    }

    console.log(edad)
    console.log(ciudad1)
    console.log(hobby)

    let val= this.funcion2()
    console.log(val)
}

function funcion2(){
    console.log("Segunda funcion")
    return "valor"

}

