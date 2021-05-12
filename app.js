const moduloTareas = require('./funcionesDeTareas');
const process = require('process');

const comando = process.argv[2];

switch (comando) {
    case 'agregar':
        let titulo = process.argv[3];
        if (!titulo) {
            console.log('Atención - Tienes que escribir un titulo luego de: "agregar".');
            break
        }
        let estado = process.argv[4];
        moduloTareas.agregarTarea(titulo, estado)
        break;
    case 'listar':
        moduloTareas.listarTareas()
        break;
    case 'filtrar':
        moduloTareas.filtrarTareas(process.argv[3])
        break
    case 'deshacer':
        moduloTareas.deshacer()
        break
    case undefined:
        console.log('Atención - Tienes que pasar una acción.');
        break;
    default:
        console.log('No entiendo qué quieres hacer.');
        break;
}