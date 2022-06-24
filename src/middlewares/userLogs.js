const fs = require('fs');
const path = require('path');

const pathRoute = path.join(__dirname, '../logs/userLogs.txt');

registerRoutes = (req, res, next) => {
    fs.appendFileSync(pathRoute, 'El usuario ingresó a la ruta: ' + req.url);
    next();
}

module.exports = registerRoutes;