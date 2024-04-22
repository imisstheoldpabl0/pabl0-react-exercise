// rfce
import React from "react";

function TravelItem(props) {
  return (
    <article className="formCard">
      <h3>Task: {props.title}</h3>
      <p>Due date: {props.desc}</p>
      <br/>
      <button className="formButton" onClick={()=>props.delete()}>Borrar</button>
    </article>
  );
}

export default TravelItem;
