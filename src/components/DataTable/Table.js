import React from 'react';
import PropTypes from 'prop-types';

import { flavorable, variationable } from '../../decorators';
import { prefixClasses } from '../../utils';

export const Table = (props, { cssPrefix }) => {
  const { children, className, ...rest } = props;
  const prefix = (classes, passThrough) => prefixClasses(cssPrefix, classes, passThrough);

  return (<table {...rest} className={prefix(['table', 'table--cell-buffer'], className)}>{children}</table>);
};

Table.flavors = [
  'bordered',
  'col-bordered',
  'striped',
  'fixed-layout',
];

Table.variations = [
  'no-row-hover',
  'max-medium-table--stacked',
  'max-medium-table--stacked-horizontal',
];

Table.contextTypes = { cssPrefix: PropTypes.string };

Table.propTypes = {
  /**
   * table content
   */
  children: PropTypes.node,
  /**
   * class name
   */
  className: PropTypes.string,
};

export default variationable(
  flavorable(Table, 'table')
);
