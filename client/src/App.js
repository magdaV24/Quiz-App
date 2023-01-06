import { BrowserRouter, Route, Switch } from "react-router-dom";
import GamePage from "./pages/GamePage";
import Home from "./pages/Home";
import Login from "./pages/Login";
import MakeCards from "./pages/MakeCards";
import Signin from "./pages/Signin";
import UserPage from "./pages/UserPage";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signin">
            <Signin />
          </Route>
          <Route path='/dashboard'>
            <UserPage/>
          </Route>
          <Route path='/create'>
            <MakeCards />
          </Route>
          <Route path='/game'>
            <GamePage/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
