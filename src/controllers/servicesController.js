const servicesController = {
    services: (req, res) => {
        res.render('services');
    },
    design: (req, res) => {
        res.render('design');
    }
}

module.exports = servicesController;