import React from "react";
import { Route } from "react-router-dom";
import Home from './components/Home/Home';
import Actor from "./components/Actor/Actor";
import './App.css';

function App() {
  return (
    <>
      <Route exact path="/" component={Home} />
      <Route path="/actor" component={Actor} />
    </>
  );
}

export default App;
