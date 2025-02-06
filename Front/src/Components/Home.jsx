import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/posts")
      .then((response) => {
        setPosts(response.data);
        toast.success("Posts loaded successfully!");
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
        toast.error("Failed to load posts!");
      });
  }, []);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this post?")) {
      axios
        .delete(`http://localhost:8080/delete/${id}`)
        .then(() => {
          setPosts(posts.filter((post) => post.id !== id));
          toast.success("Post deleted successfully!");
        })
        .catch((error) => {
          console.error("Error deleting post:", error);
          toast.error("Failed to delete post!");
        });
    }
  };

  return (
    <div className="container mt-2">
      <h1>Home</h1>
      <Link to="/create" className="btn btn-primary mb-3">
        Create New Post
      </Link>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Title</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post.id}>
              <td>
                <Link to={`/view/${post.id}`}>{post.title}</Link>
              </td>
              <td>
                <Link
                  to={`/edit/${post.id}`}
                  className="btn btn-warning btn-sm"
                >
                  Edit
                </Link>
                <button
                  onClick={() => handleDelete(post.id)}
                  className="btn btn-danger btn-sm ms-2"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to="/view" className="btn btn-success mx-2">
        View All Blogs
      </Link>
    </div>
  );
}
