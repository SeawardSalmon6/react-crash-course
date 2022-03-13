import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";

import classes from "./index.module.css";
import Backdrop from "./Backdrop";
import FavoritesContext from "../../../store/favorites-context";

function MainNavigation() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const favoritesCtx = useContext(FavoritesContext);

  function openMenuHandler() {
    setMenuIsOpen((prevState) => !prevState);
  }

  function closeNavbarHandler() {
    setMenuIsOpen(false);
  }

  return (
    <header className={classes.header}>
      <Link to="/">
        <div className={classes.logo}>React Meetups</div>
      </Link>
      <nav>
        <ul className={menuIsOpen ? classes.active : ""}>
          <li>
            <Link to="/">All Meetups</Link>
          </li>
          <li>
            <Link to="/new-meetup">New Meetup</Link>
          </li>
          <li>
            <Link to="/favorites">
              My Favorites
              <span className={classes.badge}>
                {favoritesCtx.totalFavorites}
              </span>
            </Link>
          </li>
        </ul>
        <div onClick={openMenuHandler} className={classes.mobileMenu}>
          <div className={classes.line01}></div>
          <div className={classes.line02}></div>
          <div className={classes.line03}></div>
        </div>
      </nav>
      {menuIsOpen && <Backdrop onClick={closeNavbarHandler} />}
    </header>
  );
}

export default MainNavigation;
