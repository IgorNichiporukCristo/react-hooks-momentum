import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [status, setStatus] = useState({
    data: undefined,
    loading: false,
    error: undefined
  });

  function fetchData(url) {
    setStatus ({ loading: true });
    fetch(url)
      .then((res) => res.json())
      .then((res) => { 
        if(res.cod != 404){
          setStatus({ loading: false, data: res })
        } else{
          throw new Error("invalid city");
        }
      })
      .catch((error) => {
        setStatus({ loading: false, error: error })
    })
  }

  useEffect(() => {
    if(url) {
      fetchData(url)
    }    
  }, [])

  return { ...status, fetchData }
}

export default useFetch;