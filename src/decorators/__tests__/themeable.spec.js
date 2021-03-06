import React from 'react';
import { shallow } from 'enzyme';

import themeable from '../themeable';

describe('sizeable', () => {
  let mounted = null;

  const DummyComponent = () => (<div>it works</div>);

  beforeEach(() => {
    const Dummy = themeable(DummyComponent);
    mounted = shallow(<Dummy />);
  });

  it('renders a theme', () => {
    mounted.setProps({ theme: 'shade' });
    expect(mounted.hasClass('theme--shade')).toBeTruthy();
  });

  it('renders an alert texture', () => {
    mounted.setProps({ theme: 'shade texture' });
    expect(mounted.hasClass('theme--shade')).toBeTruthy();
    expect(mounted.hasClass('theme--alert-texture')).toBeTruthy();
  });

  it('keeps existing classes and adds themes', () => {
    mounted.setProps({ theme: 'shade', className: 'yolo' });
    expect(mounted.hasClass('theme--shade')).toBeTruthy();
    expect(mounted.hasClass('yolo')).toBeTruthy();
  });

  it('keeps existing classes', () => {
    mounted.setProps({ className: 'yolo' });
    expect(mounted.hasClass('yolo')).toBeTruthy();
  });
});
