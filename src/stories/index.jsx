import React from 'react';
import { storiesOf, linkTo } from '@kadira/storybook';
import Table from '../components/Table';
import Welcome from './Welcome';


storiesOf('Welcome', module)
  .add('to Storybook', () => (
    <Welcome showApp={linkTo('Table')} />
  ));

const tableNoDataAndCols = {
  columns: [],
  data: [],
};

const tableNoData = {
  columns: [{ name: 'col1' }, { name: 'col2' }, { name: 'col3' }],
  data: [],
};

const tableWithData = {
  columns: [{ name: 'first' }, { name: 'second' }, { name: 'third' }],
  data: [
    {
      id: 101,
      first: 1,
      second: 2,
      third: 3,
    }, {
      id: 102,
      first: 4,
      second: 5,
      third: 6,
    }, {
      id: 103,
      first: 5,
      second: 6,
      third: 7,
    },
  ],
};

const tableWithFormatters = {
  columns: [
    {
      name: 'first',
      title: 'first (ms)',
      formatter: x => `${x}ms`,
    }, {
      name: 'second',
      title: 'second ($)',
      formatter: x => `$${x}`,
    }, {
      name: 'third',
      title: 'third (UPPER CASE)',
      formatter: x => x.toUpperCase(),
    },
  ],
  data: [
    {
      id: 101,
      first: 1,
      second: 2,
      third: 'lower',
    }, {
      id: 102,
      first: 4,
      second: 5,
      third: 'toUpperCase',
    }, {
      id: 103,
      first: 5,
      second: 6,
      third: 'grow me up',
    },
  ],
};

storiesOf('Table', module)
  .add('without data and cols', () => (<Table {...tableNoDataAndCols} />))
  .add('without data', () => (<Table {...tableNoData} />))
  .add('with data', () => (<Table {...tableWithData} />))
  .add('with formatters', () => (<Table {...tableWithFormatters} />));
