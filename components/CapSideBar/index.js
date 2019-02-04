import React from 'react';
import PropTypes from 'prop-types';
import { Input, Icon, Collapse } from 'antd';
import classNames from 'classnames';

const { Panel } = Collapse;

const clsPrefix = 'cap-sidebar';

export default class CapSideBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
    };
  }

  handleSearch = (e) => {
    const { value } = e.target;
    this.setState({ searchText: value });
  }

  clearSearch = () => {
    this.setState({ searchText: '' });
  }

  getTreeNodes = (data) => {
    const { selectedMenuItem } = this.props;
    return data.map((item) => {
      const title = <span title={item.title}>{item.title}</span>;
      if (item.children) {
        return (
          <Panel header={title} key={item.key}>
            <Collapse
              defaultActiveKey={[selectedMenuItem]}
              className={classNames(`${clsPrefix}-accordian-submenu`)}
              bordered={false}
              accordion
              expandIcon={({ isActive }) => <Icon type="caret-right" rotate={isActive ? 90 : 0} />}
            >
              {this.getTreeNodes(item.children)}
            </Collapse>
          </Panel>
        );
      }
      return (
        <Panel
          disabled
          className={classNames(`${clsPrefix}-leaf-node`, { selected: selectedMenuItem === item.key })}
          key={item.key}
          header={<a href={item.link}>{title}</a>}
        />
      );
    });
  }

  render() {
    const { sidebarItems, defaultActiveKey } = this.props;
    const { searchText } = this.state;
    return (
      <div className={classNames(`${clsPrefix}`)}>
        <div className={classNames(`${clsPrefix}-search`)}>
          <Input
            placeholder="Search"
            onChange={this.handleSearch}
            value={searchText}
          />
          <Icon type="search" />
          <Icon onClick={this.clearSearch} type="close" />
        </div>
        <Collapse
          defaultActiveKey={defaultActiveKey}
          className={classNames(`${clsPrefix}-accordian`)}
          bordered={false}
          accordion
          expandIcon={({ isActive }) => <Icon type="caret-right" rotate={isActive ? 90 : 0} />}
        >
          {this.getTreeNodes(sidebarItems)}
        </Collapse>
      </div>
    );
  }
}

CapSideBar.propTypes = {
  sidebarItems: PropTypes.array,
  defaultActiveKey: PropTypes.string,
  selectedMenuItem: PropTypes.string,
};
