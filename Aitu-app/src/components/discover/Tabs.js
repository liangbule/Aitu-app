import React from 'react'
import { Tabs, Badge } from 'antd-mobile';
import First from './first/First';
import Second from './second/second';
import Third from './third/third';

const tabs = [
  { title: <Badge>遇见驴友</Badge> },
  { title: <Badge>每日优选</Badge> },
  { title: <Badge>精品</Badge> },
];

const TabExample = () => (
  <div>
    <Tabs tabs={tabs}
      initialPage={1}
      onChange={(tab, index) => { console.log('onChange', index, tab); }}
      onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
      //tabBarActiveTextColor={'green'}
      //tabBarUnderlineStyle={{backgroudColor:'green'}}
      //page={5}

    >
      <div style={{ display: 'flex', backgroundColor: '#fff' }}>
        <First/>
      </div>
      <div style={{ display: 'flex', backgroundColor: '#fff' }}>
        <Second/>
      </div>
      <div style={{ display: 'flex', backgroundColor: '#fff' }}>
        <Third/>
      </div>
    </Tabs>

  </div>
);

export default (TabExample)