import React, { useState } from "react";
import Button from "../Components/Button";
import Form from "../Components/Form";
import "./views.css";
function AllQuestionss() {
  const axios = require("axios");
  const [Data, setData] = useState(
    JSON.parse(localStorage.getItem("questions"))
  );
  function onsubmitbtnClick() {
    axios
      .post("path of Mock endpoint", Data)
      .then(function (response) {
        alert("Your answers ares submitted Successfully");
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  return (
    <>
      <div className="AllQCont">
        <div
          className="container"
          style={{ justifySelf: "center", textAlign: "start", width: "45vw" }}
        >
          <h3>Section 1</h3>
          <div className="col">
            <div className="col-sm-12">{Data[0].Q}</div>
            <div
              className="col-sm-8"
              style={{
                justifySelf: "center",
                width: "30vw",
                listStyleType: "none",
                marginLeft: "3%",
              }}
            >
              <ul className="list-group ">
                <li className="list-group-item col-sm-8">
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault1"
                  >
                    {Data[0].Ans}
                  </label>
                </li>
              </ul>
            </div>
          </div>

          <div className="col">
            <div className="col-sm-12">{Data[1].Q}</div>
            <div
              className="col-sm-8"
              style={{
                justifySelf: "center",
                width: "30vw",
                listStyleType: "none",
                marginLeft: "3%",
              }}
            >
              <ul className="list-group ">
                <li className="list-group-item col-sm-8">
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault1"
                  >
                    {Data[1].Ans}
                  </label>
                </li>
              </ul>
            </div>
          </div>

          <div className="col">
            <div className="col-sm-12">{Data[2].Q}</div>
            <div
              className="col-sm-8"
              style={{
                justifySelf: "center",
                width: "30vw",
                listStyleType: "none",
                marginLeft: "3%",
              }}
            >
              <ul className="list-group ">
                <li className="list-group-item col-sm-8">
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault1"
                  >
                    {Data[2].Ans}
                  </label>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div
          className="container"
          style={{
            justifySelf: "center",
            textAlign: "start",
            width: "45vw",
          }}
        >
          <h3>Section 2</h3>
          <div className="col">
            <div className="col-sm-12">{Data[3].Q}</div>
            <div
              className="col-sm-8"
              style={{
                justifySelf: "center",
                width: "30vw",
                listStyleType: "none",
                marginLeft: "3%",
              }}
            >
              <ul className="list-group ">
                <li className="list-group-item col-sm-8">
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault1"
                  >
                    {Data[3].Ans}
                  </label>
                </li>
              </ul>
            </div>
          </div>
          <div className="col">
            <div className="col-sm-12">{Data[4].Q}</div>
            <div
              className="col-sm-8"
              style={{
                justifySelf: "center",
                width: "30vw",
                listStyleType: "none",
                marginLeft: "3%",
              }}
            >
              <ul className="list-group ">
                <li className="list-group-item col-sm-8">
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault1"
                  >
                    {Data[4].Ans}
                  </label>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="AllQContBtn">
        <Button text={"Next"} onbtnClick={() => onsubmitbtnClick()} />
      </div>
    </>
  );
}

export default AllQuestionss;
