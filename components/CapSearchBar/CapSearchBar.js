/**
* CapSearchBar
*/
import React from "react";
import PropTypes from 'prop-types';
import { Icon } from "antd";
import "./_capSearchBar.scss";
import CapInput from "../CapInput";

export default class CapSearchBar extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <CapInput
        {...this.props}
        className={this.props.className ? `cap-search-bar ${this.props.className}` : "cap-search-bar"}
        prefix={<Icon type="search" />} />
    );
  }
}

CapSearchBar.propTypes = {
  className: PropTypes.string,
};
