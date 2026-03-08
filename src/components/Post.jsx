import { useState } from "react";

function Post({ text, onDelete }) {

  const [likes, setLikes] = useState(0);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  const addComment = () => {
    if (comment !== "") {
      setComments([...comments, comment]);
      setComment("");
    }
  };

  return (
    <div className="post">

      <p>{text}</p>

      <div className="post-actions">
        <button onClick={() => setLikes(likes + 1)}>
          ❤️ {likes}
        </button>

        <button onClick={onDelete}>Delete</button>
      </div>

      <br />

      <input
        placeholder="Add comment"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />

      <button onClick={addComment}>Comment</button>

      {comments.map((c, i) => (
        <p key={i} className="comment">💬 {c}</p>
      ))}

    </div>
  );
}

export default Post;