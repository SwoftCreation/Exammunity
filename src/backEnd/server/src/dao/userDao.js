const { pool } = require("../../database");

exports.insertUser = async function (email, password, nickname) {
  try {
    const connection = await pool.getConnection(async (conn) => conn);

    try {
      const insertUserQuery =
        "insert into Users (email, password, nickname) values (?,?,?);";
      const insertUserParams = [email, password, nickname];

      const [row] = await connection.query(insertUserQuery, insertUserParams);
      connection.release();
      return row;
    } catch (err) {
      console.error(` ##### insertUser Query error ##### `);
      connection.release();
      return false;
    }
  } catch (err) {
    console.error(` ##### insertUser DB error #####`);
    return false;
  }
};

exports.selectUserByEmail = async function (email) {
  try {
    const connection = await pool.getConnection(async (conn) => conn);

    try {
      const selectUserByEmailQuery = "select * from Users where email = ?";
      const selectUserByEmailParams = [email];

      const [row] = await connection.query(
        selectUserByEmailQuery,
        selectUserByEmailParams
      );
      connection.release();
      return row;
    } catch (err) {
      console.error(` ##### selectUserByEmail Query error ##### `);
      connection.release();
      return false;
    }
  } catch (err) {
    console.error(` ##### selectUserByEmail DB error #####`);
    return false;
  }
};

exports.selectUser = async function (email, password) {
  try {
    const connection = await pool.getConnection(async (conn) => conn);

    try {
      const selectUserQuery =
        "select * from Users where email = ? and password = ?";
      const selectUserParams = [email, password];

      const [row] = await connection.query(selectUserQuery, selectUserParams);
      connection.release();
      return row;
    } catch (err) {
      console.error(` ##### selectUser Query error ##### `);
      connection.release();
      return false;
    }
  } catch (err) {
    console.error(` ##### selectUser DB error #####`);
    return false;
  }
};

exports.selectNicknameByUserIdx = async function (userIdx) {
  try {
    const connection = await pool.getConnection(async (conn) => conn);

    try {
      const selectNicknameByUserIdxQuery =
        "select * from Users where userIdx= ?;";
      const selectNicknameByUserIdxParams = [userIdx];

      const [row] = await connection.query(
        selectNicknameByUserIdxQuery,
        selectNicknameByUserIdxParams
      );
      connection.release();
      return row;
    } catch (err) {
      console.error(` ##### selectNicknameByUserIdx Query error ##### `);
      connection.release();
      return false;
    }
  } catch (err) {
    console.error(` ##### selectNicknameByUserIdx DB error #####`);
    return false;
  }
};
