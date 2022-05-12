const { log } = require('console');
const app = require('./app');
const dotenv = require('dotenv');
const path = require('path');
const Joi = require('joi');
dotenv.config({ path: path.join(__dirname, '../../.env') });

const envVariablesSchema = Joi.object().keys({
  PORT: Joi.number().default(3000)
})

const { value: { PORT } } = envVariablesSchema.prefs({ errors: { label: 'key' } }).validate(process.env);

app.listen(PORT, () => {
  log(`Listening to port ${ PORT}`);
});
