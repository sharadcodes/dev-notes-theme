import React from 'react'
import { useRouteData } from 'react-static'
import { Link } from 'components/Router'

export default () => {
    const { tags } = useRouteData()
    return (
        tags.map((t, i) => {
            <Link key={i} to={`/tags/${t}`}>{t}</Link>
        })
    )
}
