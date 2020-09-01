import React from 'react';
import { Carousel } from 'antd-mobile';
import './banner.scss'
import $axios from 'axios'
class Banner extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      img:[1,2,3,4],
    }
    
  }

  // 挂在完毕
  componentDidMount() {
    $axios({
      method:'get',
      url:'/api/home/banner',
    }).then(res => {

      this.setState({
        img:res.data.data
      })
    })
  }
  render() {
    return (
      <div className="bannerbord">
          <Carousel
            autoplay={true}
            infinite
          >
            {this.state.img.map(val => (
              <a
                key={val}
                // href="http://www.alipay.com"
                style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
              >
                <img
                  // src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
                  src={val.imageURL}
                  alt={val.title}
                  style={{ width: '100%', height:"180px" , verticalAlign: 'top' }}
                  onLoad={() => {
                    // fire window resize event to change height
                    window.dispatchEvent(new Event('resize'));
                    this.setState({ imgHeight: 'auto' });
                  }}
                />
              </a>
            ))}
          </Carousel>
      </div>
    );
  }
}
export default Banner