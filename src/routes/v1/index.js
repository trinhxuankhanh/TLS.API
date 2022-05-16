const express = require('express');
const userRoute = require('./users.route')

const router = express.Router();

const defaultRoutes = [
  {
    path: '/users',
    route: userRoute,
  }
];

router.get('/status', (req, res) => res.send('OK'));

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
