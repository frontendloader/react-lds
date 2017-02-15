import React from 'react';

import { DataTableAdvanced, DataTableColumn } from 'react-lds';


const data = [
  {
    id: 1,
    col1: 'bork',
    col2: 'hello',
    col3: 123,
    col4: 'pjqe e129 osfnoejfo oief oiwe',
    moo: true,
  },
  {
    id: 2,
    col1: 'herp derp',
    col2: 'hej hej',
    col3: 246,
    col4: 'osfnoejfo oief oiwe',
    moo: false,
  },
];

const ExampleAdvanced = () => (
  <DataTableAdvanced
    bordered
    fixed-layout
    data={data}
    hasSelectableRows
    onSorting={(...rest) => console.log(rest)}
  >
    <DataTableColumn
      dataKey="col1"
      isResizable={false}
      isSortable
      title="Column 1"
    />
    <DataTableColumn
      dataKey="col2"
      isResizable
      isSortable={false}
      title="Column 2"
    />
    <DataTableColumn
      dataKey="col4"
      title="Column 4"
    />
  </DataTableAdvanced>
);


export default ExampleAdvanced;
