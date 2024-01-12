console.log("this is app.js");
const  heading1=React.createElement("h1",{id:"tital1",},"Heading1");
const  heading2=React.createElement("h2",{id:"tital2",},"Heading2");
const  heading3=React.createElement("h3",{id:"tital3",},"Heading3");
const container=React.createElement("div",{id:"container"},[heading1,heading2,heading3]);
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(container);