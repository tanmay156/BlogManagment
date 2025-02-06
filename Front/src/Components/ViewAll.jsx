import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const ViewPost = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:8080/posts/${id}`)
      .then((response) => {
        setPost(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching post:", error);
        setError("Failed to load post.");
        setLoading(false);
      });
  }, [id]);

  // Display loading message or error message while the data is being fetched
  if (loading) return <div className="container mt-5">Loading...</div>;
  if (error)
    return <div className="container mt-5 alert alert-danger">{error}</div>;

  // Ensure 'post' is not null before rendering the content
  if (!post) {
    return (
      <div className="container mt-5 alert alert-danger">Post not found.</div>
    );
  }

  return (
    <div className="container mt-5">
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <p>
        <strong>Created At:</strong> {new Date(post.createdAt).toLocaleString()}
      </p>
      <p>
        <strong>Updated At:</strong> {new Date(post.updatedAt).toLocaleString()}
      </p>
      <Link to={`/posts/edit/${post.id}`} className="btn btn-warning">
        Edit
      </Link>
      <Link to="/posts" className="btn btn-secondary ms-2">
        Back to List
      </Link>
    </div>
  );
};

export default ViewPost;
