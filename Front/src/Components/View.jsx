import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

export default function View() {
  const [posts, setPosts] = useState([]); 
  const [post, setPost] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      axios
        .get(`http://localhost:8080/posts/${id}`)
        .then((response) => setPost(response.data))
        .catch((error) => console.error("Error fetching post:", error));
    } else {
      axios
        .get("http://localhost:8080/posts")
        .then((response) => setPosts(response.data))
        .catch((error) => console.error("Error fetching posts:", error));
    }
  }, [id]);

  return (
    <div className="container mt-5">
      <Link to="/home" className="btn btn-secondary mb-3">
        ← Back to Home
      </Link>

      {id ? (
        post ? (
          <div className="card shadow-lg p-4">
            <h1 className="mb-3">{post.title}</h1>
            <p className="text-muted">
              Published on: {new Date().toLocaleDateString()}
            </p>
            <hr />
            <p className="lead">{post.content}</p>
          </div>
        ) : (
          <p>Loading post...</p>
        )
      ) : (
        <div>
          <h1 className="mb-4">Blog Posts</h1>
          <Link to="/create" className="btn btn-primary mb-3">
            Create New Post
          </Link>
          {posts.map((post) => (
            <div key={post.id} className="card mb-4 p-3 shadow-sm">
              <h3>
                <Link to={`/view/${post.id}`} className="text-decoration-none">
                  {post.title}
                </Link>
              </h3>
              <p className="text-muted">{post.content.substring(0, 100)}...</p>
              <Link
                to={`/view/${post.id}`}
                className="btn btn-outline-primary btn-sm"
              >
                Read More
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
