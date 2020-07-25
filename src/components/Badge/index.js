import React from 'react'
import { Link } from 'components/Router'

export default ({ title }) => {
    return (
        <Link to={`/tags/${title}`}>{title}</Link>
    )
}
