'use strict'

import React from 'react'
import Search from './search'
import Upload from './upload'
import FileList from './fileList'

const AppContent = ({ files }) => (
    <div className="app">
        <div className="container">
            <Search />
            <Upload />
            <FileList files={ files } />
        </div>

    </div>


)
export default AppContent