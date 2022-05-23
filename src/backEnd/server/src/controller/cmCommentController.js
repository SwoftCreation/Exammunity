const cmCommentDao = require("../dao/cmCommentDao");

exports.controlcmComment = async function (req, res) {
  const { control, comment_num, writer, text_num, comment_text, is_deleted } =
    req.body;

  const cur = Date.now();
  const write_date = new Date(cur); // 현재 시간

  console.log(control, comment_num, writer, text_num, comment_text, is_deleted);

  //create
  if (control === "create") {
    const insertcmComment = await cmCommentDao.insertcmComment(
      writer,
      write_date,
      text_num,
      comment_text
    );

    return res.send({
      isSuccess: true,
      code: 200,
      message: "커뮤니티 댓글 삽입 성공.",
    });
  }

  //delete
  else if (control === "delete") {
    const deletecmComment = await cmCommentDao.deletecmComment(comment_num);
    return res.send({
      isSuccess: true,
      code: 200,
      message: "커뮤니티 댓글 삭제 성공.",
    });
  }

  //update
  else if (control === "update") {
    const updatecmComment = await cmCommentDao.updatecmComment(
      comment_num,
      write_date,
      comment_text
    );
    return res.send({
      isSuccess: true,
      code: 200,
      message: "커뮤니티 댓글 수정 성공.",
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
      message: "커뮤니티 댓글 삽입 실패. invalid control option",
    });
  }
};

exports.readcmComment = async function (req, res) {
  const selectcmComment = await cmCommentDao.selectcmComment(); //()써도되는지 확인

  return res.send({
    result: selectcmComment,
    isSuccess: true,
    code: 200,
    message: "커뮤니티 댓글 조회 성공.",
  });
};
