/**
*
* NavigationBar
*
*/

import React from 'react';
import { Layout, Menu, Divider } from 'antd';
import classNames from 'classnames';
import { Select } from './Select';
import './_navigationBar.scss';

import SettingsIcon from '../../assets/icons/settings.svg'

const { Header } = Layout;

const clsPrefix = 'cap-navbar';

class NavigationBar extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { primarySelectProps, secondarySelectProps, menuProps, userName, onSettingsClick } = this.props;
    return (
      <Layout className={classNames(`${clsPrefix}-layout`)}>
        <Header className={classNames(`${clsPrefix}-header`)}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", }}>
            <div style={{ display: "flex", flexGrow: '1' }}>
              {primarySelectProps && <Select
                showSearch
                showHeader
                {...primarySelectProps}
              />}
              {secondarySelectProps && <Divider type={"vertical"} className={classNames(`${clsPrefix}-divider`)} />}
              {secondarySelectProps &&
                <Select {...secondarySelectProps} />}
            </div>
            {menuProps.view === 'horizontal' &&
              <Menu
                mode="horizontal"
                defaultSelectedKeys={[menuProps.selectedItem]}
                style={{ lineHeight: '64px' }}
              >
                {
                  menuProps.items.map((item, index) =>
                    <Menu.Item
                      onClick={menuProps.onMenuItemClick ? () => { menuProps.onMenuItemClick(item) } : null}
                      key={item.key}>
                      {item.label}
                    </Menu.Item>
                  )
                }
              </Menu>
            }
            {
              userName &&
              <div className={classNames(`${clsPrefix}-user`)}>
                {userName[0]}
              </div>
            }
            {onSettingsClick &&
              <div className={classNames(`${clsPrefix}-setting`)}><img src={SettingsIcon} alt="" /></div>
            }
          </div>
        </Header>
      </Layout>
    );
  }
}

NavigationBar.propTypes = {

};

export default NavigationBar;
