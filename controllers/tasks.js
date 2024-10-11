const Blog = require('../models/tasks');

const getAllBlogs = async (req, res) => {
    try {
        const blog = await Blog.find({});
        res.status(200).json({ blog });
    } catch (err) {
        res.status(400).json({ error: 'Internal server error' });
    }
};

const getBlogs = async (req, res) => {
    try {
        const { id: blogID } = req.params;
        const blog = await Blog.findById(blogID);
        if (!blog) {
            return res.status(404).json({ message: 'Blog not found' });
        }
        res.status(200).json({ blog });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

const updateBlog = async (req, res) => {
    try {
        const { id: blogID } = req.params;
        const blog = await Blog.findByIdAndUpdate(blogID, req.body, {
            new: true,
            runValidators: true,
        });
        if (!blog) {
            return res.status(404).json({ message: 'Blog not found' });
        }
        res.status(200).json({ blog });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

const createBlog = async (req, res) => {
    try {
        const blog = await Blog.create(req.body);
        res.status(200).json({ blog });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

const deleteBlog = async (req, res) => {
    try {
        const { id: blogID } = req.params;
        const result = await Blog.deleteOne({ _id: blogID });
        if (result.deletedCount === 0) {
            return res.status(404).json({ message: 'Blog not found' });
        }
        res.status(200).json({ message: 'Blog deleted successfully' });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

module.exports = { getAllBlogs, getBlogs, updateBlog, deleteBlog, createBlog  };
