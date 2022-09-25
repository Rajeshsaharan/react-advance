import React from "react";
import DestrctPropsState from "./components/DestrctPropsState";

function App() {
  return <>
  <DestrctPropsState bio = "a bio ">
    <button> this is button from children</button>
  </DestrctPropsState>
  </>;
}

export default App;
