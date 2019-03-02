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
      if(e.detail === 4){
        wx.navigateTo({
          url: '/pages/my/my'
        })
      }
    },
  }
})