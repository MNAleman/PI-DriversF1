const mappingDrivers = (drivers) => {
    return drivers.map((driver) => {
        return {
            id: driver.id,
            name: driver.name.forename,
            lastName: driver.name.surname,
            description: driver.description,
            image: driver.image.url,
            nationality: driver.nationality,
            birthdate: driver.dob,
            teams: driver.teams
        }
    })
};

module.exports = {
    mappingDrivers
};