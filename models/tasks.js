const mongoose = require("mongoose");

const BlogSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "please enter a name"],
    trim: true,
    maxlenght: [20, "cannot exceed 20 character"],
  },
  completed: {
    type: Boolean,
    default: true,
  },
});
const Blog = mongoose.model("Blog", BlogSchema);
module.exports = Blog
