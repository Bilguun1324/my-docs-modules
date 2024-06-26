import { ArticleModel } from "../schemas";

const addArticle = async (_: any, params: any) => {
  const Article = new ArticleModel(params);

  try {
    // Save the new Article
    await Article.save();
    return Article;
  } catch (err) {
    return err;
  }
};

const updateArticle = async (_: any, params: any) => {
  try {
    // Update given Article
    const Article = await ArticleModel.updateOne({ _id: params.id }, params);
    return Article;
  } catch (err) {
    return err;
  }
};

const deleteArticle = async (_: any, params: any) => {
  try {
    // Delete given Article
    const Article = await ArticleModel.deleteOne({ _id: params.id });
    return Article;
  } catch (err) {
    return err;
  }
};

const getArticle = async (_: any, params: any) => {
  try {
    // Find the Article by ID
    const Article = await ArticleModel.findOne({ _id: params.id });
    return Article;
  } catch (err) {
    return err;
  }
};

const getArticles = async (_: any, params: any) => {
  try {
    // Find all Articles
    const Article = await ArticleModel.find(params);
    return Article;
  } catch (err) {
    return err;
  }
};

export { addArticle, getArticle, getArticles, updateArticle, deleteArticle };
