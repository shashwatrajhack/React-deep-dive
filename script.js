// const heading = document.createElement("h1");
//       heading.innerHTML = "Hellooo world!";

//       const divElement = document.getElementById("root");
//       divElement.appendChild(heading);
React
const heading = React.createElement("h1",{},"Hello from ");

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);