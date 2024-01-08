const {createDriverDB} = require('../controllers/postDriver');

const postDriversHandler = async (req, res) => {
    const {name, lastName, description, image, nationality, birthdate, teams} = req.body;
    try{
        const driver = await createDriverDB(name, lastName, description, image, nationality, birthdate, teams)
        res.status(200).json(driver);
    } catch (error) {
        res.status(400).json({ error: error.message });
    };
}
module.exports = {
    postDriversHandler};