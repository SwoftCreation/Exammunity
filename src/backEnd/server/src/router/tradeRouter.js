const { jwtMiddleware } = require("../../jwtMiddleware");
const tradeController = require("../controller/tradeController");

exports.tradeRouter = function (app) {
  app.post("/api/trade", tradeController.controlWorkbook);
  app.get("/api/trade", tradeController.readTrade);
};
