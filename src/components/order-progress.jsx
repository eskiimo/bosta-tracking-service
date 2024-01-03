import { useTranslation } from "react-i18next";

import "./order-progress.css";
import MySteps from "./stepper";

function OrderProgress(props) {
  const { provider, date, lastUpdate, trackNumber, status } = props;
  const { t } = useTranslation();
  const steps = [
    t("conf-order"),
    t("trader-rec"),
    t("order-out"),
    t("delivered"),
  ];

  return (
    <div className="progress-div">
      <div className=" order-details">
        <div className="col">
          <p>{t("ship-num")}</p>
          <p className="info-p">{trackNumber}</p>
        </div>
        <div className="col">
          {" "}
          <p>{t("last-update")}</p>
          <p className="info-p">{t(lastUpdate)}</p>
        </div>
        <div className="col">
          {" "}
          <p>{t("trader")}</p>
          <p className="info-p">{provider}</p>
        </div>
        <div className="col">
          {" "}
          <p>{t("deliveredwithin")}</p>
          {date?.split("T")[0] ? (
            <p className="info-p">{date?.split("T")[0]}</p>
          ) : (
            <p className="canceled">{status}</p>
          )}
        </div>
      </div>

      <MySteps
        steps={steps}
        status={status}
        lastUpdate={lastUpdate}
        date={date}
        provider={provider}
      />
    </div>
  );
}

export default OrderProgress;
