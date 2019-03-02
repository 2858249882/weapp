Page({
  data: {
    current: 'mine'
  },
  onShow() {
    this.setData({ current: 'mine' });
  },
  handleChange({ detail }) {
    const current = detail.key;
    console.log('当前点击的模块', detail.key)
    this.setData({ current });
    if (current === 'homepage') {
      wx.navigateTo({
        url: '/pages/index/index'
      })
    }
  }
})