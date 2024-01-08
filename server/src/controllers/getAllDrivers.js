const axios = require('axios');
const { Driver, Team } = require('../db.js');
const { mappingDrivers } = require('../tools/mappingDrivers.js');

const URL = `http://localhost:5000/drivers`

const getAllDrivers = async () => {
    const driverDB = await Driver.findAll();
    const driverApi = (await axios.get(`${URL}`)).data;
    const dataBaseyApi = mappingDrivers([...driverDB, ...driverApi]);
    return dataBaseyApi;
}

module.exports = { getAllDrivers }; 