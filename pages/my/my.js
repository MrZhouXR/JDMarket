// pages/my/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    login: '' || false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    userInfo: {
      nickName: '轩潇潇夕'
    },
    avatarUrl: '',
    setImage: '../../images/set1.png',
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
    ],
    gamesItem:[
      {
        iconName:'京东水果.jpg',
        iconTitle: '免费水果'
      },
      {
        iconName:'东东萌宠.jpg',
        iconTitle: '东东萌宠'
      },
      {
        iconName:'免费得京豆.jpg',
        iconTitle: '免费领京豆'
      },
      {
        iconName:'分十亿红包.jpg',
        iconTitle: '分十亿红包'
      }
    ],
    serverItem:[
      {
        iconName:'客户服务.jpg',
        iconTitle: '客户服务'
      },
      {
        iconName:'我的拼购.jpg',
        iconTitle: '我的拼购'
      },
      {
        iconName:'我的预约.png',
        iconTitle: '我的预约'
      },
      {
        iconName:'免单.jpg',
        iconTitle: '免单'
      },
      {
        iconName:'我的问答.jpg',
        iconTitle: '我的问答'
      },
      {
        iconName:'我的爱车.jpg',
        iconTitle: '我的爱车'
      },
      {
        iconName:'高价回收.jpg',
        iconTitle: '高价回收'
      },
      {
        iconName:'充值中心.jpg',
        iconTitle: '充值中心'
      },
      {
        iconName:'寄件服务.jpg',
        iconTitle: '寄件服务'
      },
      {
        iconName:'闲置换钱.png',
        iconTitle: '闲置换钱'
      },
      {
        iconName:'我的礼物.jpg',
        iconTitle: '我的礼物'
      },
      {
        iconName:'定期购.png',
        iconTitle: '定期购'
      }
    ],
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
      }
    ]
  },
  getUserInfo: function () {
    const that = this
    wx.getSetting({
      success (res){
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          wx.getUserInfo({
            success: function(res) {
              console.log(res.userInfo)
              that.setData({
                login: true,
                userInfo:{
                  nickName:res.userInfo.nickName,
                  avatarUrl: res.userInfo.avatarUrl,
                },
                assetsList:[
                  {
                    tagName: '优惠券',
                    text: 0
                  },
                  {
                    tagName: '账户余额',
                    text: 0
                  },
                  {
                    tagName: '京豆',
                    text: 0
                  },
                  {
                    tagName: '红包',
                    text: 0
                  }
                ],
                tagList:[
                  {
                    tagName:'商品收藏',
                    text: 4
                  },
                  {
                    tagName:'店铺收藏',
                    text: 0
                  },
                  {
                    tagName:'我的足迹',
                    text: 0
                  }
                ]
              })
            }
          })
        }
      }
    })
  },
  bindGetUserInfo :function (e) {
    console.log(e.detail.userInfo)
  },
  setDetail: function (event) {
    wx.navigateTo({
      url: '../setDetail/setDetail',
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