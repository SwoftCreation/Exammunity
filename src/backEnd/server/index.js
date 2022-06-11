const compression = require("compression");
const cors = require("cors");
const { indexRouter } = require("./src/router/indexRouter");
const { userRouter } = require("./src/router/userRouter");
const { cmCommentRouter } = require("./src/router/cmCommentRouter");
const { cmTextRouter } = require("./src/router/cmTextRouter");
const { examUserRouter } = require("./src/router/examUserRouter");
const { reviewRouter } = require("./src/router/reviewRouter");
const { tradeRouter } = require("./src/router/tradeRouter");
const { workbookRouter } = require("./src/router/workbookRouter");

const express = require("express");
const app = express();
const path = require("path");
const port = 3000;
const http = require("http").createServer(app);

//test
const bodyParser = require("body-parser");
const multer = require("multer");
const form_data = multer();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(form_data.array());
//

/* express 미들웨어 설정 */

// cors 설정
app.use(cors());

// body json 파싱
app.use(express.json());

// HTTP 요청 압축
app.use(compression());

// 라우터 분리
indexRouter(app);
userRouter(app);
cmCommentRouter(app);
cmTextRouter(app);
examUserRouter(app);
reviewRouter(app);
tradeRouter(app);
workbookRouter(app);

//서버 연결
app.listen(port, () => {
  console.log(`Express app listening at port: ${port}`);
});

app.use(express.static(path.join(__dirname, "../../../build")));
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "../../../build/index.html"));
});
