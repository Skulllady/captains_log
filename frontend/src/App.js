import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import LoginFormPage from './components/LoginFormPage'
import LoggedInHeader from './components/LoggedInHeader'
import AllNotesPage from './components/AllNotesPage'
import CreateNotePage from './components/CreateNotePage'
import EditNoteFormPage from './components/EditNoteFormPage'
import HomePage from './components/HomePage'
import Search from './components/Search'
import Footer from './components/Footer'

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  const sessionUser = useSelector(state => state.session.user)
  const notes = useSelector((state) => state.notes)

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);


  //check if user is logged in using sessionUser
  return (
    <>
      {sessionUser ? <LoggedInHeader user={sessionUser} /> :
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
          <Route path="/notes/new">
            <CreateNotePage user={sessionUser} />
          </Route>
          <Route path="/notes/search">
            <Search user={sessionUser} />
          </Route>
          <Route path="/notes/:id">
            <EditNoteFormPage user={sessionUser} />
          </Route>
          <Route path="/notes">
            <AllNotesPage user={sessionUser} />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      )}
      <Footer />
    </>
  );
}

export default App;
