import { useTranslation } from "react-i18next";
import "../css/home.css";

function Home() {
  const { t } = useTranslation();
  return (
    <div className="home-page">
      <section className="rlist hero">
        <div className="hero-text">
          <h1>{t("heroh1")}</h1>
          <article>{t("herodesc")}</article>
          <button>{t("start")}</button>
        </div>
        <div
          className="hero-img"
          style={{ backgroundImage: "url('assets/hero.png')" }}
        >
          <div
            className="truckonpic"
            style={{ backgroundImage: "url('assets/bike.gif')" }}
          ></div>
        </div>
      </section>

      <section className="testimonials rlist">
        <div className="test-1">
          <h1>{t("empower")}</h1>
          <div className="rlist services">
            <div className="service-item">
              <i className="fa-solid fa-wallet"></i>
              <h3>{t("financial")}</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores perspiciatis voluptates, inventore facilis doloremque
                animi voluptas architecto, consequatur earum expedita ullam
                sequi dicta veritatis atque, unde facere amet? Earum, vel!
              </p>
            </div>
            <div className="service-item">
              <i className="fa-regular fa-moon"></i>
              <h3>{t("overnight")}</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores perspiciatis voluptates, inventore facilis doloremque
                animi voluptas architecto, consequatur earum expedita ullam
                sequi dicta veritatis atque, unde facere amet? Earum, vel!
              </p>
            </div>
            <div className="service-item">
              <i className="fa-solid fa-location-dot"></i>
              <h3>{t("overegypt")}</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores perspiciatis voluptates, inventore facilis doloremque
                animi voluptas architecto, consequatur earum expedita ullam
                sequi dicta veritatis atque, unde facere amet? Earum, vel!
              </p>
            </div>
            <div className="service-item">
              <i className="fa-solid fa-plane-arrival"></i>
              <h3>{t("worldwide")}</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores perspiciatis voluptates, inventore facilis doloremque
                animi voluptas architecto, consequatur earum expedita ullam
                sequi dicta veritatis atque, unde facere amet? Earum, vel!
              </p>
            </div>
          </div>
        </div>
        <div
          style={{ backgroundImage: "url('assets/bg-1.png')" }}
          className="artwork"
        ></div>
      </section>
    </div>
  );
}

export default Home;
