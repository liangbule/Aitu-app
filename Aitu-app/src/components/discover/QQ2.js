import React, { Component } from 'react'
//import { Card, WhiteSpace } from 'antd-mobile';
import CardCSS from './Cards.module.scss'
//import {Link} from 'react-router-dom'

const Cards = (props)=>(
     console.log(props),
  <div className={CardCSS.cards}>
       <div className={CardCSS.Allimg}>
       <img src="https://s1.ax1x.com/2020/08/25/dccUAK.png" alt="dccUAK.png" border="0" />
       <img src="https://s1.ax1x.com/2020/08/28/dIra5R.png" alt="dIra5R.png" border="0" />
       <img src="https://s1.ax1x.com/2020/08/28/dIr08x.png" alt="dIr08x.png" border="0" />
       <img src="https://s1.ax1x.com/2020/08/28/dIryrD.png" alt="dIryrD.png" border="0" />
       <img src="https://s1.ax1x.com/2020/08/28/dIr6qe.png" alt="dIr6qe.png" border="0" />
       <img src="https://s1.ax1x.com/2020/08/28/dIrB26.png" alt="dIrB26.png" border="0" />
       </div>
  </div>
  );
  export default (Cards)
