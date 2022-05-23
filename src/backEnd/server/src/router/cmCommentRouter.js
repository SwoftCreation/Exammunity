const { jwtMiddleware } = require("../../jwtMiddleware");
const cmCommentController = require("../controller/cmCommentController");

exports.cmCommentRouter = function (app) {
  app.post("/api/cmcomment", cmCommentController.controlcmComment);
  app.get("/api/cmcomment", cmCommentController.readcmComment);
};
