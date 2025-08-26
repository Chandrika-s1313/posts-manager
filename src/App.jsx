import React from "react";
import { useSelector } from "react-redux";
import AddPostForm from "./Redux/AddPostForm";
import PostsList from "./Redux/PostsLists";

function App() {
  const posts = useSelector((state) => state.posts);
  return(
    <main>
      <AddPostForm/>
      <PostsList/>
    </main>
  );
}

export default App;
