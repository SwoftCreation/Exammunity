const CREATE = "market/CREATE";
const DELETE = "market/DELETE";

/*
Market 게시물 
 
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
        // totalnum 제거 알고리즘 필요
      };
    default:
      return state;
  }
}

export const createMarket = ({ title, content, author }) => {
  return {
    type: CREATE,
    market: {
      title,
      content,
      author,
    },
  };
};

export const deleteMarket = (id) => {
  return {
    type: DELETE,
    id,
  };
};
