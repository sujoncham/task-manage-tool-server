const express = require("express");

const {
  getAllUsers,
  signup,
  login,
  isAdminById,
} = require("./user.controller");

const routerUser = express.Router();

routerUser.get("/", getAllUsers);
// .get("/address", getAddress)
// .get("/skills", getSkills);
routerUser
  .post("/signup", signup)
  // .post("/addAddress/:id", addAdress)
  // .post("/addSkills/:id", addSkills)
  .post("/login", login);
routerUser.put("/isAdmin/:id", isAdminById);
//   .get("/profile/:id", getProfileById)
//   .get("/getSkills", getSkillsById)
//   .get("/getAddress", getAddressById);
// routerUser.delete("/profile/deleteAccount/:id", accountDelete);

module.exports = routerUser;
