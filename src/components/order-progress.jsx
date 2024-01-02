// import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
// import {
//   Step,
//   StepIcon,
//   StepIndicator,
//   StepStatus,
//   Stepper,
//   useSteps,
//   Progress,
//   Box,
// } from "@chakra-ui/react";

import "./order-progress.css";
import MySteps from "./stepper";

function OrderProgress(props) {
  const { provider, date, lastUpdate, trackNumber, status } = props;
  // const [color, setColor] = useState("green");
  const { t } = useTranslation();
  const steps = [
    t("conf-order"),
    t("trader-rec"),
    t("order-out"),
    t("delivered"),
  ];
  // const { activeStep, setActiveStep } = useSteps({
  //   index: 0,
  //   count: steps.length,
  // });

  // const max = steps.length - 1;
  // const progressPercent = (activeStep / max) * 100;

  // const getDetails = () => {
  //   if (status === "CANCELLED") {
  //     // setActiveStep(2);
  //     setColor("red");
  //   }
  // };
  // useEffect(() => {
  //   getDetails();
  // }, []);

  return (
    <div className="progress-div">
      <div className="row order-details">
        <div className="col">
          <p>{t("ship-num")}</p>
          <p className="info-p">{trackNumber}</p>
        </div>
        <div className="col">
          {" "}
          <p>{t("last-update")}</p>
          <p className="info-p">{lastUpdate}</p>
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
      {/* <div className="stepper">
        <Box position="relative">
          <Stepper size="sm" colorScheme={color} index={activeStep} gap="0">
            {steps.map((step, index) => (
              <div key={index} className="step">
                <Step>
                  <StepIndicator bg="white">
                    <StepStatus complete={<StepIcon />} />
                  </StepIndicator>
                </Step>
                <p>{step}</p>

                <p>info</p>
              </div>
            ))}
          </Stepper>
          <Progress
            value={progressPercent}
            position="absolute"
            height="3px"
            width="full"
            top="10px"
            zIndex={-1}
          />
        </Box>
      </div> */}
    </div>
  );
}

export default OrderProgress;
