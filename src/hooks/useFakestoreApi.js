import axios from "axios";
import { useState } from "react";

export const useFakestoreApi = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // Fetch data from the API
  const getProducts = async () => {
    try {
      setLoading(true);
      const response = await axios.get("https://fakestoreapi.com/products");
      setData(response.data);
    } catch (err) {
      console.log(err);
      setError(err);
    } finally {
      setLoading(false);
    }
  };
  return {
    loading,
    error,
    data,
    getProducts,
  };
};
