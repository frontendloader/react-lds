import React from 'react';
import PropTypes from 'prop-types';

import { flavorable } from '../../decorators';
import { prefixClasses } from '../../utils';

export const ModalFooter = (props, { cssPrefix }) => {
  const { children, className, defaultTheme, ...rest } = props;
  const prefix = (classes, passThrough) => prefixClasses(cssPrefix, classes, passThrough);

  const sldsClasses = [
    'modal__footer',
    { 'theme--default': !!defaultTheme },
  ];

  return (
    <div {...rest} className={prefix(sldsClasses, className)}>{children}</div>
  );
};

ModalFooter.flavors = [
  'directional',
];

ModalFooter.contextTypes = { cssPrefix: PropTypes.string };

ModalFooter.propTypes = {
  /**
   * modal footer content
   */
  children: PropTypes.node.isRequired,
  /**
   * class name
   */
  className: PropTypes.string,
  /**
   * renders the footer with `theme--default`
   */
  defaultTheme: PropTypes.bool,
};

export default flavorable(ModalFooter, 'modal__footer');
