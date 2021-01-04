import React from "react";

function Button(props){
 return(
     <div>
         <input type="button" value={props.label}></input>
     </div>
 )


}

export default Button;