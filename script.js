import React from "react";
import ReactDOM from "react-dom/client" 
// const heading = document.createElement("h1");
//       heading.innerHTML = "Hellooo world!";

//       const divElement = document.getElementById("root");
//       divElement.appendChild(heading);
const heading = React.createElement("h1",{id:"parent"},"Namaste Developers ☠️");

//jsx
//React element
const jsxHeading = (<h1>Miami 
    Beach 
    💐</h1>)
const jsxHeading1 = <h1>Goa Beach</h1>
const jsxHeading2 = <h1>Ukraine</h1>

//React Component
//Class based component - old
//Functional component - new
//Normal Javascript function

const Title = () => (
    <h1>Component from title 🚀</h1>
)
//Component composition
const HeadingComponent = ()=>{

    //Returns JSX element
    //JS function that returns a react element

    return <>
    {Title()}
    {"Heloooo from jsx"}
    <h1>Return functional component 😍</h1>
    <Title />
    </>

}


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
