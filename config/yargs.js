const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
};

const completado = {
    alias: 'c',
    default: true,
    desc: 'Actualizar estado de la tarea'
}

const argv = require('yargs')
    .command('crear', 'Crea una tarea por hacer', {descripcion})
    .command('actualizar', 'Actualiza el estado completado de la tarea', {
        descripcion,
        completado
    })
    .command('listar', 'Muestra la lista de tareas activas')
    .command('borrar', 'Borra una tarea en base a su descripcion', {descripcion})
    .help()
    .argv;

module.exports = {
    argv
}