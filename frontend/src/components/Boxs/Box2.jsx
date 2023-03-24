import React from "react";
import style from "../../css/style.module.css";

const Box2 = (props) => {
  const { onViewClick,onClearClick } = props;

  return (
    <div className={style.Box}>
      <h1>API Manual Verifier</h1>
      <div className={style.Buttons}>
        <button onClick={() => onViewClick()}>View</button>
        <button onClick={() => onClearClick()}>Clear</button>
      </div>
    </div>
  );
};

export default Box2;
