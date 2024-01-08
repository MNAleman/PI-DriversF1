const axios = require('axios');
const { Op } = require('sequelize');

const { Driver, Team } = require('../db.js');
const { mappingDrivers } = require('../tools/mappingDrivers.js');

const URL = `http://localhost:5000/drivers`

const getAllDrivers = async () => {
    const driversDB = await Driver.findAll({
        include: Team,
       
    });
    const infoApi = (await axios.get(`${URL}`)).data;
    const driverApi = mappingDrivers(infoApi);
    const dataBaseyApi = ([...driversDB, ...driverApi]);
    return dataBaseyApi;
}

module.exports = { getAllDrivers }; 