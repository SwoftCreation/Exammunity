const CREATE = "user/CREATE";
const DELETE = "user/DELETE";

let userNum = 0;

export const userCreate = ({ name, passWd }) => {
  return {
    userInfo: {
      userName: name,
      userPw: passWd,
      userPoint: 0,
      createDate: getDate(),
      isDeleted: false,
      // isDeleted는 tinyInt 0,1로 구별합니다
    },
  };
};

const userDelete = ({ name, passWd }) => {
  return {
    userName: name,
    userPw: passWd,
  };
};

const initialState = {
  userNum: 0,
  userInfo: [
    {
      userName: "장규은",
      userPW: "0000",
      userPoint: "0",
      createDate: "20220516",
      //date 안줘도 됌
      isDeleted: false,
    },
  ],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default userReducer;

const getDate = () => {
  let date = new Date();
  let [year, month, day, hour, min, sec] = [
    date.getFullYear(),
    date.getMonth(),
    date.getDay(),
    date.getHours(),
    date.getMinutes(),
    date.getSeconds(),
  ];
  let dateString =
    year + "-" + month + "-" + day + " " + hour + ":" + min + ":" + sec;
  return dateString;
};
