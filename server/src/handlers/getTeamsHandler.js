const { saveAllTeams } = require('../controllers/saveAllTeams');

const getTeamsHandler = async (req, res) => {
    const { name } = req.query;
    try {
        const allTeams = await saveAllTeams(name);
        res.status(200).json(allTeams);
    
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


module.exports = {
    getTeamsHandler
}