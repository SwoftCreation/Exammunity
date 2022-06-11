const CREATE = "market/CREATE";
const DELETE = "market/DELETE";
const UPDATE = "market/UPDATE";

/*
Market 게시물 

예시 State form
marketReducer{
  marketNum: 정수_순차적으로 증가
  markets: [
    {title: 문자열,
    author: 문자열,
    content: 문자열,
    coin: 정수,
    id: 정수 (1부터 시작해서 순차적으로 증가 인덱스0은 공지로 들어감.)),
  }
  ]
}
*/
const initialState = {
  marketNum: 0,
  markets: [],
};

export default function marketReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE:
      return {
        ...state,
        markets: state.markets.concat({
          ...action.market,
          id: state.marketNum + 1,
        }),
        marketNum: state.marketNum + 1,
      };

    case DELETE:
      return {
        ...state,
        markets: state.markets.filter((market, index) => {
          console.log("deleting... index : ", index);
          return market.id !== action.id;
        }),
        /* TODO:
        문제 삭제 시에  
        totalnum 감소 시키는 알고리즘 필요
         */
      };

    case UPDATE:
      return {
        ...state,
        markets: state.markets.filter((market, index) => {
          console.log("updating market Article index [" + index + "]");
          if (market.id === action.id) {
            return {
              title: action.title,
              author: action.author,
              coin: action.coin,
              content: action.content,
            };
          } else {
            console.log("update failed");
            return market;
          }
        }),
      };
    default:
      return state;
  }
}

export const createMarket = ({ title, workbook, content, author, coin }) => {
  return {
    type: CREATE,
    market: {
      title,
      workbook,
      content,
      author,
      coin,
    },
  };
};

export const deleteMarket = (id) => {
  return {
    type: DELETE,
    id,
  };
};

export const updateMarket = ({ title, content, author, coin, update }) => {
  return {
    type: UPDATE,
    market: {
      title,
      content,
      author,
      coin,
    },
  };
};
