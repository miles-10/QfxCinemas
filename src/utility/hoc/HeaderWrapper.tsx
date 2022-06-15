import Header from '@components/Header'
import React from 'react'

const wrapper = (Component: any) => ({props}: any ) => (
    <>
    <Header />
    <Component {...props} />
    </>
)

export default wrapper;