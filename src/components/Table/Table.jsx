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
    activeDetailsIds: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
  };

  static defaultProps = {
    activeDetailsIds: [],
  };

  constructor(props) {
    super(props);

    this.state = {
      activeDetailsIds: this.props.activeDetailsIds,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick({ target }) {
    const id = target.parentElement.getAttribute('id');
    const nextId = `details-${id}`;

    this.setState((prevState) => {
      let newIds = [];
      if (prevState.activeDetailsIds.includes(nextId)) {
        newIds = prevState.activeDetailsIds.filter(activeId => activeId !== nextId);
      } else {
        newIds = prevState.activeDetailsIds.concat(nextId);
      }

      return { activeDetailsIds: newIds };
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
        <tr>
          <th>#</th>
          {columns.map(column => (<th key={column.title} >{column.title}</th>))}</tr>
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
        const show = (row.type !== 'details') || this.state.activeDetailsIds.includes(row.id);
        return (
          <Row
            onClick={this.handleClick}
            show={show} key={row.id}
            columns={columns}
            data={row}
            className={row.type || 'data'}
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
        <table className="table table-striped table-bordered" >
          {this.renderHeader()}
          {this.renderBody()}
        </table>
        {this.renderNoData()}
      </div>
    );
  }
}
