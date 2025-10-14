import React from "react";
import found from "./PageNotFound.module.css";
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const navigate = useNavigate();
  return (
    <div className={found.container}>
      <header className={found.header}>
        <h1>404 Error</h1>
      </header>
      <main>
        <p className={found.errorMessage}>
          The page you are looking for does not exist.
        </p>
        <button className={found.button} onClick={() => navigate(-1)}>
          Go Back
        </button>
      </main>
    </div>
  );
};

export default PageNotFound;
