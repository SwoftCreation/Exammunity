const { jwtMiddleware } = require("../../jwtMiddleware");
const reviewController = require("../controller/reviewController");

exports.reviewRouter = function (app) {
  app.post("/api/review", reviewController.controlReview);
  app.get("/api/review", reviewController.readReview);
};
