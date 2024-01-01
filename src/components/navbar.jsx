import "./navbar.css";

import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const NavBar = (props) => {
  console.log(props);
  const { t } = useTranslation();
  const lang = useSelector((state) => state.language.value);

  const trans = () => {
    props.languageChange();
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
          <Link to="/track">{t("track")}</Link>
        </li>
        <li>
          <Link to="/register">{t("register")}</Link>
        </li>
        <li>
          <button onClick={trans}>{lang === "en" ? "عربي" : "EN"}</button>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
