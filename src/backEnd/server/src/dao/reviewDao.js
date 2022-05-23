const { pool } = require("../../database");

exports.selectReview = async function () {
  try {
    const connection = await pool.getConnection(async (conn) => conn);

    try {
      const selectReviewQuery = "select * from Review;";

      const [row] = await connection.query(selectReviewQuery);
      connection.release();
      return row;
    } catch (err) {
      console.error(` ##### selectReview Query error ##### `);
      connection.release();
      return false;
    }
  } catch (err) {
    console.error(` ##### selectReview DB error #####`);
    return false;
  }
};

exports.insertReview = async function (
  writer,
  write_date,
  workbook_num,
  review_text,
  score
) {
  try {
    // DB 연결 검사
    const connection = await pool.getConnection(async (conn) => conn);
    try {
      // 쿼리
      const insertReviewQuery =
        "insert into Review(writer, write_date, workbook_num, review_text, score) values(?,?,?,?,?);";
      const insertReviewParams = [
        writer,
        write_date,
        workbook_num,
        review_text,
        score,
      ];

      const [row] = await connection.query(
        insertReviewQuery,
        insertReviewParams
      );
      connection.release();
      return row;
    } catch (err) {
      console.error(` ##### insertReview Query error ##### \n ${err}`);
      connection.release();
      return false;
    }
  } catch (err) {
    console.error(` ##### insertReview DB error ##### \n ${err}`);
    return false;
  }
};

exports.updateReview = async function (
  review_num,
  write_date,
  review_text,
  score
) {
  try {
    // DB 연결 검사
    const connection = await pool.getConnection(async (conn) => conn);
    try {
      // 쿼리
      const updateReviewQuery =
        "update Review set write_date =?, review_text=?, score =? where review_num =?;";
      const updateReviewParams = [write_date, review_text, score, review_num];

      const [row] = await connection.query(
        updateReviewQuery,
        updateReviewParams
      );
      connection.release();
      return row;
    } catch (err) {
      console.error(` ##### updateReview Query error ##### \n ${err}`);
      connection.release();
      return false;
    }
  } catch (err) {
    console.error(` ##### updateReview DB error ##### \n ${err}`);
    return false;
  }
};

exports.deleteReview = async function (review_num) {
  try {
    const connection = await pool.getConnection(async (conn) => conn);

    try {
      const deleteReviewQuery =
        "update Review set is_deleted = 1 where review_num= ?;";
      const deleteReviewParams = [review_num];
      const [row] = await connection.query(
        deleteReviewQuery,
        deleteReviewParams
      );
      connection.release();
      return row;
    } catch (err) {
      console.error(` ##### deleteReview Query error ##### `);
      connection.release();
      return false;
    }
  } catch (err) {
    console.error(` ##### deleteReview DB error #####`);
    return false;
  }
};
