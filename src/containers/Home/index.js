import React, { useEffect, useCallback } from "react";
import ReactPaginate from "react-paginate";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { withStyles } from "@material-ui/core/styles";
import { Button, Typography, Grid } from "@material-ui/core";

import styles from "./styles";
import Popup from "../../Components/Popup";
import CommentTable from "../CommentPopup/CommentTable";
import { fetchPosts } from "./actions";
import "./style.css";

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
          {item.email}
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

const Home = ({ fetchPostList, postsList, classes, totalPagesCount }) => {
  const INITIAL_PAGE_NUM = 1;
  const handlePageClick = useCallback(
    (e) => {
      fetchPostList(e.selected + 1);
    },
    [fetchPostList]
  );

  useEffect(() => {
    fetchPostList(INITIAL_PAGE_NUM);
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
      <div className="card-container">
        <ReactPaginate
          previousLabel={"prev"}
          nextLabel={"next"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={totalPagesCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          containerClassName={"pagination"}
          subContainerClassName={"pages pagination"}
          activeClassName={"active"}
        />
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
  return {
    postsList: state.postsState.postsList,
    totalPagesCount: state.postsState.totalPages,
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchPostList: (e) => {
    dispatch(fetchPosts(e));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Home));
