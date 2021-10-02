import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory
} from "react-router-dom";

import Questions from "./components/Questions"
import Login from "./components/Login"
import "./css/loginPage.css"
import "./App.css"
import UserProfile from "./components/UserProfile";

export default function App() {
  let history = useHistory();
  return (
    <Router>
           <div className="App">           
            <Switch>
              <Route exact path='/' component={Login} history={history}></Route>
              <Route exact path='/questions' component={Questions} history={history}></Route>
              <Route exact path='/profile/:userId' component={UserProfile} history={history}></Route>
            </Switch>
          </div>
       </Router>
  );
}
