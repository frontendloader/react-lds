import React from 'react';
import PropTypes from 'prop-types';

import { prefixClasses } from '../../utils';

const NavigationListElement = ({ children, active, ...rest }, { cssPrefix }) => {
  const prefix = (classes, passThrough) => prefixClasses(cssPrefix, classes, passThrough);
  const activeClass = active ? prefix('is-active') : undefined;
  const childClasses = prefix(['navigation-list--vertical__action', 'text-link--reset']);

  return (
    <li className={activeClass}>
      {React.cloneElement(children, { className: childClasses, ...rest })}
    </li>
  );
};

NavigationListElement.contextTypes = { cssPrefix: PropTypes.string };

NavigationListElement.propTypes = {
  /**
   * typically an a tag
   */
  children: PropTypes.node.isRequired,
  /**
   * renders navigation element as active
   */
  active: PropTypes.bool,
  /**
   * aria describedby, set by NavigationList into props
   */
  'aria-describedby': PropTypes.string,
};

export default NavigationListElement;
