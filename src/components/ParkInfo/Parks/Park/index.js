import React from "react";
import "./styles.css";

const Park= (props) =>{
return(
<ul>

<span className="parkName">
        {park.name}
</span>
<span className="rating" style={style}>
        {park.overall}
      </span>

 </ul>
)
}