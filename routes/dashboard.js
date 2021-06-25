const express = require('express');

const protect = require('../middleware/auth/protect');

const router = express.Router();

router.get('/', protect, (req, res) => {
  res.send('Dashboard (protected route)');
});

module.exports = router;
