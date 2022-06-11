const { jwtMiddleware } = require("../../jwtMiddleware");
const workbookController = require("../controller/workbookController");

exports.workbookRouter = function (app) {
  app.post("/api/workbook", workbookController.controlWorkbook);
  app.post("/post", (req, res) => {
    res.send(req.body);
  });
  app.get("/api/workbook", workbookController.readWorkbook);
};
