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
  return (
    <div className="rlist nav-bar">
      {" "}
      <img
        alt="logo"
        className="nav-section logo-img"
        src={
          lang === "en"
            ? "/assets/bosta-logo-en.png"
            : "/assets/bosta-logo-ar.png"
        }
      />
      <ul className="nav-section nav-links">
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
      <ul className=" rlist nav-section nav-user">
        <li>
          <Link to="/track"></Link>
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
  );
};

export default NavBar;
