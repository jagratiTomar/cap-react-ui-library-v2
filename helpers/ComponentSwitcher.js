import React, { Component } from 'react';
import PropTypes from 'prop-types';

import CapButtonDoc from '../src/CapButtonDoc';
import NavigationBarDoc from '../src/NavigationBarDoc';
//imported for docs


class ComponentSwitcher extends Component {
  render() {
    const { type } = this.props;
    switch (type) {
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

ComponentSwitcher.propTypes = {
  type: PropTypes.string,
};

export default ComponentSwitcher;
