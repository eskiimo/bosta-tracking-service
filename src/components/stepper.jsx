import { useEffect, useState } from "react";
import "./stepper.css";

function MySteps(props) {
  const { steps, status } = props;
  //   console.log(steps);
  const [active, setActive] = useState(1);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleProgress = (status) => {
      console.log(status);
      let color = "#35B600";
      if (status === "DELIVERED") {
        setActive(4);
        color = "#35B600";
      } else if (status === "CANCELLED") {
        setActive(2);
        color = "#F40105";
      } else if (status === "DELIVERED_TO_SENDER") {
        setActive(3);
        color = "#F40105";
      }

      document.getElementById("progressLine").style.backgroundColor = color;

      Array.from(document.getElementsByClassName("done")).map((i) => {
        i.style.backgroundColor = color;
      });
      setProgress((active / 4) * 100);
      document.getElementById("progressLine").style.width = `${progress}%`;
    };
    handleProgress(status);
  }, [progress, active, status]);
  return (
    <div className="s-container">
      <div className="steps">
        <div id="line">
          <div id="progressLine"></div>
          {steps.map((i, index) => {
            return (
              <div className="point-wrapper" key={index}>
                <div className={`point ${active > index ? "done" : ""}`}>
                  {active >= 3 && index == 2 ? (
                    <i className="fa-solid fa-truck-fast"></i>
                  ) : null}
                </div>
              </div>
            );
          })}
        </div>
        <div className="steps-labels">
          {steps.map((i) => {
            return (
              <p key={i} className="step-text">
                {" "}
                {i}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default MySteps;
