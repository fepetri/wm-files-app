'use strict'

import React from 'react'

const FileList = ({ files }) => (
    
    <div className="listFiles">
        <ul>
            {files.map((file, index) => (
                <li key={ index }>
                    <a href={ file.link }>{ file.name }<span>{ file.size }</span></a>
                </li>
            ))}
        </ul>
    </div>

)

export default FileList