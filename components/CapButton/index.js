/**
* CapButton
*/
import React from "react";
import PropTypes from 'prop-types';
import { Button } from "antd";
import "./_capButton.scss";

export default class CapButton extends React.Component { // eslint-disable-line react/prefer-stateless-function
  translateType(type) {
    let antdType = 'primary';
    switch (type) {
      case 'secondary':
        antdType = 'ghost';
        break;
      case 'cancel':
        antdType = 'danger';
        break;
      case 'dashed':
        antdType = 'dashed';
        break;
      default:
        antdType = 'primary';
    }
    return antdType;
  }

  render() {
    const type = this.translateType(this.props.type);
    const {addonBefore, addonAfter, ...rest} = this.props;
    return (
      <Button
        {...rest}
        className={this.props.className ? `cap-button ${this.props.className}` : "cap-button"}
        type={type}
      >
        {addonBefore &&
          <span className="before-button"> {addonBefore}</span>
        }
        {React.Children.toArray(this.props.children)}
        {addonAfter &&
          <span className="after-button"> {addonAfter}</span>
        }
      </Button>
    );
  }
}

CapButton.propTypes = {
  children: PropTypes.any,
  type: PropTypes.string,
  className: PropTypes.string,
  addonAfter: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  addonBefore: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};
