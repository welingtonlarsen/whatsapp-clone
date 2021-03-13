import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Grid, Card } from "@material-ui/core";

import LeftContainer from './components/LeftContainer'
import RightContainer from './components/RightContainer'

const styles = () => ({
  root: {
     padding: "50px 100px",
     zIndex: 999,
     position: "absolute"
   },
   card: {
     display: "flex",
     height: "calc(100vh - 100px)"
   },
   background: {
     position: "absolute",
     height: 200,
     width: "100%",
     top: 0,
     background: "#7159C1"
   }
 });

const App = ({ classes }) => (
  <div>
    <div className={classes.background} />
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <Card className={classes.card}>
          <Grid container>
            <LeftContainer />
            <RightContainer />
          </Grid>
        </Card>
      </Grid>
    </Grid>
  </div>
)

export default withStyles(styles)(App);
