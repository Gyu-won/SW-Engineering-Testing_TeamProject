const express = require('express');
const router = express.Router();

const auth = require('./auth');

router.use('/auth', auth)

router.get('/', (req,res) => {
    res.send("hi");
});

module.exports = router;