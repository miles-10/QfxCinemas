import React from 'react';

import ProfileWraper from '@screens/DrawerScreens/MyProfile';
import ScreenWrapper from '@utility/hoc/ScreenWrapper';

const DetailWrapper = (props: any) => {
    return(
        <>
        <ScreenWrapper>
            <ProfileWraper title={props.route.params} />
        </ScreenWrapper>
        </>
    )
}

export default DetailWrapper;