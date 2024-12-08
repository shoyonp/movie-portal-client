import React, { useEffect } from "react";

const UseTitle = (title) => {
  useEffect(() => {
    document.title = `Movie BD | ${title}`;
  }, []);
  return <div></div>;
};

export default UseTitle;
