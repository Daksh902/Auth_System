// middleware
exports.isAuthenticated = (req, res, next) => {
    if (req.session.userId) {
        return next();
    } else {
        if (req.path !== '/login') {
            return res.redirect('/login');
        } else {
            return next();
        }
    }
};
