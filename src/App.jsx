import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { translate } from "./redux/langSlice";
import { useTranslation } from "react-i18next";

import NavBar from "./components/navbar";
import { useFetchHook } from "./hooks/fetch-hook";
import Home from "./pages/home";
import TrackChipmentPage from "./pages/track";

function App() {
  const { i18n } = useTranslation();
  const lang = useSelector((state) => state.language.value);
  const dispatch = useDispatch();
  const { sendRequest, loading, error } = useFetchHook();
  const [data, setData] = useState(null);

  const changeLang = () => {
    dispatch(translate());
    if (lang === "en") {
      i18n.changeLanguage("ar");
    } else {
      i18n.changeLanguage("en");
    }
  };

  // setData(sendRequest());
  useEffect(() => {
    if (lang === "en") {
      document.querySelector("body").dir = "ltr";
    } else {
      document.querySelector("body").dir = "rtl";
    }
  }, [lang]);

  return (
    <Router>
      <NavBar languageChange={changeLang} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/track" element={<TrackChipmentPage />} />
      </Routes>
    </Router>
  );
}

export default App;
