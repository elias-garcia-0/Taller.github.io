document.addEventListener("DOMContentLoaded", () => {
    const getDogImageButton = document.getElementById("getDogImage");
    const dogImageContainer = document.getElementById("dogImageContainer");

    getDogImageButton.addEventListener("click", () => {
        // URL de la API
        const apiUrl = "https://dog.ceo/api/breeds/image/random";

        // Realizar una solicitud GET a la API
        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
                if (data && data.message) {
                    const imageUrl = data.message;
                    // Crear una imagen y mostrarla
                    const dogImage = document.createElement("img");
                    dogImage.src = imageUrl;
                    dogImage.alt = "Perro Aleatorio";
                    dogImageContainer.innerHTML = ""; // Borrar imagen anterior
                    dogImageContainer.appendChild(dogImage);
                } else {
                    alert("No se pudo obtener la imagen del perro.");
                }
            })
            .catch((error) => {
                console.error("Hubo un error al obtener la imagen del perro:", error);
            });
    });
});
