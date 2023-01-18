import { useState, useCallback } from "react";

export const useHttp = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const request = useCallback(
    async (
      url,
      method = "GET",
      body = null,
      headers = {
        "content-type": "application/json",
      }
    ) => {
      setLoading(true);

      try {
        const response = await fetch(url, { method, body, headers });

        if (!response.ok) {
          throw Error(`Could not fetch ${url}, status: ${response.status} `);
        }

        const result = await response.json();

        return result;
      } catch (error) {
        console.error(error);
        setError(error.message);
        throw error;
      } finally {
        setLoading(false);
      }
    },
    []
  );

  const clearError = useCallback(() => {
    setError(null);
  });

  return { request, error, loading };
};