'use strict'

import React, { Component } from 'react'
import AppContent from './components/app-content'
import axios from 'axios'
axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded'

class App extends Component {
    constructor () {
        super()
        this.state = {
            files: [{
                name: 'teste',
                link: '#',
                size: '000kb'
            }],
            checked: false,
            showContent: false
        }
    }

    getFiles() {
        return axios.get('http://localhost:7000')
        .then((res) => {
            console.log('teste', res);
        }) 
    }

    render () {
        return (
            <AppContent
                files= {this.state.files}
                getFiles= {this.getFiles()}
             />
            
        )
    }
}

export default App