const mappingDrivers = (drivers) => {
    return drivers.map((driver) => {
        // const imageUrl = driver.image.url || "https://cdn.pixabay.com/photo/2013/07/12/15/36/motorsports-150157_960_720.png";
        const imageUrl = driver.image.url || "https://images.unsplash.com/photo-1611004061856-ccc3cbe944b2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        return {
            id: driver.id,
            name: driver.name.forename,
            lastName: driver.name.surname,
            description: driver.description,
            image: imageUrl,
            nationality: driver.nationality,
            birthdate: driver.dob,
            teams: driver.teams
        }
    })
};

module.exports = {
    mappingDrivers
};
