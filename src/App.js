import "./App.css";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import Cookies from "js-cookie";
import { useEffect } from "react";

const languages = [
  {
    code: "fr",
    name: "Français",
    country_code: "fr",
  },
  {
    code: "en",
    name: "English",
    country_code: "gb",
  },
  {
    code: "in",
    name: "हिन्दी",
    country_code: "in",
  },
  {
    code: "ger",
    name: "Deutsch",
    country_code: "de",
  },
  {
    code: "ar",
    name: "العربية",
    dir: "rtl",
    country_code: "sa",
  },
];

function App() {
  const { t } = useTranslation();
  const currentLanguageCode = Cookies.get("i18next") || "en";
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode);

  const releaseDate = new Date("2023-10-03");
  const timeDiff = new Date() - releaseDate;
  const number_of_days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  useEffect(() => {
    document.body.dir = currentLanguage.dir || "ltr";
    document.title = t("app_title");
  }, [currentLanguage, t]);
  return (
    <div className="container">
      <div className="d-flex justify-content-end">
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false">
            {t("language")}
          </button>
          <ul className="dropdown-menu">
            {languages.map(({ code, name, country_code }) => {
              return (
                <li key={country_code}>
                  <button
                    className="dropdown-item"
                    href="#"
                    onClick={() => i18next.changeLanguage(code)}
                    disabled={code === currentLanguageCode}>
                    <span
                      className={`flag-icon flag-icon-${country_code} mx-2`}></span>
                    {name}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="d-f)lex flex-column align-items-start">
        <h1 className="font-weight-normal mb-3">{t("welcome_message")}</h1>
        <p>{t("days_since_release", { number_of_days })}</p>
      </div>
    </div>
  );
}

export default App;
