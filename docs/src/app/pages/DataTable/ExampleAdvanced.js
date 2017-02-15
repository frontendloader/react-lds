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
    data={data}
    fixed-layout
    hasSelectableRows
    isActionable
    onAction={rowId => console.log('Action!', rowId)}
    onSelection={(...rest) => console.log('Selection!', rest)}
    onSorting={(...rest) => console.log('Sorting!', rest)}
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
      title="Column 2"
    />
    <DataTableColumn
      dataKey="col4"
      title="Column w/ custom renderer"
      isSortable
      renderer={(key, val) => (
        <span>
          <strong>{key}:</strong> {val}
        </span>
      )}
    />
  </DataTableAdvanced>
);


export default ExampleAdvanced;
