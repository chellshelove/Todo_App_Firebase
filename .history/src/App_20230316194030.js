import "./App.css";
import Title from "./components/Title";
import { BrowserRouter as Router, Route, Routes, Switch, Login } from "react-router-dom";

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
