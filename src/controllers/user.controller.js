const pick = require("../utils/pick");
const catchAsync = require("../utils/catchAsync");

const request = {
  name: "khanh123",
  role: "admin",
};

const getUsers = catchAsync(async (req, res) => {
  const filter = pick(request, ["name", "role"]);
  const result = [
    { name: "khanh" },
    { name: "khanh123" },
    { name: "khanh345" },
  ];
  res.send({...result, filter});
});

module.exports = {
  getUsers,
};
