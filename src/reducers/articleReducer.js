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

const deleteArticle = (id) => {
  return {
    type: DELETE,
    id,
  };
};

const updateArticle = (id) => {
  return {
    type: UPDATE,
    id,
  };
};

const initialState = {
  articleNum: 0,
  articles: [
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
        articles: state.articles.concat(action.article),
        articleNum: state.articleNum + 1,
      };
    case UPDATE:
      return {
        state,
      };
    case DELETE:
      return {
        ...state,
        articles: state.article.filter((article) => {
          return article.id !== action.id;
        }),
      };
    default:
      return state;
  }
}
