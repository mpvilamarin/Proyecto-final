const express = require('express');
const AdminRouter = express.Router();
const { postAdmin, getRegistroAdmin } = require('../Handlers/AdminHandler');

AdminRouter.post('/',postAdmin);
AdminRouter.get('/',getRegistroAdmin);

module.exports = AdminRouter
