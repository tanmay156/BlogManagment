import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast";

const CreatePost = () => {
  const [post, setPost] = useState({
    title: "",
    content: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost((prevPost) => ({
      ...prevPost,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/posts", post)
      .then(() => {
        toast.success("Post created successfully!");
        navigate("/home");
      })
      .catch((error) => {
        console.error("Error creating post:", error);
        setError("Failed to create post.");
        toast.error("Failed to create post.");
      });
  };

  return (
    <div className="container mt-5">
      <h1>Create Post</h1>
      {error && <div className="alert alert-danger">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title:
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={post.title}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="content" className="form-label">
            Content:
          </label>
          <textarea
            id="content"
            name="content"
            value={post.content}
            onChange={handleChange}
            className="form-control"
            rows="5"
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-success">
          Submit
        </button>
        <button
          type="button"
          className="btn btn-secondary ms-2"
          onClick={() => navigate("/home")}
        >
          Cancel
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
