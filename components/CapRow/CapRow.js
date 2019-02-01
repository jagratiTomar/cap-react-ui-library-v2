/**
* CapRow
*/
import React from "react";
import PropTypes from 'prop-types';
import { Row } from "antd";
import "./_capRow.scss";

export default class CapRow extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Row {...this.props} className={this.props.className ? `cap-row ${this.props.className}` : "cap-row"}>
        {React.Children.toArray(this.props.children)}
      </Row>
    );
  }
}

CapRow.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
};
