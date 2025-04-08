import React, { useEffect, useState } from "react";

const RemotePostList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    import("remote_data_provider/publicApi")
      .then(({ fetchPublicPosts }) => fetchPublicPosts())
      .then((data) => {
        if (isMounted) {
          setPosts(data);
          setLoading(false);
        }
      })
      .catch((err) => {
        console.error("Failed to load remote posts:", err);
        setError("Could not load posts");
        setLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  if (loading) return <p>Loading remote posts...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div style={{ padding: "1rem" }}>
      <h1>
        <strong>Remote Posts</strong>
      </h1>
      <p>
        <strong>
          These posts are being fetched by an API call that exposed from
          'remote_data_provider' remote
        </strong>
      </p>
      <br />
      <ul style={{ listStyle: "none", padding: 0 }}>
        {posts.map((post) => (
          <li
            key={post.id}
            style={{
              marginBottom: "1rem",
              borderBottom: "1px solid #ccc",
              paddingBottom: "0.5rem",
            }}
          >
            <h4 style={{ marginBottom: "0.25rem" }}>{post.title}</h4>
            <p style={{ margin: 0 }}>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RemotePostList;
