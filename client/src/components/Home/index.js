import React from "react";
import Styles from "./home.module.css";
import { Link } from "react-router-dom";

const Home = () => {
  React.useEffect(() => {
    document.title = "Welcome";
  });
  return (
    <div className={Styles.root}>
      <main className={Styles.main}>
        <h1>Front-end </h1>
        <h2>Built with React.js</h2>
        <h3>
          List of all profiles from the{" "}
          <a
            href="https://api.enye.tech/v1/challenge/records"
            target="_blank"
            rel="noreferrer"
          >
            Records API
          </a>
        </h3>
        <code>https://api.enye.tech/v1/challenge/records</code>

        <Link to="/profiles/1" className={Styles.button}>
          <span>View All Profiles</span>
        </Link>
      </main>
    </div>
  );
};

export default Home;
 
