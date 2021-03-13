import React from "react";
import { withStyles } from "@material-ui/core/styles";
import ImageIcon from "@material-ui/icons/Image";
import WorkIcon from "@material-ui/icons/Work";
import BeachAccessIcon from "@material-ui/icons/BeachAccess";
import { Paper, Typography, Grid, Card, CardHeader, Avatar, List, ListItem, ListItemText } from "@material-ui/core";

import { styles } from './styles'

const LeftContainer = ({ classes }) => {
    const list = [
        { id: 1, name: "Leticia", text: "Lorem ipsum", image: <ImageIcon /> },
        { id: 2, name: "Lucas", text: "Lorem ipsum", image: <WorkIcon /> },
        { id: 3, name: "Matheus", text: "Lorem ipsum", image: <BeachAccessIcon /> },
        { id: 4, name: "Rodrigo", text: "Lorem ipsum", image: <ImageIcon /> }
    ];

    return(
        <Grid item xs={3}>
            <CardHeader
            className={classes.rightBorder}
            avatar={
                <Avatar aria-label="Recipe" >
                W
                </Avatar>
            }
            />
            <Paper className={classes.paper} elevation={0}>
                <Typography className={classes.information} variant="subheader">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor!
                </Typography>
            </Paper>
            <List>
            {list.map(item => (
                <ListItem>
                <Avatar>{item.image}</Avatar>
                <ListItemText primary={item.name} secondary={item.text} className={classes.listItem}/>
                </ListItem>
            ))}
            </List>
        </Grid>
    )
}

export default withStyles(styles)(LeftContainer);