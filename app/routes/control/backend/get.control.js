const pool = require('../../../db/connection');

class GetUser{
    async getUser(id){
        try {
            const get = await pool.query(`SELECT * FROM posada_control_entrada_2023 WHERE checador = '${id}'`);
            if(!get) return {status: false, message: 'No se pudieron obtener los datos'};
            if(get.length === 0 || get === undefined ) return { status: false, message: 'No se encontraron resultados' };
            return { status: true, message: 'Datos obtenidos con éxito', data: get }
        } catch (error) {
            console.log(error);
            return {status: false, message: 'Contacte al administrador'};
        }
    }
}


module.exports = new GetUser();