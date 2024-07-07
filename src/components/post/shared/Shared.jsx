import { Link } from "react-router-dom";
import { useState } from "react";
import HomeFeedData from "../../../ApiJSON/HomeFeedData";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComment,
  faHeart,
  faListDots,
  faShare,
} from "@fortawesome/free-solid-svg-icons";

import Comment from "../comment/Comment";

import "./shared.css";
export default function Shared() {
  // const [active, setActive] = useState(true);
  const [displayComment, setDisplayComment] = useState(false);
  return (
    <>
      <div className="feeds">
        {HomeFeedData &&
          HomeFeedData.map((feed) => (
            <div className="feed" key={feed.id}>
              <div className="top-content">
                <Link to="/profile/id">
                  <div className="user">
                    <img
                      src={feed.feedImage}
                      alt="UserProfile"
                      style={{
                        height: "50px",
                        width: "50px",
                        borderRadius: "50%",
                        objectFit: "center",
                      }}
                    />
                    <div className="">
                      <h5>{feed.name}</h5>
                      <small> 1 minutes ago</small>
                    </div>
                  </div>
                </Link>
                <span>
                  <FontAwesomeIcon icon={faListDots} />
                </span>
              </div>
              <div className="mid-content">
                <p>{feed.desc}</p>
                <img
                  src={feed.feedImage}
                  alt="sharedImage/video"
                  style={{
                    width: "100%",
                    height: "600px",
                    minHeight: "600px",
                    margin: "10px",
                    padding: "10px",
                    borderRadius: "50px",
                  }}
                />
              </div>
              <div
                className="bottom-content"
                // onClick={() => setDisplayComment(!displayComment)}
                style={{ cursor: "pointer" }}
              >
                <div className="action-item mx-3">
                  <span>
                    <FontAwesomeIcon icon={faHeart} /> 1 Likes
                  </span>
                </div>

                <div
                  className="action-item mx-3"
                  onClick={() => setDisplayComment(!displayComment)}
                  style={{ cursor: "pointer" }}
                >
                  <span>
                    <FontAwesomeIcon icon={faComment} /> 1 Comment
                  </span>
                </div>
                <div
                  className="action-item mx-3"
                  //onClick={() => setDisplayComment(!displayComment)}
                  style={{ cursor: "pointer" }}
                >
                  <span>
                    <FontAwesomeIcon icon={faShare} /> 1 Shared
                  </span>
                </div>
              </div>
              {displayComment && <Comment />}
            </div>
          ))}
      </div>
    </>
  );
}
