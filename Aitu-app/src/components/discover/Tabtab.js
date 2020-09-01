import React, { Component } from 'react'
import { Tabs, WhiteSpace, Badge } from 'antd-mobile';
import TabtabCSS from './Tabtab.module.scss'
import Q1 from './Q1'
import Q2 from './Q2'

const tabs = [
  { title: <Badge text={'（3）'}>今日更新</Badge> },
  { title: <Badge text={'(9)'}>所有照片</Badge> },
  
];
const Tabtab = () =>(
    <Tabs tabs={tabs}
      initialPage={1}
      onChange={(tab, index) => { console.log('onChange', index, tab); }}
      onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
      
    >
      <div style={{ display: 'flex', backgroundColor: '#fff' }}>
        <Q1></Q1>
      </div>
      <div style={{ display: 'flex',  backgroundColor: '#fff' }}>
        <Q2/>
      </div>
    </Tabs> 
)


export default (Tabtab)