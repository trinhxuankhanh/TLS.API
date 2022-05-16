const { log } = require("console");
const app = require("./app");
const { PORT, CERTIFICATE } = require("./config/environment");
const mongoose = require("mongoose");

mongoose.connect(CERTIFICATE.MONGODB_URL, CERTIFICATE.OPTIONS).then(() => {
  log("Connected to MongoDB");

  app.listen(PORT, () => {
    log(`Listening to port ${PORT}`);
  });
});
