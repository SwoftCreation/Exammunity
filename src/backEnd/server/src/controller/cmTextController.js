const cmTextDao = require("../dao/cmTextDao");

exports.readcmText = async function (req, res) {
  const selectcmText = await cmTextDao.selectcmText();

  return res.send({
    result: selectcmText,
    isSuccess: true,
    code: 200,
    message: "커뮤니티 글 조회 성공.",
  });
};

exports.controlcmText = async function (req, res) {
  const { control, text_num, writer, title, write_text, is_deleted } = req.body;

  const cur = Date.now();
  const write_date = new Date(cur); // 현재 시간

  console.log(control, text_num, writer, title, write_text, is_deleted);

  //create
  if (control === "create") {
    const insertcmText = await cmTextDao.insertcmText(
      writer,
      write_date,
      title,
      write_text
    );

    return res.send({
      isSuccess: true,
      code: 200,
      message: "커뮤니티 글 삽입 성공.",
    });
  }

  //delete
  else if (control === "delete") {
    const deletecmText = await cmTextDao.deletecmText(text_num);
    return res.send({
      isSuccess: true,
      code: 200,
      message: "커뮤니티 글 삭제 성공.",
    });
  }

  //update
  else if (control === "update") {
    const updatecmText = await cmTextDao.updatecmText(
      text_num,
      write_date,
      title,
      write_text
    );
    return res.send({
      isSuccess: true,
      code: 200,
      message: "커뮤니티 글 수정 성공.",
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
      message: "커뮤니티 글 삽입 실패. invalid control option",
    });
  }
};
