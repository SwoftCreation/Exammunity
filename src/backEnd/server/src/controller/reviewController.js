const reviewDao = require("../dao/reviewDao");

exports.readReview = async function (req, res) {
  const selectReview = await reviewDao.selectReview();

  return res.send({
    result: selectReview,
    isSuccess: true,
    code: 200,
    message: "후기 조회 성공.",
  });
};

exports.controlReview = async function (req, res) {
  const {
    control,
    review_num,
    writer,
    workbook_num,
    review_text,
    score,
    is_deleted,
  } = req.body;

  const cur = Date.now();
  const write_date = new Date(cur); // 현재 시간

  console.log(
    control,
    review_num,
    writer,
    workbook_num,
    review_text,
    score,
    is_deleted
  );

  //create
  if (control === "create") {
    const insertReview = await reviewDao.insertReview(
      writer,
      write_date,
      workbook_num,
      review_text,
      score
    );

    return res.send({
      isSuccess: true,
      code: 200,
      message: "후기 글 삽입 성공.",
    });
  }

  //delete
  else if (control === "delete") {
    const deleteReview = await reviewDao.deleteReview(review_num);
    return res.send({
      isSuccess: true,
      code: 200,
      message: "후기 글 삭제 성공.",
    });
  }

  //update
  else if (control === "update") {
    const updateReview = await reviewDao.updateReview(
      review_num,
      write_date,
      review_text,
      score
    );
    return res.send({
      isSuccess: true,
      code: 200,
      message: "후기 글 수정 성공.",
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
      message: "후기 글 삽입 실패. invalid control option",
    });
  }
};
