import "./App.css";
import Title from "./components/Title";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {Login} from 'react';
import {Switch} from 'react';

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
