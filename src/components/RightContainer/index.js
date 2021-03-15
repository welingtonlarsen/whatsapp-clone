import React from "react";
import { withStyles } from "@material-ui/core/styles";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ImageIcon from "@material-ui/icons/Image";
import {
  Grid,
  CardHeader,
  CardContent,
  Avatar,
  IconButton,
} from "@material-ui/core";

import { styles } from "./styles";

const RightContainer = ({ classes }) => {
  return (
    <Grid className={classes.heightAdjust} item xs={9}>
      <CardHeader
        avatar={
          <Avatar aria-label="Recipe">
            <ImageIcon />
          </Avatar>
        }
        action={
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        }
        title="Welington"
      />
      <CardContent className={[classes.rightContainer, classes.content]} />
    </Grid>
  );
};

export default withStyles(styles)(RightContainer);
