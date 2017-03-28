import React from 'react';
import { mount } from 'enzyme';

import Table from './Table';

describe('Render Table without data', () => {
  const tableData = {
    columns: [],
    data: [],
  };

  const wrapper = mount(<Table {...tableData} />);
  it('Should be rendered an empty without columns and data', () => {
    expect(wrapper.find('table').length).toEqual(1);
    expect(wrapper.find('tbody tr').length).toEqual(0);
    expect(wrapper.find('thead tr td').length).toEqual(0);
  });

  it('Should be rendered no data message', () => {
    const noData = <p>No data</p>;
    expect(wrapper.contains(noData)).toEqual(true);
  });

  const tableData2 = {
    columns: [{ title: 'first' }, { title: 'second' }, { title: 'third' }],
    data: [],
  };
  it('Should be rendered head with 2 columns', () => {
    const wrapper2 = mount(<Table {...tableData2} />);
    expect(wrapper2.find('table').length).toEqual(1);
    expect(wrapper2.find('tbody tr').length).toEqual(0);
    expect(wrapper2.find('thead tr td').length).toEqual(3);
  });
});

describe('Render Table wit data', () => {
  const tableData = {
    columns: [{ title: 'first' }, { title: 'second' }, { title: 'third' }],
    data: [
      {
        id: 101,
        first: 1,
        second: 2,
        third: 3,
      },
      {
        id: 102,
        first: 4,
        second: 5,
        third: 6,
      },
      {
        id: 103,
        first: 5,
        second: 6,
        third: 7,
      },
      {
        id: 104,
        first: 8,
        second: 9,
        third: 10,
      },
    ],
  };

  const wrapper = mount(<Table {...tableData} />);

  it('Shouldn\'t be rendered no data message', () => {
    const noData = <p>No data</p>;
    expect(wrapper.contains(noData)).toEqual(false);
  });

  it('Should be rendered with 3 columns and 3 rows', () => {
    expect(wrapper.find('table').length).toEqual(1);
    expect(wrapper.find('tbody tr').length).toEqual(4);
    expect(wrapper.find('thead tr td').length).toEqual(3);
  });
});
