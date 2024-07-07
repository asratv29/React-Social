import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faSearch } from "@fortawesome/free-solid-svg-icons";

import MessageData from "../../../ApiJSON/MessageData";
import { Link } from "react-router-dom";

import "./Message.css";
export default function Message() {
  const [message, setMessage] = useState(MessageData);
  const user = [...new Set(MessageData.map((val) => val.name))];

  const [disappear, setDisappear] = useState(true);
  const [value, setValue] = useState("");

  const onChange = (event) => {
    console.log(event.target.value);
    setValue(event.target.value);
    setDisappear(false);
  };
  const onSearch = (searchItem) => {};
  return (
    <div className="Messages">
      <div className="message-top">
        <h4>Message</h4>
        <FontAwesomeIcon icon={faEdit} />
      </div>
      <div className="message-search">
        <FontAwesomeIcon icon={faSearch} className="icon-search" />
        <input
          type="search"
          name=""
          id=""
          value={value}
          placeholder="Search Message..."
          onChange={onChange}
          onClick={() => onSearch(value)}
        />
      </div>

      <div className="border"></div>
      {user.filter((message) => {
        const searchTerm = value.toLowerCase();
       // const fullName = message.name.toLowerCase();
        return (
          searchTerm && (
            <Link to="/chat/id" key={message.id}>
              <div className="message">
                <div className="user">
                  <img
                    src={message.img}
                    alt=""
                    style={{
                      width: "50px",
                      height: "55px",
                      borderRadius: "50%",
                    }}
                  />
                  <div className="green-active"></div>
                </div>
                <div className="message-body">
                  <h5>{message.name}</h5>
                  <p>{message.mText}</p>
                </div>
              </div>
            </Link>
          )
        );
      })}
    </div>
  );
}
