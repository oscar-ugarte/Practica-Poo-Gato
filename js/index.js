//Preparando elementos:
const foto = document.getElementById('foto');
const nombre = document.getElementById('nombre');
const dueña = document.getElementById('dueña');
const raza = document.getElementById('raza');
const edad = document.getElementById('edad');
const actividades = document.getElementById('actividades');
const comida = document.getElementById('comida');
const visitas = document.getElementById('visitas');
const vacunas = document.getElementById('vacunas');

//Clase de Gato
class Animal
{
    constructor(foto, nombre, dueña, raza, edad, actividades, comida, visitasAlVeterinario, vacunas)
    {
        this.foto = foto;
        this.nombre = nombre;
        this.dueña = dueña;
        this.raza = raza;
        this.edad = edad;
        this.actividades = actividades;
        this.comida = comida ;
        this.visitasAlVeterinario = visitasAlVeterinario;
        this.vacunas = vacunas;
    }
}

function mostrarDatosGato( gato )
{
    console.log(gato);
    foto.setAttribute("src", gato.foto );
    nombre.innerHTML = gato.nombre;
    dueña.innerHTML += gato.dueña;
    raza.innerHTML += gato.raza;
    edad.innerHTML += gato.edad;
    actividades.innerHTML += gato.actividades;
    comida.innerHTML += gato.comida;
    visitas.innerHTML += gato.visitasAlVeterinario;
    vacunas.innerHTML += gato.vacunas;
}

let china = new Animal( "../imagen/china.png" ,"China", "Gisela Flores", "Atigrado", "Desconocida", "Acompañar a su dueña en las clases" ,"Pescado", "2 al mes","Esquema completo" );

mostrarDatosGato(china);