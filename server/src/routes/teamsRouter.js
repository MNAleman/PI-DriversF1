const {Router} = require('express');
const { getTeamsHandler } = require('../handlers/getTeamsHandler');

const teamsRouter = Router();

//driversRouter.post ("/", );
teamsRouter.get("/", getTeamsHandler);

module.exports = teamsRouter;