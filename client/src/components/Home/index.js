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
        <code>http://api.enye.tech/v1/challenge/records</code>

        <Link to="/profiles/1" className={Styles.button}>
          <span>View All Profiles</span>
        </Link>
      </main>
    </div>
  );
};

export default Home;

// import React from "react";
// import Styles from "./home.module.css";
// import { Link } from "react-router-dom";
// import useMediaQuery from "@material-ui/core/useMediaQuery";

// const Home = () => {
//   const matches = useMediaQuery("(min-width:768px)");

//   return (
//     <div className={Styles.root}>
//       <main className={Styles.main}>
//         <h1>Front-end Client</h1>
//         <h2>
//           List of all profiles from the <span>Records API</span>
//         </h2>
//         <code>http://api.enye.tech/v1/challenge/records</code>

//         {matches ? (
//           <img src="/guide_lg.PNG" alt="guide_lg" />
//         ) : (
//           <img src="/guide_sm.PNG" alt="guide_sm" />
//         )}

//         <Link to="/profiles/1" className={Styles.button}>
//           <span>View All Profiles</span>
//         </Link>
//       </main>
//     </div>
//   );
// };

// export default Home;
