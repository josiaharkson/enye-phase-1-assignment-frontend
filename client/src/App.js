import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Profiles from "./components/Profiles";
import _ERROR from "./components/_ERROR";

function App() {
  return (
    <BrowserRouter>
      <Route path={"/"} exact component={Home} />
      <Route path={"/profiles/:pageNumber"} component={Profiles} />
      <Route path={"*"} component={_ERROR} />
    </BrowserRouter>
  );
}
export default App;
