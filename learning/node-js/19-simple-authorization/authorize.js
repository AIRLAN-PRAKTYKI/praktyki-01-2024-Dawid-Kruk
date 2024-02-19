const authorize = (req, res, next) => {
    const { password } = req.query;

    if (password === 'hi-mom') {
        req.user = { id: 3, password: 'hi-mom' };
        next();
    } else {
        console.log('unauthorized');
        res.status(401).send('<h1>unauthorized</h1>');
    }
}

module.exports = authorize;