const express = require('express');
const router = express.Router();
const { getPets, adoptPet } = require('../controllers/petController');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/', getPets);
router.put('/:id/adopt', authMiddleware, adoptPet);

module.exports = router;
