import React, { PropTypes } from 'react';

import './Row.css';

/**
 * Reusable Row stateless component
 *
 * @param props component properties
 * @return {td} Table row
 */
const Row = (props) => {
  const { columns, data, show, onClick, className } = props;

  if (!data || !show) {
    return null;
  }

  return (
    // eslint-disable-next-line react/jsx-no-bind, jsx-a11y/no-static-element-interactions
    <tr className={className} onClick={onClick.bind(null, data.id)} >
      <th scope="row" >{data.type !== 'details' ? data.id : ''}</th>
      {columns.map((column) => {
        const key = `${column.name}-${data.id}`;
        const formatter = column.formatter || (o => o.toString());

        let value = data[column.name];
        if (value && !data[`notFormat-${column.name}`]) {
          value = formatter(value);
        }

        return (<td key={key} >{value}</td>);
      })}
    </tr>
  );
};

/**
 * propTypes
 * @property {Array} columns - object for set table structure
 * @property {String} columns.name - key for {@link Table#propTypes#data}
 * @property {Function} columns.formatter - function for format {@link Table#propTypes#data}
 * * by default will use {@external Object#toString()}
 * * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toString}
 * @property {Object} data object with {@link Table#propTypes#columns} keys
 * @property {String} data.id unique key
 * @property {Boolean} data.notFormat-{columnName} - pass false, if don't need to format this data
 * @property {Boolean} show flag to decide hide or show table row
 */
Row.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    hide: PropTypes.bool,
  }).isRequired,
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      formatter: PropTypes.func,
    }),
  ).isRequired,
  show: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
};

Row.defaultProps = {
  show: true,
  className: '',
};

export default Row;
