import React from "react";
import Message from "./message/Message";
import Request from "./requrest/Request";

import "./Rside.css";
export default function Rsidebar() {
  return (
    <div className="Right-side">
      <div className="rside-container">
        <Message />
        <Request />
      </div>
    </div>
  );
}
