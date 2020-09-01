import { Carousel } from 'antd-mobile';
import React, { Component } from 'react'
class Carouselaotu extends Component {
  state = {
    data: ['1', '2', '3'],
    imgHeight: 176,
  }
  componentDidMount() {
    // simulate img loading
    
      this.setState({
        data: [
         'https://s1.ax1x.com/2020/08/25/dcZc8I.png' ,
         'https://s1.ax1x.com/2020/08/25/dcZdKK.png', 
         'https://s1.ax1x.com/2020/08/25/dcZ6PA.png' ,
         'https://s1.ax1x.com/2020/08/25/dcZs5d.png'],
      });
  }
  render() {
    return (
 
        <Carousel
          autoplay={true}
          infinite
        //   beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
        //   afterChange={index => console.log('slide to', index)}
        >
          {this.state.data.map(val => (
            <a
              key={val}
              // href="http://www.alipay.com"
              style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
            >
              <img
                src={`${val}`}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 'auto' });
                }}
              />
            </a>
          ))}
        </Carousel>
    );
  }
}
export default Carouselaotu