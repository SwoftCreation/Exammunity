const { pool } = require("../../database");

exports.insertUsers = async function (
  user_name,
  user_PW,
  user_point,
  create_date
) {
  try {
    const connection = await pool.getConnection(async (conn) => conn);

    try {
      const insertUserQuery =
        "insert into ExamUser(user_name, user_PW, user_point, create_date) values (?,?,?,?);";
      const params = [user_name, user_PW, user_point, create_date];

      const [row] = await connection.query(insertUserQuery, params);
      connection.release();
      return row;
    } catch (err) {
      console.error(` ##### insertUserQuery Query error ##### `);
      connection.release();
      return false;
    }
  } catch (err) {
    console.error(` ##### insertUserQuery DB error #####`);
    return false;
  }
};

exports.selectUsers = async function () {
  try {
    const connection = await pool.getConnection(async (conn) => conn);

    try {
      const selectUserQuery = "SELECT * FROM ExamUser;";

      const [row] = await connection.query(selectUserQuery);
      connection.release();
      return row;
    } catch (err) {
      console.error(` ##### selectUsers Query error ##### `);
      connection.release();
      return false;
    }
  } catch (err) {
    console.error(` ##### selectUsers DB error #####`);
    return false;
  }
};
//
exports.getUserRows = async function () {
  try {
    const connection = await pool.getConnection(async (conn) => conn);

    try {
      const selectUserQuery = "SELECT * FROM User;";

      const [row] = await connection.query(selectUserQuery);
      connection.release();
      return row;
    } catch (err) {
      console.error(` ##### getUserRows Query error ##### `);
      connection.release();
      return false;
    }
  } catch (err) {
    console.error(` ##### getUserRows DB error #####`);
    return false;
  }
};

exports.insertTodo = async function (userIdx, contents, type) {
  try {
    // DB 연결 검사
    const connection = await pool.getConnection(async (conn) => conn);
    try {
      // 쿼리
      const insertTodoQuery =
        "insert into Todos (userIdx, contents, type) values (?, ?, ?);";
      const insertTodoParams = [userIdx, contents, type];

      const [row] = await connection.query(insertTodoQuery, insertTodoParams);
      connection.release();
      return row;
    } catch (err) {
      console.error(` ##### insertTodo Query error ##### \n ${err}`);
      connection.release();
      return false;
    }
  } catch (err) {
    console.error(` ##### insertTodo DB error ##### \n ${err}`);
    return false;
  }
};

exports.selectTodoByType = async function (userIdx, type) {
  try {
    // DB 연결 검사
    const connection = await pool.getConnection(async (conn) => conn);
    try {
      // 쿼리
      const selectTodoByTypeQuery =
        "select todoIdx, contents, status from Todos where userIdx = ? and type = ? and not(status='D');";
      const selectTodoByTypeParams = [userIdx, type];

      const [row] = await connection.query(
        selectTodoByTypeQuery,
        selectTodoByTypeParams
      );
      connection.release();
      return row;
    } catch (err) {
      console.error(` ##### selectTodoByType Query error ##### \n ${err}`);
      connection.release();
      return false;
    }
  } catch (err) {
    console.error(` ##### selectTodoByType DB error ##### \n ${err}`);
    return false;
  }
};

exports.selectValidTodo = async function (userIdx, todoIdx) {
  try {
    // DB 연결 검사
    const connection = await pool.getConnection(async (conn) => conn);
    try {
      // 쿼리
      const selectValidTodoQuery =
        "select * from Todos where userIdx = ? and todoIdx = ? and not(status='D');";
      const selectValidTodoParams = [userIdx, todoIdx];

      const [row] = await connection.query(
        selectValidTodoQuery,
        selectValidTodoParams
      );
      connection.release();
      return row;
    } catch (err) {
      console.error(` ##### selectValidTodo Query error ##### \n ${err}`);
      connection.release();
      return false;
    }
  } catch (err) {
    console.error(` ##### selectValidTodo DB error ##### \n ${err}`);
    return false;
  }
};

exports.updateTodo = async function (userIdx, todoIdx, contents, status) {
  try {
    // DB 연결 검사
    const connection = await pool.getConnection(async (conn) => conn);
    try {
      // 쿼리
      const updateTodoQuery =
        "update Todos set contents = ifnull(?, contents)  , status = ifnull(?, status) where userIdx = ? and todoIdx= ?;";
      const updateTodoParams = [contents, status, userIdx, todoIdx];

      const [row] = await connection.query(updateTodoQuery, updateTodoParams);
      connection.release();
      return row;
    } catch (err) {
      console.error(` ##### updateTodo Query error ##### \n ${err}`);
      connection.release();
      return false;
    }
  } catch (err) {
    console.error(` ##### updateTodo DB error ##### \n ${err}`);
    return false;
  }
};

exports.deleteTodo = async function (userIdx, todoIdx) {
  try {
    // DB 연결 검사
    const connection = await pool.getConnection(async (conn) => conn);
    try {
      // 쿼리
      const deleteTodoQuery =
        "update Todos set status = 'D' where userIdx = ? and todoIdx= ?;";
      const deleteTodoParams = [userIdx, todoIdx];

      const [row] = await connection.query(deleteTodoQuery, deleteTodoParams);
      connection.release();
      return row;
    } catch (err) {
      console.error(` ##### deleteTodo Query error ##### \n ${err}`);
      connection.release();
      return false;
    }
  } catch (err) {
    console.error(` ##### deleteTodo DB error ##### \n ${err}`);
    return false;
  }
};
