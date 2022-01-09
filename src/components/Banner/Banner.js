import React, { useEffect, useState } from "react";
import "./Banner.css";
import CircularProgress from "@mui/material/CircularProgress";
import { fontSize } from "@mui/system";

function Banner() {
  const [apod, setApod] = useState({});
  const [isloading, setIsloading] = useState(true);

  const { REACT_APP_APIKEY } = process.env;

  console.log(process.env);

  useEffect(() => {
    // here we fetch the astronomy picture of the day

    const getApod = async () => {
      await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=${REACT_APP_APIKEY}`
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setApod(data);
        })
        .then(() => {
          setIsloading(false);
        })
        .catch((err) => console.log(err));
    };

    getApod();
  }, []);
  return (
    <div className="banner">
      <div className="banner-container">
        <div className="banner-left">
          <div className="banner-image">
            {isloading ? (
              <CircularProgress color="inherit" size="5rem" />
            ) : (
              <img
                src={apod.url}
                alt="Astronomy Picture of the Day"
                className="apod"
              />
            )}
          </div>
        </div>
        <div className="banner-right">
          <h1>Astronomy Picture of the Day</h1>
          <div className="banner-title">
            <p>Title : {apod.title}</p>
            <p>Date : {apod.date}</p>
          </div>
          <div className="banner-info">
            <h3>{apod.explanation}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
