// pages/recommend/recommend.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    classify:["手机","电器","数码","电脑","家居","男装","美妆","女鞋","男鞋","房产","母婴","食品","艺术","医药","图书","机票","理财","安装"],
  },
  godetail:function(){
    wx.navigateTo({
      url: '../detail/detail'}) 
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