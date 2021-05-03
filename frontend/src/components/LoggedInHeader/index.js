import { NavLink, Redirect } from 'react-router-dom';
import * as sessionActions from '../../store/session';
import './LoggedInHeader.css';
import '../Navigation/Navigation.css';
import { useDispatch } from 'react-redux';
import logo from "../../images/cllogo-white.png";
import picard from "../../images/picard.png";

function LoggedInHeader({ user }) {


  const dispatch = useDispatch();
  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };

  if (!user) {
    return (
      <Redirect to="/" />
    )
  }

  return (
    <>
      <div className="logged-in-header-container">
        <div className="header">
          <div className="logo-nav">
            <NavLink exact to="/notes">
              <img src={logo} alt="CAPTAIN'S LOG" width="200px"></img>
            </NavLink>
          </div>
          <div className="user-info-logout-btn">
            <img src={picard} className="user-image" />
            <p>{user.username}</p>
            <button className="custom-btn button" onClick={logout}><span>Dismissed!</span><span>Log Out</span></button>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoggedInHeader;
