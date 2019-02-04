/**
* CapSliderDoc
*/
import React, { Component } from "react";
import PropertyTable from '../../helpers/PropertyTable';
import CapSlider from "../../components/CapSlider";
import "./info.scss";

const infoData = [
  {
    key: 1,
    property: "type",
    description: "defined slider tip formatter",
    type: "string",
    default: "null",
  },
  {
    key: 2,
    property: "defaultValue",
    description: "defined value of slider",
    type: "number",
    default: "0",
  },
  {
    key: 3,
    property: "disabled",
    description: "disabled slider or not",
    type: "boolean",
    default: "true",
  },
];

export default class CapSliderDoc extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="cap-slider-info">
        <div className="cap-slider-showcase">
          <div style={{margin: 'auto'}}><CapSlider>Normal Slider</CapSlider></div>
          <div style={{margin: 'auto'}}><CapSlider type="ratio" defaultValue={40} disabled>Ratio disable Slider</CapSlider></div>
          <div style={{margin: 'auto'}}><CapSlider type="ratio" defaultValue={40} disabled={false}>Ratio Slider</CapSlider></div>
        </div>
        <PropertyTable data={infoData} />
      </div>
    );
  }
}
