import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { translate } from "./redux/langSlice";
import { useTranslation } from "react-i18next";
import { ChakraProvider } from "@chakra-ui/react";
import NavBar from "./components/navbar";
import Home from "./pages/home";
import TrackChipmentPage from "./pages/track";
import MySteps from "./components/stepper";

function App() {
  const { i18n } = useTranslation();
  const lang = useSelector((state) => state.language.value);
  const dispatch = useDispatch();

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
      document.getElementById("root").classList.remove("reverse");
      document.querySelector("body").dir = "ltr";
    } else {
      document.getElementById("root").classList.add("reverse");
      document.querySelector("body").dir = "rtl";
    }
  }, [lang]);

  return (
    <Router>
      <ChakraProvider>
        <NavBar languageChange={changeLang} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/s" element={<MySteps />} />
          <Route path="/track/:id" element={<TrackChipmentPage />} />
        </Routes>
      </ChakraProvider>
    </Router>
  );
}

export default App;
