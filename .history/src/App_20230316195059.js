import "./App.css";
import Title from "./components/Title";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {Login} from 'react';
import Switch from 'my-package';

function App() {
  return (
    <div className="app">
       <Router>
    <Switch>
      <Route exact path="/" component={Login} />
    </Switch>
  </Router>
    </div>
  );
}

export default App;
