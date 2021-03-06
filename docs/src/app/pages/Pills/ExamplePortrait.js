import React from 'react';
import { Pill, Avatar } from 'react-lds';

const Example = () => {
  const portrait = (<Avatar alt="Image" src="assets/images/avatar2.jpg" circle />);
  return (<Pill url="#" portrait={portrait} label="Pill Label" title="Full pill label verbiage mirrored here" />);
};

export default Example;
