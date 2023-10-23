const heading = React.createElement(
  "h1",
  { id: "attributes" },
  "Hello World from React"
);

console.log(heading);

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(heading);
