/* SIMULADOR GESTIÓN DE TURNOS */

/* Objeto */
class Turno {
    constructor(paciente, consulta, fecha) {
        this.paciente = paciente;
        this.consulta = consulta;
        this.fecha = fecha;
    }
}

const turnos = []; // Un arrays para almacenar info de la clase Turno.

/* Funciones para agregar, buscar y mostrar los turnos */

function agregarTurno() { 
    const paciente = prompt("Ingrese su nombre:");
    const consulta = prompt("Ingrese el tipo de consulta:");
    const fecha = prompt("Ingrese la fecha del turno (DD/MM/YY):");

    const nuevoTurno = new Turno(paciente, consulta, fecha);
    turnos.push(nuevoTurno);
    alert("Turno agregado correctamente.");
}

/* Método de búsqueda y filtrado */
function buscarTurnosPorNombre() {
    const nombre = prompt("Ingrese el nombre del paciente:");
    const turnosEncontrados = turnos.filter(turno => turno.paciente === nombre);
    mostrarTurnosEncontrados(turnosEncontrados);
}

function mostrarTurnosEncontrados(turnosEncontrados) {
    if (turnosEncontrados.length === 0) {
        alert("No se encontraron turnos.");
    } else {
        turnosEncontrados.forEach(turno => {
            alert(`Turno encontrado:\nPaciente: ${turno.paciente}\nConsulta: ${turno.consulta}\nFecha: ${turno.fecha}`);
        });
    }
}

function mostrarTodosLosTurnos() {
    if (turnos.length === 0) {
        alert("No hay turnos registrados.");
    } else {
        alert("Listado de turnos:");
        turnos.forEach(turno => {
            alert(`Paciente: ${turno.paciente}\nConsulta: ${turno.consulta}\nFecha: ${turno.fecha}`);
        });
    }
}

/* Bucle para crear un menú de opciones para el usuario */

while (true) {
    const opcion = parseInt(prompt("Seleccione una opción:\n1. Agregar turno\n2. Buscar por nombre\n3. Mostrar todos los turnos\n4. Salir"));

    switch (opcion) {
        case 1:
            agregarTurno();
            break;
        case 2:
            buscarTurnosPorNombre();
            break;
        case 3:
            mostrarTodosLosTurnos();
            break;
        case 4:
            alert("¡Hasta la próxima!");
            break;
        default:
            alert("Opción no válida. Por favor, elija una opción disponible.");
            break;
    }
}