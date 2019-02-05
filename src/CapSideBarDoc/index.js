/**
* CapSideBarDoc
*/
import React, { Component } from "react";
import PropertyTable from '../../helpers/PropertyTable';
import { CapSideBar } from "../../components";
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

const sidebarItems = [
  {
    title: 'Favourite Reports',
    key: 'favourite_reports',
    children: [
      {
        title: 'Segments',
        key: 'segments',
        children: [
          {
            title: 'Campaigns Long Long Name Test',
            key: 'campaigns',
            link: '/campaigns',
            target: '_top',
          },
          {
            title: 'Incentive',
            key: 'incentive',
            link: '/incentive',
          },
        ],
      },
    ],
  },
  {
    title: 'Standard Reports',
    key: 'standard',
    children: [
      {
        title: 'Category1',
        key: 'category1',
        children: [
          {
            title: 'Report1',
            key: 'report1',
            link: '/report1',
            target: '_top',
          },
          {
            title: 'Report2',
            key: 'report2',
            link: '/report2',
          },
        ],
      },
      {
        title: 'Category2',
        key: 'category2',
        children: [
          {
            title: 'Report3',
            key: 'report3',
            link: '/report3',
            target: '_top',
          },
        ],
      },
    ],
  },
  {
    title: 'Data Exports',
    key: 'data_exports',
    children: [
      {
        title: 'Exports',
        key: 'exports',
        link: '/exports',
      },
    ],
  },
  {
    title: 'Creatives',
    key: 'creatives',
    link: '/creatives',
  },
];

export default class CapSideBarDoc extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="cap-side-bar-info">
        <div className="cap-side-bar-showcase">
          <CapSideBar
            sidebarItems={sidebarItems}
            selectedMenuItem="exports"
            searchSupportPortalUrl="http://support.capillarytech.com/support/search/solutions?term={{searchText}}"
          />
        </div>
        <PropertyTable data={infoData} />
      </div>
    );
  }
}
