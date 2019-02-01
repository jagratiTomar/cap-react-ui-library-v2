/**
* CapForm
*/
import React from "react";
import PropTypes from 'prop-types';
import { Form } from "antd";
import "./_capFormItem.scss";

const FormItem = Form.Item;
export default class CapFormItem extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <FormItem {...this.props} className={this.props.className ? `cap-form-item ${this.props.className}` : "cap-form"}>
        {React.Children.toArray(this.props.children)}
      </FormItem>
    );
  }
}

CapFormItem.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
};
