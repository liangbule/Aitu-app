import React from 'react'
//import { Card, WhiteSpace } from 'antd-mobile';
import CardCSS from './Cards.module.scss'
import {Link} from 'react-router-dom'

const Cards = (props)=>(
     console.log(props),
  <div className={CardCSS.cards}>
       <Link to='/user'><div className={CardCSS.photos}>
       <img src="https://s1.ax1x.com/2020/08/28/dIrUa9.png" alt="dIrUa9.png" border="0" />
       </div>  
       </Link>
       <div className={CardCSS.All}>
       <b className={CardCSS.H3}>安南秀</b>
       <br/>
       <span className={CardCSS.Span}>你得丢开以往的事，才能不断继续前进</span>
       </div>
       <div className={CardCSS.Allimg}>
       <img src="https://s1.ax1x.com/2020/08/25/dccUAK.png" alt="dccUAK.png" border="0" />
       <img src="https://s1.ax1x.com/2020/08/28/dIra5R.png" alt="dIra5R.png" border="0" />
       <img src="https://s1.ax1x.com/2020/08/28/dIr08x.png" alt="dIr08x.png" border="0" />
       </div>
  </div>
  );
  export default (Cards)
