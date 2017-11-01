//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    list: [
    {
      id: 'picture',
      name: '图片',
    },
    {
      id: 'video',
      name: '视频',
    },
    {
      id: 'text',
      name: '文本',
    }],

  },
  //事件处理函数
  bindViewTap: function(e) {
    if (app.globalData.userInfo) {
      console.log(e.currentTarget.id);
    } else {
      wx.getUserInfo({
        success: res => {
          if (res.userInfo) {
            app.globalData.userInfo = res.userInfo;
          } 
        },
        fail: error => {
          wx.showModal({
            content: '请先登录',
            success: function(res) {
              if (res.confirm) {
                wx.switchTab({ 
                 url: '../me/index'
               })
              }
            }
          })
        }
      })
    }
  },
  onShow: function () {
    console.log("onShow");
  },
})
