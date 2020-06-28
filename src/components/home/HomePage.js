import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => (
  <div className="jumbotron">
    <h1> Welcome to Ensembl REST API Endpoints</h1>
    <Link to="about" className="btn btn-primary btn-lg">
      Get More details here
    </Link>
  </div>
);

export default HomePage;
