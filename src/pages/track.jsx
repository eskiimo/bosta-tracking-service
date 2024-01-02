import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../css/track.css";

import { useFetchHook } from "../hooks/fetch-hook";
import ShippingDetailTable from "../components/detail-table";
import OrderProgress from "../components/order-progress";

function TrackChipmentPage() {
  const [isLoading, setisLoading] = useState(true);
  const { sendRequest, error } = useFetchHook();
  const { t } = useTranslation();
  const { id } = useParams();
  console.log(id);

  const order = useSelector((state) => state.shipping.value);
  useEffect(() => {
    const fetchData = async (id) => {
      await sendRequest(id);
      console.log("shipping", order);
      setisLoading(false);
    };
    fetchData(id);
  }, [id]);

  return (
    <>
      {isLoading ? (
        <p>loading</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        order && (
          <div className="track-page">
            <OrderProgress
              status={order.CurrentStatus.state}
              date={order.PromisedDate}
              provider={order.provider}
              lastUpdate={
                order.TransitEvents[order.TransitEvents.length - 1].state
              }
              trackNumber={order.TrackingNumber}
            />
            <div className="details-div">
              <ShippingDetailTable list={order.TransitEvents} />

              <div className="col address">
                <h1>{t("address")}</h1>
                <div className="address-box">address of shipping</div>
                <div className="report">
                  <p>{t("isProb")}</p>
                  <button>{t("report")}</button>
                </div>
              </div>
            </div>
          </div>
        )
      )}
    </>
  );
}

export default TrackChipmentPage;
