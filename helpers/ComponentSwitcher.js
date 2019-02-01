import React, { Component } from 'react';

import CapButtonDoc from '../src/CapButtonDoc';
import NavigationBarDoc from '../src/NavigationBarDoc';
//imported for docs






class ComponentSwitcher extends Component {
  render() {
    switch (this.props.type) {
      case 'capButton':
        return <CapButtonDoc />;
      case 'navigationBar':
        return <NavigationBarDoc />;
      //components for docs





      default:
        return null;
    }
  }
}

export default ComponentSwitcher;
