import React from "react";
import style from "../../css/style.module.css";
import { ImSpinner6, ImSpinner2 } from "react-icons/im";

const Box1 = (props) => {
  const { loading, timer, apiData, apiStatus } = props;

  return (
    <div className={style.Box}>
      <h1>Api Auto Verifier</h1>
      <br />
      <div>
        <h2>
          Status:{" "}
          {apiStatus === "Active" ? (
            <span style={{ color: "green" }}>
              {loading ? <ImSpinner2 /> : "Active"}
            </span>
          ) : (
            <span style={{ color: "red" }}>
              {loading ? <ImSpinner2 /> : "Down"}
            </span>
          )}
        </h2>
        <h2>
          Objects:{" "}
          <span>{loading ? <ImSpinner6 /> : apiData?.Data?.length || 0}</span>
        </h2>
        <br />
        <br />
        <h2>
          Api to hit:{" "}
          <span style={{ color: timer < 10 ? "#dc3544" : "teal" }}>
            {timer < 10 ? "0" + timer : timer} Secs..
          </span>
        </h2>
      </div>
    </div>
  );
};

export default Box1;
