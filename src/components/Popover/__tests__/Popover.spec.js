import React from 'react';
import PropTypes from 'prop-types';
import { mount } from 'enzyme';

import { default as Popover } from '../Popover';

describe('<Popover />', () => {
  let props = {};
  let mounted = null;

  const context = { assetBasePath: '/', cssPrefix: 'slds-' };
  const childContextTypes = { assetBasePath: PropTypes.string, cssPrefix: PropTypes.string };
  const options = { context, childContextTypes };

  beforeEach(() => {
    props = {
      open: true,
      header: 'Header content',
      body: 'Body content',
      footer: 'Footer content',
      onClose: () => {},
    };
    mounted = mount(<Popover {...props} />, options);
  });

  it('renders header content', () => {
    expect(mounted.find('header.slds-popover__header').text()).toEqual(props.header);
  });

  it('renders body content', () => {
    expect(mounted.find('div.slds-popover__body').text()).toEqual(props.body);
  });

  it('renders footer content', () => {
    expect(mounted.find('footer.slds-popover__footer').text()).toEqual(props.footer);
  });

  it('render close icon button', () => {
    const mockFunction = jest.fn();
    mounted.setProps({ closeable: true, onClose: mockFunction });
    expect(mounted.find('Flavored_Button').length).toBe(1);
  });

  it('render nubbin on the bottom left', () => {
    mounted.setProps({ nubbin: 'bottom-left' });
    const popover = mounted.find('section');
    expect(popover.hasClass('slds-nubbin--bottom-left')).toBeTruthy();
  });

  it('render error theme with inverted close button', () => {
    const mockFunction = jest.fn();
    mounted.setProps({ closeable: true, onClose: mockFunction, theme: 'error' });
    const popover = mounted.find('section');
    expect(popover.hasClass('slds-theme--error')).toBeTruthy();
    const button = mounted.find('Flavored_Button button');
    expect(button.hasClass('slds-button--icon-inverse')).toBeTruthy();
  });

  it('render custom warning layout', () => {
    const mockFunction = jest.fn();
    mounted.setProps({ closeable: true, onClose: mockFunction, customLayout: 'warning' });
    const header = mounted.find('header.slds-popover__header');
    expect(header.hasClass('slds-theme--warning')).toBeTruthy();
    const button = mounted.find('Flavored_Button button');
    expect(button.hasClass('slds-button--icon-inverse')).toBeFalsy();
  });

  it('hide popover', () => {
    mounted.setProps({ open: false });
    const popover = mounted.find('section');
    expect(popover.hasClass('slds-hide')).toBeTruthy();
  });

  it('calls the onClose function on click', () => {
    const mockFunction = jest.fn();
    mounted.setProps({ closeable: true, onClose: mockFunction });
    const button = mounted.find('Flavored_Button button');
    button.simulate('click');
    expect(mockFunction).toBeCalled();
  });

  it('applies className and rest-properties', () => {
    mounted.setProps({ className: 'foo', 'data-test': 'bar' });
    expect(mounted.find('section.slds-popover').hasClass('foo')).toBeTruthy();
    expect(mounted.find('section.slds-popover').prop('data-test')).toEqual('bar');
  });
});
