const tradeDao = require("../dao/tradeDao");

exports.readTrade = async function (req, res) {
  const selectTrade = await tradeDao.selectTrade();

  return res.send({
    result: selectTrade,
    isSuccess: true,
    code: 200,
    message: "거래 조회 성공.",
  });
};

exports.controlWorkbook = async function (req, res) {
  const { control, trade_num, buyer, workbook_num, is_deleted } = req.body;

  const cur = Date.now();
  const trade_date = new Date(cur); // 현재 시간

  console.log(control, trade_num, buyer, workbook_num, is_deleted);

  //create
  if (control === "create") {
    const insertTrade = await tradeDao.insertTrade(
      buyer,
      workbook_num,
      trade_date
    );

    return res.send({
      isSuccess: true,
      code: 200,
      message: "거래 삽입 성공.",
    });
  }

  //delete
  else if (control === "delete") {
    const deleteTrade = await tradeDao.deleteTrade(trade_num);
    return res.send({
      isSuccess: true,
      code: 200,
      message: "거래 삭제 성공.",
    });
  }

  //update
  else if (control === "update") {
    const updateTrade = await tradeDao.updateTrade(
      trade_num,
      buyer,
      trade_date
    );
    return res.send({
      isSuccess: true,
      code: 200,
      message: "거래 수정 성공.",
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
      message: "거래 삽입 실패. invalid control option",
    });
  }
};
