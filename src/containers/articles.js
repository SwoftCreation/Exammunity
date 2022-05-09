const CREATE = "article/CREATE";
const DELETE = "article/DELETE";
const UPDATE = "article/UPDATE";

const createArticle = () => {
  return {
    type: CREATE,
  };
};

const deleteArticle = () => {
  return {
    type: DELETE,
  };
};

const updateArticle = () => {
  return {
    type: UPDATE,
  };
};

const initialState = {
  articleNum: 0,
  article: [
    { title: "sample1", contents: "sample contents1", author: "johnson" },
  ],
};

export default function articleReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE:
      return {
        state,
      };
    case UPDATE:
      return {
        state,
      };
    case DELETE:
      return {
        state,
      };
    default:
      return state;
  }
}
