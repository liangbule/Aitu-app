import React from 'react'
//import { Card, WhiteSpace } from 'antd-mobile';
import CardCSS from './Cards.module.scss'

const Cards = ()=>(
  <div className={CardCSS.cards}>
       <div className={CardCSS.photos}>

       </div>
       <div className={CardCSS.All}>
       <b className={CardCSS.H3}>wocao</b>
       <br/>
       <span className={CardCSS.Span}>your parents boom die</span>
       </div>
       <div className={CardCSS.Allimg}>
       <img src="https://s1.ax1x.com/2020/08/25/dccUAK.png" alt="dccUAK.png" border="0" />
       <img src="https://s1.ax1x.com/2020/08/25/dccUAK.png" alt="dccUAK.png" border="0" />
       <img src="https://s1.ax1x.com/2020/08/25/dccUAK.png" alt="dccUAK.png" border="0" />
       </div>
  </div>
  );
  export default (Cards)
