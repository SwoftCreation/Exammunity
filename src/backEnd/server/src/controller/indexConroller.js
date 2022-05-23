const indexDao = require("../dao/indexDao");

exports.readUsers = async function (req, res) {
  const selectUsers = await indexDao.selectUsers();

  return res.send({
    result: selectUsers,
    isSuccess: true,
    code: 200,
    message: "유저 목록 조회 성공.",
  });
};
//insert 할때는 항상 형 타입 확인하기
exports.createUsers = async function (req, res) {
  const { user_name, user_PW, user_point, create_date } = req.body;

  console.log(user_name, user_PW, user_point, create_date);

  const insertUsers = await indexDao.insertUsers(
    user_name,
    user_PW,
    user_point,
    create_date
  );

  return res.send({
    isSuccess: true,
    code: 200,
    message: "유저 목록 삽입 성공.",
  });
};

// todo 생성
exports.createTodo = async function (req, res) {
  const { userIdx } = req.verifiedToken;
  const { contents, type } = req.body;

  if (!userIdx || !contents || !type) {
    return res.send({
      isSuccess: false,
      code: 400,
      message: "입력값이 누락됐습니다.",
    });
  }

  // contens 20글자 초과 불가
  if (contents.length > 20) {
    return res.send({
      isSuccess: false,
      code: 400,
      message: "콘텐츠는 20글자 이하로 설정해주세요.",
    });
  }

  // type : do, decide, delete, delegate
  const validTypes = ["do", "decide", "delete", "delegate"];
  if (!validTypes.includes(type)) {
    return res.send({
      isSuccess: false,
      code: 400,
      message: "유효한 타입이 아닙니다.",
    });
  }

  const insertTodoRow = await indexDao.insertTodo(userIdx, contents, type);

  if (!insertTodoRow) {
    return res.send({
      isSuccess: false,
      code: 403,
      message: "요청에 실패했습니다. 관리자에게 문의해주세요.",
    });
  }

  return res.send({
    isSuccess: true,
    code: 200,
    message: "일정 생성 성공",
  });
};

// todo 조회
exports.readTodo = async function (req, res) {
  const { userIdx } = req.verifiedToken;

  const todos = {};
  const types = ["do", "decide", "delegate", "delete"];

  for (let type of types) {
    let selectTodoByTypeRows = await indexDao.selectTodoByType(userIdx, type);

    if (!selectTodoByTypeRows) {
      return res.send({
        isSuccess: true,
        code: 400,
        message: "일정 조회 실패. 관리자에게 문의해주세요.",
      });
    }

    todos[type] = selectTodoByTypeRows;
  }

  return res.send({
    result: todos,
    isSuccess: true,
    code: 200,
    message: "일정 조회 성공",
  });
};

// todo 수정
exports.updateTodo = async function (req, res) {
  const { userIdx } = req.verifiedToken;
  let { todoIdx, contents, status } = req.body;

  if (!userIdx || !todoIdx) {
    return res.send({
      isSuccess: false,
      code: 400,
      message: "userIdx와 todoIdx를 보내주세요.",
    });
  }

  if (!contents) {
    contents = null;
  }

  if (!status) {
    status = null;
  }

  const isValidTodoRow = await indexDao.selectValidTodo(userIdx, todoIdx);
  if (isValidTodoRow.length < 1) {
    return res.send({
      isSuccess: false,
      code: 400,
      message: "유효한 요청이 아닙니다. userIdx와 todoIdx를 확인하세요.",
    });
  }

  const updateTodoRow = await indexDao.updateTodo(
    userIdx,
    todoIdx,
    contents,
    status
  );
  if (!updateTodoRow) {
    return res.send({
      isSuccess: false,
      code: 400,
      message: "수정 실패. 관리자에게 문의해주세요.",
    });
  }

  return res.send({
    isSuccess: true,
    code: 200,
    message: "수정 성공",
  });
};

// todo 삭제
exports.deleteTodo = async function (req, res) {
  const { userIdx } = req.verifiedToken;
  const { todoIdx } = req.params;

  if (!userIdx || !todoIdx) {
    return res.send({
      isSuccess: false,
      code: 400,
      message: "userIdx, todoIdx를 입력해주세요.",
    });
  }

  const isValidTodoRow = await indexDao.selectValidTodo(userIdx, todoIdx);
  if (isValidTodoRow.length < 1) {
    return res.send({
      isSuccess: false,
      code: 400,
      message: "유효한 요청이 아닙니다. userIdx와 todoIdx를 확인하세요.",
    });
  }

  const deleteTodoRow = await indexDao.deleteTodo(userIdx, todoIdx);
  if (!deleteTodoRow) {
    return res.send({
      isSuccess: false,
      code: 400,
      message: "삭제 실패. 관리자에게 문의해주세요.",
    });
  }

  return res.send({
    isSuccess: true,
    code: 200,
    message: "삭제 성공",
  });
};
