import mongoose, { Schema } from "mongoose";

// Define the schema for the Article model
const ArticleSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
  },
});

const ArticleModel = mongoose.model("Article", ArticleSchema);

export { ArticleModel };
