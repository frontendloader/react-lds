import React from 'react';

import { Table, Row, Cell } from 'react-lds';

const ExampleAdvanced = () =>
  <Table bordered fixed-layout>
    <thead>
      <Row head>
        <Cell scope="col" truncate is-resizable is-sortable>Opportunity Name</Cell>
        <Cell scope="col" truncate is-resizable is-sortable sortDirection="desc">Account Name</Cell>
        <Cell scope="col" truncate is-resizable is-sortable>Close Date</Cell>
        <Cell scope="col" truncate is-resizable is-sortable sortDirection="desc">Stage</Cell>
        <Cell scope="col" truncate is-resizable is-sortable>Confidence</Cell>
        <Cell scope="col" truncate is-resizable is-sortable sortDirection="desc">Amount</Cell>
        <Cell scope="col" truncate is-resizable is-sortable>Contact</Cell>
      </Row>
    </thead>
    <tbody>
      <Row>
        <Cell truncate dataLabel="Opportunity Name" scope="row"><a href="#">Cloudhub</a></Cell>
        <Cell truncate dataLabel="Account Name">Cloudhub</Cell>
        <Cell truncate dataLabel="Close Date">4/14/2015</Cell>
        <Cell truncate dataLabel="Stage">Prospecting</Cell>
        <Cell truncate dataLabel="Confidence">20%</Cell>
        <Cell truncate dataLabel="Amount">$25k</Cell>
        <Cell truncate dataLabel="Contact">jrogers@cloudhub.com</Cell>
      </Row>
      <Row>
        <Cell truncate dataLabel="Opportunity Name" scope="row"><a href="#">Cloudhub + Anypoint Connectors</a></Cell>
        <Cell truncate dataLabel="Account Name">Cloudhub</Cell>
        <Cell truncate dataLabel="Close Date">4/14/2015</Cell>
        <Cell truncate dataLabel="Stage">Prospecting</Cell>
        <Cell truncate dataLabel="Confidence">20%</Cell>
        <Cell truncate dataLabel="Amount">$25k</Cell>
        <Cell truncate dataLabel="Contact">jrogers@cloudhub.com</Cell>
      </Row>
    </tbody>
  </Table>;

export default ExampleAdvanced;