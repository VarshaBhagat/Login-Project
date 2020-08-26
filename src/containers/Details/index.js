import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { Grid, Typography, List, ListItem } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

import styles from "./styles";
import { fetchPost, fetchComments } from "./actions";

const Item = ({ title, children }) => (
  <Grid container alignItems="center">
    <Grid item lg={2} md={3}>
      <Typography variant="h5" gutterBottom>
        {title}: &nbsp;
      </Typography>
    </Grid>
    <Grid item lg={10} md={9}>
      {children}
    </Grid>
  </Grid>
);

Item.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

const Details = ({ getPost, getComments, post, comments, classes }) => {
  useEffect(() => {
    const id = window.location.search.slice(1);
    getPost(id);
    getComments(id);
  }, [getComments, getPost]);

  return (
    <div className={classes.detailsContainer}>
      <Typography variant="h4" gutterBottom className="post-content">
        Details
      </Typography>
      <Item title="Title">
        <Typography variant="h6" gutterBottom>
          {post.title}
        </Typography>
      </Item>
      <Item title="Body">
        <Typography variant="h6" gutterBottom>
          {post.body}
        </Typography>
      </Item>
      <Item title="Comments">
        <List component="nav">
          {comments.map((item) => (
            <ListItem button key={item.id} className={classes.commentItem}>
              {item.body}
            </ListItem>
          ))}
        </List>
      </Item>
    </div>
  );
};

Details.propTypes = {
  getPost: PropTypes.func,
  fetchComments: PropTypes.func,
  post: PropTypes.object,
  comments: PropTypes.array,
  classes: PropTypes.object,
};

const mapStateToProps = (state) => {
  return { post: state.postState.post, comments: state.postState.comments };
};

const mapDispatchToProps = (dispatch) => ({
  getPost: () => {
    dispatch(fetchPost());
  },
  getComments: () => {
    dispatch(fetchComments());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Details));
