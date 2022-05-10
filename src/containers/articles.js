const CREATE = "article/CREATE";
const DELETE = "article/DELETE";
const UPDATE = "article/UPDATE";

let id = 0;

const createArticle = ({ title, text, author }) => {
  return {
    type: CREATE,
    article: [
      {
        id: id++,
        title: title,
        contents: text,
        author: author,
      },
    ],
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
    {
      id: 0,
      title: "sample1",
      contents: "sample contents1",
      author: "johnson",
    },
  ],
};

export default function articleReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE:
      return {
        ...state,
        article: state.article.concat(action.article),
        articleNum: state.articleNum + 1,
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
