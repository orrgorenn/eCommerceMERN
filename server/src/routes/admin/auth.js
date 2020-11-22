const express = require('express');
const { register, login, reqLogin } = require('../../controllers/admin/auth');
const { validateRegisterReq, validateLoginReq, isReqValid } = require('../../validators/auth');

const router = express.Router();

router.post('/admin/login', validateLoginReq, isReqValid, login);
router.post('/admin/register', validateRegisterReq, isReqValid, register);

module.exports = router;