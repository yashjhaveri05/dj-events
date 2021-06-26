import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

class EventsMembersHeader extends React.Component {
  render() {
    const classes = useStyles;
    return (
      <div>
        <div className={classes.root} style={{ marginLeft: "50px auto" }}>
          <Button size="large" href="/events">
            <h5 style={{ color: "white", fontWeight: "bold" }}>Events</h5>
          </Button>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <Button size="large" href="/members">
            <h5 style={{ color: "white", fontWeight: "bold" }}>Members</h5>
          </Button>
        </div>
        <br></br>
        <br></br>
      </div>
    );
  }
}

export default EventsMembersHeader;