import React from "react";
import Moment from "react-moment";

const PostCard = ({ post, onEdit, onDelete }) => {
  return (
    <div className="col s6">
      <div className="card">
        <div className="card-content">
          <div className="card-title">{post.title}</div>
          <p className="timestamp">
            <Moment format="YYYY-MM-DD HH:mm">{post.createdAt}</Moment>
          </p>
          <p>{post.body}</p>
        </div>
        <div className="card-action">
          <button className="edit-btn" onClick={() => onEdit(post)}>
            Edit
          </button>
          <button className="delete-btn" onClick={() => onDelete(post.id)}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
