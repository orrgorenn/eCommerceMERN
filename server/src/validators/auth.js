const { check, validationResult } = require('express-validator');

exports.validateRegisterReq = [
    check('firstName').notEmpty().withMessage('First name is empty'),
    check('lastName').notEmpty().withMessage('Last name is empty'),
    check('username').isLength({ min: 5 }).withMessage('Username must be atleast 5 characters long.'),
    check('email').isEmail().withMessage('Please enter a valid email address'),
    check('password').isLength({ min: 6 }).withMessage('Password must be atleast 6 characters long.')
];

exports.validateLoginReq = [
    check('username').isLength({ min: 5 }).withMessage('Username must be atleast 5 characters long.'),
    check('password').isLength({ min: 6 }).withMessage('Password must be atleast 6 characters long.')
];

exports.isReqValid = (req, res, next) => {
    const errors = validationResult(req);
    if(errors.array().length > 0) {
        return res.status(400).json({ error: errors.array()[0].msg });
    }
    next();
};