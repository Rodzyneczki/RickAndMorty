import React, { FC, useContext } from "react";
import { Link } from "react-router-dom";
import { RickAndMortyContext } from "../context/RickAndMortyContext";
import Button from "../components/Button";
import logo from "../images/navbar-logo.png";

import "../styles/Navbar.scss";

const Navbar: FC = () => {
  const { favList, currentUser, dispatchUser } =
    useContext(RickAndMortyContext);

  const logout = () => {
    dispatchUser({
      type: "CHANGE_USER",
      payload: { name: "", password: "" },
    });
  };

  const userName = () => {
    if (!currentUser?.name) return;
    if (currentUser.name) {
      return (
        <>
          {currentUser.name},
          <Link to="/login">
            <Button variant="no-styles" onClick={logout}>
              sign out
            </Button>
          </Link>
        </>
      );
    } else
      return (
        <>
          unknown,
          <Link to="/login" className="navbar__user--signin">
            sign in
          </Link>
        </>
      );
  };

  return (
    <header className="navbar">
      <Link to="/">
        <img src={logo} alt="logo" width="200px" />
      </Link>
      <div className="navbar__user">
        <span>Hello {userName()}</span>
        <span></span>
      </div>
      <div className="navbar__links">
        <Link to="/characters">Characters List</Link>
        {currentUser?.name && (
          <Link to="/favourites">Favourites ({favList.length})</Link>
        )}
        <Link to="/login" className="navbar__links--login">
          {currentUser?.name ? "Sign out" : "Sign in"}
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
