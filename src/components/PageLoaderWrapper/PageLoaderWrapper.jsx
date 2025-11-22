import React, { useState, useEffect } from "react";
import PageLoader from "../../components/PageLoader/PageLoader";
import Main from "../../Main/Main";

const PageLoaderWrapper = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, ); 

    return () => clearTimeout(timer);
  }, []);

  return loading ? <PageLoader /> : <Main />;
};

export default PageLoaderWrapper;
