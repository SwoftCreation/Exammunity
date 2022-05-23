const { pool } = require("../../database");

const AWS = require("aws-sdk");
const fs = require("fs");
const res = require("express/lib/response");

exports.selectWorkbook = async function () {
  try {
    const connection = await pool.getConnection(async (conn) => conn);

    try {
      const selectWorkbookQuery = "select * from Workbook;";

      const [row] = await connection.query(selectWorkbookQuery);
      connection.release();
      return row;
    } catch (err) {
      console.error(` ##### selectWorkbook Query error ##### `);
      connection.release();
      return false;
    }
  } catch (err) {
    console.error(` ##### selectWorkbook DB error #####`);
    return false;
  }
};

exports.insertWorkbook = async function (
  writer,
  write_date,
  title,
  path, // 'C:/Users/denos/Sample.hwp'
  price
) {
  // s3 연결
  const s3 = new AWS.S3({
    accessKeyId: "AKIASWSRW47DCFQFCORY", // 사용자 AccessKey
    secretAccessKey: "Cvq2eqar8+k865uiKadf1EGIO8fc0FSrxfFVy83Z", // 사용자 secretAccessKey
  });
  const bucket_name = "wbposition";
  const fileContent = fs.readFileSync(path);
  const params = {
    Bucket: bucket_name,
    Key: path,
    Body: fileContent,
  };
  let s3Path;
  s3.upload(params, (err, data) => {
    if (err) {
      res.send(err);
    } else {
      s3Path = data.Location;
    }
  });

  try {
    // DB 연결 검사
    const connection = await pool.getConnection(async (conn) => conn);

    try {
      // 쿼리
      const insertWorkbookQuery =
        "insert into Workbook(writer, write_date, title, path, price) values(?,?,?,?,?);";
      const insertWorkbookParams = [writer, write_date, title, s3Path, price];

      const [row] = await connection.query(
        insertWorkbookQuery,
        insertWorkbookParams
      );
      connection.release();
      return row;
    } catch (err) {
      console.error(` ##### insertWorkbook Query error ##### \n ${err}`);
      connection.release();
      return false;
    }
  } catch (err) {
    console.error(` ##### insertWorkbook DB error ##### \n ${err}`);
    return false;
  }
};

exports.updateWorkbook = async function (
  workbook_num,
  write_date,
  title,
  price
) {
  try {
    // DB 연결 검사
    const connection = await pool.getConnection(async (conn) => conn);
    try {
      // 쿼리
      const updateWorkbookQuery =
        "update Workbook set write_date = ?, title = ?, price=? where workbook_num = ?;";
      const updateWorkbookParams = [write_date, title, price, workbook_num];

      const [row] = await connection.query(
        updateWorkbookQuery,
        updateWorkbookParams
      );
      connection.release();
      return row;
    } catch (err) {
      console.error(` ##### updateWorkbook Query error ##### \n ${err}`);
      connection.release();
      return false;
    }
  } catch (err) {
    console.error(` ##### updateWorkbook DB error ##### \n ${err}`);
    return false;
  }
};

exports.deleteWorkbook = async function (workbook_num) {
  try {
    const connection = await pool.getConnection(async (conn) => conn);

    try {
      const deleteWorkbookQuery =
        "update Workbook set is_deleted = 1 where workbook_num= ?;";
      const deleteWorkbookParams = [workbook_num];
      const [row] = await connection.query(
        deleteWorkbookQuery,
        deleteWorkbookParams
      );
      connection.release();
      return row;
    } catch (err) {
      console.error(` ##### deleteWorkbook Query error ##### `);
      connection.release();
      return false;
    }
  } catch (err) {
    console.error(` ##### deleteWorkbook DB error #####`);
    return false;
  }
};
