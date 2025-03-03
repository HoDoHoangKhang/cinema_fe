import { useEffect, useState } from "react";

const DEFAULT_HEADERS = {
  Accept: "application/json",
  Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
};
export default function useFetch({ url='', method = "GET", headers = {} }) {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    fetch(`${import.meta.env.VITE_API_HOST}${url}`, {
      method,
      headers: {
        ...DEFAULT_HEADERS,
        ...headers,
      },
    })
      .then(async (res) => {
        const data = await res.json();
        console.log({
      data,
         dataTestType: typeof data,
        });
        setData(data);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [url, method, JSON.stringify(headers)]);
        // console.log({ dataTestConsole: data });

  return { data, isLoading };
}
