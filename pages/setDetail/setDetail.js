// pages/setDetail/setDetail.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    topHeight: wx.db.statusBarHeight + wx.db.navBarHeight || 0 ,
    accountGroup:[
      {
        accountName: '收货地址管理',
        accountDesc: '管理我的地址'
      }
    ]
  },
  exit: function (e) {
    var that = this
    console.log(e);
    var pages = getCurrentPages() 
    var curPage = pages[pages.length - 1] // 获取当前页面
    var prePage = pages[pages.length - 2] // 获取上一级页面
    prePage.setData({
      login: false,
      assetsList:[
        {
          tagName: '优惠券',
          text: '-'
  
        },
        {
          tagName: '账户余额',
          text: '-'
  
        },
        {
          tagName: '京豆',
          text: '-'
  
        },
        {
          tagName: '红包',
          text: '-'
        },
      ],
      tagList:[
        {
          tagName:'商品收藏',
          text: '-'
        },
        {
          tagName:'店铺收藏',
          text: '-'
        },
        {
          tagName:'我的足迹',
          text: '-'
        }
      ]
    })
    app.globalData.login = this.data.login
    
    wx.navigateBack({ // 返回上一个页面
      delta: 2,
    })
  },
  backmy:function() {
    wx.switchTab({
      url: '../my/my',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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