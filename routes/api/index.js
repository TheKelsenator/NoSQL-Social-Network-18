const express = require('express');
const router = require('express').Router();
const thoughtRoutes = require('./thoughtRoute');
const userRoutes = require('./userRoute');
const reactRoutes = require('./reactRoute');
// Do I even need all of the above? 

router.use('/thoughts', thoughtRoutes);
router.use('/users', userRoutes);
router.use('/react', reactRoutes);

module.exports = router;