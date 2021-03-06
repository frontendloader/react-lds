import React from 'react';
import PropTypes from 'prop-types';

import { prefixClasses } from '../../utils';

const Breadcrumb = (props, { cssPrefix }) => {
  const { children, className, ...rest } = props;
  const prefix = (classes, passThrough) => prefixClasses(cssPrefix, classes, passThrough);
  let filtered = children;

  if (!Array.isArray(children)) {
    filtered = [children];
  }

  const olClasses = ['breadcrumb', 'list--horizontal'];
  const liClasses = ['breadcrumb__item', 'text-title--caps'];

  const wrapItems =
    filtered.map(child => <li className={prefix(liClasses)} key={child.key}>{child}</li>);

  return (
    <nav {...rest} className={className} role="navigation" aria-label="Breadcrumbs">
      <ol className={prefix(olClasses)}>
        {wrapItems}
      </ol>
    </nav>);
};

Breadcrumb.contextTypes = { cssPrefix: PropTypes.string };

Breadcrumb.propTypes = {
  /**
   * One or many children, that automatically get wrapped into the surrounding
   * `<ol><li></li></ol>` structure of the breadcrumb. Don't forget to add
   * unique keys since react requires this to render more efficiently.
   */
  children: PropTypes.node.isRequired,
  /**
   * class name
   */
  className: PropTypes.string,
};

export default Breadcrumb;
