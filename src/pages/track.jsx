import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { Spinner } from "@chakra-ui/react";
import { useFetchHook } from "../hooks/fetch-hook";
import ShippingDetailTable from "../components/detail-table";
import OrderProgress from "../components/order-progress";
import "../css/track.css";

function TrackChipmentPage() {
  const { loading, sendRequest, error } = useFetchHook();
  const { id } = useParams();
  const { t } = useTranslation();

  const order = useSelector((state) => state.shipping.value);

  useEffect(() => {
    sendRequest(id);
  }, [id, sendRequest]);

  return (
    <>
      {loading ? (
        <div
          className="row"
          style={{
            width: "100vw",
            height: "100vh",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Spinner size="xl" />
        </div>
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
                <div className="address-box">
                  <h2>{t("address")}</h2>
                </div>
                <div className="report">
                  <h2>{t("isProb")}</h2>
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
