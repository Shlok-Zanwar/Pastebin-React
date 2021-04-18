import {BrowserRouter as Router, Switch, Route, Redirect, Link } from "react-router-dom";
import './App.css';
import Canvas from "./PasteBin/Canvas";
import PasteBinApp from './PasteBin/PasteBinApp';
import PasteBinHome from "./PasteBin/PasteBinHome";

function App() {
  return (
    <Router>
      <Switch>

          <Route exact path="/pastebin">
              <PasteBinHome />
          </Route>
          <Route path="/pastebin">
              <PasteBinApp />
          </Route>
          <Route path="/canvas">
            <Canvas />
          </Route>

          <Route path="/">
            <Link to="/pastebin">
              <div style={{fontSize: "100px"}}>
                Go to pastebin
              </div>
            </Link>
              {/* {window.location.pathname = "/pastebin"} */}
          </Route>

      </Switch>
    </Router>
  );
}

export default App;
