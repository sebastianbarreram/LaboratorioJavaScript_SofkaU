import { data } from "./data.js";

/**
 *  Esta funcion obtiene la pregunta al azar segun el nivel en el que se encuentre el usuario
 * @param {number} buscar El nivel en el que se encuentre el usuario
 * @returns {object} Retorna el objeto que contiene la pregunta aleatoria que se debe contestar
 */
function obtenerPregunta(buscar) {
    let preguntasCategoria = [];
    data.forEach(element => {
        if (element.categoria == buscar) {
            preguntasCategoria.push(element);
        }
    });
    const azar = Math.floor(Math.random() * preguntasCategoria.length);
    return preguntasCategoria[azar];
}

/**
 *  Esta funcion almacena el puntaje del jugador actual en el localStorage preguntando por su nombre 
 *  si desea que se guarde su puntaje
 * @param {number} puntosJugador Cantidad de puntos que tiene el jugador
 */
function guardarJugador(puntosJugador) {
    let person = prompt("Ingrese su nombre si desea guardar su puntaje:", "");
    if (person == null || person == "") {
        console.log("Usuario canceló el ingreso del nombre");
    } else {
        localStorage.setItem(person, puntosJugador);
    }

}

/**
 *  Esta funcion le da la orden al boton ACEPTAR de verificar si el usuario contesta marcando la opcion 
 *  correcta o si es falsa.
 */
function aceptar() {
    const buscar = sessionStorage.getItem("level");
    let checkboxes = document.querySelectorAll("input:checked")
    let respuestaSeleccionada = [];
    checkboxes.forEach((element) => {
        respuestaSeleccionada.push(parseInt(element.id));
    });
    if (datos.correcta == respuestaSeleccionada[0] && buscar < 5) {
        sessionStorage.setItem("level", parseInt(buscar) + 1);
        let puntaje = parseInt(sessionStorage.getItem("score"));
        document.getElementById("puntaje").innerText = "Puntos acumulados: " + String(puntaje + datos.premio);
        sessionStorage.setItem("score", parseInt(puntaje + datos.premio));
        datos = obtenerPregunta(sessionStorage.getItem("level"));
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
        alert("¡Ganaste, felicitaciones!");
        guardarJugador(puntosJugador);
        location.reload();
    }

    else {
        alert("Respuesta equivocada, tu puntuación es 0");
        guardarJugador(0);
        location.reload();
    }
}

/**
 *  Esta funcion permite abandonar el juego con los puntos acumulados hasta ese momento.
 *  También reinicia el juego. 
 */
function salir() {
    const puntajeJugador = sessionStorage.getItem("score");
    alert("Te restiraste, tu puntuación es: " + puntajeJugador);
    guardarJugador(puntajeJugador);
    location.reload();
}

/**
 *  Esta funcion muestra todos los elementos de la pregunta usando la estructura DOM.
 *  Tambien muestra el historial de jugadores
 * @param {object} dataTabla Elementos de la pregunta que se desea mostrar
 */
function mostrarTabla(dataTabla) {
    let pregunta = dataTabla.pregunta;
    let resp1 = dataTabla.respuesta1;
    let resp2 = dataTabla.respuesta2;
    let resp3 = dataTabla.respuesta3;
    let resp4 = dataTabla.respuesta4;

    const div1 = document.createElement("div");
    div1.classList.add("App");

    let nivelActual = document.createElement("h2");
    nivelActual.innerText = "Nivel " + sessionStorage.getItem("level");
    nivelActual.id = "nivelActual";

    let puntaje = document.createElement("div");
    puntaje.innerText = "Puntos acumulados: 0";
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
    const trHeader = document.createElement("tr");

    let fila1 = document.createElement("th");
    fila1.innerText = pregunta;
    fila1.id = "pregunta";

    trHeader.append(fila1)
    headerTabla.append(trHeader);
    tabla.appendChild(headerTabla);

    //Respuesta 1
    const trRespuesta1 = document.createElement("tr");
    let tdRespuesta1 = document.createElement("td");
    tdRespuesta1.classList.add("text-center");

    let input1 = document.createElement("input");
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
    const trRespuesta2 = document.createElement("tr");
    let tdRespuesta2 = document.createElement("td");
    tdRespuesta1.classList.add("text-center");

    let input2 = document.createElement("input");
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
    const trRespuesta3 = document.createElement("tr");
    let tdRespuesta3 = document.createElement("td");
    tdRespuesta3.classList.add("text-center");

    let input3 = document.createElement("input");
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
    const trRespuesta4 = document.createElement("tr");
    let tdRespuesta4 = document.createElement("td");
    tdRespuesta1.classList.add("text-center");

    let input4 = document.createElement("input");
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
    const trBotonAceptar = document.createElement("tr");
    let tdBotonAceptar = document.createElement("td");
    tdBotonAceptar.classList.add("text-center", "fa-5x");

    let botonAceptar = document.createElement("button");
    botonAceptar.classList.add("btn", "btn-success", "btn-block");
    botonAceptar.setAttribute("type", "button");
    botonAceptar.id = "aceptar";
    botonAceptar.innerHTML = "ACEPTAR";
    botonAceptar.addEventListener("click", aceptar);

    let botonSalir = document.createElement("button");
    botonSalir.classList.add("btn", "btn-danger", "btn-block");
    botonSalir.setAttribute("type", "button");
    botonSalir.id = "salir";
    botonSalir.innerHTML = "SALIR";
    botonSalir.addEventListener("click", salir);

    tdBotonAceptar.appendChild(botonAceptar);
    tdBotonAceptar.appendChild(botonSalir);

    trBotonAceptar.appendChild(tdBotonAceptar);
    tblBody.appendChild(trBotonAceptar);

    tabla.appendChild(tblBody);

    div1.appendChild(nivelActual);
    div1.appendChild(puntaje);
    div1.appendChild(premio);
    div1.appendChild(tabla);
    body.appendChild(div1);

    let keys = Object.keys(localStorage);
    const historial = document.createElement("h5");
    historial.innerText = "Historial de jugadores";
    div1.appendChild(historial);
    keys.forEach(element => {
        if (parseInt(localStorage.getItem(element)) || localStorage.getItem(element) == 0) {
            let aux = document.createElement("div");
            aux.innerText = element + ": " + localStorage.getItem(element);
            div1.appendChild(aux);
        }
    });
}

sessionStorage.setItem("level", 1);
let nivel = sessionStorage.getItem("level");
sessionStorage.setItem("score", 0);
let datos = obtenerPregunta(nivel);
mostrarTabla(datos);

