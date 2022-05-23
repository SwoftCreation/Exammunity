const { pool } = require("../../database");

exports.selectTrade = async function () {
  try {
    const connection = await pool.getConnection(async (conn) => conn);

    try {
      const selectTradeQuery = "select * from Trade;";

      const [row] = await connection.query(selectTradeQuery);
      connection.release();
      return row;
    } catch (err) {
      console.error(` ##### selectTrade Query error ##### `);
      connection.release();
      return false;
    }
  } catch (err) {
    console.error(` ##### selectTrade DB error #####`);
    return false;
  }
};

exports.insertTrade = async function (buyer, workbook_num, trade_date) {
  try {
    // DB 연결 검사
    const connection = await pool.getConnection(async (conn) => conn);
    try {
      // 쿼리
      const insertTradeQuery =
        "insert into Trade(buyer, workbook_num, trade_date) values(?,?,?);";
      const insertTradeParams = [buyer, workbook_num, trade_date];

      const [row] = await connection.query(insertTradeQuery, insertTradeParams);
      connection.release();
      return row;
    } catch (err) {
      console.error(` ##### insertTrade Query error ##### \n ${err}`);
      connection.release();
      return false;
    }
  } catch (err) {
    console.error(` ##### insertTrade DB error ##### \n ${err}`);
    return false;
  }
};

exports.updateTrade = async function (trade_num, buyer, trade_date) {
  try {
    // DB 연결 검사
    const connection = await pool.getConnection(async (conn) => conn);
    try {
      // 쿼리
      const updateTradeQuery =
        "update Trade set buyer = ?, trade_date = ? where trade_num = ?;";
      const updateTradeParams = [buyer, trade_date, trade_num];

      const [row] = await connection.query(updateTradeQuery, updateTradeParams);
      connection.release();
      return row;
    } catch (err) {
      console.error(` ##### updateTrade Query error ##### \n ${err}`);
      connection.release();
      return false;
    }
  } catch (err) {
    console.error(` ##### updateTrade DB error ##### \n ${err}`);
    return false;
  }
};

exports.deleteTrade = async function (trade_num) {
  try {
    const connection = await pool.getConnection(async (conn) => conn);

    try {
      const deleteTradeQuery =
        "update Trade set is_deleted = 1 where trade_num= ?;";
      const deleteWorkbookParams = [trade_num];
      const [row] = await connection.query(deleteTradeQuery, deleteTradeParams);
      connection.release();
      return row;
    } catch (err) {
      console.error(` ##### deleteTrade Query error ##### `);
      connection.release();
      return false;
    }
  } catch (err) {
    console.error(` ##### deleteTrade DB error #####`);
    return false;
  }
};
