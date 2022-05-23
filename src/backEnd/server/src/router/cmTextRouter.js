const { jwtMiddleware } = require("../../jwtMiddleware");
const cmTextController = require("../controller/cmTextController");

exports.cmTextRouter = function (app) {
  app.post("/api/cmtext", cmTextController.controlcmText);
  app.get("/api/cmtext", cmTextController.readcmText);
};
