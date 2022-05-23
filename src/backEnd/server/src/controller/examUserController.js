const examUserDao = require("../dao/examUserDao");

exports.readExamUser = async function (req, res) {
  const selectExamUser = await examUserDao.selectExamUser();

  return res.send({
    result: selectExamUser,
    isSuccess: true,
    code: 200,
    message: "유저 조회 성공.",
  });
};

exports.controlcmText = async function (req, res) {
  const { control, user_num, user_name, user_PW, user_point, is_deleted } =
    req.body;

  const cur = Date.now();
  const create_date = new Date(cur); // 현재 시간

  console.log(
    control,
    user_num,
    user_name,
    user_PW,
    user_point,
    create_date,
    is_deleted
  );

  //create
  if (control === "create") {
    const insertExamUser = await examUserDao.insertExamUser(
      user_name,
      user_PW,
      create_date
    );

    return res.send({
      isSuccess: true,
      code: 200,
      message: "유저 삽입 성공.",
    });
  }

  //delete
  else if (control === "delete") {
    const deleteExamUser = await examUserDao.deleteExamUser(user_num);
    return res.send({
      isSuccess: true,
      code: 200,
      message: "유저 삭제 성공.",
    });
  }

  //update
  else if (control === "update") {
    const updateExamUser = await examUserDao.updateExamUser(
      user_num,
      user_name,
      user_PW,
      user_point,
      create_date
    );
    return res.send({
      isSuccess: true,
      code: 200,
      message: "유저 수정 성공.",
    });
  }

  //code test
  else if (control === "test") {
    return res.send({
      isSuccess: true,
      code: 200,
      message: "테스트 성공.",
    });
  }

  //except
  else {
    console.log("error : invalid control option");
    return res.send({
      isSuccess: false,
      code: 404,
      message: "유저 삽입 실패. invalid control option",
    });
  }
};
