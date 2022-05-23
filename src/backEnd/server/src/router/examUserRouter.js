const { jwtMiddleware } = require("../../jwtMiddleware");
const examUserController = require("../controller/examUserController");

exports.examUserRouter = function (app) {
  app.post("/api/examuser", examUserController.controlcmText);
  app.get("/api/examuser", examUserController.readExamUser);
};
