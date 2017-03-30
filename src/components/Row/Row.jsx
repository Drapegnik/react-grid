import React, { PropTypes } from 'react';

/**
 * Reusable Row stateless c
 * omponent
 *
 * @param props component properties
 * @return {td} Table row
 */
const Row = (props) => {
  const { columns, data} = props;

  if (!data) {
    return null;
  }

  return (
    <tr>
      {columns.map((column) => {
        const key = `${column.title}-${data.id}`;
        const formatter = column.formatter || (o => o.toString());
        const value = formatter(data[column.title]);

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
 */
Row.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  }).isRequired,
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      formatter: PropTypes.func,
    }),
  ).isRequired,
};

export default Row;
