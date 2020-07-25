import React from 'react'
import { useSiteData } from 'react-static'
import { Link } from 'components/Router'

const SideNav = () => {
    const { siteTitle, tags } = useSiteData()
    return (
        <div id="sidenav-wrapper" className="sidenav-wrapper">
            <div className="meta">
                <img src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/00/00a0744f12795f97854319468a6bbfd05c6f8e91_full.jpg" alt="" />
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
