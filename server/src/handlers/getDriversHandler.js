const { getDriversByName } = require('../controllers/getDriversByName');
const {getAllDrivers} = require('../controllers/getAllDrivers');

const getDriversHandler = async (req, res) => {
    const { name } = req.query;
    try {
        if (name) {
            const driverByName = await getDriversByName(name);
            res.status(200).json(driverByName);
        } else {
            const allDrivers = await getAllDrivers();
            res.status(200).json(allDrivers);
        }
    } catch (error) {
        res.status(400).json({ error: error.message })

    }
};
module.exports = {
    getDriversHandler
};