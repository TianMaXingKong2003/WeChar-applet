var _app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    menuitems: [
      { text: '我的钱包', url: '../userinfo/userinfo', icon: '../../images/usermenu/jinqian.png', tips: '' },
      { text: '停车记录', url: '../borrowbook/borrowbook?status=N', icon: '../../images/usermenu/zhangdan.png', tips: '' },
      { text: '投诉建议', url: '../borrowbook/borrowbook?status=F', icon: '../../images/usermenu/shizhong.png', tips: '' },
      { text: '发票地址', url: '../borrowbook/borrowbook?status=Y', icon: '../../images/usermenu/dibiao.png', tips: '' },
      { text: '关于我们', url: '../favorcate/favorcate', icon: '../../images/usermenu/dengpao.png', tips: '' },
    ]
  },
  /**
   * 生命周期函数--监听页面加载
   */
  toast: function () {
    wx.navigateTo({
      url: '../qianbao/qianbao'
    })
  },
  toast1: function () {
    wx.navigateTo({
      url: '../jilu/jilu'
    })
  },
  toast2: function () {
    wx.navigateTo({
      url: '../fankui/fankui'
    })
  },
  toast3: function () {
    wx.navigateTo({
      url: '../fapiao/fapiao'
    })
  },
  toast4: function () {
    wx.navigateTo({
      url: '../guanyu/guanyu'
    })
  },
  onLoad: function (options) {
    let that = this
    _app.getUserInfo(function (userinfo) {
      console.log(userinfo)
      console.log(getApp().globalData.userSign)
      that.setData({
        userinfo: userinfo,
        userSign: getApp().globalData.userSign,
      })
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    let that = this
    _app.getUserInfo(function (userinfo) {
      console.log(userinfo)
      console.log(getApp().globalData.userSign)
      that.setData({
        userinfo: userinfo,
        userSign: getApp().globalData.userSign,
      })
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})