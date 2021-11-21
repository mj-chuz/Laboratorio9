const cantidadPreguntas = document.getElementById("select-cantidad-preguntas");

function limpiarCorrecciones()
{
    for(let indice = 1; indice <= 20; indice++){
        let desplegarNumeroPreguntas = document.getElementById("correccion" + indice);
        desplegarNumeroPreguntas.style.display= "none";  
    }
}

function aparecerCorrecciones()
{
    for(let indice = 1; indice <= 20; indice++){
        let desplegarNumeroPreguntas = document.getElementById("correccion" + indice);
        desplegarNumeroPreguntas.style.display= "block";  
    }
}

function desplegarPreguntas()
{
    limpiarCorrecciones();
    for(let indice = 1; indice <= cantidadPreguntas.value; indice++){

        let desplegarNumeroPreguntas = document.getElementById("pregunta" + indice);
        desplegarNumeroPreguntas.style.display= "block";
        
    }
    let preguntaEscondida = Number(cantidadPreguntas.value) + 1;
    console.log(preguntaEscondida)
    for(let indice = preguntaEscondida; indice <= 20; indice++){
        let desplegarNumeroPreguntas = document.getElementById("pregunta" + indice);
        desplegarNumeroPreguntas.style.display = "none";

    }
}

const respuestas = [26, 37, 40, 32, 368, 56, -4, -3, 25, 22, 10, 54, 17, 15, 7, 42, 162, 89, 1, 2];

function revisarRespuestas(){
    aparecerCorrecciones()
	var correct = 0;

    for(var indice = 1; indice <= 20; indice++)
    {
        let indiceRespuesta = indice - 1;
        if (document.getElementById("respuesta"+indice).value == respuestas[indiceRespuesta]) {
            document.getElementById("correccion"+indice).innerHTML = "Correcto!";
            correct = correct + 1;
        }else{
            document.getElementById("correccion"+indice).innerHTML = "Incorrecto!";
        }
    }
}

function darRespuestas()
{
    aparecerCorrecciones()
    for(var indice = 1; indice <= 20; indice++)
    {
        let indiceRespuesta = indice - 1;
        document.getElementById("correccion" + indice).innerHTML = "La respuesta correcta es " + respuestas[indiceRespuesta];
    }
}
