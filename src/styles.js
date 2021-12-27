import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: "30px 0",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    color: "rgba(0,183,255, 1)",
    fontSize: "234%",
    position: "relative",
    left: "-10%",
  },
  image: {
    marginLeft: "15px",
  },
  owner: {
    color: "red",
    position: "relative",
    left: "-23%",
    fontSize: "100%",
  },
  [theme.breakpoints.down("sm")]: {
    mainContainer: {
      flexDirection: "column-reverse",
    },
    heading: {
      fontSize: 32,
      left: "0%",
    },
    image: {
      height: 28,
    },
    appBar: {
      flexDirection: "column",
    },
    owner: {
      left: "-4%",
    },
  },
}));
