const { pool } = require("../../database");

exports.selectcmComment = async function () {
  try {
    const connection = await pool.getConnection(async (conn) => conn);

    try {
      const selectcmCommentQuery = "SELECT * FROM CommunityComment;";

      const [row] = await connection.query(selectcmCommentQuery);
      connection.release();
      return row;
    } catch (err) {
      console.error(` ##### selectcmComment Query error ##### `);
      connection.release();
      return false;
    }
  } catch (err) {
    console.error(` ##### selectcmComment DB error #####`);
    return false;
  }
};

exports.insertcmComment = async function (
  writer,
  write_date,
  text_num,
  comment_text
) {
  try {
    // DB 연결 검사
    const connection = await pool.getConnection(async (conn) => conn);
    try {
      // 쿼리
      const insertcmCommentQuery =
        "insert into CommunityComment (writer, write_date, text_num, comment_text) values (?,?,?,?);";
      const insertcmCommentParams = [
        writer,
        write_date,
        text_num,
        comment_text,
      ];

      const [row] = await connection.query(
        insertcmCommentQuery,
        insertcmCommentParams
      );
      connection.release();
      return row;
    } catch (err) {
      console.error(` ##### cmComment Query error ##### \n ${err}`);
      connection.release();
      return false;
    }
  } catch (err) {
    console.error(` ##### cmComment DB error ##### \n ${err}`);
    return false;
  }
};

exports.updatecmComment = async function (
  comment_num,
  write_date,
  comment_text
) {
  try {
    // DB 연결 검사
    const connection = await pool.getConnection(async (conn) => conn);
    try {
      // 쿼리
      const updatecmCommentQuery =
        "update CommunityComment set comment_text = ?, write_date = ? where comment_num= ?;";
      const updatecmCommentParams = [comment_text, write_date, comment_num];

      const [row] = await connection.query(
        updatecmCommentQuery,
        updatecmCommentParams
      );
      connection.release();
      return row;
    } catch (err) {
      console.error(` ##### updatecmComment Query error ##### \n ${err}`);
      connection.release();
      return false;
    }
  } catch (err) {
    console.error(` ##### updatecmComment DB error ##### \n ${err}`);
    return false;
  }
};

exports.deletecmComment = async function (comment_num) {
  try {
    const connection = await pool.getConnection(async (conn) => conn);

    try {
      const deletecmCommentQuery =
        "update CommunityComment set is_deleted = 1 where comment_num= ?;";
      const deletecmCommentParams = [comment_num];
      const [row] = await connection.query(
        deletecmCommentQuery,
        deletecmCommentParams
      );
      connection.release();
      return row;
    } catch (err) {
      console.error(` ##### deletecmComment Query error ##### `);
      connection.release();
      return false;
    }
  } catch (err) {
    console.error(` ##### deletecmComment DB error #####`);
    return false;
  }
};
