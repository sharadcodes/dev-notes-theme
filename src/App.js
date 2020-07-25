import React from 'react'
import { Root, Routes } from 'react-static'
//
import { Router } from 'components/Router'

import './app.css'
import SideNav from './components/SideNav'

function App() {
    return (
        <Root>
            <main>
                <SideNav />
                <div class="content-wrapper">
                    <React.Suspense fallback={<em>Loading...</em>}>
                        <Router>
                            <Routes path="*" />
                        </Router>
                    </React.Suspense>
                </div>
            </main>
        </Root>
    )
}

export default App
