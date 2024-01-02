import { useState } from "react";
import { useDispatch } from "react-redux";
import { ship } from "../redux/shippingSlice";

export const useFetchHook = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = async (num) => {
    setLoading(true);
    try {
      await fetch(`https://tracking.bosta.co/shipments/track/${num}`)
        .then((res) => res.json())
        .then((data) => {
          console.log("data", data);
          dispatch(ship(data));
        });
      setLoading(false);

      // return response;
    } catch (e) {
      setError(e.message);
      setLoading(false);
    }
  };

  return { loading, error, sendRequest };
};
