/**
* CapRadioGroup
*/
import React from "react";
import PropTypes from 'prop-types';
import { Radio } from "antd";
import "./_capRadioGroup.scss";
const RadioGroup = Radio.Group;

export default class CapRadioGroup extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <RadioGroup {...this.props} className={this.props.className ? `cap-radio-group ${this.props.className}` : "cap-radio-group"}>
        {this.props.children}
      </RadioGroup>
    );
  }
}

CapRadioGroup.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
};
