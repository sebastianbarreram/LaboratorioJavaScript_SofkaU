import { data } from "./data.js";

function obtenerPregunta(buscar) {
    let preguntasCategoria = [];
    data.forEach(element => {
        if (element.categoria == buscar) {
            preguntasCategoria.push(element);
        }
    });
    const azar = Math.floor(Math.random() * preguntasCategoria.length);
    preguntasCategoria[azar];
    return preguntasCategoria[azar]
}


sessionStorage.setItem('level', 1);
let datos=obtenerPregunta(sessionStorage.getItem('level'));
console.log(datos);

var pregunta = datos.pregunta;
var resp1 = datos.respuesta1;
var resp2 = datos.respuesta2;
var resp3 = datos.respuesta3;
var resp4 = datos.respuesta4;

const div1 = document.createElement("div");
div1.classList.add("App")

var body = document.getElementsByTagName("body")[0];

var tabla = document.createElement("table");
tabla.classList.add("table", "table-responsive-sm", "table-striped", "table-borderless");

const tblBody = document.createElement("tbody");

//Header de la tabla
const headerTabla = document.createElement("thead");
const trHeader = document.createElement('tr');

var fila1 = document.createElement("th");
fila1.innerText = pregunta;

trHeader.append(fila1)
headerTabla.append(trHeader);
tabla.appendChild(headerTabla);

//Respuesta 1
const trRespuesta1 = document.createElement('tr');
var tdRespuesta1 = document.createElement("td");
tdRespuesta1.classList.add('text-center');

var input1 = document.createElement('input');
input1.classList.add("form-check-input");
input1.setAttribute("type", "checkbox");
input1.id = "1";

let textoResp1 = document.createElement("label");
textoResp1.innerText = resp1;

tdRespuesta1.appendChild(input1);
tdRespuesta1.appendChild(textoResp1);

trRespuesta1.appendChild(tdRespuesta1);
tblBody.appendChild(trRespuesta1);

//Respuesta 2
const trRespuesta2 = document.createElement('tr');
var tdRespuesta2 = document.createElement("td");
tdRespuesta1.classList.add('text-center');

var input2 = document.createElement('input');
input2.classList.add("form-check-input");
input2.setAttribute("type", "checkbox");
input2.id = "2";

let textoResp2 = document.createElement("label");
textoResp2.innerText = resp2;

tdRespuesta2.appendChild(input2);
tdRespuesta2.appendChild(textoResp2);

trRespuesta2.appendChild(tdRespuesta2);
tblBody.appendChild(trRespuesta2);

//Respuesta 3
const trRespuesta3 = document.createElement('tr');
var tdRespuesta3 = document.createElement("td");
tdRespuesta1.classList.add('text-center');

var input3 = document.createElement('input');
input3.classList.add("form-check-input");
input3.setAttribute("type", "checkbox");
input3.id = "3";

let textoResp3 = document.createElement("label");
textoResp3.innerText = resp3;

tdRespuesta3.appendChild(input3);
tdRespuesta3.appendChild(textoResp3);

trRespuesta3.appendChild(tdRespuesta3);
tblBody.appendChild(trRespuesta3);

//Respuesta 4
const trRespuesta4 = document.createElement('tr');
var tdRespuesta4 = document.createElement("td");
tdRespuesta1.classList.add('text-center');

var input4 = document.createElement('input');
input4.classList.add("form-check-input");
input4.setAttribute("type", "checkbox");
input4.id = "4";

let textoResp4 = document.createElement("label");
textoResp4.innerText = resp4;

tdRespuesta4.appendChild(input4);
tdRespuesta4.appendChild(textoResp4);

trRespuesta4.appendChild(tdRespuesta4);
tblBody.appendChild(trRespuesta4);






tabla.appendChild(tblBody);
// appends <table> into <body>
div1.appendChild(tabla);
body.appendChild(div1);



var miCheckbox = document.getElementById('2');
var msg = document.getElementById('msg');

miCheckbox.addEventListener('click', function () {
    if (miCheckbox.checked) {
        msg.innerText = 'El elemento está marcado';
    } else {
        msg.innerText = 'Ahora está desmarcado';
    }
});
