import React from "react";

import FunctionProps from "./components/FunctionProps";
import ClassProps from "./components/ClassProps";

function App() {
  return <>
 <FunctionProps name = "rajesh"> 
     {/* above example is props.name */}
     <button>go back</button>  
     <h2>you are not try to signin</h2>
     {/* above example is for props.children */}
 </FunctionProps>

 <ClassProps name = "amit">
  <button> go back</button>
  <h2>you are not this person please log out</h2>
 </ClassProps>
  </>;
}

export default App;
