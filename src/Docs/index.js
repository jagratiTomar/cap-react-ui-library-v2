import React from 'react';
import PropTypes from 'prop-types';
import {Menu, Layout} from 'antd';
// import {CapPageHeader} from '../../../src/index';
import ComponentSwitcher from '../ComponentSwitcher';
const logo = require('../../assets/images/capillary_dark.png');
const {Content, Footer, Sider} = Layout;
const MenuItem = Menu.Item;

export class Docs extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      menuSelected: "capButton",
    };
    this.onChange = this.onChange.bind(this);
    this.onMenuItemClick = this.onMenuItemClick.bind(this);
  }

  onChange(value) {
    alert(value);
    this.setState({value});
  }

  onMenuItemClick(e) {
    this.setState({menuSelected: e.key});
  }

  render() {
    return (
      <Layout>
        <Sider style={{overflow: 'auto', height: '100vh', position: 'fixed', left: 0}}>
          <div className="cap-logo-container">
            <img className="cap-logo" src={logo} alt="Capillary Technologies" />
          </div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={[this.state.menuSelected]} onClick={this.onMenuItemClick}>
            <MenuItem key="capButton"><span className="nav-text">CapButton</span></MenuItem>
            {/*<MenuItem key="capPageHeader"><span>CapPageHeader</span></MenuItem>*/}
            {/*<MenuItem key="capSlideBox"><span>CapSlideBox</span></MenuItem>*/}
            {/*<MenuItem key="capInput"><span>CapInput</span></MenuItem>*/}
            {/*<MenuItem key="capUserList"><span>CapUserList</span></MenuItem>*/}
            {/*<MenuItem key="cap404"><span>Cap404</span></MenuItem>*/}
            {/*<MenuItem key="cap403"><span>Cap403</span></MenuItem>*/}
            {/*<MenuItem key="capAccordian"><span>CapAccordian</span></MenuItem>*/}
            {/*<MenuItem key="capActionBar"><span>CapActionBar</span></MenuItem>                        */}
            {/*<MenuItem key="capAffix"><span>CapAffix</span></MenuItem>*/}
            {/*<MenuItem key="capAlert"><span>CapAlert</span></MenuItem>*/}
            {/*<MenuItem key="capAnchor"><span>CapAnchor</span></MenuItem>*/}
            {/*<MenuItem key="capAutoComplete"><span>CapAutoComplete</span></MenuItem>*/}
            {/*<MenuItem key="capAvatar"><span>CapAvatar</span></MenuItem>*/}
            {/*<MenuItem key="capBackTop"><span>CapBackTop</span></MenuItem>*/}
            {/*<MenuItem key="capBadge"><span>CapBadge</span></MenuItem>*/}
            {/*<MenuItem key="capBreadCrumb"><span>CapBreadCrumb</span></MenuItem>*/}
            {/*<MenuItem key="capCalendar"><span>CapCalendar</span></MenuItem>*/}
            {/*<MenuItem key="capCard"><span>CapCard</span></MenuItem>*/}
            {/*<MenuItem key="capCarousel"><span>CapCarousel</span></MenuItem>*/}
            {/*<MenuItem key="capCascader"><span>CapCascader</span></MenuItem>*/}
            {/*<MenuItem key="capCheckbox"><span>CapCheckbox</span></MenuItem>*/}
            {/*<MenuItem key="capChips"><span>CapChips</span></MenuItem>*/}
            {/*<MenuItem key="capCollapse"><span>CapCollapse</span></MenuItem>*/}
            {/*<MenuItem key="capColumn"><span>CapColumn</span></MenuItem>*/}
            {/*<MenuItem key="capConfirm"><span>CapConfirm</span></MenuItem>*/}
            {/*<MenuItem key="capCSVFileUploader"><span>CapCSVFileUploader</span></MenuItem>*/}
            {/*<MenuItem key="capDateFilter"><span>capDateFilter</span></MenuItem>             */}
            {/*<MenuItem key="capDatePicker"><span>CapDatePicker</span></MenuItem>*/}
            {/*<MenuItem key="capHierarchyComponent"><span>CapHierarchyComponent</span></MenuItem> */}
            {/*<MenuItem key="capHierarchyComponentNew"><span>CapHierarchyComponentNew</span></MenuItem>            */}
            {/*<MenuItem key="capDetailBox"><span>CapDetailBox</span></MenuItem>*/}
            {/*<MenuItem key="capDropdown"><span>CapDropdown</span></MenuItem>*/}
            {/*<MenuItem key="capElasticSearch"><span>CapElasticSearch</span></MenuItem>*/}
            {/*<MenuItem key="capForm"><span>CapForm</span></MenuItem>*/}
            {/*<MenuItem key="capFormItem"><span>CapFormItem</span></MenuItem>            */}
            {/*<MenuItem key="capGrid"><span>CapGrid</span></MenuItem>*/}
            {/*<MenuItem key="capHeading0"><span>CapHeading0</span></MenuItem>*/}
            {/*<MenuItem key="capHeading1"><span>CapHeading1</span></MenuItem>*/}
            {/*<MenuItem key="capHeading2"><span>CapHeading2</span></MenuItem>*/}
            {/*<MenuItem key="capHeading3"><span>CapHeading3</span></MenuItem>*/}
            {/*<MenuItem key="capHeading4"><span>CapHeading4</span></MenuItem>*/}
            {/*<MenuItem key="capHeading5"><span>CapHeading5</span></MenuItem>*/}
            {/*<MenuItem key=""><span>CapHeading5</span></MenuItem>            */}
            {/*<MenuItem key="capIcon"><span>CapIcon</span></MenuItem>*/}
            {/*<MenuItem key="capInputNumber"><span>CapInputNumber</span></MenuItem>*/}
            {/*<MenuItem key="capLayout"><span>CapLayout</span></MenuItem>*/}
            {/*<MenuItem key="capListLayout"><span>CapListLayout</span></MenuItem>*/}
            {/*<MenuItem key="capMessage"><span>CapMessage</span></MenuItem>*/}
            {/*<MenuItem key="capModal"><span>CapModal</span></MenuItem>*/}
            {/*<MenuItem key="capMultiSelect"><span>CapMultiSelect</span></MenuItem>*/}
            {/*<MenuItem key="capMultiSelectWithTree"><span>capMultiSelectWithTree</span></MenuItem>*/}
            {/*<MenuItem key="capNotification"><span>CapNotification</span></MenuItem>*/}
            {/*<MenuItem key="capPagination"><span>CapPagination</span></MenuItem>*/}
            {/*<MenuItem key="capPopover"><span>CapPopover</span></MenuItem>*/}
            {/*<MenuItem key="capProgress"><span>CapProgress</span></MenuItem>*/}
            {/*<MenuItem key="capRadio"><span>CapRadio</span></MenuItem>*/}
            {/*<MenuItem key="capRadioButton"><span>CapRadioButton</span></MenuItem>            */}
            {/*<MenuItem key="capRadioGroup"><span>CapRadioGroup</span></MenuItem>*/}
            {/*<MenuItem key="capRating"><span>CapRating</span></MenuItem>*/}
            {/*<MenuItem key="capRow"><span>CapRow</span></MenuItem>*/}
            {/*<MenuItem key="capSearchBar"><span>CapSearchBar</span></MenuItem>            */}
            {/*<MenuItem key="capSearchTree"><span>CapSearchTree</span></MenuItem>*/}
            {/*<MenuItem key="capSegmentedController"><span>CapSegmentedController</span></MenuItem>*/}
            {/*<MenuItem key="capSlider"><span>CapSlider</span></MenuItem>*/}
            {/*<MenuItem key="capSpinner"><span>CapSpinner</span></MenuItem>*/}
            {/*<MenuItem key="capSteps"><span>CapSteps</span></MenuItem>*/}
            {/*<MenuItem key="capSwitch"><span>CapSwitch</span></MenuItem>*/}
            {/*<MenuItem key="capTable"><span>CapTable</span></MenuItem>*/}
            {/*<MenuItem key="capTabs"><span>CapTabs</span></MenuItem>*/}
            {/*<MenuItem key="capTextArea"><span>CapTextArea</span></MenuItem>*/}
            {/*<MenuItem key="capTimeline"><span>CapTimeline</span></MenuItem>*/}
            {/*<MenuItem key="capTimePicker"><span>CapTimePicker</span></MenuItem>*/}
            {/*<MenuItem key="capTooltip"><span>CapTooltip</span></MenuItem>*/}
            {/*<MenuItem key="capTransfer"><span>CapTransfer</span></MenuItem>*/}
            {/*<MenuItem key="capTree"><span>CapTree</span></MenuItem>*/}
            {/*<MenuItem key="capTreeNode"><span>CapTreeNode</span></MenuItem>*/}
            {/*<MenuItem key="capTreeSelect"><span>CapTreeSelect</span></MenuItem>*/}
            {/*<MenuItem key="capUploader"><span>CapUploader</span></MenuItem>*/}
            {/*<MenuItem key="intouchLeftNav"><span>IntouchLeftNav</span></MenuItem>*/}
            {/*<MenuItem key="intouchTopBar"><span>IntouchTopBar</span></MenuItem>*/}
            {/*<MenuItem key="capBodyTextLarge"><span>CapBodyTextLarge</span></MenuItem>*/}
            {/*<MenuItem key="capSelect"><span>CapSelect</span></MenuItem>*/}
            {/*Menu items for components*/}



          </Menu>
        </Sider>
        <Layout style={{marginLeft: 200}}>
          <Content style={{overflow: 'initial'}}>
            <div style={{padding: 24, background: '#fff'}}>
              {/*<CapPageHeader pageHeading={this.state.menuSelected.toUpperCase()} />*/}
              <ComponentSwitcher type={this.state.menuSelected} />
            </div>
          </Content>
          <Footer style={{textAlign: 'center'}}>
            Capillary React UI Library | Created by <a href="mailto:ui-devs@capillarytech.com">UI Devs</a>
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

Docs.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default Docs;
