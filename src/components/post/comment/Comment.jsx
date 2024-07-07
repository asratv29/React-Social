import { Link } from "react-router-dom";
import CommentData from "../../../ApiJSON/CommetData";
import CurrentUserData from "../../../ApiJSON/CurrentUserData";

import "./comment.css";

export default function Comment() {
  return (
    <div className="comments">
      <div className="mt-4 mx-3">Comments</div>
      <div className="writebox">
        <form action="#">
          <div className="user mx-4 pb-2">
            <img
              src={
                CurrentUserData &&
                CurrentUserData.map((user) => user.ProfieImage)
              }
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                marginRight: "15px",
              }}
              alt=""
            />
            <input type="text" placeholder="Write your comment" className="" />
            <button
              type="submit"
              className="btn btn-primary text-center text-white"
            >
              Comment
            </button>
          </div>
        </form>
      </div>
      {CommentData &&
        CommentData.map((comment) => (
          <Link to="/profile/id">
            <div className="user-comment" key={comment.id}>
              <img
                src={comment.img}
                alt=""
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                  marginRight: "15px",
                }}
              />
              <div>
                <h5>{comment.name}</h5>
                <p>{comment.CommeText}</p>
              </div>
              <small>1day ago</small>s
            </div>
          </Link>
        ))}
    </div>
  );
}
