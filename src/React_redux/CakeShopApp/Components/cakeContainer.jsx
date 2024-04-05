import React from "react";
import { buyCake } from "../redux/cake/cakeAction";
import { connect } from "react-redux";

const CakeContainer = (props) => {
  return (
    <div>
      <h2>Cake Container</h2>
      {/* Add your cake component code here */}
      <h2>number of cakes : {props.numOfCakes}</h2>
      <button onClick={props.buyCake}> Buy Cake</button>
    </div>
  );
};

const matchStateToProps = (state) => {
  return {
    numOfCakes: state.numOfCakes,
  };
};

const matchDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
  };
};

export default connect(matchDispatchToProps, matchStateToProps)(CakeContainer);
