// pages/detail/detail.js
let app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    active: 1,
    statusBarHeight: 0,
    navbarHeight: 0,
    img: ['http://m.360buyimg.com/mobilecms/s750x750_jfs/t1/114261/32/17833/162448/5f5f7981E3fecc544/3a36d2d43f2a67da.jpg!q80.dpg.webp', 'http://m.360buyimg.com/mobilecms/s843x843_jfs/t1/139410/13/8347/350466/5f5f797fE11bf2860/089d85556a76cb1d.jpg!q70.dpg.webp', 'http://m.360buyimg.com/mobilecms/s843x843_jfs/t1/113569/26/17737/400469/5f5f7980E0825c8f3/852188b8b9ccc6ea.jpg!q70.dpg.webp', 'http://m.360buyimg.com/mobilecms/s843x843_jfs/t1/141958/32/8375/355466/5f5f7980E187ecda4/bcd590201532f381.jpg!q70.dpg.webp'],
    navbarColor: '',
    leftColor: '#d3cccc',
    opacity: 0.8,
    statusColor: '',
    allheight: 0,
    currentNum: 1,
    hidden: true,
    show: false,
    selects: [{
        title: '旗舰新品 手摇极速打发器',
        price: 109,
        img: 'http://img14.360buyimg.com/n4/jfs/t1/114261/32/17833/162448/5f5f7981E3fecc544/3a36d2d43f2a67da.jpg'
      },
      {
        title: '极速打发器+304优质蛋清分离器',
        price: 129,
        img: 'http://img14.360buyimg.com/n4/jfs/t1/116089/5/18585/36876/5f5f7981E8b4791d2/79d3a54c8eb66130.jpg'
      },
      {
        title: '打发器+大号硅胶刮刀(送油刷+蛋清分离器) 烘焙',
        price: 159,
        img: 'http://img14.360buyimg.com/n4/jfs/t1/116019/12/17683/165455/5f5f7981E44092fed/fff0314e8cf9f506.jpg'
      }
    ],
    xuanle: '',
    idx: 0,
    selectnum: 1,
    goodprice: 109,
    selectimg: 'http://img14.360buyimg.com/n4/jfs/t1/114261/32/17833/162448/5f5f7981E3fecc544/3a36d2d43f2a67da.jpg',
    store: '美特斯邦威',
    content: '手动打蛋器家用小型半自动蛋糕奶油打发器鸡蛋清搅拌器烘焙工具 旗舰新品 手摇极速打发器'
  },
  //加入购物车
  addcar(e) {
    // console.log(e);
    if (app.globalData.login) {
      let that = this
      let a = 0
      for (let i = 0; i < wx.buycart.length; i++) {
        //  console.log(wx.buycart[i]);

        if (wx.buycart[i].select == that.data.xuanle) {
          a = 1
          wx.buycart[i].num = wx.buycart[i].num + that.data.selectnum
        }
      }
      if (a == 0) {
        // let title = that.data.selects[index].title 
        // console.log(title);

        wx.buycart.push({
          shopName: that.data.store,
          desc: that.data.content,
          src: that.data.selectimg,
          detail: that.data.xuanle,
          price: that.data.goodprice,
          num: that.data.selectnum,
          checked: '' || false
          // title: that.data.selects.values.title
        })
        console.log(that.data.xuanle);
        wx.switchTab({
          url: '../ShoppingCart/ShoppingCart',
        })
      }
      // console.log(wx.buycart);
      wx.showToast({
        title: '加入购物车成功',
        icon: 'success',
        duration: 2000
      })
    } else {
      wx.showLoading({
        title: '请先登录',
      })
      setTimeout(() => {
        wx.switchTab({
          url: '../my/my',
        })
      },2000)
    }
  },
  onChange(event) {
    let that = this
    console.log(event.detail);
    that.setData({
      selectnum: event.detail
    })
  },
  changecolr(e) {
    let that = this
    let xuanle = e.target.dataset.text.title
    var index = e.currentTarget.dataset.index;
    // console.log(e);
    // wx.showToast({
    //   title: '成功',
    //   icon: 'success',
    //   duration: 2000
    // })
    // console.log('每个index',index)
    that.setData({
      xuanle,
      idx: index,
      goodprice: that.data.selects[index].price,
      selectimg: that.data.selects[index].img
    })
    console.log(e.currentTarget.dataset.index);
  },
  onChange1(event) {
    // wx.showToast({
    //   title: `切换到标签 ${event.detail.name}`,
    //   icon: 'none',
    // });
  },
  back() {
    wx.navigateBack({
      delta: 1
    })
  },
  showPopup() {
    this.setData({
      show: true
    });
  },

  onClose() {
    this.setData({
      show: false
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let xuanle = this.data.selects[0].title
    let statusBarHeight = wx.db.statusBarHeight
    let navbarHeight = wx.db.navBarHeight
    let allheight = wx.db.statusBarHeight + wx.db.navBarHeight
    this.setData({
      statusBarHeight,
      navbarHeight,
      allheight,
      xuanle
    })
  },
  swiperChange: function (event) {
    let that = this
    if (event.detail.source == 'touch') {
      that.setData({
        currentNum: event.detail.current + 1
      })
    }
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

    // let that = this
    // const statusbar = wx.db.statusBarHeight
    // const query = wx.createSelectorQuery()
    // query.select('#distance').boundingClientRect()
    // query.selectViewport().scrollOffset()
    // query.exec(function (res) {
    //   let top = res[0].top       // #the-id节点的上边界坐标
    //   if (top < statusbar) {
    //     that.setData({
    //       navbarColor: '#fff',
    //       leftColor: '#fff',
    //       statusColor:'#f6f6f6'
    //     })
    //   } else {
    //     that.setData({
    //       navbarColor: '',
    //       leftColor: '#d3cccc',
    //       statusColor:''
    //     })
    //   }
    //   res[1].scrollTop // 显示区域的竖直滚动位置
    // })
  },
  onPageScroll: function (ev) {
    let that = this
    const statusbar = wx.db.statusBarHeight
    let top = ev.scrollTop // #the-id节点的上边界坐标
    // console.log(top);

    if (top > 300) {
      that.setData({
        navbarColor: '#fff',
        leftColor: '#fff',
        statusColor: '#fff',
        opacity: 1,
        hidden: false
      })
    } else {
      that.setData({
        navbarColor: '',
        leftColor: '#d3cccc',
        statusColor: '',
        opacity: 0.8,
        hidden: true
      })
    }
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