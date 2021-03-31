import {BrowserRouter as Router, Switch, Route, Redirect, Link } from "react-router-dom";
import './App.css';
import PasteBinApp from './PasteBin/PasteBinApp';

function App() {
  return (
    <Router>
      <Switch>

          <Route path="/pastebin">
              <PasteBinApp />
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
