/* Import statements */
import React from "react";
import { Route } from "react-router-dom";
import MyNavbar from "./components/myNavbar";
import Index from "./pages/main";
import Corona from "./pages/corona";
import "./App.css";
import QA from "./pages/QA";
import Sick from "./pages/sick";
import Protection from "./pages/protection";
import Guidlines from "./pages/guidlines";
import Training from "./pages/training";

class App extends React.Component {
  render() {
    
    return (
      <div className="main_page">
        <MyNavbar />
        <Route exact path="/" component={Index} />
        <Route exact path="/guidlines" component={Guidlines} />
        <Route exact path="/sick" component={Sick} />
        <Route exact path="/protection" component={Protection} />
        <Route exact path="/training" component={Training} />
        <Route path="/corona" component={Corona} />
        <Route path="/Questions" component={QA} />
      </div>
    );
  }
}

export default App;
