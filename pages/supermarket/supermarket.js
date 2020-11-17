// pages/supermarket/supermarket.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    adItems: [
      {image: 'https://m.360buyimg.com/babel/jfs/t1/128688/40/18406/95054/5fab82afE8328579d/1e4d8050b9b91d89.jpg!q70.webp'},
      {image: 'https://m.360buyimg.com/babel/jfs/t1/153271/23/5719/205543/5fae3e50Ea81a4a4a/46e3719035549233.jpg!q70.webp'},
      {image: 'https://m.360buyimg.com/babel/jfs/t1/146453/35/14245/228735/5fae538cE92aac07c/a2575ed0c394c82d.jpg!q70.webp'},
      {image: 'https://m.360buyimg.com/babel/jfs/t1/141602/11/14287/167309/5fae55b0E4240b062/3424d10c217e096d.jpg!q70.webp'},
      {image: 'https://m.360buyimg.com/babel/jfs/t1/124392/20/18245/255041/5facdbc0Eff26bb0d/bd6a22c10bf06ef5.jpg!q70.webp'}
    ],
    items1:[
      {image:'/home-images/items1.webp',title:'时令生鲜'},
      {image:'/home-images/items2.webp',title:'营养保健'},
      {image:'/home-images/items3.webp',title:'汽车用品'},
      {image:'/home-images/items4.webp',title:'宠物生活'},
      {image:'/home-images/items5.webp',title:'小家电馆'}
    ],
    items2:[
      {image:'/home-images/items6.webp',title:'1小时达'},
      {image:'/home-images/items7.webp',title:'山姆会员店'},
      {image:'/home-images/items8.webp',title:'沃尔玛'},
      {image:'/home-images/items9.webp',title:'童装童鞋'},
      {image:'/home-images/items10.webp',title:'超市签到'}
    ]
  },
  onClickLeft() {
    wx.navigateBack({
      complete: (res) => {},
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