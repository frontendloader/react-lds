import React from 'react';
import enhanceWithClickOutside from 'react-click-outside';
import omit from 'lodash.omit';

import { prefixClasses } from '../../utils';
import { Button, ButtonIcon } from '../../';

export class DropdownMenu extends React.Component {
  static contextTypes = { cssPrefix: React.PropTypes.string };

  static defaultProps = {
    isOpen: false,
    nubbin: false,
    position: 'top-left',
    size: 'small',
  };

  static propTypes = {
    /**
     * The button that triggers the dropdown menu
     * ```
     * {
     *    icon: 'settings',
     *    sprite: 'utility',
     *    title: 'Click me',
     *    noBorder: true,
     * }
     * ```
     */
    button: React.PropTypes.shape({
      icon: React.PropTypes.string.isRequired,
      sprite: React.PropTypes.string.isRequired,
      title: React.PropTypes.string,
      noBorder: React.PropTypes.bool,
      neutral: React.PropTypes.bool,
      brand: React.PropTypes.bool,
    }),
    /**
     * one DropdownMenuList or many of them
     */
    children: React.PropTypes.node.isRequired,
    /**
     * class name
     */
    className: React.PropTypes.string,
    /**
     * fully customizable dropdown trigger button, use this instead of the button
     * shape if needed
     */
    customButton: React.PropTypes.element,
    /**
     * adds disabled attribute to menu button
     */
    disabled: React.PropTypes.bool,
    /**
     * forces open or closed state, is needed when using a custom button
     */
    isOpen: React.PropTypes.bool,
    /**
     * indicates that this is the last element inside a button group and renders
     * the required css class
     */
    last: React.PropTypes.bool,
    /**
     * displays the nubbin at the correct position if true, hidden per default
     */
    nubbin: React.PropTypes.bool,
    /**
     * position relative to the menu button
     */
    position: React.PropTypes.oneOf(['top-left', 'top', 'top-right', 'bottom-left', 'bototm', 'bottom-right']),
    /**
     * length of the menu box
     */
    size: React.PropTypes.oneOf(['small', 'medium', 'large']),
  };

  constructor(props, { cssPrefix }) {
    super(props, { cssPrefix });

    this.state = { open: this.props.isOpen };

    this.prefix = (classes, passThrough) => prefixClasses(this.context.cssPrefix, classes, passThrough);
    this.toggle = this.toggle.bind(this);
    this.button = this.button.bind(this);
  }

  getClasses() {
    if (!this.props.isOpen && !this.state.open) {
      return this.classes;
    }

    return [...this.classes, 'is-open'];
  }

  button() {
    if (this.props.button) {
      const noBorder = this.props.button.noBorder;
      const title = this.props.button.title;
      return (
        <Button
          title={this.props.button.title}
          disabled={this.props.disabled}
          icon-border-filled={!noBorder && !title}
          icon-container={noBorder && !title}
          onClick={this.toggle}
          neutral={this.props.button.neutral}
          brand={this.props.button.brand}
          aria-haspopup="true"
        >
          <ButtonIcon
            sprite={this.props.button.sprite}
            icon={this.props.button.icon}
            position={title ? 'right' : undefined}
          />
        </Button>
      );
    }

    return this.props.customButton;
  }

  toggle() {
    this.setState({ open: !this.state.open });
  }

  handleClickOutside() {
    this.setState({ open: false });
  }

  render() {
    this.classes = [
      'dropdown-trigger',
      'dropdown-trigger--click',
      { 'button--last': this.props.last },
    ];

    this.dropdownClasses = [
      'dropdown',
      { [`dropdown--${this.props.size}`]: this.props.size },
      { 'dropdown--left': this.props.position.endsWith('left') },
      { 'dropdown--right': this.props.position.endsWith('right') },
      { 'dropdown--bottom': this.props.position.startsWith('bottom') },
      { [`nubbin--${this.props.position}`]: this.props.nubbin },
    ];

    const rest = omit(this.props, Object.keys(DropdownMenu.propTypes));

    return (
      <div className={this.prefix(this.getClasses())}>
        {this.button()}
        <div {...rest} className={this.prefix(this.dropdownClasses, this.props.className)}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default enhanceWithClickOutside(DropdownMenu);
