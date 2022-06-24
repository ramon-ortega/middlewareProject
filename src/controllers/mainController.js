const mainController = {
    index: (req, res) => {
        res.render('index');
    },
    admin: (req, res) => {
        const user = req.query.user;
        res.render('admin');
    }
}

module.exports = mainController;