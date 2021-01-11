import makeStyles from "@material-ui/core/styles/makeStyles";

export const useStyles = makeStyles(
  ({ spacing, palette: { primary, grey, text } }) => ({
    container: {
      height: 450,
      scrollbarColor: "red",
    },
    cell: {
      color: text.secondary,
      backgroundColor: grey[200],
    },
    paper: {
      margin: spacing(1, 4, 1, 4),
    },
    accountCell: {
      display: "flex",
      maxWidth: "100px",
      overflow: "hidden",
      whiteSpace: "nowrap",
      textOverflow: "ellipsis",
    },
    icons: {
      paddingTop: spacing(0.5),
    },
    statusCell: {
      color: text.secondary,
    },
    tableRow: {
      "&$hover:hover": {
        backgroundColor: "none",
      },
    },
    tableRowChild: {
      margin: 5,
      padding: 5,
    },
    tableCell: {
      borderBottom: "none",
      "$hover:hover &": {
        color: primary.contrastText,
      },
    },
    hover: {},
  })
);

export const useStyles2 = makeStyles(theme => ({
  root: {
    flexDirection: "column",
    "& .ant-empty-img-1": {
      fill: theme.palette.type === "light" ? "#aeb8c2" : "#262626",
    },
    "& .ant-empty-img-2": {
      fill: theme.palette.type === "light" ? "#f5f5f7" : "#595959",
    },
    "& .ant-empty-img-3": {
      fill: theme.palette.type === "light" ? "#dce0e6" : "#434343",
    },
    "& .ant-empty-img-4": {
      fill: theme.palette.type === "light" ? "#fff" : "#1c1c1c",
    },
    "& .ant-empty-img-5": {
      fillOpacity: theme.palette.type === "light" ? "0.8" : "0.08",
      fill: theme.palette.type === "light" ? "#f5f5f5" : "#fff",
    },
    textAlign: "center",
  },
  label: {
    marginTop: theme.spacing(1),
    textAlign: "center",
    fontFamily: "Assistant",
  },
}));
