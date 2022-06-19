import Header from '@components/CustomHeader/Header';
import React from 'react';

const wrapper =
  (Component: any) =>
  ({props}: any) =>
    (
      <>
        <Header />
        <Component {...props} />
      </>
    );

export default wrapper;
