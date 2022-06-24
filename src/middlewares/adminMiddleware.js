const users = ['Ada', 'Greta', 'Vim', 'Tim'];

verificationAdmin = (req, res, next) => {
    const user = req.query.user;
    if (users.indexOf(user) !== -1){
        res.render('admin', {name: user});
        next();
    } else {
        res.render('error2');
        next();
    }
};

module.exports = verificationAdmin;