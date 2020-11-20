// pages/ShoppingCart/ShoppingCart.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    topHeight: wx.db.statusBarHeight + wx.db.navBarHeight || 0,
    emptycart: true,
    login: '' || false,
    address: '' || '江西省南昌市青山湖区',
    Allgoods: [],
    totalPrice: '' || 0,
    totalNum: '' || 0,
    allChecked: '' || false,
    carts: [{
        shopName: '龙维斯',
        src: '灵越笔记本.jpg',
        desc: '龙维斯圆领卫衣男长袖外套新品网红运动套装潮牌秋季套头衫情侣无帽宽松青少年休闲帽衫渣男衣服嘻哈三件套 2635灰色 L',
        detail: '2635灰色 L',
        price: 269,
        num: '' || 1,
        checked: false,
        // goods_id: '' || 1
      },
      {
        shopName: '龙维斯',
        src: '灵越笔记本.jpg',
        desc: '龙维斯圆领卫衣男长袖外套新品网红运动套装潮牌秋季套头衫情侣无帽宽松青少年休闲帽衫渣男衣服嘻哈三件套 2635灰色 L',
        detail: '2635灰色 L',
        price: 269,
        num: '' || 1,
        checked: false
      }
    ],
    goodsList: [{
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
  handeItemChange(e) {
    console.log(e);
    // 1 获取被修改的商品的id
    const goods_id = e.currentTarget.dataset.id;
    // 2 获取购物车数组 
    let { carts } = this.data;
    // 3 找到被修改的商品对象
    let index = carts.findIndex(v => v.goods_id === goods_id);
    // 4 选中状态取反
    carts[index].checked = !carts[index].checked;
    this.setCart(carts);
  },
  setCart(carts) {
    let allChecked = true
    let totalNum = 0
    let totalPrice = 0
    carts.forEach(item => {
      if (item.checked) {
        totalNum += item.num,
        totalPrice += item.num * item.price
      } else {
        allChecked = false
      }
    })
    allChecked = carts.length != 0 ? allChecked : false
    this.setData({
      allChecked: allChecked,
      totalNum: totalNum,
      totalPrice: totalPrice,
      carts: carts
    })
  },
  handleItemAllCheck() {
    let { carts, allChecked} = this.data // 获取data中的数据
    allChecked = !allChecked
    carts.forEach(item => {
      item.checked = allChecked
      console.log(item.checked);
    })
    this.setCart(carts)

  },
  // onChange: function(e) {
  //   let id = e.currentTarget.dataset.id
  //   let index = e.currentTarget.dataset.index
  //   console.log(e);
  //   // this.setData({
  //   //   carts[index].checked: e.detail
  //   // })
  // },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  async handleItemNumEdit (e) {
    console.log(e);
    let goods_id = e.currentTarget.dataset.id
    let operation = e.currentTarget.dataset.operation
    let { carts } = this.data
    const index = carts.findIndex(item => item.goods_id === goods_id)
    if( carts[index].num === 1 && operation === -1) {
      const res = await wx.showModal({ 
          content: "您是否要删除？" 
        })
      if (res.confirm) {
        carts.splice(goods_id,1)
        this.setCart(carts)
        console.log(this.data.carts);
      }
    } else {
      carts[goods_id].num += operation
      // this.setData({
      //   [`carts[${goods_id}].num`]: carts[goods_id].num
      // })
      this.setCart(carts)
      console.log(carts[goods_id].num);
      console.log(this.data.carts[goods_id].num);
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
    let login = app.globalData.login
    console.log(login);
    if (login) {
      this.setData({
        login: login
      })
      if (this.data.carts.length != 0) {
        for (let i = 0; i < this.data.carts.length; i++) {
          let goods_id = i
          this.setData({
            [`carts[${i}].goods_id`]: goods_id
          })
          console.log(this.data.carts[i].goods_id);
        }
        this.setData({
          emptycart: false
        })
      }
    } else {
      wx.showToast({
        title: '请先登录',
      }, 1000)

    }
  },
  toLogin: function () {
    wx.switchTab({
      url: '../my/my',
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

    //下拉刷新
    wx.showNavigationBarLoading() //在标题栏中显示加载

    //模拟加载
    setTimeout(function () {
      // complete
      wx.hideNavigationBarLoading() //完成停止加载
      wx.stopPullDownRefresh() //停止下拉刷新
    }, 1500);
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