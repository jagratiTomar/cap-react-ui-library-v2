import React, { Component } from 'react';
import CapButtonInfo from '../CapButtonDoc';


//imported for docs



class ComponentSwitcher extends Component {
  render() {
    switch (this.props.type) {
      case 'capButton':
        return <CapButtonInfo />;
      default:
        return null;
    }
  }
}

export default ComponentSwitcher;
