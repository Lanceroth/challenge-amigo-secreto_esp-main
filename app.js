// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function agregarAmigo() {
    let inputElement = document.getElementById("amigo"); // Capturar el input
    let nombre = inputElement.value.trim(); // Obtener el valor y eliminar espacios en blanco

    // Validar que el campo no esté vacío
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    amigos.push(nombre); // Agregar al array

    inputElement.value = ""; // Limpiar el campo de entrada

    actualizarLista();
    
}

function actualizarLista() {
    let listaElement = document.getElementById("listaAmigos"); // Obtener la lista
    listaElement.innerHTML = ""; // Limpiar la lista antes de actualizar

    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li"); // Crear un nuevo elemento <li>
        li.textContent = amigos[i]; // Asignar el nombre del amigo
        listaElement.appendChild(li); // Agregar el <li> a la lista
    }

    /*    amigos.forEach(nombre => {
        let li = document.createElement("li"); // Crear un nuevo elemento <li>
        li.textContent = nombre; // Asignar el nombre del amigo
        listaElement.appendChild(li); // Agregar el <li> a la lista
    });*/

}


function sortearAmigo() {
    // Validar que haya amigos en la lista
    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }

    // Generar un índice aleatorio
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtener el nombre sorteado
    let amigoSorteado = amigos[indiceAleatorio];

    // Mostrar el resultado en el HTML
    let resultadoElement = document.getElementById("resultado");
    resultadoElement.innerHTML = `<li>El amigo secreto sorteado es: ${amigoSorteado}</li>`;

    // Limpiar la lista de amigos
    amigos = [];

    // Limpiar la lista en el HTML
    let listaElement = document.getElementById("listaAmigos");
    listaElement.innerHTML = "";
}




