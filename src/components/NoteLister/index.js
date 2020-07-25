import React from 'react'
import NoteCard from "../NoteCard"
import { useSiteData, Head } from 'react-static'

export default ({ pageTitle, metaData }) => {
    const { siteTitle } = useSiteData()

    return (
        <>
            <Head>
                <title>{pageTitle} | {siteTitle}</title>
            </Head>
            <header>
                <h1>{pageTitle}</h1>
            </header>
            <div id="content" className="content">
                {metaData.map((note, i) => <NoteCard key={i} title={note.title} date={note.date} slug={note.slug} tags={note.tags} />)}
            </div>
        </>
    )
}

