/**
*
* NavigationBar
*
*/

import React from 'react';
import { Layout, Menu, Divider } from 'antd';
import classNames from 'classnames';
import { OrganizationSelect } from './OrganizationSelect';
import './_navigationBar.scss';

const { Header } = Layout;

const clsPrefix = 'cap-navbar';

class NavigationBar extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { primarySelectProps, secondarySelectProps } = this.props;
    return (
      <Layout className={classNames(`${clsPrefix}-layout`)}>
        <Header className={classNames(`${clsPrefix}-header`)}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ display: "flex", flexGrow: '1' }}>
              {primarySelectProps && <OrganizationSelect
                showSearch
                showHeader
                {...primarySelectProps}
              />}
              {secondarySelectProps && <Divider type={"vertical"} className={classNames(`${clsPrefix}-divider`)} />}
              {secondarySelectProps &&
                <OrganizationSelect {...secondarySelectProps} />}
            </div>
            <Menu
              mode="horizontal"
              defaultSelectedKeys={['2']}
              style={{ lineHeight: '64px' }}
            >
              <Menu.Item key="1">nav 1</Menu.Item>
              <Menu.Item key="2">nav 2</Menu.Item>
              <Menu.Item key="3">nav 3</Menu.Item>
            </Menu>
          </div>
        </Header>
      </Layout>
    );
  }
}

NavigationBar.propTypes = {

};

export default NavigationBar;
