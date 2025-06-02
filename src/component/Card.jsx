import React, { useState } from 'react';
import img1 from '../img/i.png';

const Card = () => {
  const [expanded, setExpanded] = useState(false);
  const handleToggle = () => setExpanded(prev => !prev);

  const cardData = {
    title: "Card title",
    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    image: img1
  };

  const cardDataNoImage = {
    title: "Special title treatment",
    text: "With supporting text below as a natural lead-in additional content.",
  };

  return (
    <>
    <div className="card" style={{width: '18rem'}}>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" 
            rel="stylesheet" 
            integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" 
            crossorigin="anonymous"></link>
      {expanded && <img src={cardData.image} className="card-img-top" alt="Card content"/>}
      <div className="card-body">
        <h5 className="card-title">
          {expanded ? cardData.title : cardDataNoImage.title}
        </h5>
        <p className="card-text">
          {expanded ? cardData.text : cardDataNoImage.text}
          </p>
        <button className="btn btn-primary" onClick={handleToggle}>
          {expanded ? "Go somewhere" : "Go somewhere"}
        </button>
      </div>
    </div>
    </>
  );
};

export default Card;

    