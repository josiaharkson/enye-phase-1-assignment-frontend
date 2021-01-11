/* eslint-disable no-use-before-define */
import React from "react";
import { Link } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import HomeIcon from "@material-ui/icons/Home";
import KeyboardReturnIcon from "@material-ui/icons/KeyboardReturn";
import WarningIcon from "@material-ui/icons/Warning";

export default function ComboBox() {
  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        alignItems: "center",
        justifyContent: "center",
        background: "#115293",
        color: "#fff",
        flexDirection: "column",
      }}
    >
      <WarningIcon style={{ color: "#ea9b54", fontSize: 70 }} />

      <div style={{ fontSize: "50px", padding: 20, textAlign: "center" }}>
        Page Does Not Exist
      </div>

      <Link to="/">
        <IconButton style={{ border: "1px solid #ea9b54", borderRadius: 5 }}>
          <KeyboardReturnIcon style={{ color: "#ea9b54", fontSize: 40 }} />
          <HomeIcon style={{ color: "#ea9b54", fontSize: 40 }} />
        </IconButton>
      </Link>
    </div>
  );
}
