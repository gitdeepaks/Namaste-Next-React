const heading = React.createElement(
  "h1",
  { id: "attributes" },
  "Hello World from React"
);

console.log(heading); //object

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(heading);
