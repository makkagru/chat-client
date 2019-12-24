const express = require('express');
const router = express.Router();

router('/', (res, req, next) => {
  res.send('Server is up and running');
});

module.exports = router;