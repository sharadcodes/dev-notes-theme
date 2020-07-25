import React from 'react'
import { useRouteData, useSiteData, Head } from 'react-static'
import Moment from 'react-moment'
import Markdown from 'react-markdown'
import { Link } from 'components/Router'

export default () => {
    const { note } = useRouteData()
    const { siteTitle } = useSiteData()

    return (
        <>
            <Head>
                <title>{note.data.title} | {siteTitle}</title>
            </Head>
            <header>
                <h1>
                    {note.data.title}
                </h1>
            </header>
            <div class="meta">
                <div class="note-date">
                    <Moment format="MMMM Do, YYYY">{note.data.date}</Moment>
                </div>
                <div class="note-tags">
                    {note.data.tags.map((t, i) => (
                        <Link key={i} to={`/tags/${t}`}>{t}</Link>)
                    )}
                </div>
            </div>
            <div id="content" class="content">
                <div class="note-content">
                    <Markdown source={note.content} escapeHtml={false} />
                </div>
            </div>
        </>
    )
}
