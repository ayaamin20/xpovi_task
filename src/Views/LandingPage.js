import React, { useState } from "react";
import Button from "../Components/Button";
import Form from "../Components/Form";
import logo from "../Modalimg.jpg";

import { useNavigate } from "react-router-dom";

function LandingPage() {
  const navigate = useNavigate();

  function onbtnClick() {
    navigate("/questionnaire");
  }
  return (
    <>
      <img src={logo} alt="" style={{ width: "55vw" }} />

      <Button
        text={"Generate Business Plan"}
        onbtnClick={() => onbtnClick()}
        style={{ marginTop: "20px" }}
      />
    </>
  );
}

export default LandingPage;
