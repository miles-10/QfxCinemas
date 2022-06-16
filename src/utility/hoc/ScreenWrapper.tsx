import ScreenHeader from '@components/CustomHeader/ScreenHeader'
import React from 'react'

const wrapper = (Component: any) => ({props}: any ) => (
    <>
    <ScreenHeader />
    <Component {...props} />
    </>
)

export default wrapper;