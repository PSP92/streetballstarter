import React from "react";
import "./styles.css";
import Park from "./Park";

const parks = (props) => {
const parks = props.parkData.map((park, index) => {
  return(
    <Park 
    key={index} />
    )
    })
return (
<ul>{park}</ul>
)
}

export default Park
