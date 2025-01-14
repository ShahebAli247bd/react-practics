import React, { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data, setData] = useState();

    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((post) => setData(post))
            .catch((err) => console.log(err.message))
    }, []);
      
    return [data]
};

export default useFetch;
