import React from "react";

function Tickler() {
  function tickle() {
    console.log("Teehee!");
    
  }

  return <button onClick={tickle}>Tickle me!</button>;

  //as an arrow function:
  // return <button onClick={()=>{console.log("Teehee")}}>Tickle me!</button>;

}

export default Tickler;
