//Cargar datos de JSON en localstorage

//Destinos
fetch("../JSON/destinos.json")
    .then(response => response.json())
    .then(data => {
        const destinos = data.destinos
        localStorage.setItem('destinos', JSON.stringify(destinos));
    })
    .catch(error => {
        console.error("Hubo un error al cargar los destinos:", error);
    });
