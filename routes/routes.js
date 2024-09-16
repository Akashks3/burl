const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const passwordController = require('../controllers/passwordController');
const dashboardController = require('../controllers/dashboardController');
const urlController = require('../controllers/urlController');

// Authentication routes
router.post('/register', authController.register);
router.post('/login', authController.login);

// Password recovery routes
router.post('/forgot-password', passwordController.forgotPassword);
router.post('/reset-password', passwordController.resetPassword);

// Dashboard route
router.get('/dashboard-stats', dashboardController.getDashboardStats);

// URL routes
router.post('/create-url', urlController.createURL);
router.get('/url-list', urlController.getAllURLs);

module.exports = router;
