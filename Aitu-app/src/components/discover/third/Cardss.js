import React, { Component } from 'react'
//import { Card, WhiteSpace } from 'antd-mobile';
import CardCSS from './Cards.module.scss'
import {Link} from 'react-router-dom'

const Cards = (props)=>(
     console.log(props),
  <div className={CardCSS.cards}>
       <Link to='/user'><div className={CardCSS.photos}
       
       >
         <img src="https://s1.ax1x.com/2020/08/28/dIrNVJ.png" alt="dIrNVJ.png" border="0" />
       </div>  
       </Link>
       <div className={CardCSS.All}>
       <b className={CardCSS.H3}>wocao</b>
       <br/>
       <span className={CardCSS.Span}>your parents boom die</span>
       </div>
       <div className={CardCSS.Allimg}>
       <img src="https://s1.ax1x.com/2020/08/28/dIryrD.png" alt="dIryrD.png" border="0" />
       <img src="https://s1.ax1x.com/2020/08/28/dIr6qe.png" alt="dIr6qe.png" border="0" />
       <img src="https://s1.ax1x.com/2020/08/28/dIrB26.png" alt="dIrB26.png" border="0" />
       </div>
  </div>
  );
  export default (Cards)
