import React , { Component }from 'react'
import { withRouter } from 'react-router-dom'


class index extends Component{
    render(){
    return(
        <div className="page subpage" id="hottopic">
            我是热门话题
            <button>回去</button>
        </div>
    )
}
}
export default withRouter(index)
