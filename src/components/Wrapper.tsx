import React, { useMemo } from 'react';
import TopTabNavigator from '@navigators/navigatorTypes/TopTabNavigator'
import HeaderWrapper from '@utility/hoc/HeaderWrapper';
const HomeWrapper = () => {

    const HomeHeader =useMemo(() => {
      return HeaderWrapper(TopTabNavigator)
    }, []) 
    return(
        
        <>
        <HomeHeader />
        </>
    )
}

export default HomeWrapper;