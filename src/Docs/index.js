import React from 'react';
import { Menu, Layout } from 'antd';
// import {CapPageHeader} from '../../../src/index';
import ComponentSwitcher from '../../helpers/ComponentSwitcher';
const logo = require('../../assets/images/capillary_dark.png');
const { Content, Footer, Sider } = Layout;
const MenuItem = Menu.Item;

export class Docs extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      menuSelected: "navigationBar",
    };
    this.onMenuItemClick = this.onMenuItemClick.bind(this);
  }

  onMenuItemClick(e) {
    this.setState({ menuSelected: e.key });
  }

  render() {
    return (
      <Layout>
        <Sider
          style={{
            overflow: 'auto', height: '100vh', position: 'fixed', left: 0,
          }}>
          <div className="cap-logo-container">
            <img className="cap-logo" style={{ width: "180px", margin: "10px" }} src={logo} alt="Capillary Technologies" />
          </div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={[this.state.menuSelected]} onClick={this.onMenuItemClick}>
            <MenuItem key="capButton"><span className="nav-text">CapButton</span></MenuItem>
            <MenuItem key="navigationBar"><span>NavigationBar</span></MenuItem>
            {/*Menu items for components*/}


          </Menu>
        </Sider>
        <Layout style={{ marginLeft: 200 }}>
          <Content style={{ overflow: 'initial' }}>
            <div style={{ padding: 24, background: '#fff' }}>
              {/*<CapPageHeader pageHeading={this.state.menuSelected.toUpperCase()} />*/}
              <ComponentSwitcher type={this.state.menuSelected} />
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Capillary React UI Library | Created by
            {' '}
            <a href="mailto:ui-devs@capillarytech.com">UI Devs</a>
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

export default Docs;
