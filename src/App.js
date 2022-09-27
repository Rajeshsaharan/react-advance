import React from "react";
import {UserProvider} from "./components/UserContext"
import Child from "./components/Child";
function App() {
  return <>
   <UserProvider value = "rajesh">
  <Child/>
   </UserProvider>
  </>

}

export default App;
