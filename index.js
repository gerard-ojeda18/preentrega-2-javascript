const mascotas = [
    {
        nombre: "Puppy",
        animal: "Perro",
        imagen: "https://i.servimg.com/u/f36/15/16/81/39/11111110.jpg",
        raza: "Ovejero alemán",
        edad: "3" 
    },
    {
        nombre: "Luna",
        animal: "Gato",
        imagen: "https://naukas.com/fx/uploads/2017/03/cat-2013494_1920-640x359.jpg",
        raza: "Tricolor (naranja, blanco, negro)",
        edad: "1" 
    },
    {
        nombre: "Tobi",
        animal: "Conejo",
        imagen: "https://rabbitinsider.com/wp-content/uploads/2021/09/American-Rabbit-Characteristics.jpg",
        raza: "American rabbit (blanco)",
        edad: "2" 
    },
];

// Función para agregar mascotas
const agregarMascotas = ({ nombre, animal, imagen, raza, edad }) => {
    mascotas.push({ nombre, animal, imagen, raza, edad });
};

// Función para mostrar todas las mascotas
const mostrarMascotas = () => {
    let mensajeInformativo = "";
    for (let mascota of mascotas) {
        mensajeInformativo += `
        ANIMAL : ${mascota.animal}
        Nombre : ${mascota.nombre}
        Imagen : ${mascota.imagen}
        Raza : ${mascota.raza}
        Edad: ${mascota.edad}\n
        `;
    }
    console.log(mensajeInformativo);
};

// Función para solicitar datos de una nueva mascota
const solicitarDatosDeLaMascota = () => {
    let nombre = prompt("Por favor ingresa el nombre de la mascota");
    let animal = prompt("Por favor ingresa el tipo de mascota que precises");
    let imagen = prompt("Por favor ingresa la URL de la imagen");
    let raza = prompt("Por favor ingresa la raza de la mascota");
    let edad = prompt("Por favor ingresa la edad de la mascota");

    if (nombre && animal && imagen && raza && edad) {
        return { nombre, animal, imagen, raza, edad };
    } else {
        alert("Por favor ingresa datos válidos");
    }
};

// Función para eliminar una mascota
const eliminarMascota = (animal) => {
    const indice = mascotas.findIndex((mascota) => mascota.animal.toLowerCase() === animal.toLowerCase());

    if (indice !== -1) {
        const mascotaEliminada = mascotas[indice].nombre; 
        mascotas.splice(indice, 1);
        console.log(`Mascota ${mascotaEliminada} eliminada con éxito`);
        mostrarMascotas(); 
    } else {
        alert(`Mascota ${animal} no fue encontrada`);
    }
};

// Función para encontrar mascotas más jóvenes
const encontrarMascotasMasJovenes = (edadMaxima) => {
    const mascotasJovenes = mascotas.filter((mascota) => parseInt(mascota.edad) < edadMaxima);

    if (mascotasJovenes.length > 0) {
        console.log("Mascotas más jóvenes que " + edadMaxima + ":");
        mascotasJovenes.map((mascota) => {
            console.log(mascota.nombre);
        });
    } else {
        console.log("No hay mascotas más jóvenes que :" + edadMaxima);
    }
};

// Función principal para ejecutar el menú
const main = () => {
    let opcion = "";
    while (opcion !== "5") {
        opcion = prompt("Selecciona una opción: \n1. Agregar Mascotas \n2. Ver Mascotas \n3. Eliminar Mascota \n4. Mascotas Jóvenes \n5. Salir");

        switch (opcion) {
            case "1":
                const nuevaMascota = solicitarDatosDeLaMascota();
                if (nuevaMascota) {
                    agregarMascotas(nuevaMascota);
                }
                break;

            case "2":
                mostrarMascotas();
                break;

            case "3":
                const mascotaAEliminar = prompt("Ingresa el tipo de animal de la mascota a eliminar");
                eliminarMascota(mascotaAEliminar);
                break;

            case "4":
                const edadMaxima = parseFloat(prompt("Ingresa la edad máxima para encontrar mascotas jóvenes"));
                encontrarMascotasMasJovenes(edadMaxima);
                break;

            case "5":
                console.log("Saliendo...");
                break;

            default:
                alert("Opción inválida. Por favor selecciona de nuevo");
        }
    }
};

main();
