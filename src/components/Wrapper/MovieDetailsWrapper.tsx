import React, {useMemo} from 'react';

import DetailScreen from '@screens/ShowDetails/MovieScreen';
import ScreenWrapper from '@utility/hoc/ScreenWrapper';

const DetailWrapper = () => {
    const DetailHeader =useMemo(() => {
        return ScreenWrapper(DetailScreen)
      }, []) 
    return(
        <>
        <DetailHeader />
        </>
    )
}

export default DetailWrapper;