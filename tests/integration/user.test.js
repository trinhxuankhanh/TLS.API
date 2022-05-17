const request = require("supertest");
const app = require("../../src/app");
const faker = require("faker");
const { admin, insertUsers } = require('../fixtures/user.fixture');
const setupTestDB = require('../setupTestDB');
const httpStatus = require('http-status');
const User = require('../../src/models/user.model');

setupTestDB()

describe("User routes", () => {
  describe("POST /v1/users", () => {
    let newUser;

    beforeEach(() => {
      newUser = {
        name: faker.name.findName(),
        email: faker.internet.email().toLowerCase(),
        phone: "0123456789",
        password: "password1",
        role: "user",
      };
    });

    test("should return 201 and successfully create new user if data is ok", async () => {
      await insertUsers([admin]);

      const res = await request(app)
        .post("/v1/users")
        .send(newUser)
        .expect(httpStatus.CREATED);

      expect(res.body).not.toHaveProperty("password");
      expect(res.body).toEqual({
        id: expect.anything(),
        name: newUser.name,
        email: newUser.email,
        phone: newUser.phone,
        role: newUser.role,
        isEmailVerified: false,
      });

      const dbUser = await User.findById(res.body.id);
      expect(dbUser).toBeDefined();
      expect(dbUser.password).not.toBe(newUser.password);
      expect(dbUser).toMatchObject({
        name: newUser.name,
        email: newUser.email,
        phone: newUser.phone,
        role: newUser.role,
        isEmailVerified: false,
      });
    });
  });
});