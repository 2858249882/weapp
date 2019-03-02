Component({
  properties: {
    // 这里定义了innerText属性，属性值可以在组件使用时指定
    active: {
      type: String,
      value: '0',
    }
  },
  data: {
    current: 'homepage'
  },
  methods: {
    footerOnChange(e) {
      console.log('现在点击的索引为：', e.detail);
      const thisIndex = e.detail;
      if(thisIndex === 0){
        wx.navigateTo({
          url: '/pages/index/index'
        })
      }
      if(thisIndex === 1){
        wx.navigateTo({
          url: '/pages/class/index'
        })
      }
      if(thisIndex === 2){
        wx.navigateTo({
          url: '/pages/message/index'
        })
      }
      if(thisIndex === 3){
        wx.navigateTo({
          url: '/pages/car/index'
        })
      }
      if(thisIndex === 4){
        wx.navigateTo({
          url: '/pages/my/index'
        })
      }
    },
  }
})