import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  position: {
    fontSize: "0.8rem",
  },
  btn: {
    margin: "5%",
  },
  avatar: {
    marginRight: "2%",
    marginTop: "2px",
  },
  part1: {
    display: "flex",
    flexDirection: "row",
    textAlign: "center",
  },
  part2: {
    float: "right",
  },
  colour: {
    backgroundColor: "green",
  },
}));

const DisplayMembers = ({ id, name, positionAssigned }) => {
  const classes = useStyles();
  let substrings = name.split(" ");
  let f = substrings[0].charAt(0);
  let l = substrings[1].charAt(0);
  let initials = f + l;
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={9}>
          <div className={classes.part1}>
            <div className={classes.avatar}>
              <Avatar className={classes.colour}>{initials}</Avatar>
            </div>
            <div>
              <span>
                <strong>{name}</strong>
              </span>
              <br />
              <span className={classes.position}>{positionAssigned}</span>
            </div>
          </div>
        </Grid>
        <Grid item xs={3}>
          <div className={classes.part2}>
            <Button variant="outlined" className={classes.btn}>
              Remove
            </Button>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};
export default DisplayMembers;