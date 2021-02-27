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

import { useHistory } from "react-router-dom";

import image1 from "../../assets/Slide8.JPG";
import image2 from "../../assets/The Cons HUmanity.jpg";

const Transend = () => {
  const history = useHistory();
  return (
    <div className="transend">
      <Grid container spacing={2} style={{ justifyContent: "space-evenly" }}>
        <Grid item xs={12} sm={6}>
          <Card style={{ maxWidth: 400, margin: "0 auto" }}>
            <CardActionArea>
              <CardMedia style={{ height: 200 }} image={image1} />
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
                  Transcendental Eagle Rebirth Retreat 24th- 27th February 2021
                  (Register Now)
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button
                size="small"
                color="primary"
                onClick={() => history.push("/transcendental")}
              >
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid item sm={6} xs={12} style={{ marginTop: 200 }}>
          <Card style={{ maxWidth: 400, margin: "0 auto" }}>
            <CardActionArea>
              <CardMedia style={{ height: 200 }} image={image2} />
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
                  Residential Memory, Concentration, Mind Power Development and
                  Family Counselling- 13th- 14th February 2021
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button
                size="small"
                color="primary"
                onClick={() => history.push("/residentail-memory")}
              >
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
