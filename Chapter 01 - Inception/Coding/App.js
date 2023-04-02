//Using javascript

// const heading1 = document.createElement("h1");
// heading1.innerHTML = "Hi, I'm h1 from Javascript!";
// const root = document.getElementById("root");
// root.appendChild(heading1);

//using react

const heading1 = React.createElement("h1", {}, "Hi, I'm h1 from React!");
const heading2 = React.createElement("h2", {}, "I'm h2 from React!");

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render([heading1, heading2]);
