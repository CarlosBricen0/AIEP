


function registro() {
    let rut , primerNombre ,segundoNombre , primerApe, segundoApe  , edad , nacimiento ,sexo , actividad , curso, semestre, comentario = null;
    
    rut = document.getElementById("txtRut");
    primerNombre = document.getElementById("txtPrimNombre");
    segundoNombre = document.getElementById("txtSegNombre");
    primerApe = document.getElementById("txtPrimApe");
    segundoApe = document.getElementById("txtSegApe");
    edad = document.getElementById("txtEdad");
    nacimiento  = document.getElementById("inputNacimiento");
    sexo  = document.getElementById("selectSexo");
    actividad  = document.getElementById("selectActividad");
    curso  = document.getElementById("selectCurso");
    semestre  = document.getElementById("selectSemestre");
    comentario  = document.getElementById("txtComentario");
    
    if(primerNombre.value && segundoNombre.value && primerApe.value && segundoApe.value && edad.value){
        primerNombre.style.backgroundColor ="green";
        segundoNombre.style.backgroundColor ="green";
        primerApe.style.backgroundColor ="green";
        segundoApe.style.backgroundColor ="green";
        edad.style.backgroundColor="green";

        validaGrupo( parseInt( edad.value));
        alert("RUT : " + rut.value + ". PRIMER NOMBRE : " + primerNombre.value + ". SEGUNDO NOMBRE : "+segundoNombre.value + ". PRIMER APELLIDO : "+ primerApe.value + 
        ". SEGUNDO APELLIDO : "+segundoApe.value + ". EDAD : " + edad.value + ". NACIMIENTO : " + nacimiento.value +". SEXO : " +sexo.value + ". ¿ACTIVIDAD ADICIONAL? : "
        + actividad.value + ". CURSO : " + curso.value +". SEMESTRE: " + semestre.value + ". COMENTARIO : " +comentario.value );


    }
    else{
        primerNombre.style.backgroundColor ="red";
        segundoNombre.style.backgroundColor ="red";
        primerApe.style.backgroundColor ="red";
        segundoApe.style.backgroundColor ="red";
        edad.style.backgroundColor="red";
    }
    


}


function validaGrupo(edad){
    

    let resultado  , txtGroup = null;
    txtGroup = document.getElementById("txtGrupo");

   /*  switch(edad){ */
    
    
    
    
    if (edad >=18 && edad<=25){
        resultado = "Grupo A";
        
    }
    if (edad >=26 && edad<=35){
        
        resultado = "Grupo B";
    }
    if (edad >=35 && edad<=45){
        
        resultado = "Grupo C";
    }
    if (edad >=45 && edad<=55){
        
        resultado = "Grupo D";
    }
    if (edad <=17){
        
        resultado = "No Aplica";
    }
    
    if (edad >55){
        
        resultado = "Grupo E";
    }
                                    
    /* } */
    txtGroup.value = resultado;

}

function limpiar(){
    
    let   primerNombre ,segundoNombre , primerApe, segungoApe = null;
    primerNombre = document.getElementById("txtPrimNombre");
    segundoNombre = document.getElementById("txtSegNombre");
    primerApe = document.getElementById("txtPrimApe");
    segungoApe = document.getElementById("txtSegApe");
    var elements = document.querySelectorAll("input[type='text']");
    primerNombre.style.backgroundColor ="rgb(230, 243, 236)";
    segundoNombre.style.backgroundColor ="rgb(230, 243, 236)";
    primerApe.style.backgroundColor ="rgb(230, 243, 236)";
    segungoApe.style.backgroundColor ="rgb(230, 243, 236)";
    

    if(!primerNombre.value && !segundoNombre.value && !primerApe.value && !segungoApe.value ){
        alert("Campos de Nombre Limpios")
    }
    if(elements.length>0){
        for (var i = 0; i < elements.length; i++) {
            elements[i].value="";
       }
       alert("Se han limpiado los campos")
    }
   



}