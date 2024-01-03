import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { ship } from "../redux/shippingSlice";

export const useFetchHook = () => {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(
    async (id) => {
      setLoading(true);
      try {
        await fetch(`${import.meta.env.VITE_URL}${id}`)
          .then((res) => res.json())
          .then((data) => {
            dispatch(ship(data));
          });
      } catch (e) {
        setError(e.message);
      }
      setLoading(false);
    },
    [dispatch]
  );

  return { loading, error, sendRequest };
};
