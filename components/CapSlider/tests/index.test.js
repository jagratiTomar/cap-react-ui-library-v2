import CapSlider  from '../index';
import renderer from 'react-test-renderer';
import React from 'react'; // eslint-disable-line no-unused-vars

describe('<CapSlider />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<CapSlider />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

