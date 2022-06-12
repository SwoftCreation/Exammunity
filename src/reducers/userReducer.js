const CREATE = "user/CREATE";
const DELETE = "user/DELETE";
const UPDATE = "user/UPDATE";
const LOGIN = "user/LOGIN";

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

export const userUpdate = ({ name, coin }) => {
  return {
    type: UPDATE,
    coin: coin,
    name: name,
  };
};

export const userLogin = ({ name, passWd }) => {
  return {
    userName: name,
    userPw: passWd,
  };
};

const initialState = {
  isLogined: false,
  userNum: 0,
  userInfo: [
    {
      userName: "suwon",
      userPW: "0507",
      userPoint: 1000000,
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
    case UPDATE:
      return {
        ...state,
        userInfo: state.userInfo.filter((userinfo) => {
          console.log("index");
          if (userinfo.userName === action.name) {
            console.log("action으로 들어온 코인 : ", action.coin);
            console.log({
              ...userinfo,
              userPoint: action.coin,
            });
            return {
              ...userinfo,
              userPoint: action.coin,
            };
          } else {
            return userinfo;
          }
        }),
      };
    case LOGIN: {
      if (action.userName === initialState.userInfo.userName) {
        return {
          ...state,
          isLogined: true,
        };
      } else {
        return {
          ...state,
        };
      }
    }
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
