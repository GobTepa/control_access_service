const pool = require('../../../db/connection');

class GetUser{
    async getTotal(form){
        try {
            let get,get_total;
            if ( form.toLowerCase() === "desc" ) {
                // Ultimos ingresados
                get = await pool.query(`SELECT * FROM posada_ingresados_2023 ORDER BY fecha_ingreso DESC LIMIT 10`);
                if(!get) return { status: false, message: 'No se pudieron obtener los datos' };

                // Total ingresados
                get_total = await pool.query(`SELECT COUNT(*) FROM posada_ingresados_2023`);
                if(!get_total) return { status: false, message: 'No se pudieron obtener el total' };
                get_total = get_total[0]['COUNT(*)'];
            } else {
                // Obtener todos los usuarios
                get = await pool.query(`SELECT * FROM posada_ingresados_2023`);
                if(!get) return {status: false, message: 'No se pudieron obtener los datos'};
                get_total = get.length;
            }
            return { status: true, message: 'Datos obtenidos con éxito', count: get_total, data: get }
        } catch (error) {
            console.log(error);
            return { status: false, message: 'Contacte al administrador' };
        }
    }
}

module.exports = new GetUser();