//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {}
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  toast: function () {
    wx.navigateTo({
      url: '../tingche/tingche'
    })
  },
  toast1: function () {
    wx.navigateTo({
      url: '../xufei/xufei'
    })
  },
  toast2: function () {
    wx.navigateTo({
      url: '../chefei/chefei'
    })
  },
  toast3: function () {
    wx.navigateTo({
      url: '../chongzhi/chongzhi'
    })
  },
  toast4: function () {
    wx.navigateTo({
      url: '../diaocha/diaocha'
    })
  },
  toast5: function () {
    wx.navigateTo({
      url: '../zixun/zixun'
    })
  },
  
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
