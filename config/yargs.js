const descripcion = {
    alias: 'd',
    demand: true,
    desc: 'Actualizacon del estado de la tarea'
};
const completado = {
    demand: true,
    alias: 'c',
    default: true,
    desc: 'Marca como completada la tarea'
};

const argv = require('yargs')

.command('actualizar', 'Actualiza el estado completado de una tarea', {
        descripcion: descripcion,
        completado: completado
    })
    .command('crear', 'Crea un elemento por hacer', {
        descripcion: descripcion
    })
    .command('borrar', 'Borra un elemento por hacer', {
        descripcion: descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}