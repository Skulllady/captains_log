import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import LoginFormPage from './components/LoginFormPage'
import SideBar from './components/SideBar'

function App() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user)
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  //check if user is logged in using sessionUser
  return (
    <>
      {sessionUser ? <SideBar /> :
        <Navigation isLoaded={isLoaded} />
      }
      {isLoaded && (
        <Switch>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route path="/login">
            <LoginFormPage />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
