# 🎁 Amigo Secreto

Un pequeño proyecto en JavaScript que permite agregar nombres a una lista y sortear aleatoriamente un "Amigo Secreto".

## 📌 Características

- [x] Agregar nombres a la lista de participantes.

- [x] Validación para evitar entradas vacías.

- [x] Mostrar dinámicamente la lista de amigos agregados.

- [x] Sortear un amigo al azar.

- [x] Limpiar la lista después del sorteo, manteniendo el resultado en pantalla.

## 🚀 Tecnologías Utilizadas

* HTML

* CSS

* JavaScript (DOM Manipulation, Math.random(), Arrays)

## 📂 Estructura del Proyecto
```
📁 amigo-secreto/
│── 📄 index.html      # Página principal
│── 📄 style.css       # Estilos CSS
│── 📄 app.js          # Lógica del sorteo
│── 📁 assets/         # Imágenes y recursos
```

## 📜 Uso

Clona este repositorio:
```
git clone https://github.com/tu-usuario/amigo-secreto.git
```

> Abre index.html en tu navegador.

> Ingresa los nombres en el campo de texto y agrégalos a la lista.

> Presiona el botón **"Sortear amigo"** para obtener un resultado aleatorio.

## 🛠 Funcionalidad en app.js
<details>
<Summary>Agregar un amigo</Summary>
  
```
function agregarAmigo() {
    let inputElement = document.getElementById("amigo");
    let nombre = inputElement.value.trim();
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }
    amigos.push(nombre);
    inputElement.value = "";
    actualizarLista();
}
```

</details>
<details>
  
<Summary>Sortear un amigo</Summary>

```
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];
    document.getElementById("resultado").innerHTML = `<li>${amigoSorteado}</li>`;
    amigos = [];
    document.getElementById("listaAmigos").innerHTML = "";
}
```

</details>

## 📌 Contribuciones

¡Las contribuciones son bienvenidas! Si deseas mejorar este proyecto, por favor sigue estos pasos:

> Realiza un fork del repositorio.

> Crea una nueva rama (git checkout -b feature-nueva).

> Realiza tus cambios y haz un commit (git commit -m "Añadir nueva funcionalidad").

> Sube los cambios (git push origin feature-nueva).

> Abre un Pull Request en GitHub.

## 📄 Licencia

Este proyecto está bajo la licencia MIT - ¡Siéntete libre de usarlo y mejorarlo! 🎉

### 💡¡Gracias por visitar este repositorio! 😊

