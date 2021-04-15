import React, { useEffect, useState } from "react";

import { createPost, updatePost } from "../services/postService";
import Input from "./Input";
import Loader from "./Loader";

const PostForm = ({ addPost, editingPost }) => {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [post, setPost] = useState({
    title: "",
    body: "",
  });

  useEffect(() => {
    setPost(editingPost);
  }, [editingPost]);

  const handleChange = ({ target: input }) => {
    setPost({ ...post, [input.name]: input.value });
  };

  const validateForm = () => {
    const errors = {};

    if (post.title.trim() === "") {
      errors.title = "Title must not be empty";
    }

    if (post.body.trim() === "") {
      errors.body = "Body must not be empty";
    }

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!validateForm()) {
      setLoading(false);
      return;
    }

    setErrors({});

    if (post.id) {
      const { data } = await updatePost(post);
      addPost(data);
      setPost({ title: "", body: "" });
      setLoading(false);
    } else {
      const { data } = await createPost(post);
      addPost(data);
      setPost({ title: "", body: "" });
      setLoading(false);
    }
  };

  return (
    <>
      {!loading ? (
        <form onSubmit={handleSubmit} className="push-in">
          <Input
            type="text"
            name="title"
            label="Title"
            value={post.title}
            onChange={handleChange}
            error={errors.title}
          />

          <Input
            type="text"
            name="body"
            label="Body"
            value={post.body}
            onChange={handleChange}
            error={errors.body}
          />

          <button type="submit" className="waves-effect waves-light btn">
            {post.id ? "Update" : "Create"}
          </button>
        </form>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default PostForm;
