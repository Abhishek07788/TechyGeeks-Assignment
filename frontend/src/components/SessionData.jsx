import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "../css/style.module.css";

const getSessionData = () => {
  return JSON.parse(sessionStorage.getItem("apiResponse")) || [];
};

const SessionData = () => {
  const [data, setData] = useState(getSessionData());
  const navigate = useNavigate();

  return (
    <div>
      <h1>SessionData</h1>
      <button className={style.backButton} onClick={() => navigate("/")}>
        Back
      </button>
      <div className={style.SessionDataVideo}>
        {data &&
          data.map((el) => (
            <div key={el.id}>
              <iframe
                width="100%"
                height="338"
                src={el.videoUrl}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
              <p>{el.name}</p>
              <p>{el.textContent}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default SessionData;
