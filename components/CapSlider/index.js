/**
*
* CapSlider
*
*/
import React from 'react';
import './_capSlider.scss'
import { Slider } from 'antd';
import PropTypes from 'prop-types';


class CapSlider extends React.Component { // eslint-disable-line react/prefer-stateless-function
  translateType(type) {
    let tipFormatter=null;
    switch (type) {
      case 'ratio':
        tipFormatter=(value)=>{
           return `${value}|${100-value}`;
        };
        break;
      default:
        tipFormatter = null;
    }
    return tipFormatter;
  }
  render() {
    const formatter = this.translateType(this.props.type);
    const { defaultValue, disabled} = this.props;
    return (
      <div>
        <Slider tipFormatter={formatter}  defaultValue={defaultValue} disabled={disabled} />
      </div>
    );
  }
}

CapSlider.propTypes = {
  type: PropTypes.string,
  defaultValue:PropTypes.number,
  disabled:PropTypes.bool
};

export default CapSlider;
