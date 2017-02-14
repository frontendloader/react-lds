import React from 'react';

import { DataTableAdvanced, DataTableColumn } from 'react-lds';


const ExampleAdvanced = () => (
  <DataTableAdvanced
    bordered
    fixed-layout
    data={[]}
    hasSelectableRows
    onSorting={() => {}}
  >
    <DataTableColumn
      dataKey="column1"
      isResizable={false}
      isSortable
      title="Column 1"
    />
    <DataTableColumn
      dataKey="column2"
      isResizable
      isSortable={false}
      title="Column 2"
    />
  </DataTableAdvanced>
);


export default ExampleAdvanced;
