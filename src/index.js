const { log } = require('console');
const app = require('./app');
const { PORT } = require('./config/environment')

app.listen(PORT, () => {
  log(`Listening to port ${PORT}`);
});
