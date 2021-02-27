import React from "react";

import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import ContentItem from "../ContentItem/ContentItem.component";

//images
import image1 from "../../assets/instaimage1.jpg";
import image2 from "../../assets/instaimage2.jpg";
import image3 from "../../assets/instaimage3.jpg";
import image4 from "../../assets/instaimage4.jpg";
import image5 from "../../assets/instaimage5.jpg";
import image6 from "../../assets/instaimage6.jpg";

const Content = () => {
  return (
    <Grid
      container
      style={{
        width: "90%",
        margin: "auto",
        marginTop: 150,
        marginBottom: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Grid container spacing={2} style={{ margin: "10px 0" }}>
        <Grid item sm={4} xs={12}>
          <ContentItem
            image={image1}
            title="Awareness is the dreamlight of yours darkness..."
          />
        </Grid>
        <Grid item sm={4} xs={12}>
          <ContentItem
            image={image2}
            title="চলুন আমরা সবাই মিলে অংশগ্রহণ করি...."
          />
        </Grid>
        <Grid item sm={4} xs={12}>
          <ContentItem
            image={image3}
            title="আমরা সবাই উপভোগ করবো... চলুন না সবাই মিলে অংশগ্রহণ করি এবং যুক্ত হই ফেসবুক গ্রুপ, Vasudhaiva Kutumbakam:The Whole World is a Family তে...."
          />
        </Grid>
      </Grid>
      <Grid container spacing={3} style={{ marginBottom: 30 }}>
        <Grid item sm={4} xs={12}>
          <ContentItem image={image4} />
        </Grid>
        <Grid item sm={4} xs={12}>
          <ContentItem image={image5} />
        </Grid>
        <Grid item sm={4} xs={12}>
          <ContentItem image={image6} />
        </Grid>
      </Grid>
      <Button
        variant="contained"
        style={{ backgroundColor: "#000", color: "#ffffff" }}
      >
        SHOW MORE
      </Button>
    </Grid>
  );
};

export default Content;
