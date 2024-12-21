const heading = React.createElement(
  "h1",
  { id: "heading", xyz: "heading1" }, // props
  "hello world from react" //props
);
console.log("heading", heading); // its a js object

// react element is an /--> {} object  & attributes are props & value

// if we want to create nested react elements

/*
<div id="parent">
  <div id=child>
    <h1>I'm h1 Tag</h1>
    <h2>I'm h2 Tag</h2>
  </div>
  <div id=child2>
    <h1>I'm h1 Tag</h1>
    <h2>I'm h2 Tag</h2>
  </div>
</div>

ReactElement(Object) => HTML(Browser Understands)
// nested element can be created using array
*/

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "I'am h1 tag"),
    React.createElement("h1", {}, "I'am h1 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I'am h1 tag"),
    React.createElement("h1", {}, "I'am h1 tag"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
// root.render is replacing the things in the id :root which is present in the html
//if the tag is present above or below the Id: root it does not touch that 
//react is a library It can works in the small portion of page 
//it can work in a small portion of page 
//const root = ReactDOM.createRoot(document.getElementById("header"));
// then react can work in header only

