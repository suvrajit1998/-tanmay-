import React from "react";
import "./Transcend.css";

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

const Transend = () => {
  return (
    <div className="transend">
      <Grid container spacing={2} style={{ justifyContent: "space-evenly" }}>
        <Grid item xs={12} sm={6}>
          <Card style={{ maxWidth: 400, margin: "0 auto" }}>
            <CardActionArea>
              <CardMedia
                style={{ height: 200 }}
                image="https://images.unsplash.com/photo-1576815837205-07349c6016e1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
              />
              <CardContent>
                <Typography style={{ padding: "10px 0" }} variant="h5">
                  EAGLE REBIRTH RETREAT
                </Typography>
                <Typography style={{ padding: "10px 0" }} variant="subtitle1">
                  Awaken Your Self for the Humanity
                </Typography>
                <Typography
                  style={{ padding: "10px 0" }}
                  variant="body2"
                  color="textSecondary"
                >
                  Without Awakening you do not know the depth of life, you only
                  live the surface of it.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid item sm={6} xs={12} style={{ marginTop: 200 }}>
          <Card style={{ maxWidth: 400, margin: "0 auto" }}>
            <CardActionArea>
              <CardMedia
                style={{ height: 200 }}
                image="https://images.unsplash.com/photo-1474557157379-8aa74a6ef541?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                title="EAGLE REBIRTH RETREAT"
              />
              <CardContent>
                <Typography style={{ padding: "10px 0" }} variant="h5">
                  VASUDHAIVA KUTUMBAKAM
                </Typography>
                <Typography style={{ padding: "10px 0" }} variant="subtitle1">
                  Awaken Your Self for the Humanity
                </Typography>
                <Typography
                  style={{ padding: "10px 0" }}
                  variant="body2"
                  color="textSecondary"
                >
                  Without Awakening you do not know the depth of life, you only
                  live the surface of it.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default Transend;
