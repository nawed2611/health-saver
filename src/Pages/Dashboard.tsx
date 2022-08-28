import React, { useState, useEffect } from "react";
import axios from "axios";
import { getAuth } from "firebase/auth";
import { useForm } from "react-hook-form";
import "../Styles/dashboardstyles.css";

export default function Dashboard() {
  const [record, setrecord] = useState([]);
  const user = getAuth().currentUser.email;

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    var formdata = new FormData();
    formdata.append(
      "recordphoto",
      data.recordphoto[0],
      data.recordphoto[0].name
    );

    var requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow"
    };

    fetch(
      "https://healthsaver.epiccodewizard2.repl.co/save/" +
        user +
        "?recordno=" +
        data.recordno +
        "&recordtype=" +
        data.recordtype,
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
    console.log(data);
  };

  useEffect(() => {
    const getrecords = async () => {
      const res = await axios.get(
        `https://healthsaver.epiccodewizard2.repl.co/fetch/email/${user}`
      );
      setrecord(res.data);
      console.log(res);
    };
    getrecords();
  });

  return (
    <div className="dashboard">
      <h1>Welcome to Dashboard</h1>

      <div className="dash-div">
        <div className="viewrecords-div">
          <h2>Your Records</h2>
          {record.map(({ recordno, recordphoto, recordtype }, index) => (
            <div className="record-card" key={index}>
              <h3>{}</h3>
              <p>
                <a href={recordphoto}>{recordno + " - " + recordtype}</a>
              </p>
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit(onSubmit)} method="POST">
          <label>
            Record ID:
            <input type="text" {...register("recordno")} required />
          </label>

          <label>
            Record Type:
            <input type="text" {...register("recordtype")} required />
          </label>

          <label>
            Upload your Record:
            <input {...register("recordphoto")} type="file" />
          </label>

          <button type="submit" value="Submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
