const dotenv = require("dotenv");
const path = require("path");
const Joi = require("joi");

dotenv.config({ path: path.join(__dirname, "../../.env") });

const envVariablesSchema = Joi.object().keys({
  PORT: Joi.number().default(3000),
  USERNAME_MONGO: Joi.string().required(),
  PASSWORD_MONGO: Joi.string().required(),
  MONGODB_URL: Joi.string().required().description("Mongo DB url"),
});

const {
  value: { PORT, USERNAME_MONGO, PASSWORD_MONGO, MONGODB_URL },
} = envVariablesSchema
  .prefs({ errors: { label: "key" } })
  .validate(process.env);

const CERTIFICATE = {
  MONGODB_URL: MONGODB_URL.replace("<username>", USERNAME_MONGO).replace(
    "<password>",
    PASSWORD_MONGO
  ),
  OPTIONS: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
};

module.exports = { PORT, CERTIFICATE };
