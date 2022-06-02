import { data } from "./data.js";

function obtenerPregunta(buscar) {
    let preguntasCategoria = [];
    data.forEach(element => {
        if (element.categoria == buscar) {
            preguntasCategoria.push(element);
        }
    });
    const azar = Math.floor(Math.random() * preguntasCategoria.length);
    return preguntasCategoria[azar]
}

function guardarJugador(puntosJugador) {
    let text;
    let person = prompt("Ingrese su nombre si desea guardar su puntaje:", "");
    if (person == null || person == "") {
        text = "User cancelled the prompt.";
    } else {
        localStorage.setItem(person, puntosJugador);
    }

}

function aceptar() {
    const buscar = sessionStorage.getItem('level');
    let checkboxes = document.querySelectorAll("input:checked")
    let respuestaSeleccionada = [];
    checkboxes.forEach((element) => {
        respuestaSeleccionada.push(parseInt(element.id));
    });
    console.log("respuesta elegida", respuestaSeleccionada[0]);
    console.log("Respuesta correcta", datos.correcta)
    if (datos.correcta == respuestaSeleccionada[0] && buscar < 5) {
        console.log("Respuesta correcta!!!!!!!!");
        sessionStorage.setItem('level', parseInt(buscar) + 1);
        let puntaje = parseInt(sessionStorage.getItem("score"));
        document.getElementById("puntaje").innerText = "Puntos acumulados: " + String(puntaje + datos.premio);
        sessionStorage.setItem("score", parseInt(puntaje + datos.premio));
        datos = obtenerPregunta(sessionStorage.getItem('level'));
        console.log("respuesta en aceptar: ", datos);
        document.getElementById("nivelActual").innerText = "Nivel " + String(parseInt(buscar) + 1);
        document.getElementById("premio").innerText = "Premio pregunta actual: " + datos.premio;
        document.getElementById("pregunta").innerText = datos.pregunta;
        document.getElementById("respuesta1").innerText = datos.respuesta1;
        document.getElementById("respuesta2").innerText = datos.respuesta2;
        document.getElementById("respuesta3").innerText = datos.respuesta3;
        document.getElementById("respuesta4").innerText = datos.respuesta4;
        document.getElementById(respuestaSeleccionada[0]).checked = false;
    }

    else if (buscar == 5 && datos.correcta == respuestaSeleccionada[0]) {
        let puntaje = parseInt(sessionStorage.getItem("score"));
        const puntosJugador = puntaje + datos.premio;
        sessionStorage.setItem("score", parseInt(puntaje + datos.premio));
        alert("Ganaste, felicitaciones!");
        guardarJugador(puntosJugador);
        location.reload();
    }

    else {
        console.log("RESPUESTA INCORRECTA");
        alert("Respuesta equivocada,Tu puntuación es 0");
        guardarJugador(0);
        location.reload();

    }
}

function salir() {
    const puntajeJugador = sessionStorage.getItem("score");
    alert("Te restiraste,Tu puntuación es: " + puntajeJugador);
    guardarJugador(puntajeJugador);
    location.reload();
}

function mostrarTabla(datos) {
    let pregunta = datos.pregunta;
    let resp1 = datos.respuesta1;
    let resp2 = datos.respuesta2;
    let resp3 = datos.respuesta3;
    let resp4 = datos.respuesta4;

    const div1 = document.createElement("div");
    div1.classList.add("App");

    let nivelActual = document.createElement("h2");
    nivelActual.innerText = "Nivel " + sessionStorage.getItem("level");
    nivelActual.id = "nivelActual";

    let puntaje = document.createElement("div");
    puntaje.innerText = "Puntos acumlados: 0"
    puntaje.id = "puntaje";

    let premio = document.createElement("div");
    premio.innerText = "Premio pregunta actual: 10";
    premio.id = "premio";

    let body = document.getElementsByTagName("body")[0];

    let tabla = document.createElement("table");
    tabla.classList.add("table", "table-responsive-sm", "table-striped", "table-borderless");

    const tblBody = document.createElement("tbody");

    //Pregunta
    const headerTabla = document.createElement("thead");
    const trHeader = document.createElement('tr');

    let fila1 = document.createElement("th");
    fila1.innerText = pregunta;
    fila1.id = "pregunta";

    trHeader.append(fila1)
    headerTabla.append(trHeader);
    tabla.appendChild(headerTabla);

    //Respuesta 1
    const trRespuesta1 = document.createElement('tr');
    let tdRespuesta1 = document.createElement("td");
    tdRespuesta1.classList.add('text-center');

    let input1 = document.createElement('input');
    input1.classList.add("form-check-input");
    input1.setAttribute("type", "checkbox");
    input1.id = "1";

    let textoResp1 = document.createElement("label");
    textoResp1.innerText = resp1;
    textoResp1.id = "respuesta1";

    tdRespuesta1.appendChild(input1);
    tdRespuesta1.appendChild(textoResp1);

    trRespuesta1.appendChild(tdRespuesta1);
    tblBody.appendChild(trRespuesta1);

    //Respuesta 2
    const trRespuesta2 = document.createElement('tr');
    let tdRespuesta2 = document.createElement("td");
    tdRespuesta1.classList.add('text-center');

    let input2 = document.createElement('input');
    input2.classList.add("form-check-input");
    input2.setAttribute("type", "checkbox");
    input2.id = "2";

    let textoResp2 = document.createElement("label");
    textoResp2.innerText = resp2;
    textoResp2.id = "respuesta2";

    tdRespuesta2.appendChild(input2);
    tdRespuesta2.appendChild(textoResp2);

    trRespuesta2.appendChild(tdRespuesta2);
    tblBody.appendChild(trRespuesta2);

    //Respuesta 3
    const trRespuesta3 = document.createElement('tr');
    let tdRespuesta3 = document.createElement("td");
    tdRespuesta3.classList.add('text-center');

    let input3 = document.createElement('input');
    input3.classList.add("form-check-input");
    input3.setAttribute("type", "checkbox");
    input3.id = "3";

    let textoResp3 = document.createElement("label");
    textoResp3.innerText = resp3;
    textoResp3.id = "respuesta3";

    tdRespuesta3.appendChild(input3);
    tdRespuesta3.appendChild(textoResp3);

    trRespuesta3.appendChild(tdRespuesta3);
    tblBody.appendChild(trRespuesta3);

    //Respuesta 4
    const trRespuesta4 = document.createElement('tr');
    let tdRespuesta4 = document.createElement("td");
    tdRespuesta1.classList.add('text-center');

    let input4 = document.createElement('input');
    input4.classList.add("form-check-input");
    input4.setAttribute("type", "checkbox");
    input4.id = "4";

    let textoResp4 = document.createElement("label");
    textoResp4.innerText = resp4;
    textoResp4.id = "respuesta4";

    tdRespuesta4.appendChild(input4);
    tdRespuesta4.appendChild(textoResp4);

    trRespuesta4.appendChild(tdRespuesta4);
    tblBody.appendChild(trRespuesta4);

    //Botones
    const trBotonAceptar = document.createElement('tr');
    let tdBotonAceptar = document.createElement("td");
    tdBotonAceptar.classList.add('text-center', 'fa-5x');

    let botonAceptar = document.createElement('button');
    botonAceptar.classList.add("btn", "btn-success", "btn-block");
    botonAceptar.setAttribute("type", "button");
    botonAceptar.id = "aceptar";
    botonAceptar.innerHTML = "ACEPTAR"
    botonAceptar.addEventListener("click", aceptar);

    let botonSalir = document.createElement('button');
    botonSalir.classList.add("btn", "btn-success", "btn-block");
    botonSalir.setAttribute("type", "button");
    botonSalir.id = "salir";
    botonSalir.innerHTML = "SALIR"
    botonSalir.addEventListener("click", salir)

    tdBotonAceptar.appendChild(botonAceptar);
    tdBotonAceptar.appendChild(botonSalir);

    trBotonAceptar.appendChild(tdBotonAceptar);
    tblBody.appendChild(trBotonAceptar);

    tabla.appendChild(tblBody);
    // appends <table> into <body>
    div1.appendChild(nivelActual);
    div1.appendChild(puntaje);
    div1.appendChild(premio);
    div1.appendChild(tabla);
    body.appendChild(div1);

    console.log(localStorage);
    let keys = Object.keys(localStorage);
    keys.forEach(element => {
        if (parseInt(localStorage.getItem(element)) || localStorage.getItem(element) == 0) {
            console.log(localStorage.getItem(element));
            let aux = element;
            aux = document.createElement("div");
            aux.innerText = element + ": " + localStorage.getItem(element);
            div1.appendChild(aux);
        }
    });
}

sessionStorage.setItem('level', 1);
let nivel = sessionStorage.getItem('level');
sessionStorage.setItem('score', 0)
let datos = obtenerPregunta(nivel);
mostrarTabla(datos);
console.log(datos);
