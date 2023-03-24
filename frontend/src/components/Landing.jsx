import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "../css/style.module.css";
import axios from "axios";
import Box1 from "./Boxs/Box1";
import Box2 from "./Boxs/Box2";
import Box3 from "./Boxs/Box3";

const getResponse = () => {
  return axios.post(
    `http://97.74.94.225:8282/besstMainApi/df/videoSection`,
    {},
    {
      headers: {
        Client_ID: "1234",
      },
    }
  );
};

const DashBoard = () => {
  const [apiStatus, setApiStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const [apiData, setApiData] = useState([]);
  const [timer, setTimer] = useState(35);
  const navigate = useNavigate();

  // --------- calling api on mounting the component ------
  useEffect(() => {
    getData();
    handleTimer();
  }, []);

  // ----- get data ----
  const getData = () => {
    setLoading(true);
    getResponse()
      .then((res) => {
        if (res.status === 200) {
          setApiStatus("Active");
        } else {
          setApiStatus("Down");
        }
        setApiData(res.data);
        setLoading(false);
      })
      .catch((e) => {
        console.error(e);
        setLoading(false);
        setApiStatus("Down");
      });
  };

  // -------- auto call api in 35 secs.. -----
  const handleTimer = () => {
    setInterval(() => {
      setTimer((timer) => timer - 0.5);
    }, 1000);
  };

  if (timer <= 0) {
    getData();
    setTimer(35);
  }

  //--------- manually view --------
  const onViewClick = () => {
    const apiResponse = sessionStorage.getItem("apiResponse");

    if (apiResponse) {
      navigate("/api-response");
    } else {
      getResponse()
        .then((res) => {
          sessionStorage.setItem("apiResponse", JSON.stringify(res.data.Data));
          navigate("/api-response");
        })
        .catch((e) => {
          console.error(e);
        });
    }
  };

  //------ clear session -----
  const onClearClick = () => {
    sessionStorage.removeItem("apiResponse");
  };

  return (
    <div className={style.Dashboard}>
      <Box1
        loading={loading}
        timer={timer}
        apiData={apiData}
        apiStatus={apiStatus}
      />
      <Box2
        loading={loading}
        onViewClick={onViewClick}
        onClearClick={onClearClick}
      />
      <Box3 loading={loading} apiData={apiData} />
    </div>
  );
};

export default DashBoard;
