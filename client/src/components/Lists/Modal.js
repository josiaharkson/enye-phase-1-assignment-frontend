import React from "react";
import Dialog from "@material-ui/core/Dialog";
import Slide from "@material-ui/core/Slide";
import Styles from "./styles/modal.module.css";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import Button from "@material-ui/core/Button";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

import PhoneIcon from "@material-ui/icons/Phone";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";
import DesktopMacIcon from "@material-ui/icons/DesktopMac";
import HttpIcon from "@material-ui/icons/Http";
import DomainIcon from "@material-ui/icons/Domain";
import LocationOnIcon from "@material-ui/icons/LocationOn";

import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import CreditCardIcon from "@material-ui/icons/CreditCard";
import ContactPhoneIcon from "@material-ui/icons/ContactPhone";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function SimpleDialog({ open, data, handleClose }) {
  const matches = useMediaQuery("(min-width:768px)");

  const {
    FirstName,
    LastName,
    Gender,
    Latitude,
    Longitude,
    CreditCardNumber,
    CreditCardType,
    Email,
    DomainName,
    PhoneNumber,
    MacAddress,
    URL,
    UserName,
    LastLogin,
    PaymentMethod,
  } = data;
  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={open}
      TransitionComponent={Transition}
      keepMounted
      aria-describedby="alert-dialog-description"
      fullScreen={!matches}
    >
      <CustomAppBar matches={matches} handleClose={handleClose} />
      <div className={Styles.main}>
        <div className={Styles.name}>
          <span>
            {FirstName} {LastName}
          </span>
        </div>

        <div className={Styles.ci}>
          <ContactPhoneIcon />
          <span> Contact Information</span>
        </div>

        <div className={Styles.item}>
          <span className={Styles.h}>Email</span>
          <div className={Styles.hh}>
            <AlternateEmailIcon
              style={{
                fontSize: 15,
                marginRight: 5,
                color: "green",
              }}
            />
            <span> {Email} </span>
          </div>
        </div>

        <div className={Styles.item}>
          <span className={Styles.h}>Phone Number</span>

          <div className={Styles.hh}>
            <PhoneIcon
              style={{
                fontSize: 15,
                marginRight: 5,
                color: "green",
              }}
            />
            <span> +{PhoneNumber}</span>
          </div>
        </div>
        <div className={Styles.item}>
          <span className={Styles.h}>Mac Address</span>
          <div className={Styles.hh}>
            <DesktopMacIcon
              style={{
                fontSize: 15,
                marginRight: 5,
                color: "green",
              }}
            />
            <span> {MacAddress}</span>
          </div>
        </div>

        <div className={Styles.item}>
          <span className={Styles.h}>URL</span>{" "}
          <div className={Styles.hh}>
            <HttpIcon
              style={{
                fontSize: 15,
                marginRight: 5,
                color: "green",
              }}
            />
            <span> {URL} </span>
          </div>
        </div>

        <div className={Styles.item}>
          <span className={Styles.h}>Domain name</span>{" "}
          <div className={Styles.hh}>
            <DomainIcon
              style={{
                fontSize: 15,
                marginRight: 5,
                color: "green",
              }}
            />
            <span> {DomainName} </span>
          </div>
        </div>

        <div className={Styles.ci}>
          <PermIdentityIcon /> <span>About</span>
        </div>

        <div className={Styles.item}>
          <span className={Styles.h}>Last login</span>
          <span className={Styles.hh}>{LastLogin}</span>
        </div>
        <div className={Styles.item}>
          <span className={Styles.h}>Username</span>
          <span className={Styles.hh}>{UserName}</span>
        </div>

        <div className={Styles.item}>
          <span className={Styles.h}>Gender</span>
          <span className={Styles.hh}>{Gender}</span>
        </div>

        <div className={Styles.item}>
          <span className={Styles.h}>Location</span>

          <div className={Styles.hh}>
            <LocationOnIcon
              style={{
                fontSize: 15,
                marginRight: 5,
                color: "red",
              }}
            />
            <span> LAT: {Latitude} </span>

            <div style={{ width: 40, textAlign: "center" }}> |</div>
            <LocationOnIcon
              style={{
                fontSize: 15,
                marginRight: 5,
                color: "#115293",
              }}
            />
            <span> LON: {Longitude} </span>
          </div>
        </div>

        <div className={Styles.ci}>
          <CreditCardIcon />
          <span> Card / Payment Details</span>
        </div>

        <div className={Styles.item}>
          <span className={Styles.h}>Credit Card Number</span>
          <span className={Styles.cc}>{CreditCardNumber}</span>
        </div>
        <div className={Styles.item}>
          <span className={Styles.h}>Credit Card Type</span>
          <span className={Styles.cc}>{CreditCardType}</span>
        </div>

        <div className={Styles.item}>
          <span className={Styles.h}>Payment Method</span>

          <span className={Styles.cc}>{PaymentMethod}</span>
        </div>
      </div>
    </Dialog>
  );
}

const CustomAppBar = ({ matches, handleClose }) => {
  if (!matches)
    return (
      <AppBar>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={handleClose}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>

          <Button
            color="inherit"
            onClick={handleClose}
            style={{ float: "right" }}
          >
            Close
          </Button>
        </Toolbar>
      </AppBar>
    );

  return (
    <AppBar style={{ position: "relative" }}>
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          onClick={handleClose}
          aria-label="close"
        >
          <CloseIcon />
        </IconButton>

        <Button
          color="inherit"
          onClick={handleClose}
          style={{ float: "right" }}
        >
          Close
        </Button>
      </Toolbar>
    </AppBar>
  );
};
