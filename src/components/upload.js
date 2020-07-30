'use strict'

import React from 'react'

const Upload = () => (
    <div className="fileUpload">
        <h2>Faça o Upload de um Arquivo</h2>
        <input 
            type="file"
            className="uploadFile"
        />
    </div>
)

export default Upload