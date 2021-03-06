import React from 'react';
import PropTypes from 'prop-types';

import { getUniqueHash, prefixClasses } from '../../utils';
import { Button, ButtonIcon, IconSVG } from '../../';

const InputRaw = (props, { cssPrefix }) => {
  const {
    bare,
    className,
    disabled,
    error,
    errorIcon,
    iconLeft,
    iconRight,
    iconRightOnClick,
    id,
    onChange,
    onFocus,
    onKeyPress,
    placeholder,
    required,
    role,
    type,
    value,
    isFocused,
    ...rest,
  } = props;
  const prefix = (classes, passThrough) => prefixClasses(cssPrefix, classes, passThrough);

  const renderIconLeft = () => {
    let iconName = iconLeft;
    if (error && errorIcon) {
      iconName = 'warning';
    }

    if (iconName) {
      const iconClasses = [
        'input__icon',
        'icon-text-default',
        { 'input__icon--left': iconLeft && iconRight },
      ];

      return (
        <IconSVG
          className={prefix(iconClasses)}
          icon={iconName}
          sprite="utility"
        />
      );
    }

    return null;
  };

  const renderIconRight = () => {
    if (iconRight && iconRightOnClick) {
      const iconClasses = [
        'input__icon',
        { 'input__icon--right': iconLeft && iconRight },
      ];

      return (
        <Button
          className={prefix(iconClasses)}
          icon
          onClick={iconRightOnClick}
        >
          <ButtonIcon sprite="utility" icon={iconRight} />
        </Button>
      );
    }

    if (iconRight) {
      const iconClasses = [
        'input__icon',
        'icon-text-default',
        { 'input__icon--right': iconLeft && iconRight },
      ];

      return (
        <IconSVG
          className={prefix(iconClasses)}
          sprite="utility"
          icon={iconRight}
        />
      );
    }

    return null;
  };

  return (
    <span>
      {renderIconLeft()}
      {renderIconRight()}
      <input
        {...rest}
        className={prefix(bare ? 'input--bare' : 'input', className)}
        disabled={disabled}
        id={id}
        onChange={onChange}
        onFocus={onFocus}
        onKeyPress={onKeyPress}
        placeholder={placeholder}
        required={required}
        role={role}
        type={type}
        value={value}
        ref={(input) => { if (input && isFocused) { input.focus(); } }}
        aria-describedby={error ? getUniqueHash(error, id) : null}
      />
    </span>
  );
};

InputRaw.contextTypes = { cssPrefix: PropTypes.string };

InputRaw.propDefaults = {
  bare: false,
  type: 'text',
};

InputRaw.propTypes = {
  /**
   * renders a bare input
   */
  bare: PropTypes.bool,
  /**
   * class name
   */
  className: PropTypes.string,
  /**
   * adds disabled attribute to the input field
   */
  disabled: PropTypes.bool,
  /**
   * renders an error for the input
   */
  error: PropTypes.string,
  /**
   * renders an additional error icon if an error is set
   */
  errorIcon: PropTypes.bool,
  /**
   * icon rendered on the left side of the input (from utility sprite)
   */
  iconLeft: PropTypes.string,
  /**
   * icon rendered on the right side of the input (from utility sprite)
   */
  iconRight: PropTypes.string,
  /**
   * onClick handler for the right icon
   */
  iconRightOnClick: PropTypes.func,
  /**
   * id of the input field
   */
  id: PropTypes.string.isRequired,
  /**
   * focuses the input field
   */
  isFocused: PropTypes.bool,
  /**
   * label for the input
   */
  label: PropTypes.string,
  /**
   * onChange handler for input
   */
  onChange: PropTypes.func,
  /**
   * onFocus handler for input
   */
  onFocus: PropTypes.func,
  /**
   * onKeyPress handler
   */
  onKeyPress: PropTypes.func,
  /**
   * placeholder for the input
   */
  placeholder: PropTypes.string,
  /**
   * adds required attribute to input and label
   */
  required: PropTypes.bool,
  /**
   * role of the input field
   */
  role: PropTypes.string,
  /**
   * input type. all HTML5 types are allowed, defaults to "text"
   * text, password, datetime, datetime-local, date, month, time, week, number, email, url, search, tel, and color
   */
  type: PropTypes.string,
  /**
   * value of the input field
   */
  value: PropTypes.string,
};

export default InputRaw;
