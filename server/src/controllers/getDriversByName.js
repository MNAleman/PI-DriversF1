const axios = require('axios');
const { Op } = require('sequelize');
const { Driver, Team } = require('../db.js');
const { mappingDrivers } = require('../tools/mappingDrivers.js');



const URL = `http://localhost:5000/drivers`


const getDriversByName = async (name) => {
    try {
        const infoApi = (await axios.get(`${URL}`)).data;
        const driversApi = mappingDrivers(infoApi);
        const driversFiltered = driversApi.filter(driver => driver.name.toLowerCase().includes(name.toLowerCase())|| driver.lastName.toLowerCase().includes(name.toLowerCase())) ;

        const driversDB = await Driver.findAll({
            include: Team,
            where: {
                name: {
                    [Op.iLike]: `%${name}%`,
                },
            },
        });
        if (driversFiltered.length === 0 && driversDB.length === 0) {
            throw new Error('No se encontraron resultados');
        }
        return [...driversFiltered, ...driversDB];
    } catch (error) {
        throw new Error(`Error in getDriversByName: ${error.message}`);
    }
};

module.exports = {
    getDriversByName
};