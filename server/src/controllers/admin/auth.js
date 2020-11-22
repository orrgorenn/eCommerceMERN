const User = require('../../models/user');
const jwt = require('jsonwebtoken');

exports.register = (req, res) => {
    User.findOne({ email: req.body.email }).exec((err, user) => {
        if (err || user) return res.status(400).json({ message: 'Admin already registered.' });
    
        const { firstName, lastName, username, email, password } = req.body;
        const _user = new User({ firstName, lastName, username, email, password, role: 'admin' });
    
        _user.save((err, data) => {
            if (err) return res.status(400).json({ message: 'Error during registration.' });
            if (data) return res.status(201).json({ message: 'Admin created.' });
        });
    }); 
}

exports.login = (req, res) => {
    User.findOne({ username: req.body.username }).exec((err, user) => {
        if (err) return res.status(400).json({ message: 'No admin with this username.' });

        if (user) {
            if (user.authenticate(req.body.password) && user.role === 'admin') {
                // User & Password are correct
                const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
                const { _id, firstName, lastName, email, role, fullName } = user;
                res.status(200).json({ token, user: { _id, firstName, lastName, email, role, fullName } });
            } else {
                // Wrong PWD || User Role incorrect
                return res.status(400).json({ message: `Password is incorrect. (${user.role})` });
            }
        } else return res.status(400).json({ message: 'Something went wrong.' });
    });
}

exports.reqLogin = (req, res, next) => {
    const token = req.headers.authorization.split(' ')[1];
    const user = jwt.verify(token, process.env.JWT_SECRET);
    req.user = user;
    next();
}