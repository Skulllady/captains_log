import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import LoginFormPage from './components/LoginFormPage'
import SideBar from './components/SideBar'
import AllNotesPage from './components/SideBar/AllNotesPage'
import CreateNotePage from './components/CreateNotePage'
import Footer from './components/Footer'

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
      {sessionUser ? <SideBar sessionUser={sessionUser} /> :
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
          <Route path="/notes">
            <AllNotesPage />
          </Route>
          <Route path="/notes/new">
            <CreateNotePage />
          </Route>
        </Switch>
      )}
      <Footer />
    </>
  );
}

export default App;
