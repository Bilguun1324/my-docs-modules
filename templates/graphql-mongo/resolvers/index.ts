import {
  addArticle,
  getArticle,
  getArticles,
  updateArticle,
  deleteArticle,
} from "./articleResolver";

export default {
  Query: {
    getArticle,
    getArticles,
  },
  Mutation: {
    addArticle,
    updateArticle,
    deleteArticle,
  },
};
