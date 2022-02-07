import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState();
  const [error, setError] = useState();

  function fetchData(url) {
    setLoading (true);
    fetch(url)
      .then((res) => res.json())
      .then((res) => { 
        if(res.cod != 404){
          setLoading(false);
          setData(res);
        } else{
          throw new Error("invalid city");
        }
      })
      .catch((error) => {
        setLoading(false);
        setError(error);
    })
  }

  useEffect(() => {
    if(url) {
      fetchData(url);
    }    
  }, [])

  return { data, loading, error, fetchData };
}

export default useFetch;