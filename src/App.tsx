import React from "react";
import Rest from "./components/rest/Rest";
import Home from "./components/Home";
import GlobalStyles from "./styles/GlobalStyles";
import NapovniKodi from "./components/rest/NapovniKodi";
import UseRef from "./components/UseRef";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      {/* <Home saxeli="Akaki" gvari="Chachava" asaki={24} /> */}
      {/* <Rest /> */}

      <UseRef />
    </div>
  );
}

export default App;
