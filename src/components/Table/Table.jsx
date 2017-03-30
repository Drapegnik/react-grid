import React, { Component, PropTypes } from 'react';

import Row from '../Row';

/**
 * Reusable Table component
 */
export default class Table extends Component {

  /**
   * propTypes
   * @property {Array} columns - object for set table structure
   * @property {String} columns.title - title for column and key for {@link Table#propTypes#data}
   * @property {Function} columns.formatter - function for format {@link Table#propTypes#data}
   * * by default will use {@external Object#toString()}
   * * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toString}
   * @property {Array} data array of object with {@link Table#propTypes#columns} keys
   */
  static propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    })).isRequired,
    columns: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        formatter: PropTypes.func,
      }),
    ).isRequired,
    activeDetailsId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  };

  static defaultProps = {
    activeDetailsId: -1,
  };

  constructor(props) {
    super(props);

    this.state = {
      activeDetailsId: this.props.activeDetailsId,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(id) {
    const nextId = this.state.activeDetailsId === `details-${id}` ? -1 : `details-${id}`;

    this.setState({
      activeDetailsId: nextId,
    });
  }

  /**
   * render header method
   * @return {thead} head element markup
   */
  renderHeader() {
    const { columns = [] } = this.props;
    return (
      <thead>
        <tr>{columns.map(column => (<th key={column.title} >{column.title}</th>))}</tr>
      </thead>
    );
  }


  /**
   * render body method
   * @return {tbody} element markup
   */
  renderBody() {
    const { columns = [], data = [] } = this.props;
    return (<tbody>{
      data.map((row) => {
        const show = (row.type !== 'details') || row.id === this.state.activeDetailsId;
        return (
          <Row
            onClick={this.handleClick}
            show={show} key={row.id}
            columns={columns}
            data={row}
          />
        );
      })
    }</tbody>);
  }

  /**
   * render 'no data' message
   * @return {p} element with message or null
   */
  renderNoData() {
    const { data } = this.props;
    if (data && data.length > 0) {
      return null;
    }

    return (<p>No data</p>);
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
        {this.renderNoData()}
      </div>
    );
  }
}
