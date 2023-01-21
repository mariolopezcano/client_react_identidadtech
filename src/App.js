import { React, Fragment } from "react";
import Navbar from "./components/Navbar";
import Uploadcsv from "./components/Uploadcsv";

function App() {
  return (
    <div className="App">
      <Fragment>
        <Navbar brand="CSVTODB App"/>
        <Uploadcsv />
      </Fragment>
    </div>
  );
}

export default App;
