import React, {useMemo} from 'react';
import LocationsScreen from '@screens/DrawerScreens/Locations';
import HeaderWrapper from '@utility/hoc/HeaderWrapper';

const LocationWrapper = () => {
    const LocationHeader =useMemo(() => {
        return HeaderWrapper(LocationsScreen)
      }, []) 
    return(
        <>
        <LocationHeader />
        </>
    )
}

export default LocationWrapper;