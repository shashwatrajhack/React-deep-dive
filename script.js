import React from "react";
import ReactDOM from "react-dom/client" 
// const heading = document.createElement("h1");
//       heading.innerHTML = "Hellooo world!";

//       const divElement = document.getElementById("root");
//       divElement.appendChild(heading);
const heading = React.createElement("h1",{id:"parent"},[
    React.createElement("div",{id:"child1"},[
        React.createElement("h1",{id:1},"I am h1 tag"),
        React.createElement("h2",{id:2},"This is h2 tag hellllooo")
    ]),
    React.createElement("div",{id:"child2"},[
        React.createElement("h1",{id:1},"I am h1 tag"),
        React.createElement("h2",{id:2},"This is h2 tag")
        ])
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);