const { Driver, Team } = require('../db');


const createDriverDB = async (name, lastName, description, image, nationality, birthdate, teams) => {
    const newDriverDB = await Driver.create({ name, lastName, description, image, nationality, birthdate })
    
    const teamsList = await Team.findAll({
        where: {
            name: teams,
        }
    })
    await newDriverDB.setTeams(teamsList)
    return newDriverDB
};


module.exports = { createDriverDB }