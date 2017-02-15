import React from 'react';

import { prefixClasses } from '../../utils';


const HeadCell = (props, { cssPrefix }) => {
  const {
    dataKey,
    isResizable,
    isSortable,
    onChangeSorting,
    sortBy,
    sortDirection,
    title,
  } = props;

  const prefix = (classes, passThrough) => prefixClasses(cssPrefix, classes, passThrough);

  const xlinkHref = (sortBy === dataKey && sortDirection === 'desc')
    ? '/assets/icons/utility-sprite/svg/symbols.svg#arrowup'
    : '/assets/icons/utility-sprite/svg/symbols.svg#arrowdown';

  const cxTh = prefix([
    'text-title--caps',
    {
      'is-resizable': isResizable,
      'is-sortable': isSortable,
    },
  ]);

  return (
    <th
      className={cxTh}
      key={dataKey}
      scope="col"
    >
      { !isSortable &&
        <div className={prefix('truncate')} title={title}>
          {title}
        </div>
      }

      { isSortable &&
        <a
          onClick={() => onChangeSorting(dataKey)}
          className={prefix(['th__action', 'text-link--reset'])}
          tabIndex="0"
        >
          <span className={prefix('assistive-text')}>Sort </span>
          <span className={prefix('truncate')} title={title}>
            {title}
          </span>
          <div className={prefix('icon_container')}>
            <svg
              aria-hidden="true"
              className={prefix(['icon', 'icon--x-small', 'icon-text-default', 'is-sortable__icon'])}
            >
              <use xlinkHref={xlinkHref} />
            </svg>
          </div>
          <span
            className={prefix('assistive-text')}
            aria-live="assertive"
            aria-atomic="true"
          />
        </a>
      }

      { isResizable &&
        <div className={prefix('resizable')}>
          <label htmlFor="cell-resize-handle-567" className={prefix('assistive-text')}>
            {title} column width
          </label>
          <input
            className={prefix(['resizable__input', 'assistive-text'])}
            id="cell-resize-handle-567"
            max="1000"
            min="20"
            tabIndex="0"
            type="range"
          />
          <span className={prefix('resizable__handle')}>
            <span className={prefix('resizable__divider')} />
          </span>
        </div>
      }
    </th>
  );
};


HeadCell.variations = [];

HeadCell.contextTypes = {
  cssPrefix: React.PropTypes.string,
};

HeadCell.propTypes = {
  /**
   * Optional cell renderer function
   */
  renderer: React.PropTypes.func,

  /**
   * Key name of the data object property being displayed in this here cell
   */
  dataKey: React.PropTypes.string.isRequired,

  /**
   * Display name of the cell
   */
  title: React.PropTypes.string.isRequired,

  sortBy: React.PropTypes.string,

  sortDirection: React.PropTypes.oneOf(['asc', 'desc']),

  /**
   * Callback triggered by clicking on a cell heading a sortable column.
   * Required when `props.isSortable` is `true`.
   */
  onChangeSorting: React.PropTypes.func,

  /**
   * Is this row resizable?
   */
  isResizable: React.PropTypes.bool,

  /**
   * Is this column sortable, i.e. should clicking it change the currently
   * displayed row order below?
   */
  isSortable: React.PropTypes.bool,
};


export default HeadCell;