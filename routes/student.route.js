const Router = require("express");
const {
  StudentRegister,
  GetAllStudents,
} = require("../controllers/student.router");
const StusentRouter = new Router();

StusentRouter.post("/register", StudentRegister);
StusentRouter.get("/getAllStd", GetAllStudents);

module.exports = StusentRouter;
