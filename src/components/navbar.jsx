import "./navbar.css";

import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";

import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverCloseButton,
} from "@chakra-ui/react";

const NavBar = (props) => {
  const { t } = useTranslation();
  const lang = useSelector((state) => state.language.value);
  // const lookup = useSelector((state) => state.shipping.value.lookup);

  const nav = useNavigate();

  const trans = () => {
    // eslint-disable-next-line react/prop-types
    props.languageChange();
  };
  const handleTrack = (e) => {
    e.preventDefault();
    const num = e.target.tracknum.value;
    nav(`/track/${num}`);
  };

  const toggleNav = () => {
    let nav = document.getElementsByClassName("collapse")[0];
    nav.classList.toggle("display");
  };
  return (
    <>
      <div className="rlist nav-bar">
        {" "}
        <img
          onClick={() => {
            nav("/");
          }}
          alt="logo"
          className="nav-section logo-img"
          src={
            lang === "en"
              ? "/assets/bosta-logo-en.png"
              : "/assets/bosta-logo-ar.png"
          }
        />
        <button onClick={toggleNav} className="hamburger">
          <i className="fa-solid fa-bars"></i>
        </button>
        <ul className="nav-section nav-links hide">
          <li>
            <Link to="/">{t("home")}</Link>
          </li>
          <li>
            <Link to="/prices">{t("prices")}</Link>
          </li>
          <li>
            <Link to="/call">{t("call")}</Link>
          </li>
        </ul>
        <ul className=" rlist nav-section nav-user hide">
          <Popover>
            <PopoverTrigger>
              <button className="trackbtn">
                {t("track")} <i className="fa-solid fa-chevron-down"></i>
              </button>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverCloseButton />

              <PopoverBody>
                <form className="trackForm" onSubmit={handleTrack}>
                  <p>{t("track")} ?</p>
                  <button className="search" type="submit">
                    <i className="fa-solid fa-magnifying-glass"></i>
                  </button>
                  <input
                    type="number"
                    placeholder={t("ship-num")}
                    name="tracknum"
                  />
                </form>
              </PopoverBody>
            </PopoverContent>
          </Popover>
          <li>
            <Link to="/register">{t("register")} </Link>
          </li>
          <li>
            <button className="langbtn" onClick={trans}>
              {lang === "en" ? "عربي" : "EN"}
            </button>
          </li>
        </ul>
      </div>
      <ul className="collapse">
        <li>
          <Link to="/">{t("home")}</Link>
        </li>
        <li>
          <Link to="/prices">{t("prices")}</Link>
        </li>
        <li>
          <Link to="/call">{t("call")}</Link>
        </li>
        <Popover>
          <PopoverTrigger>
            <button className="trackbtn">
              {t("track")} <i className="fa-solid fa-chevron-down"></i>
            </button>
          </PopoverTrigger>
          <PopoverContent>
            <PopoverCloseButton />

            <PopoverBody>
              {t("track")} ?
              <form className="trackForm" onSubmit={handleTrack}>
                <button className="search2" type="submit">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </button>
                <input
                  type="number"
                  placeholder={t("ship-num")}
                  name="tracknum"
                />
              </form>
            </PopoverBody>
          </PopoverContent>
        </Popover>
        <li>
          <Link to="/register">{t("register")} </Link>
        </li>
        <li>
          <button className="langbtn" onClick={trans}>
            {lang === "en" ? "عربي" : "English"}
          </button>
        </li>
      </ul>
    </>
  );
};

export default NavBar;
