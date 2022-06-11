const workbookDao = require("../dao/workbookDao");

exports.readWorkbook = async function (req, res) {
  const selectWorkbook = await workbookDao.selectWorkbook();

  return res.send({
    result: selectWorkbook,
    isSuccess: true,
    code: 200,
    message: "문제 조회 성공.",
  });
};

exports.controlWorkbook = async function (req, res) {
  const { control, workbook_num, writer, title, path, price, is_deleted } =
    req.body;

  const cur = Date.now();
  const write_date = new Date(cur); // 현재 시간

  console.log(control, workbook_num, writer, title, path, price, is_deleted);

  //create
  if (control === "create") {
    const insertWorkbook = await workbookDao.insertWorkbook(
      writer,
      write_date,
      title,
      path,
      price
    );

    return res.send({
      isSuccess: true,
      code: 200,
      message: "문제 삽입 성공.",
    });
  }

  //delete
  else if (control === "delete") {
    const deleteWorkbook = await workbookDao.deleteWorkbook(workbook_num);
    return res.send({
      isSuccess: true,
      code: 200,
      message: "문제 삭제 성공.",
    });
  }

  //update
  else if (control === "update") {
    const updateWorkbook = await workbookDao.updateWorkbook(
      workbook_num,
      write_date,
      title,
      price
    );
    return res.send({
      isSuccess: true,
      code: 200,
      message: "문제 수정 성공.",
    });
  }

  //code test
  else if (control === "test") {
    return res.send({
      isSuccess: true,
      code: 200,
      message: "테스트 성공.",
    });
  } else if (control === "workbook") {
    const insertWorkbook = await workbookDao.insertWorkbook(path);

    return res.send({
      result: insertWorkbook,
      isSuccess: true,
      code: 200,
      message: "문제 삽입 성공.",
    });
  }

  //except
  else {
    console.log("error : invalid control option");
    return res.send({
      isSuccess: false,
      code: 404,
      message: "문제 삽입 실패. invalid control option",
    });
  }
};
