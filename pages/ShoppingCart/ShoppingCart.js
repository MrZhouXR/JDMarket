// pages/ShoppingCart/ShoppingCart.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    emptycart: true,
    goodsList:[
      {
        imgName: '灵越笔记本.jpg',
        tagName: '双11.png',
        goodsDesc: '戴尔（DELL）游匣新g3/g5/g7灵越5500 15.6英寸i5/i7学生游戏电竞笔记本电脑 十代i5 GTX1650Ti 120Hz电竞屏 16内存512G PCIe固态 【高配版】',
        price: 6666,
        mod: '满减',
        recommendNum: 666,
        recommendRate: '100%'
      },
      {
        imgName: '灵越笔记本.jpg',
        tagName: '双11.png',
        goodsDesc: '戴尔（DELL）游匣新g3/g5/g7灵越5500 15.6英寸i5/i7学生游戏电竞笔记本电脑 十代i5 GTX1650Ti 120Hz电竞屏 16内存512G PCIe固态 【高配版】',
        price: 6666,
        mod: '满减',
        recommendNum: 666,
        recommendRate: '100%'
      },
      {
        imgName: '灵越笔记本.jpg',
        tagName: '双11.png',
        goodsDesc: '戴尔（DELL）游匣新g3/g5/g7灵越5500 15.6英寸i5/i7学生游戏电竞笔记本电脑 十代i5 GTX1650Ti 120Hz电竞屏 16内存512G PCIe固态 【高配版】',
        price: 6666,
        mod: '满减',
        recommendNum: 666,
        recommendRate: '100%'
      },
      {
        imgName: '灵越笔记本.jpg',
        tagName: '双11.png',
        goodsDesc: '戴尔（DELL）游匣新g3/g5/g7灵越5500 15.6英寸i5/i7学生游戏电竞笔记本电脑 十代i5 GTX1650Ti 120Hz电竞屏 16内存512G PCIe固态 【高配版】',
        price: 6666,
        mod: '满减',
        recommendNum: 666,
        recommendRate: '100%'
      },
      {
        imgName: '灵越笔记本.jpg',
        tagName: '双11.png',
        goodsDesc: '戴尔（DELL）游匣新g3/g5/g7灵越5500 15.6英寸i5/i7学生游戏电竞笔记本电脑 十代i5 GTX1650Ti 120Hz电竞屏 16内存512G PCIe固态 【高配版】',
        price: 6666,
        mod: '满减',
        recommendNum: 666,
        recommendRate: '100%'
      },
      {
        imgName: '灵越笔记本.jpg',
        tagName: '双11.png',
        goodsDesc: '戴尔（DELL）游匣新g3/g5/g7灵越5500 15.6英寸i5/i7学生游戏电竞笔记本电脑 十代i5 GTX1650Ti 120Hz电竞屏 16内存512G PCIe固态 【高配版】',
        price: 6666,
        mod: '满减',
        recommendNum: 666,
        recommendRate: '100%'
      },
      {
        imgName: '灵越笔记本.jpg',
        tagName: '双11.png',
        goodsDesc: '戴尔（DELL）游匣新g3/g5/g7灵越5500 15.6英寸i5/i7学生游戏电竞笔记本电脑 十代i5 GTX1650Ti 120Hz电竞屏 16内存512G PCIe固态 【高配版】',
        price: 6666,
        mod: '满减',
        recommendNum: 666,
        recommendRate: '100%'
      },
      {
        imgName: '灵越笔记本.jpg',
        tagName: '双11.png',
        goodsDesc: '戴尔（DELL）游匣新g3/g5/g7灵越5500 15.6英寸i5/i7学生游戏电竞笔记本电脑 十代i5 GTX1650Ti 120Hz电竞屏 16内存512G PCIe固态 【高配版】',
        price: 6666,
        mod: '满减',
        recommendNum: 666,
        recommendRate: '100%'
      },
      {
        imgName: '灵越笔记本.jpg',
        tagName: '双11.png',
        goodsDesc: '戴尔（DELL）游匣新g3/g5/g7灵越5500 15.6英寸i5/i7学生游戏电竞笔记本电脑 十代i5 GTX1650Ti 120Hz电竞屏 16内存512G PCIe固态 【高配版】',
        price: 6666,
        mod: '满减',
        recommendNum: 666,
        recommendRate: '100%'
      },
      {
        imgName: '灵越笔记本.jpg',
        tagName: '双11.png',
        goodsDesc: '戴尔（DELL）游匣新g3/g5/g7灵越5500 15.6英寸i5/i7学生游戏电竞笔记本电脑 十代i5 GTX1650Ti 120Hz电竞屏 16内存512G PCIe固态 【高配版】',
        price: 6666,
        mod: '满减',
        recommendNum: 666,
        recommendRate: '100%'
      },
      {
        imgName: '灵越笔记本.jpg',
        tagName: '双11.png',
        goodsDesc: '戴尔（DELL）游匣新g3/g5/g7灵越5500 15.6英寸i5/i7学生游戏电竞笔记本电脑 十代i5 GTX1650Ti 120Hz电竞屏 16内存512G PCIe固态 【高配版】',
        price: 6666,
        mod: '满减',
        recommendNum: 666,
        recommendRate: '100%'
      },
      {
        imgName: '灵越笔记本.jpg',
        tagName: '双11.png',
        goodsDesc: '戴尔（DELL）游匣新g3/g5/g7灵越5500 15.6英寸i5/i7学生游戏电竞笔记本电脑 十代i5 GTX1650Ti 120Hz电竞屏 16内存512G PCIe固态 【高配版】',
        price: 6666,
        mod: '满减',
        recommendNum: 666,
        recommendRate: '100%'
      }
    ]
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
    
  //下拉刷新
    wx.showNavigationBarLoading() //在标题栏中显示加载
    
    //模拟加载
    setTimeout(function()
    {
      // complete
      wx.hideNavigationBarLoading() //完成停止加载
      wx.stopPullDownRefresh() //停止下拉刷新
    },1500);
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