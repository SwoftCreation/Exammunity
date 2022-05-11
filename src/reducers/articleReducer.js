const CREATE = "article/CREATE";
const DELETE = "article/DELETE";
const UPDATE = "article/UPDATE";

let id = 0;

export const createArticle = ({ title, content, author }) => {
  return {
    type: CREATE,
    article: [
      {
        id: id + 1,
        title: title,
        contents: content,
        author: author,
      },
    ],
  };
};

export const deleteArticle = (id) => {
  return {
    type: DELETE,
    id,
  };
};

export const updateArticle = (id) => {
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
      title: "sample title",
      contents: "sample contents",
      author: "administrator",
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
