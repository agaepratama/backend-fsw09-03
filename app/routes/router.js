const express = require("express");
const { refreshToken } = require("../controllers/refreshToken");
const { getUser, Register, Login, Logout } = require("../controllers/userController");
const { verifyToken } = require("../middleware/VerifyToken");

function apply(app) {
  app.post("/api/user/register", Register);
  app.post("/api/user/login", Login);
  app.get("/api/user/token", refreshToken);
  app.delete("/api/user/logout", Logout);
  
  //app.put("/api/user/:id")
  app.get("/api/user/data", verifyToken, getUser);

  //app.get("/api/products") -> findAll
  //app.post("/api/product")
  //app.put("/api/product/:id")
  //app.delete("/api/product/:id")
  //app.get("/api/product/:id") -> findOne
  return app;
}

module.exports = { apply }
