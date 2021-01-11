import React from "react";
import axios from "axios";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import LaunchIcon from "@material-ui/icons/Launch";

import Lists from "../Lists";

import Styles from "./index.module.css";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
// fakedata2.records.profiles
const App = () => {
  const matches = useMediaQuery("(min-width:768px)");

  const [data, setData] = React.useState(null);
  const [open, setOpen] = React.useState(true);

  const handleClose = () => setOpen(false);

  const fetchAllProfile = async () => {
    const URL = "http://api.enye.tech/v1/challenge/records";
    try {
      const res = await axios.get(URL);
      setData(res.data.records.profiles);
    } catch (e) {
      setData([]);
    }
  };

  React.useEffect(() => {
    document.title = "Profiles";
  });

  React.useEffect(() => {
    if (data === null) {
      fetchAllProfile();
    }
  }, [data]);

  return (
    <>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="info">
          <h1 className={Styles.info}>
            Click on the icon <LaunchIcon className={Styles.icon} />
            shown below to view more information on a profile.
          </h1>
          {matches ? (
            <img src="/guide_lgx.PNG" width="100%" alt="guide_lg" />
          ) : (
            <img src="/guide_smx.PNG" width="100%" alt="guide_sm" />
          )}
        </Alert>
      </Snackbar>

      <Lists data={data} />
    </>
  );
};

export default App;
