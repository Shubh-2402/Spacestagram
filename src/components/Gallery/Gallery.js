import React, { useEffect, useState } from "react";
import "./Gallery.css";
import Card from "./Card/Card";

function Gallery() {
  const [apods, setApods] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { REACT_APP_APIKEY } = process.env;

  useEffect(() => {
    const getApods = async () => {
      await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=${REACT_APP_APIKEY}&count=9`
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setApods(data);
        })
        .then(() => {
          setIsLoading(false);
        })
        .catch((err) => console.log(err));
    };

    getApods();
  }, []);

  return (
    <div className="gallery">
      {apods.map((apod) => (
        <Card apod={apod} isLoading={isLoading}></Card>
      ))}
    </div>
  );
}

export default Gallery;
