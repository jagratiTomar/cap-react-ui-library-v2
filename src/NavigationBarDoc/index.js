/**
* NavigationBarDoc
*/
import React, { Component } from "react";
import PropertyTable from  '../../helpers/PropertyTable';
import { NavigationBar } from "../../components";
import "./info.scss";

const infoData = [
  {
    "key": 1,
    "property": "-",
    "description": "-",
    "type": "-",
    "default": "-"
  },
];

export default class NavigationBarDoc extends Component { // eslint-disable-line react/prefer-stateless-function

render() {
  return (
    <div className="navigation-bar-info">
      <div className="navigation-bar-showcase">
        <NavigationBar />
      </div>
      <PropertyTable data={infoData}/>
    </div>
    );
  }
}
