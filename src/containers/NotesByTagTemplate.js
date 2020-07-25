import React from 'react'
import { useRouteData } from 'react-static'
//
import NoteLister from '../components/NoteLister'

export default () => {
    const data = useRouteData()
    return <NoteLister {...data} />
}