const {Router} = require('express');
const { getDriversHandler } = require('../handlers/getDriversHandler');
const { getDetailDriversHandler } = require('../handlers/getDriversIdHandler');
const { postDriversHandler } = require('../handlers/postDriversHandler');

const driversRouter = Router();

driversRouter.post ("/", postDriversHandler);
driversRouter.get("/", getDriversHandler);
driversRouter.get("/:id", getDetailDriversHandler);
module.exports = driversRouter;