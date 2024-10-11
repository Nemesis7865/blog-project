const express = require("express");
const router = express.Router();
const {
  getAllBlogs,
  getBlogs,
  createBlog,
  updateBlog,
  deleteBlog,
} = require("../controllers/tasks");

router.route("/").get(getAllBlogs).post(createBlog);
router.route("/:id").get(getBlogs).patch(updateBlog).delete(deleteBlog);

module.exports = router;
