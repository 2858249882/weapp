//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls: [
      '../../assets/images/php.png',
      '../../assets/images/php.png',
      '../../assets/images/php.png'
    ],
    indicatorDots: false,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    current: 'homepage',
    active: 0
  },
  onShow() {
    this.setData({ current: 'homepage', active: 0 });
  },
  onChange(event) {
    console.log('现在点击的索引为：',event.detail);
  },
  handleChange({ detail }) {
    const current = detail.key;
    console.log('当前点击的模块', detail.key)
    this.setData({ current });
    if (current === 'mine') {
      wx.navigateTo({
        url: '/pages/my/my'
      })
    }
  }
})
