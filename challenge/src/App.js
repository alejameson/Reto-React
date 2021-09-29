import React from "react";
import { Route } from "react-router-dom";
import Home from './components/Home/Home';
import actor from "./components/actor/actor";
import './App.css';

function App() {
  return (
    <>
      <Route exact path="/" component={Home} />
      <Route path="/actor" component={actor} />
    </>
  );
}

export default App;
