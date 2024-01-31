import React from "react";

const Card = (props) => {
  return (
    <>
      <p style={{ margin: "5px" }}>
        {props.count}. {props.first} { props.last}
      </p>
    </>
  );
};


export default Card;