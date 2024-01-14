import React from "react";
import ReactDOM from "react-dom/client";

const heading1= <h1 className="heading" >this is the heading in react</h1>;
const list=(
    <ul id="list">
        <li>this is content 1</li>
        <li>this is second content</li>
    </ul>
);
console.log(list);
const footer=<div id="footerBlock"> this is the footer of the scite</div>

const List=()=>{
    return list;
}
const Heading1=()=> heading1;
const Paragraph=()=>{
    return <p> this is the paragraph which contains the data and information</p>;
}

const block=()=>(
    <div className="block">
        <Heading1/>
        <Paragraph/>
        <List/>
    </div>
);

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<block />);
root.render(<List />);