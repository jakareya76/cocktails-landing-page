import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section className="section error-page">
      <div className="error-container">
        <h1>404 page not found</h1>
        <Link to="/" className="btn btn-primary">
          GO BACK
        </Link>
      </div>
    </section>
  );
};

export default Error;
