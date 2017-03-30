import React, { PropTypes } from 'react';

/**
 * Reusable Row stateless component
 *
 * @param props component properties
 * @return {td} Table row
 */
const Row = (props) => {
  const { columns, data } = props;

  if (!data) {
    return null;
  }

  return (
    <tr hidden={data.hide} >
      {columns.map((column) => {
        const key = `${column.title}-${data.id}`;
        const formatter = column.formatter || (o => o.toString());

        let value = data[column.title];
        if (value && !data[`notFormat-${column.title}`]) {
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
 * @property {String} columns.title - title for column and key for {@link Table#propTypes#data}
 * @property {Function} columns.formatter - function for format {@link Table#propTypes#data}
 * * by default will use {@external Object#toString()}
 * * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toString}
 * @property {Object} data object with {@link Table#propTypes#columns} keys
 * @property {String} data.id unique key
 * @property {Boolean} data.hide flag to decide hide or show table row
 * @property {Boolean} data.notFormat-{columnTitle} - pass false, if don't need to format this data
 */
Row.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    hide: PropTypes.bool,
  }).isRequired,
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      formatter: PropTypes.func,
    }),
  ).isRequired,
};

export default Row;
