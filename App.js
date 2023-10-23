const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child1" }),
  React.createElement("div", { id: "child2" })
);

console.log(heading); //object

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(package);
