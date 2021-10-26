import React from 'react';
import ReactDom from 'react-dom';

function helloName(name){
  return name.nick;
}

const name = {
  nick : "SY",
}

const hello = <h1>Hello{helloName(name)}</h1>

ReactDom.render(hello, document.getElementById("root"));