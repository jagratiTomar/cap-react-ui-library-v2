import React, { Component } from 'react';
import { Table } from 'antd';

function TableHOC(columns, defaultTitle) {
  return class extends Component {
    render() {
      const title = () => <strong>{this.props.title || defaultTitle}</strong>;
      const state = {
        pagination: false,
        title,
        dataSource: this.props.data,
        columns,
        style: { marginTop: 30 },
      };
      return (
        <Table {...state} />
      );
    }
  };
}

export {
  TableHOC,
};
