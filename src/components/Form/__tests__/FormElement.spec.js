import React from 'react';
import PropTypes from 'prop-types';
import { shallow } from 'enzyme';

import FormElement from '../FormElement';

describe('<FormElement />', () => {
  let mounted = null;
  const child = <div className="foo" />;

  const context = { cssPrefix: 'slds-' };
  const childContextTypes = { cssPrefix: PropTypes.string };
  const options = { context, childContextTypes };

  beforeEach(() => {
    mounted = shallow(<FormElement>{child}</FormElement>, options);
  });

  it('renders the correct markup', () => {
    expect(mounted.find('.slds-form-element').contains(child)).toBeTruthy();
  });

  it('renders errors', () => {
    mounted.setProps({ error: 'string' });
    expect(mounted.find('.slds-form-element').hasClass('slds-has-error')).toBeTruthy();
  });

  it('renders required', () => {
    mounted.setProps({ required: true });
    expect(mounted.find('.slds-form-element').hasClass('slds-is-required')).toBeTruthy();
  });

  it('renders as a fieldset', () => {
    expect(mounted.find('div.slds-form-element').length).toBe(1);
    mounted.setProps({ fieldset: true });
    expect(mounted.find('fieldset.slds-form-element').length).toBe(1);
  });

  it('applies className and rest-properties', () => {
    mounted.setProps({ className: 'foo', 'data-test': 'bar' });
    expect(mounted.find('.slds-form-element').hasClass('foo')).toBeTruthy();
    expect(mounted.find('.slds-form-element').prop('data-test')).toEqual('bar');
  });
});
