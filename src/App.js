import React from "react";
import {BrowserRouter as Router,Route, Routes} from "react-router-dom";
import CarPage from "./components/CarPage";
function App() {
  return (
    <>
    <Router>
    <Routes>
      <Route path="/" Component={CarPage} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
