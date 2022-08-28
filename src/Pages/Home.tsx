import React, { useState } from "react";
import useAuth from "../firebaseConfig";
import "../Styles/homestyles.css";

export default function Home() {
  let [status, setStatus] = useState();
  const imageUrl =
    "https://images.unsplash.com/photo-1593538312817-97a85c092c1e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";
  let { google } = useAuth(setStatus);
  return (
    <div className="home">
      <div className="home-div">
        <h3>One Stop Solution for Storing your Health Receipts</h3>
        <img src={imageUrl} className="home-image" alt="home-logo" />
      </div>
      <div className="home-sec-div">
        <h4>Continue to Health Saver Here</h4>
        <button onClick={async () => google()}>Sign In With Google</button>
        <p>{status}</p>
      </div>
    </div>
  );
}
