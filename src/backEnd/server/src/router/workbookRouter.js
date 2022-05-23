const { jwtMiddleware } = require("../../jwtMiddleware");
const workbookController = require("../controller/workbookController");

exports.workbookRouter = function (app) {
  app.post("/api/workbook", workbookController.controlWorkbook);
  app.get("/api/workbook", workbookController.readWorkbook);
};
