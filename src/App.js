import {BrowserRouter as Router, Switch, Route, Redirect, Link } from "react-router-dom";
import './App.css';
import CanvasApp from "./Canvas/CanvasApp";
import CanvasHome from "./Canvas/CanvasHome";
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

          <Route exact path="/canvas">
              <CanvasHome />
          </Route>
          <Route path="/canvas">
              <CanvasApp />
          </Route>

          <Route path="/">
            <Link to="/pastebin">
              <div style={{fontSize: "100px"}}>
                Go to pastebin
              </div>
            </Link>
            <Link to="/canvas">
              <div style={{fontSize: "100px"}}>
                Go to canvas
              </div>
            </Link>
              {/* {window.location.pathname = "/pastebin"} */}
          </Route>

      </Switch>
    </Router>
  );
}

export default App;
