const pool = require('../../../db/connection');

class AddUser {

    async control_ingreso(data) {
        try {
            const get = await pool.query(`SELECT * FROM posada_ingresados_2023 WHERE checador = ${ data.checador }`);
            if(!get) return { status: false, message: 'Fallo en la validación' };
            if (get.length > 0 ) return { status: false, message: `El usuario ya ingresó`, checador: get[0].checador, nombre: get[0].nombre, };
            const write_user = await pool.query(`INSERT INTO posada_ingresados_2023 (checador, nombre, dependencia) VALUES ('${data.checador}', '${data.nombre}', '${data.dependencia}')`);
            if(!write_user) return { status: false, message: 'No se pudo registrar al usuario' };
            return { status: true, message: 'Usuario registrado correctamente' };
        } catch (error) {
            console.log(error);
            return { status: false, message: 'Contacte al administrador' };
        }
    }

}

module.exports = new AddUser();