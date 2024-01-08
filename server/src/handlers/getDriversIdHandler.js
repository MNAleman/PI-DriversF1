const {getDriverById}= require('../controllers/getDriversById');


const getDetailDriversHandler = async (req, res) => {

    const { id } = req.params;
    const source = isNaN(id)? "db" : "api";
    try {
        const driverById = await getDriverById(id, source);
        res.status(200).json(driverById);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = { getDetailDriversHandler };
