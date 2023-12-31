const express = require("express");
const cors = require("cors");

class Server {
    constructor() {
        this.port = process.env.PORT;
        this.app = express();

        //rutas en el navegador
        this.rutasdeusuarios = "/api/usuarios";

        //Middlewares
        this.middlewares();
        //Rutas de la app
        this.routes();
    }

    middlewares() {
        //parseo del body que viene del port
        this.app.use(express.json());
        //cors para resolver problemas de rutas
        this.app.use(cors());
        //carpeta donde esta el html
        this.app.use(express.static("public"));
    }

    routes() {
        //se separa la logica del manejo de rutas en un archivo /routes/nombreArchivo
        this.app.use(this.rutasdeusuarios, require("../routes/users.routes"));


    }

    listen() {
        this.app.listen(this.port);
    }

};
module.exports = Server;