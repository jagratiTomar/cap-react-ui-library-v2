/**
* CapColumn
*/
import React from "react";
import PropTypes from 'prop-types';
import { Col } from "antd";
import "./_capColumn.scss";

export default class CapColumn extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Col {...this.props} className={this.props.className ? `cap-column ${this.props.className}` : "cap-column"}>
        {React.Children.toArray(this.props.children)}
      </Col>
    );
  }
}

CapColumn.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
};
