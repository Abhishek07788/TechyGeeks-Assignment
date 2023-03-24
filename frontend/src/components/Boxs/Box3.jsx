import React, { useState } from "react";
import style from "../../css/style.module.css";

const Box3 = (props) => {
  const [modalOpen, setModalOpen] = useState(false);

  const { apiData } = props;

  return (
    <div className={style.Box}>
      <h1>Videos</h1>
      <button onClick={() => setModalOpen(!modalOpen)} className={style.Button}>
        Videos
      </button>
      {/* ------- Modal ---- */}
      <div
        className={style.Modal}
        style={{ display: modalOpen ? "block" : "none" }}
      >
        <button
          onClick={() => setModalOpen(!modalOpen)}
          className={style.closeButton}
        >
          Close
        </button>

        <div className={style.ModalVideo}>
          {apiData?.Data?.map((el) => (
            <div key={el.id}>
              <iframe
                width="420"
                height="338"
                src={el.videoUrl}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
              <p>{el.name}</p>
              {/* <p>{el.textContent}</p> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Box3;
