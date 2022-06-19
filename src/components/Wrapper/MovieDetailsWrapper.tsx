import React from 'react';

import DetailScreen from '@screens/ShowDetails/MovieScreen';
import ScreenWrapper from '@utility/hoc/ScreenWrapper';

const DetailWrapper = (props: any) => {
  return (
    <>
      <ScreenWrapper>
        <DetailScreen data={props.route.params} />
      </ScreenWrapper>
    </>
  );
};

export default DetailWrapper;
