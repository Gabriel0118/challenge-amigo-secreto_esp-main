let listaAmigos = [];

function agregarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nombreAmigo = inputAmigo.value.trim(); 

    if (nombreAmigo === "") {
        alert("Por favor, ingrese un nombre válido.");
    } else {
        listaAmigos.push(nombreAmigo);

        mostrarListaAmigos();

        inputAmigo.value = "";
    }
}

function mostrarListaAmigos() {
    const listaElement = document.getElementById('listaAmigos');
    listaElement.innerHTML = ""; 

    listaAmigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaElement.appendChild(li);
    });
}

function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    const amigoSeleccionado = listaAmigos[indiceAleatorio];

    const resultadoElement = document.getElementById('resultado');
    resultadoElement.innerHTML = `¡El amigo secreto es: <strong>${amigoSeleccionado}</strong>!`;

    listaAmigos = [];
    mostrarListaAmigos(); 
}
