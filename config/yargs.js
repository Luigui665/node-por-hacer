const descripcion = {
    demand: true,
    alias: "d",
    desc: "Descripción de la tarea por hacer"
};

const opts_create = {
    descripcion
};

const opts_update = {
    descripcion,
    completado: {
        default: true,
        alias: "c",
        desc: "Marca como completado o pendiente la tarea"
    }
};

const opts_delete = {
    descripcion
};

const argv = require("yargs")
    .command("crear", "Crear un elemento por hacer", opts_create)
    .command(
        "actualizar",
        "Actualiza el estado completado de una tarea",
        opts_update
    )
    .command("borrar", "Elimina un elemeno por hacer", opts_delete)
    .help().argv;

module.exports = {
    argv
};