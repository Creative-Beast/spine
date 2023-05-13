const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

// ==============================================================================================

const router = express.Router();

router.use(express.urlencoded({ extended: true }));
router.use(express.json());

router.use(helmet());
router.use(cors());

// ==============================================================================================

router.get('/', (req, res) => {
    res.send('Welcome to Creative Beast');
});

// ==============================================================================================

module.exports = router;