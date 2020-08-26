import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { fetchComments } from "../Details/actions";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";

const CommentTable = ({ getComments, id, comments }) => {
  useEffect(() => {
    getComments(id);
  }, [getComments, id]);
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Body</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {comments.map((item) => (
            <TableRow key={item.id}>
              <TableCell component="th" scope="row">
                {item.name}
              </TableCell>
              <TableCell>{item.email}</TableCell>
              <TableCell>{item.body}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

CommentTable.propTypes = {
  id: PropTypes.number,
  comments: PropTypes.array,
  getComments: PropTypes.func,
};

const mapStateToProps = (state) => {
  return { comments: state.postState.comments };
};

const mapDispatchToProps = (dispatch) => ({
  getComments: () => {
    dispatch(fetchComments());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentTable);
