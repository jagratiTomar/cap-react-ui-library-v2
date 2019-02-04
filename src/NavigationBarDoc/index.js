/**
* NavigationBarDoc
*/
import React, { Component } from "react";
import PropertyTable from '../../helpers/PropertyTable';
import { NavigationBar } from "../../components";
import "./info.scss";

const infoData = [
  {
    key: 1,
    property: "-",
    description: "-",
    type: "-",
    default: "-",
  },
];

const orgsList = [
  { label: 'Purples', value: 'purples' },
  { label: 'Buckle', value: 'buckle' },
  { label: 'Ski', value: 'ski' },
  { label: 'Splash', value: 'splash' },
  { label: 'Metro', value: 'metro' },
];

const productsList = [
  { label: 'Dashboard', value: 'Dashboard' },
  { label: 'Campaign manager', value: 'Campaign manager' },
  { label: 'Membercare', value: 'Membercare' },
  { label: 'Loyalty manager', value: 'Loyalty manager' },
  { label: 'Essential insights', value: 'Essential insights' },
]

const menuItems = [
  { label: 'Campaigns', link: '/campaigns', key: "campaigns" },
  { label: 'Incentive', link: '/incentives', key: "incentive" },
  { label: 'Audience', link: '/Audience', key: "audience" }
]

export default class NavigationBarDoc extends Component { // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props);
    this.state = {
      selectedOrg: "buckle",
      selectedProduct: "Campaign manager",
      selectedMenuItem: 'incentive'
    }
  }

  handleOrgChange = (value) => {
    this.setState({ selectedOrg: value })
  }

  handleProductChange = (value) => {
    this.setState({ selectedProduct: value })
  }

  render() {
    return (
      <div className="navigation-bar-info">
        <div className="navigation-bar-showcase">
          <NavigationBar
            primarySelectProps={{
              items: orgsList,
              selectedItem: this.state.selectedOrg,
              handleItemChange: this.handleOrgChange,
            }}
            secondarySelectProps={{
              items: productsList,
              selectedItem: this.state.selectedProduct,
              handleItemChange: this.handleProductChange,
            }}
            menuProps={{
              view: 'horizontal',
              items: menuItems,
              selectedItem: this.state.selectedMenuItem
            }}
            userName={"Jagrati"}
          />
        </div>
        <PropertyTable data={infoData} />
      </div>
    );
  }
}
