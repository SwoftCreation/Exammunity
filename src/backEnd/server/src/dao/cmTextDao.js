const { pool } = require("../../database");

exports.selectcmText = async function () {
  try {
    const connection = await pool.getConnection(async (conn) => conn);

    try {
      const selectcmTextQuery = "SELECT * FROM CommunityText;";

      const [row] = await connection.query(selectcmTextQuery);
      connection.release();
      return row;
    } catch (err) {
      console.error(` ##### selectcmText Query error ##### `);
      connection.release();
      return false;
    }
  } catch (err) {
    console.error(` ##### selectcmText DB error #####`);
    return false;
  }
};

exports.insertcmText = async function (writer, write_date, title, write_text) {
  try {
    // DB 연결 검사
    const connection = await pool.getConnection(async (conn) => conn);
    try {
      // 쿼리
      const insertcmTextQuery =
        "insert into CommunityText (writer, write_date, title, write_text) values(?,?,?,?);";
      const insertcmTextParams = [writer, write_date, title, write_text];

      const [row] = await connection.query(
        insertcmTextQuery,
        insertcmTextParams
      );
      connection.release();
      return row;
    } catch (err) {
      console.error(` ##### insertcmText Query error ##### \n ${err}`);
      connection.release();
      return false;
    }
  } catch (err) {
    console.error(` ##### insertcmText DB error ##### \n ${err}`);
    return false;
  }
};

exports.updatecmText = async function (
  text_num,
  write_date,
  title,
  write_text
) {
  try {
    // DB 연결 검사
    const connection = await pool.getConnection(async (conn) => conn);
    try {
      // 쿼리
      const updatecmTextQuery =
        "update CommunityText set write_date = ?, title = ?, write_text = ? where text_num= ?;";
      const updatecmTextParams = [write_date, title, write_text, text_num];

      const [row] = await connection.query(
        updatecmTextQuery,
        updatecmTextParams
      );
      connection.release();
      return row;
    } catch (err) {
      console.error(` ##### updatecmText Query error ##### \n ${err}`);
      connection.release();
      return false;
    }
  } catch (err) {
    console.error(` ##### updatecmText DB error ##### \n ${err}`);
    return false;
  }
};

exports.deletecmText = async function (text_num) {
  try {
    const connection = await pool.getConnection(async (conn) => conn);

    try {
      const deletecmTextQuery =
        "update CommunityText set is_deleted = 1 where text_num= ?;";
      const deletecmTextParams = [text_num];
      const [row] = await connection.query(
        deletecmTextQuery,
        deletecmTextParams
      );
      connection.release();
      return row;
    } catch (err) {
      console.error(` ##### deletecmText Query error ##### `);
      connection.release();
      return false;
    }
  } catch (err) {
    console.error(` ##### deletecmText DB error #####`);
    return false;
  }
};
