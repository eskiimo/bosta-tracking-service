import { useState } from "react";

export const useFetchHook = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://tracking.bosta.co/shipments/track/67151313"
      )
        .then((res) => res.json())
        .then((result) => console.log(result));
      console.log(response);
    } catch (e) {
      setError(e.message);
    }
    setLoading(false);
  };

  return { loading, error, sendRequest };
};
