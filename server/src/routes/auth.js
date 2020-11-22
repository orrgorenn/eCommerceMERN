const express = require('express');
const { register, login, reqLogin } = require('../controllers/admin/auth');
const router = express.Router();

router.post('/admin/login', login);
router.post('/admin/register', register);

module.exports = router;