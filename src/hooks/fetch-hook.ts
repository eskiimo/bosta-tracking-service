import { useCallback, useState } from "react";
// import { useDispatch } from "react-redux";
import { ship } from "../redux/shippingSlice";
import { useAppDispatch } from "../redux/hooks";

export const useFetchHook = () => {
  const dispatch = useAppDispatch();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const sendRequest = useCallback(
    async (id: string | undefined) => {
      setLoading(true);
      try {
        await fetch(`${import.meta.env.VITE_URL}${id}`)
          .then((res) => res.json())
          .then((data) => {
            dispatch(ship(data));
          });
      } catch (e: unknown) {
        // Handle other types of errors if needed
        setError("An unknown error occurred");
      }
      setLoading(false);
    },
    [dispatch]
  );

  return { loading, error, sendRequest };
};
