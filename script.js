import React from "react";
import ReactDOM from "react-dom/client" 
// const heading = document.createElement("h1");
//       heading.innerHTML = "Hellooo world!";

//       const divElement = document.getElementById("root");
//       divElement.appendChild(heading);
const heading = React.createElement("h1",{id:"parent"},"Namaste Developers ☠️");

//jsx

const jsxHeading = (<h1>Miami 
    Beach 
    💐</h1>)
const jsxHeading1 = <h1>Goa Beach</h1>
const jsxHeading2 = <h1>Ukraine</h1>


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render([jsxHeading,jsxHeading2,jsxHeading1]);
