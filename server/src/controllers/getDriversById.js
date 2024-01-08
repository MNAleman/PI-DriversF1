const axios = require('axios');
const { Driver, Team } = require('../db.js');
const { mappingDrivers } = require('../tools/mappingDrivers.js');

const URL = `http://localhost:5000/drivers`


const getDriverById = async (id, source) => {
    const driver =
        source === "api"
            ? (await axios.get(`${URL}/${id}`)).data
            : await Driver.findByPk(id, {
                include: {
                    model: Team,
                    attribute: ["name"]
                }
            });
        const cleanDriverData = mappingDrivers([driver])[0]
    return cleanDriverData;
}

module.exports = {
    getDriverById
}