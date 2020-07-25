import React from 'react'
import { useSiteData } from 'react-static'
import { Link } from 'components/Router'

const SideNav = () => {
    const { siteTitle, tags, userImageUrl } = useSiteData()
    return (
        <div id="sidenav-wrapper" className="sidenav-wrapper">
            <div className="meta">
                { userImageUrl != "" && <img src={userImageUrl} alt="" />}
                <h6>{siteTitle}</h6>
            </div>
            <Link to="/" className="nav-item">All Notes</Link>
            <small>TAGS</small>
            <div className="sidenav">
                {tags.map((t, i) => (
                    <Link className="nav-item" key={i} to={`/tags/${t}`}>{t}</Link>
                ))}
            </div>
        </div>
    )
}

export default SideNav
