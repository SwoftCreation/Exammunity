const { pool } = require("../../database");

exports.selectExamUser = async function () {
  try {
    const connection = await pool.getConnection(async (conn) => conn);

    try {
      const selectExamUserQuery = "select * from ExamUser;";

      const [row] = await connection.query(selectExamUserQuery);
      connection.release();
      return row;
    } catch (err) {
      console.error(` ##### selectExamUser Query error ##### `);
      connection.release();
      return false;
    }
  } catch (err) {
    console.error(` ##### selectExamUser DB error #####`);
    return false;
  }
};

exports.insertExamUser = async function (user_name, user_PW, create_date) {
  try {
    // DB 연결 검사
    const connection = await pool.getConnection(async (conn) => conn);
    try {
      // 쿼리
      const insertExamUserQuery =
        "insert into ExamUser(user_name, user_pw, create_date) values (?, ?, ?);";
      const insertExamUserParams = [user_name, user_PW, create_date];

      const [row] = await connection.query(
        insertExamUserQuery,
        insertExamUserParams
      );
      connection.release();
      return row;
    } catch (err) {
      console.error(` ##### insertExamUser Query error ##### \n ${err}`);
      connection.release();
      return false;
    }
  } catch (err) {
    console.error(` ##### insertExamUser DB error ##### \n ${err}`);
    return false;
  }
};

exports.updateExamUser = async function (
  user_num,
  user_name,
  user_PW,
  user_point,
  create_date
) {
  try {
    // DB 연결 검사
    const connection = await pool.getConnection(async (conn) => conn);
    try {
      // 쿼리
      const updateExamUserQuery =
        "update ExamUser set user_name = ?, user_PW = ?, user_point  =?, create_date = ? where user_num = ?;";
      const updateExamUserParams = [
        user_name,
        user_PW,
        user_point,
        create_date,
        user_num,
      ];

      const [row] = await connection.query(
        updateExamUserQuery,
        updateExamUserParams
      );
      connection.release();
      return row;
    } catch (err) {
      console.error(` ##### updateExamUser Query error ##### \n ${err}`);
      connection.release();
      return false;
    }
  } catch (err) {
    console.error(` ##### updateExamUser DB error ##### \n ${err}`);
    return false;
  }
};

exports.deleteExamUser = async function (user_num) {
  try {
    const connection = await pool.getConnection(async (conn) => conn);

    try {
      const ExamUserQuery =
        "update ExamUser set is_deleted = 1 where user_num= ?;";
      const ExamUserParams = [text_num];
      const [row] = await connection.query(ExamUserQuery, ExamUserParams);
      connection.release();
      return row;
    } catch (err) {
      console.error(` ##### ExamUser Query error ##### `);
      connection.release();
      return false;
    }
  } catch (err) {
    console.error(` ##### ExamUser DB error #####`);
    return false;
  }
};
