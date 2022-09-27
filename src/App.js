import React from "react";
import ChildA from "./components/ChildA";
import ChildB from "./components/ChildB";
function App() {
  return <>
<ChildA course = "brt"/>
{/* this course props cant access  directly by childA or ChildB 
to access them we need to go HOC */}
<ChildB course = "bpt" />

  </>;
}

export default App;
