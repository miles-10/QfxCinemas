import React, {useMemo} from 'react';

import SupportScreen from '@screens/DrawerScreens/Support';
import HeaderWrapper from '@utility/hoc/HeaderWrapper';

const SupportWrapper = () => {
    const SupportHeader =useMemo(() => {
        return HeaderWrapper(SupportScreen)
      }, []) 
    return(
        <>
        <SupportHeader />
        </>
    )
}

export default SupportWrapper;