import React from 'react';

import SelectionScreens from '@screens/SelectionScreen/SelectionScreens';
import ScreenWrapper from '@utility/hoc/ScreenWrapper';

const SelectionWrapper = (props: any) => {
  return (
    <>
      <ScreenWrapper>
        <SelectionScreens title={props.route.title} data={props.route.params} />
      </ScreenWrapper>
    </>
  );
};

export default SelectionWrapper;
