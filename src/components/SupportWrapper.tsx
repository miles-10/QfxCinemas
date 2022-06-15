import React, {useMemo} from 'react';
import TopTabNavigator from '@navigators/navigatorTypes/TopTabNavigator'
import LocationsScreen from '@screens/DrawerScreens/Locations';
import SupportScreen from '@screens/DrawerScreens/Support';
import HeaderWrapper from '@utility/hoc/HeaderWrapper';

const SupportWrapper = () => {
    const SupportHeader =useMemo(() => {
        return HeaderWrapper(TopTabNavigator)
      }, []) 
    return(
        <>
        <SupportHeader />
        </>
    )
}

export default SupportWrapper;