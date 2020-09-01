import { Tabs, WhiteSpace, Badge } from 'antd-mobile';
import React, { Component } from 'react'
import TabsView from './TabsView'
class TabsNav extends Component{
 tabs = [
  { title: <Badge >国内</Badge> },
  { title: <Badge >国外</Badge> },
];
render(){
    return(
 
  <div>
    <Tabs tabs={this.tabs}
      initialPage={0}
    //   onChange={(tab, index) => { console.log('onChange', index, tab); }}
    //   onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '180px', backgroundColor: '#fff' }}>
        {/* 北京那要改动态数据 */}
        <TabsView></TabsView>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '180px', backgroundColor: '#fff' }}>
      组件
      </div>
    </Tabs>
    <WhiteSpace />
  </div>)
;


    // <TabExample />, mountNode
    
};

}

export default TabsNav