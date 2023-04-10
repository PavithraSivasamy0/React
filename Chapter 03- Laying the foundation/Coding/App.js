import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("div", { id: "title" }, [
  React.createElement("h1", {}, "Hi I'm h1"),
  React.createElement("h2", {}, "Hi I'm h2"),
  React.createElement("h3", {}, "Hi I'm h3"),
]);

const headingJSX = (
  <div id="title">
    <h1>Hi I'm h1</h1>
    <h2>Hi I'm h2</h2>
    <h3>Hi I'm h3</h3>
  </div>
);

const App = () => {
  return (
    <div id="title">
      <h1>Hi I'm h1</h1>
      <h2>Hi I'm h2</h2>
      <h3>Hi I'm h3</h3>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(App());
root.render(<App />);
