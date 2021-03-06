import React from 'react';
import PropTypes from 'prop-types';
import { shallow } from 'enzyme';

import { ModalFooter } from '../ModalFooter';

describe('<ModalFooter />', () => {
  let mounted = null;
  const child = (<div className="foo">bar</div>);

  const context = { cssPrefix: 'slds-' };
  const childContextTypes = { cssPrefix: PropTypes.string };
  const options = { context, childContextTypes };

  beforeEach(() => {
    mounted = shallow(<ModalFooter>{child}</ModalFooter>, options);
  });

  it('renders the correct markup', () => {
    expect(mounted.find('.slds-modal__footer').length).toBe(1);
  });

  it('renders children', () => {
    expect(mounted.contains(child)).toBeTruthy();
  });

  it('applies the default theme', () => {
    mounted.setProps({ defaultTheme: true });
    expect(mounted.find('.slds-theme--default')).toBeTruthy();
  });

  it('applies className and rest-properties', () => {
    mounted.setProps({ className: 'foo', 'data-test': 'bar' });
    expect(mounted.find('.slds-modal__footer').hasClass('foo')).toBeTruthy();
    expect(mounted.find('.slds-modal__footer').prop('data-test')).toEqual('bar');
  });
});
