import React, { Component, PropTypes } from 'react';

/**
 * Reusable Table component
 */
export default class Table extends Component {

  /**
   * propTypes
   * @property {Array} columns - object for set table structure
   * @property {String} columns.title - title for column and key for {@link Table#propTypes#data}
   * @property {Function} columns.formatter - function for format {@link Table#propTypes#data}
   * @property {Array} data array of object with {@link Table#propTypes#columns} keys
   */
  static propTypes = {
    data: PropTypes.array.isRequired,
    columns: React.PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        formatter: PropTypes.func
      })
    ).isRequired,
  };

  /**
   * constructor
   * @param {object} props
   */
  constructor(props) {
    super(props);
  }

  /**
   * render header method
   * @return {thead} head element markup
   */
  renderHeader() {
    const { columns = [] } = this.props;
    return (
      <thead>
      <tr>
        {columns.map(column => (<th key={column.title} >{column.title}</th>))}
      </tr>
      </thead>
    );
  }

  /**
   * render body method
   * @return {tbody} element markup
   */
  renderBody() {
    const { columns = [], data = [] } = this.props;
    return (
      <tbody>
      {
        data.map((row) => {
          return (
            <tr key={row.id} >
              {columns.map(column => {
                const key = `${column.title}-${row.id}`;
                const formatter = column.formatter || (o => o);
                const value = formatter(row[column.title]);
                return <td key={key} >{value}</td>
              })}
            </tr>
          );
        })
      }
      </tbody>
    );
  }

  /**
   * render method
   * @return {table} Table
   */
  render() {
    return (
      <div>
        <table>
          {this.renderHeader()}
          {this.renderBody()}
        </table>
      </div>
    );
  }
}
