import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { withStyles } from "@material-ui/core/styles";
import { Button, Typography, Grid } from "@material-ui/core";

import styles from "./styles";
import Popup from "../../Components/Popup";
import CommentTable from "../CommentPopup/CommentTable";
import { fetchPosts } from "./actions";

const DateContainer = ({ title, date }) => (
  <Grid item lg={1} md={2} xs={6}>
    <Typography variant="body1">{title}</Typography>
    <Typography variant="body1">{date}</Typography>
  </Grid>
);

DateContainer.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
};

const Details = ({ item, classes }) => {
  const onClickDetails = (id) => (window.location.href = `/page/details?${id}`);
  const onChangeFile = (e) =>
    console.log(document.getElementById("file").files[0]);
  return (
    <Grid container className={classes.details}>
      <Grid lg={11} item>
        <Typography variant="h6" gutterBottom>
          {item.title}
        </Typography>
        <Typography variant="body1" gutterBottom>
          {item.body}
        </Typography>
        <Grid container>
          <DateContainer
            title="start date"
            date={new Date().toDateString().slice(3)}
          />
          <DateContainer
            title="end date"
            date={new Date().toDateString().slice(3)}
          />
          <Grid item lg={1} md={2} xs={6}>
            <Typography variant="body1">comments</Typography>
            <Popup actionCTA="121" title="Comments">
              <CommentTable id={item.id} />
            </Popup>
          </Grid>
        </Grid>
      </Grid>
      <Grid item lg={1} md={12} xs={12}>
        <Grid
          container
          justify="space-between"
          className={classes.commentSection}
        >
          <Grid item>
            <Button
              onClick={() => onClickDetails(item.id)}
              variant="contained"
              className={classes.detailsBtn}
              size="small"
            >
              Details
            </Button>
          </Grid>
          <Grid item>
            <Popup
              actionCTA="Add comment"
              CTAText="Submit"
              title="Upload File"
              primary
            >
              <input
                type="file"
                id="file"
                onChange={(e) => onChangeFile(e)}
                className={classes.fileInput}
              />
            </Popup>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

Details.propTypes = {
  item: PropTypes.object,
  classes: PropTypes.object,
};

const Home = ({ fetchPostList, postsList, classes }) => {
  useEffect(() => {
    fetchPostList();
  }, [fetchPostList]);

  return (
    <div className={classes.detailsContainer}>
      <Typography variant="h5" gutterBottom>
        Home
      </Typography>
      <Typography variant="h4" gutterBottom>
        User Name
      </Typography>
      <div>
        {postsList.map((item) => (
          <Details item={item} key={item.id} classes={classes} />
        ))}
      </div>
    </div>
  );
};

Home.propTypes = {
  fetchPostList: PropTypes.func,
  postsList: PropTypes.array,
  classes: PropTypes.object,
};

const mapStateToProps = (state) => {
  return { postsList: state.postsState.postsList };
};

const mapDispatchToProps = (dispatch) => ({
  fetchPostList: () => {
    dispatch(fetchPosts());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Home));
