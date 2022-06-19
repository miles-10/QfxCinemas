import React, {useMemo} from 'react';

import SupportScreen from '@screens/DrawerScreens/Support';
import ScreenWrapper from '@utility/hoc/ScreenWrapper';

const SupportWrapper = (props: any) => {
   return(
    <>
    <ScreenWrapper>
        <SupportScreen title={props.route.params} />
    </ScreenWrapper>
    </>
   )
}

export default SupportWrapper;