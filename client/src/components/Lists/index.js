import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Badge from "@material-ui/core/Badge";
import Button from "@material-ui/core/Button";
import HomeIcon from "@material-ui/icons/Home";
import Styles from "./styles/index.module.css";
import Main from "./ListMain";
import Pagination from "./ListPagination";
import Modal from "./Modal";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import SearchIcon from "@material-ui/icons/Search";
import Backdrop from "../Backdrop";

const App = props => {
  const [data, setData] = React.useState(props.data);

  console.log({ props: props.data, data });

  // VARIABLES
  const ROWS_PER_PAGE = 20;
  const { pageNumber = 1 } = useParams();

  const [dialogData, setDialogData] = useState({});
  const [openDialog, setOpenDialog] = useState(false);

  // FILTER BY
  const [gender, setGender] = React.useState("");
  const [paymentMethod, setPaymentMethod] = React.useState("");

  const [isLoading, setIsloading] = React.useState(false);

  const onChangeGender = d => {
    setIsloading(true);
    setPaymentMethod("");
    setGender(d);

    setTimeout(() => {
      const _filter = props.data.filter(x => x.Gender === d);
      setData(_filter);
      setIsloading(false);
    }, 1000);
  };

  const onChangePaymentMethod = d => {
    setIsloading(true);
    setGender("");
    setPaymentMethod(d);

    setTimeout(() => {
      const _filter = props.data.filter(x => x.PaymentMethod === d);
      setData(_filter);
      setIsloading(false);
    }, 1000);

    return;
  };

  const onChangeSearchBox = d => {
    setIsloading(true);
    setGender("");
    setPaymentMethod("");

    if (d === null || d === undefined || !d) {
      setIsloading(false);
      return resetFilter();
    }

    setTimeout(() => {
      const _filter = props.data.filter(x => {
        if (x.FirstName === d.FirstName && x.Email === d.Email) return true;
        return false;
      });

      setData(_filter);
      setIsloading(false);
    }, 1000);
  };

  const resetFilter = () => {
    setData(props.data);
    setGender("");
    setPaymentMethod("");
  };

  const handleOpenDialog = d => {
    setDialogData(d);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setDialogData({});
    setOpenDialog(false);
  };

  React.useEffect(() => {
    if (props.data !== null) {
      setData(props.data);
    }
  }, [props.data]);

  return (
    <div className={Styles.root}>
      {isLoading && <Backdrop />}
      <Modal
        open={openDialog}
        handleClose={handleCloseDialog}
        data={dialogData}
      />

      <Link to="/" className={Styles.backBtn}>
        <Button
          startIcon={<HomeIcon style={{ color: "#115293" }} />}
          variant="contained"
          size="small"
          style={{ fontSize: 10 }}
        >
          go back
        </Button>
      </Link>
      <div className={Styles.header}>
        <h1>
          <Badge
            color="secondary"
            badgeContent={
              <span style={{ color: "#fff" }}>{data ? data.length : ""}</span>
            }
          >
            <span>Profiles</span>
          </Badge>
        </h1>

        <Autocomplete
          id="combo-box-demo"
          options={data}
          onChange={(a, b) => {
            onChangeSearchBox(b);
          }}
          getOptionLabel={option => `${option.FirstName} ${option.LastName}`}
          style={{ width: "100%" }}
          renderInput={params => (
            <TextField
              {...params}
              label={<SearchIcon />}
              variant="outlined"
              size="small"
            />
          )}
        />
      </div>

      {!data ? (
        <Backdrop />
      ) : (
        <>
          <div className={Styles.main}>
            <Main
              data={data}
              handleOpenDialog={handleOpenDialog}
              ROWS_PER_PAGE={ROWS_PER_PAGE}
              pageNumber={pageNumber}
              gender={gender}
              setGender={onChangeGender}
              paymentMethod={paymentMethod}
              setPaymentMethod={onChangePaymentMethod}
              resetFilter={resetFilter}
            />
          </div>

          <div className={Styles.pagination}>
            <Pagination
              pageNumber={pageNumber}
              data={data}
              ROWS_PER_PAGE={ROWS_PER_PAGE}
            />
          </div>
        </>
      )}
    </div>
  );
};
export default App;
