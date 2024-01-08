const axios = require('axios');
const { Driver, Team } = require('../db.js');
const { mappingDrivers } = require('../tools/mappingDrivers.js');

const URL = `http://localhost:5000/drivers`


const getDriverById = async (id, source) => {
    try {
        if (source === "api") {
            const infoApi = (await axios.get(`${URL}/${id}`)).data;
            const driverApi = mappingDrivers([infoApi])[0] ;
            return driverApi;
        } else {
            const driverById2 = await Driver.findByPk(id, {
                include: Team
            });
            return driverById2;
        }
    } catch (error) {
        throw new Error(`Error in getDriverById: ${error.message}`);
    }
};


module.exports = {
    getDriverById
}