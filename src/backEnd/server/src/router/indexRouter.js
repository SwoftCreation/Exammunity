const indexController = require("../controller/indexConroller");
const { jwtMiddleware } = require("../../jwtMiddleware");

exports.indexRouter = function (app) {
  // template samples
  app.post("/todo", jwtMiddleware, indexController.createTodo); // create
  app.get("/todos", jwtMiddleware, indexController.readTodo); // read
  app.patch("/todo", jwtMiddleware, indexController.updateTodo); // update
  app.delete("/todo/:todoIdx", jwtMiddleware, indexController.deleteTodo); // delete

  //user 읽기
  app.get("/api/users", indexController.readUsers);
  //user 생성
  app.post("/api/users", indexController.createUsers);
};
