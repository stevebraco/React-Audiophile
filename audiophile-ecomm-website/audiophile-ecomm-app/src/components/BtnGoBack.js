import React from "react";
import { useHistory } from "react-router-dom";

export default function BtnGoBack() {
  const history = useHistory();

  return (
    <button
      onClick={() => {
        history.goBack();
      }}
    >
          <span className="go-back black-op"> Go Back </span>
    </button>
  );
}
