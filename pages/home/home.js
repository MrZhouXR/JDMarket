// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    topHeight: 0,
    nbFrontColor: '#000000',
    nbBackgroundColor: '#ffffff',
    adItemImages: ["/home-images/ad1.jpg.dpg","/home-images/ad2.jpg","/home-images/ad3.jpg.dpg","/home-images/ad4.jpg.dpg","/home-images/ad5.jpg.dpg"],
    boxListInfo: [
      {image: "/home-images/jdcs.png.webp",title: "京东超市"},
      {image: "/home-images/smdq.png.webp",title: "数码电器"},
      {image: "/home-images/jdfs.png.webp",title: "京东服饰"},
      {image: "/home-images/jdsx.png.webp",title: "京东生鲜"},
      {image: "/home-images/jddj.png.webp",title: "京东到家"},
    ],
    boxListInfo2: [
      {image: "/home-images/czjf.png.webp",title: "充值缴费"},
      {image: "/home-images/pd.png.webp",title: "9.9元拼"},
      {image: "/home-images/lq.png.webp",title: "领券"},
      {image: "/home-images/sq.png.webp",title: "省钱"},
      {image: "/home-images/plushy.png.webp",title: "plus会员"},
    ],
    seckillInfo: [
      {image: "/home-images/seckill1.jpg.dpg",price: "¥ 2899",oldPrice: "¥ 3399"},
      {image: "/home-images/seckill2.jpg.dpg",price: "¥ 1779",oldPrice: "¥ 2188"},
      {image: "/home-images/seckill3.jpg.dpg",price: "¥ 2070",oldPrice: "¥ 2300"},
      {image: "/home-images/seckill4.jpg.dpg",price: "¥ 2498",oldPrice: "¥ 2750"},
      {image: "/home-images/seckill5.png.webp",price: "¥ 2288",oldPrice: "¥ 2490"},
      {image: "/home-images/seckill6.jpg.dpg",price: "¥ 3000",oldPrice: "¥ 5000"},
    ],
    arrList: []
  },
  
  // updataArrList() {
  //   let arr = this.data.arrList
  //   arr.push(...this.createData())//es6解构
  //   this.setData({
  //     arrList: arr
  //   })
  // },

  // createData() {
  //   let length = this.data.arrList.length //获取数据源中数组长度，修改用setData
  //   if (length >= 30) return []
  //   return Array.from({length: 3}, (v, i) => `数据${1+i+length}`)
  // },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      nbTitle: '京东',
      nbFrontColor: '#fff',
      nbBackgroundColor: '#fa2c19',
      topHeight: wx.db.statusBarHeight + wx.db.navBarHeight
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
    wx.showLoading({
      title: '加载更多',
    })
    setTimeout(() => {
      wx.hideLoading()
    }, 2000);
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})