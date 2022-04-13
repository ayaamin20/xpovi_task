import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
function Form() {
  const navigate = useNavigate();
  const [questions, setquestion] = useState([
    {
      question: "1. Is your business model B2C or B2B or both?",
      ans1: "B2C",
      ans2: "B2B",
      ans3: "both",
    },
    {
      question: "2. Do you target all age brackets?",
      ans1: "Yes",
      ans2: "No",
      ans3: null,
    },
    {
      question: "3. Do you target all industries?",
      ans1: "Yes",
      ans2: "No",
      ans3: null,
    },
  ]);
  const [questionssec2, setquestionssec2] = useState([
    {
      question: "1. Did you have an investment?",
      ans1: "Yes",
      ans2: "No",
    },
    {
      question: "2. How much was the investment?",
    },
  ]);
  const [question1ans, setquestion1ans] = useState(null);
  const [question2ans, setquestion2ans] = useState(null);
  const [question3ans, setquestion3ans] = useState(null);
  const [sec2question1ans, setsec2question1ans] = useState(null);
  const [sec2question2ans, setsec2question2ans] = useState(null);
  const [showsection2, setshowsection2] = useState(false);
  const [Data, setData] = useState([]);

  function onnextbtnClick() {
    setshowsection2(true);
  }

  function onsubmitbtnClick() {
    localStorage.setItem(
      "questions",
      JSON.stringify([
        { Q: questions[0].question, Ans: question1ans },
        { Q: questions[1].question, Ans: question2ans },
        { Q: questions[2].question, Ans: question3ans },
        { Q: questionssec2[0].question, Ans: sec2question1ans },
        { Q: questionssec2[1].question, Ans: sec2question2ans },
      ])
    );
    navigate("/allquestions");
  }
  return (
    <>
      <div style={{ display: "flex", width: "100vw" }}>
        <div
          className="container"
          style={{ justifySelf: "center", textAlign: "start", width: "45vw" }}
        >
          <h3>Section 1</h3>
          <div className="col">
            <div className="col-sm-12">{questions[0].question}</div>
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
                  <input
                    className="form-check-input me-1"
                    type="radio"
                    value={questions[0].ans1}
                    name={questions[0].question}
                    id="flexRadioDefault1"
                    onChange={(e) => {
                      setquestion1ans(e.target.value);
                    }}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault1"
                  >
                    {questions[0].ans1}
                  </label>
                </li>
                <li className="list-group-item col-sm-8">
                  <input
                    id="flexRadioDefault2"
                    className="form-check-input me-1"
                    type="radio"
                    name={questions[0].question}
                    value={questions[0].ans2}
                    onChange={(e) => {
                      setquestion1ans(e.target.value);
                    }}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault2"
                  >
                    {questions[0].ans2}
                  </label>
                </li>
                {questions[0].ans3 && (
                  <li className="list-group-item col-sm-8">
                    <input
                      id="flexRadioDefault3"
                      className="form-check-input me-1"
                      type="radio"
                      name={questions[0].question}
                      value={questions[0].ans3}
                      onChange={(e) => {
                        setquestion1ans(e.target.value);
                      }}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexRadioDefault3"
                    >
                      {questions[0].ans3}
                    </label>
                  </li>
                )}
              </ul>
            </div>
          </div>

          <div className="col" style={{ display: question1ans ? "" : "none" }}>
            <div className="col-sm-12">{questions[1].question}</div>
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
                  <input
                    className="form-check-input me-1"
                    type="radio"
                    value={questions[1].ans1}
                    name={questions[1].question}
                    id="flexRadioDefault1"
                    onChange={(e) => {
                      setquestion2ans(e.target.value);
                    }}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault1"
                  >
                    {questions[1].ans1}
                  </label>
                </li>
                <li className="list-group-item col-sm-8">
                  <input
                    id="flexRadioDefault2"
                    className="form-check-input me-1"
                    type="radio"
                    name={questions[1].question}
                    value={questions[1].ans2}
                    onChange={(e) => {
                      setquestion2ans(e.target.value);
                    }}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault2"
                  >
                    {questions[1].ans2}
                  </label>
                </li>
                {questions[1].ans3 && (
                  <li className="list-group-item col-sm-8">
                    <input
                      id="flexRadioDefault3"
                      className="form-check-input me-1"
                      type="radio"
                      name={questions[1].question}
                      value={questions[1].ans3}
                      onChange={(e) => {
                        setquestion2ans(e.target.value);
                      }}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexRadioDefault3"
                    >
                      {questions[1].ans3}
                    </label>
                  </li>
                )}
              </ul>
            </div>
          </div>

          <div className="col" style={{ display: question2ans ? "" : "none" }}>
            <div className="col-sm-12">{questions[2].question}</div>
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
                  <input
                    className="form-check-input"
                    type="radio"
                    value={questions[2].ans1}
                    name={questions[2].question}
                    id="flexRadioDefault1"
                    onChange={(e) => {
                      setquestion3ans(e.target.value);
                    }}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault1"
                  >
                    {questions[2].ans1}
                  </label>
                </li>
                <li className="list-group-item col-sm-8">
                  <input
                    id="flexRadioDefault2"
                    className="form-check-input me-1"
                    type="radio"
                    name={questions[2].question}
                    value={questions[2].ans2}
                    onChange={(e) => {
                      setquestion3ans(e.target.value);
                    }}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault2"
                  >
                    {questions[2].ans2}
                  </label>
                </li>
                {questions[2].ans3 && (
                  <li className="list-group-item col-sm-8">
                    <input
                      id="flexRadioDefault3"
                      className="form-check-input me-1"
                      type="radio"
                      name={questions[2].question}
                      value={questions[2].ans3}
                      onChange={(e) => {
                        setquestion3ans(e.target.value);
                      }}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexRadioDefault3"
                    >
                      {questions[2].ans3}
                    </label>
                  </li>
                )}
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
            display: showsection2 ? "" : "none",
          }}
        >
          <h3>Section 2</h3>
          <div className="col">
            <div className="col-sm-12">{questionssec2[0].question}</div>
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
                  <input
                    className="form-check-input me-1"
                    type="radio"
                    value={questionssec2[0].ans1}
                    name={questionssec2[0].question}
                    id="flexRadioDefault1"
                    onChange={(e) => {
                      setsec2question1ans(e.target.value);
                    }}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault1"
                  >
                    {questionssec2[0].ans1}
                  </label>
                </li>
                <li className="list-group-item col-sm-8">
                  <input
                    id="flexRadioDefault2"
                    className="form-check-input me-1"
                    type="radio"
                    name={questionssec2[0].question}
                    value={questionssec2[0].ans2}
                    onChange={(e) => {
                      setsec2question1ans(e.target.value);
                    }}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault2"
                  >
                    {questionssec2[0].ans2}
                  </label>
                </li>
              </ul>
            </div>
          </div>
          <div
            className="col"
            style={{ display: sec2question1ans ? "" : "none" }}
          >
            <div className="col-sm-12">{questionssec2[1].question}</div>
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
                  <input
                    style={{ width: "98%" }}
                    id="flexRadioDefault2"
                    className="form-input me-1"
                    type="number"
                    value={sec2question2ans}
                    disabled={sec2question1ans === "Yes" ? false : true}
                    onChange={(e) => {
                      setsec2question2ans(e.target.value);
                    }}
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div style={{ width: "20%" }}>
        <Button
          text={"Next"}
          disabled={
            (sec2question1ans === "Yes" && sec2question2ans !== null) ||
            sec2question1ans === "No"
              ? false
              : true
          }
          onbtnClick={() =>
            sec2question2ans ? onsubmitbtnClick() : onnextbtnClick()
          }
          style={{ display: question3ans ? "" : "none", width: "30%" }}
        />
      </div>
    </>
  );
}

export default Form;
