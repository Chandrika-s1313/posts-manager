import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts, updatePostLocal, deletePostLocal } from "./PostSlice"

function PostsList() {
  const dispatch = useDispatch();
  const { posts, status, error } = useSelector((state) => state.posts);

  const [editPostId, setEditPostId] = useState(null);
  const [editTitle, setEditTitle] = useState("");
  const [editBody, setEditBody] = useState("");

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchPosts());
    }
  }, [status, dispatch]);

  const handleDelete = (id) => {
    dispatch(deletePostLocal(id));
  };

  const handleEdit = (post) => {
    setEditPostId(post.id);
    setEditTitle(post.title);
    setEditBody(post.body);
  };

  const handleUpdate = () => {
    dispatch(updatePostLocal({ id: editPostId, title: editTitle, body: editBody }));
    setEditPostId(null);
    setEditTitle("");
    setEditBody("");
  };

  let content;
  if (status === "loading") {
    content = <p>Loading...</p>;
  } else if (status === "succeeded") {
    content = posts.map((post) => (
      <article key={post.id} style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}>
        {editPostId === post.id ? (
          <>
            <input
              type="text"
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
            />
            <textarea
              value={editBody}
              onChange={(e) => setEditBody(e.target.value)}
            />
            <button onClick={handleUpdate}>Save</button>
            <button onClick={() => setEditPostId(null)}>Cancel</button>
          </>
        ) : (
          <>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <button onClick={() => handleEdit(post)}>Edit</button>
            <button onClick={() => handleDelete(post.id)}>Delete</button>
          </>
        )}
      </article>
    ));
  } else if (status === "failed") {
    content = <p>{error}</p>;
  }

  return (
    <section>
      <h2>Posts</h2>
      {content}
    </section>
  );
}

export default PostsList;
