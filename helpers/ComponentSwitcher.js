import React, { Component } from 'react';

import CapButtonInfo from '../CapButtonInfo/CapButtonInfo';
import CapTestInfo from '../CapTestInfo/CapTestInfo';
//imported for docs





class ComponentSwitcher extends Component {
  render() {
    switch (this.props.type) {
      case 'capButton':
        return <CapButtonInfo />;
      case 'capTest':
        return <CapTestInfo />;
      //components for docs




      default:
        return null;
    }
  }
}

export default ComponentSwitcher;
