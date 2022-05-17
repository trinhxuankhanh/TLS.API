const mongoose = require('mongoose');
const { CERTIFICATE } = require('../src/config/environment');

const setupTestDB = () => {
  beforeAll(async () => {
    await mongoose.connect(CERTIFICATE.MONGODB_URL, CERTIFICATE.OPTIONS);
  });

  beforeEach(async () => {
    await Promise.all(Object.values(mongoose.connection.collections).map(async (collection) => collection.deleteMany()));
  });

  afterAll(async () => {
    await mongoose.disconnect();
  });
};

module.exports = setupTestDB;