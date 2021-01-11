import React from "react";
import { TableContainer, Table, TableBody, TableRow } from "@material-ui/core";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";
import { useStyles } from "./styles/useStyles";
import NoRowsOverlay from "./NoRowsOverlay";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import Styles from "./styles/ListMain.module.css";
import IconButton from "@material-ui/core/IconButton";
import LaunchIcon from "@material-ui/icons/Launch";
import PhoneIcon from "@material-ui/icons/Phone";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Switch from "@material-ui/core/Switch";
import Collapse from "@material-ui/core/Collapse";

const Main = ({
  ROWS_PER_PAGE,
  pageNumber,
  handleOpenDialog,
  data,
  gender,
  setGender,
  paymentMethod,
  setPaymentMethod,
  resetFilter,
}) => {
  const classes = useStyles();
  const [check, setCheck] = React.useState(true);
  return (
    <TableContainer className={Styles.container}>
      <Collapse in={check} collapsedHeight={30}>
        <>
          <div className={Styles.filterBtn}>
            <Switch
              checked={check}
              size="small"
              onChange={() => setCheck(e => !e)}
              name="checkedA"
              inputProps={{ "aria-label": "secondary checkbox" }}
            />
            <span> Toogle filter</span>
          </div>
          <div className={Styles.filter}>
            <TextField
              id="standard-select-Gender"
              select
              label={<span className={Styles.label}>Filter by Gender</span>}
              value={gender}
              className={Styles.textfield}
              style={{ marginRight: 10, marginBottom: 5 }}
              variant="outlined"
              size="small"
              onChange={e => setGender(e.target.value)}
            >
              <MenuItem value="Male">Male</MenuItem>
              <MenuItem value="Female">Female</MenuItem>
              <MenuItem value="Prefer to skip">Prefer to skip</MenuItem>
            </TextField>

            <TextField
              id="standard-select-paymentMethod"
              select
              label={
                <span className={Styles.label}>Filter by Payment Method</span>
              }
              className={Styles.textfield}
              value={paymentMethod}
              style={{ marginRight: 10, marginBottom: 5 }}
              variant="outlined"
              size="small"
              onChange={e => setPaymentMethod(e.target.value)}
            >
              <MenuItem value="paypal">Paypal</MenuItem>
              <MenuItem value="money order">Money order</MenuItem>
              <MenuItem value="cc">CC</MenuItem>
              <MenuItem value="check">Check</MenuItem>
            </TextField>
            <Button
              onClick={() => resetFilter()}
              color="primary"
              variant="contained"
              size="small"
            >
              <span style={{ fontSize: 12, textTransform: "capitalize" }}>
                Reset All Filter
              </span>
            </Button>
          </div>
        </>
      </Collapse>
      <Table stickyHeader size="small">
        <TableBody>
          {!data || !data.length ? (
            <NoRowsOverlay />
          ) : (
            <>
              {(ROWS_PER_PAGE > 0
                ? data.slice(
                    (Number(pageNumber) - 1) * ROWS_PER_PAGE,
                    (Number(pageNumber) - 1) * ROWS_PER_PAGE + ROWS_PER_PAGE
                  )
                : data
              ).map(dataRow => {
                return (
                  <TableRow
                    key={dataRow.CreditCardNumber + Math.random()}
                    title="tableRow"
                    className={classes.tableRow}
                  >
                    <td className={Styles.tb_row}>
                      <span className={Styles.tb_row_a}>
                        <Avatar>{dataRow.FirstName[0]}</Avatar>
                      </span>

                      <span className={Styles.tb_row_b}>
                        <b>
                          {dataRow.FirstName} {dataRow.LastName}
                        </b>
                        <span>
                          <PhoneIcon
                            style={{
                              fontSize: 15,
                              marginRight: 5,
                              color: "green",
                            }}
                          />
                          <i>+{dataRow.PhoneNumber}</i>
                        </span>

                        <span>
                          <AlternateEmailIcon
                            style={{
                              color: "rgba(234, 155, 84, 0.98)",
                              fontSize: 15,
                              marginRight: 5,
                            }}
                          />
                          <span>{dataRow.Email}</span>
                        </span>
                      </span>

                      <span className={Styles.tb_row_c}>
                        <IconButton
                          style={{ color: "3b88c3" }}
                          onClick={() => handleOpenDialog(dataRow)}
                        >
                          <LaunchIcon />
                        </IconButton>
                      </span>
                    </td>
                  </TableRow>
                );
              })}
            </>
          )}
        </TableBody>
        <div className={Styles.spacer} />
      </Table>
    </TableContainer>
  );
};
export default Main;
