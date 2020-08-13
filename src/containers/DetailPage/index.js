import React, { Component } from 'react'

export default class DetailPage extends Component {

    componentDidMount(){
        console.log(this.props)
    }

    render() {
        return (
            <div>
                Detail Page
            </div>
        )
    }
}
