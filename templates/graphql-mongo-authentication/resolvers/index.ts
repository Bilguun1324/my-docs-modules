import {
  addArticle,
  getArticle,
  getArticles,
  updateArticle,
  deleteArticle,
} from "./articleResolver";
import {
  login,
  signUp,
} from "./userResolver";

export default {
  Query: {
    getArticle,
    getArticles,
  },
  Mutation: {
    addArticle,
    updateArticle,
    deleteArticle,
    signUp,
    login,
  },
};
