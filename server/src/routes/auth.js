const express = require('express');
const { register, login, reqLogin } = require('../controllers/auth');
const { validateRegisterReq, validateLoginReq, isReqValid } = require('../validators/auth');

const router = express.Router();

router.post('/login', validateLoginReq, isReqValid, login);
router.post('/register', validateRegisterReq, isReqValid, register);

module.exports = router;