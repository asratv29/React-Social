import {
  faImage,
  faSmile,
  faTags,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";
import CurrentUserData from "../../ApiJSON/CurrentUserData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./post.css";
export default function Post() {
  return (
    <>
      <form className="postForm">
        <div className="user form-top">
          <img
            src={
              CurrentUserData && CurrentUserData.map((user) => user.ProfieImage)
            }
            alt="Profile Image"
            style={{ height: "30px", width: "30px", borderRadius: "50%" }}
          />
          <input
            type="text"
            name="post"
            id="post"
            placeholder="What's on your mind?"
          />
          <button id="share" type="submit" className="btn btn-primary">
            Post/Share
          </button>
        </div>
        <div className="post-categories">
          <label htmlFor="file">
            <input type="file" name="" id="file" />
            <span>
              <FontAwesomeIcon icon={faImage} />
              Photos
            </span>
          </label>
          <label htmlFor="file">
            <input type="file" name="" id="file" />
            <span>
              <FontAwesomeIcon icon={faVideo} />
              Videos
            </span>
          </label>
          <span>
            <FontAwesomeIcon icon={faTags} />
            Tags
          </span>
          <span>
            <FontAwesomeIcon icon={faSmile} />
            Feelings
          </span>
        </div>
      </form>
    </>
  );
}
