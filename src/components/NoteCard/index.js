import React from 'react'
import Moment from 'react-moment'
import { Link } from 'components/Router'
import Badge from '../Badge'

export default ({ title, date, tags, slug }) => {
    return (
        <div className="note">
            <small className="note-date"><Moment format="MMMM Do, YYYY">{date}</Moment></small>
            <Link to={`/note/${slug}`} className="note-title">
                <span>{title}</span>
            </Link>
            <div className="note-tags">
                {tags.map((t, i) => <Badge key={i} title={t} />)}
            </div>
        </div>
    )
}