import { useState } from "react";
import Post from "./Post";

function Home() {

  const [posts, setPosts] = useState([
    "Welcome to the Social Media Dashboard",
    "React is awesome!",
    "This is a sample post"
  ]);

  const [newPost, setNewPost] = useState("");
  const [search, setSearch] = useState("");

  const addPost = () => {
    if (newPost.trim() !== "") {
      setPosts([newPost, ...posts]);
      setNewPost("");
    }
  };

  const deletePost = (index) => {
    setPosts(posts.filter((_, i) => i !== index));
  };

  const filteredPosts = posts.filter((post) =>
    post.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>

      <h2>Home Page 🏠</h2>

      {/* Search */}
      <input
        placeholder="Search posts"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <br /><br />

      {/* Add Post */}
      <input
        placeholder="Write a post"
        value={newPost}
        onChange={(e) => setNewPost(e.target.value)}
      />

      <button onClick={addPost}>Add Post</button>

      <hr />

      {/* Posts */}
      {filteredPosts.map((post, index) => (
        <Post
          key={index}
          text={post}
          onDelete={() => deletePost(index)}
        />
      ))}

    </div>
  );
}

export default Home;