import React from "react";

import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import ContentItem from "../ContentItem/ContentItem.component";

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
            image="https://images.unsplash.com/photo-1535365860506-d8b700079e59?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=859&q=80"
            title="Awareness is the dreamlight of yours darkness..."
          />
        </Grid>
        <Grid item sm={4} xs={12}>
          <ContentItem
            image="https://images.unsplash.com/photo-1600677476910-8ec5a174131f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80"
            title="চলুন আমরা সবাই মিলে অংশগ্রহণ করি...."
          />
        </Grid>
        <Grid item sm={4} xs={12}>
          <ContentItem
            image="https://images.unsplash.com/photo-1599843533756-8d3aac8ff16b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80"
            title="আমরা সবাই উপভোগ করবো... চলুন না সবাই মিলে অংশগ্রহণ করি এবং যুক্ত হই ফেসবুক গ্রুপ, Vasudhaiva Kutumbakam:The Whole World is a Family তে...."
          />
        </Grid>
      </Grid>
      <Grid container spacing={3} style={{ marginBottom: 30 }}>
        <Grid item sm={4} xs={12}>
          <ContentItem image="https://images.unsplash.com/photo-1598338430862-3e3098daa722?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1052&q=80" />
        </Grid>
        <Grid item sm={4} xs={12}>
          <ContentItem image="https://images.unsplash.com/photo-1585251173750-5f70048aca65?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
        </Grid>
        <Grid item sm={4} xs={12}>
          <ContentItem image="https://images.unsplash.com/photo-1497752531616-c3afd9760a11?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" />
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
