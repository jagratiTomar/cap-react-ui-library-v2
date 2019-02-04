import React, { Component } from 'react';

import CapButtonDoc from '../src/CapButtonDoc';
import NavigationBarDoc from '../src/NavigationBarDoc';
import CapSliderDoc from '../src/CapSliderDoc';
//imported for docs







class ComponentSwitcher extends Component {
  render() {
    switch (this.props.type) {
      case 'capButton':
        return <CapButtonDoc />;
      case 'navigationBar':
        return <NavigationBarDoc />;
      case 'capSlider':
        return <CapSliderDoc />;
      //components for docs






      default:
        return null;
    }
  }
}

export default ComponentSwitcher;
