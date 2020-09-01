import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import TabExample from './Tabs'

class index extends Component {
    render() {
        return (
            <div>
                <TabExample />
            </div>
        )
    }
}
export default withRouter(index)

