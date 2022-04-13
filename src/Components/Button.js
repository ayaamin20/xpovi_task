import React from "react";
function Button({ text, onbtnClick, style }) {
  return (
    <button
      type="button"
      className="btn btn-primary"
      onClick={onbtnClick}
      style={style}
    >
      {text}
    </button>
  );
}

export default Button;
