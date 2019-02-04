/**
* CapInput
*/
import React from "react";
import PropTypes from 'prop-types';
import { Input } from "antd";
import "./_capInput.scss";

export default class CapInput extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    if (this.props.focusOnMount && this.input) {
      this.input.focus();
    }
  }

  render() {
    const { errorMessage, ...rest} = this.props;
    if (rest.focusOnMount) {
      delete rest.focusOnMount;
    }
    return (
      <div className={this.props.className ? `cap-input ${this.props.className}` : "cap-input"} >
        <Input {...rest} ref={(node) => { this.input = node; }}/>
        { errorMessage && this.props.className && (this.props.className.indexOf('error') > -1 || this.props.className.indexOf('warning') > -1) &&
          <span className="error-message">{this.props.errorMessage}</span>
        }
      </div>
    );
  }
}

CapInput.propTypes = {
  className: PropTypes.string,
  errorMessage: PropTypes.string,
  focusOnMount: PropTypes.bool,
};
CapInput.defaultProps = {
  errorMessage: "invalid input",
};
