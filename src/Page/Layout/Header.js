import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { loadingGlobalAction } from "../../Redux/LoadingGlobal";
import style from "./Layout.module.scss";

function Header() {
  const isLoading = useSelector((state) => state.loading.globalLoading);
  const dispatch = useDispatch;
  const [scroll, setScroll] = useState(false);

  //xử lý thanh cuộn
  useEffect(() => {
    const changeBackground = () => {
      if (window.scrollY > 80) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
    window.addEventListener("scroll", changeBackground);
  }, []);

  const handlerClick = (e) => {};

  const active = ({ isActive }) => (isActive ? style.active : "");
  return (
    <div className={`${style.header} ${scroll ? style.scroll : ""}`}>
      <div className={style.logo}>
        <span>Moon</span>
        <span className={style.logo_title}>Light</span>
      </div>
      <div className={style.nav}>
        <NavLink className={active} to="/">
          Home
        </NavLink>
        <NavLink className={active} onClick={handlerClick} to="/movie">
          Movies
        </NavLink>
        <NavLink className={active} to="/tv">
          TV Series
        </NavLink>
        <NavLink className={active} to="/person">
          Person
        </NavLink>
        <NavLink className={active} to="/search">
          Search
        </NavLink>
      </div>
    </div>
  );
}

export default Header;
