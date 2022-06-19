import ScreenHeader from '@components/CustomHeader/ScreenHeader';
import React from 'react';

const wrapper = ({children}: any) => (
  <>
    <ScreenHeader />
    {children}
  </>
);

export default wrapper;
