// component/waterfall/waterfall.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
  leftList: [
    {
      Cover:'http://img10.360buyimg.com/mobilecms/s372x372_jfs/t1/114261/32/17833/162448/5f5f7981E3fecc544/3a36d2d43f2a67da.jpg!q70.dpg.webp',
      Hight: 100,
      title:'手动打蛋器家用小型半自动蛋糕奶油打发器鸡蛋清搅拌器烘焙工具 旗舰新品 手摇极速打发器',
      price:'￥199'
    }
  ],
  rightList: [
    {
      Cover:'http://img10.360buyimg.com/mobilecms/s372x372_jfs/t1/114261/32/17833/162448/5f5f7981E3fecc544/3a36d2d43f2a67da.jpg!q70.dpg.webp',
      Hight: 100,
      title:'手动打蛋器家用小型半自动蛋糕奶油打发器鸡蛋清搅拌器烘焙工具 旗舰新品 手摇极速打发器',
      price:'￥199'
    }
  ],
  
  
  },

  /**
   * 组件的方法列表
   */
  methods: {

  },
  attached:function(){
    // var that = this;
    // var allData = that.data.noramalData;
    // //定义两个临时的变量来记录左右两栏的高度，避免频繁调用setData方法
    // var leftH = that.data.leftHight;
    // var rightH = that.data.rightHight;
    // var leftData = [];
    // var rightData = [];
    // for (let i = 0; i < allData.length; i++) {
    //   var currentItemHeight = parseInt(Math.round(allData[i].CoverHeight * 345 / allData[i].CoverWidth));
    //   allData[i].CoverHeight = currentItemHeight + "rpx";//因为xml文件中直接引用的该值作为高度，所以添加对应单位
    //   if (leftH == rightH || leftH < rightH) {//判断左右两侧当前的累计高度，来确定item应该放置在左边还是右边
    //     leftData.push(allData[i]);
    //     leftH += currentItemHeight;
    //   } else {
    //     rightData.push(allData[i]);
    //     rightH += currentItemHeight;
    //   }
    // }
  
    // //更新左右两栏的数据以及累计高度
    // that.setData({
    //   leftHight: leftH,
    //   rightHight: rightH,
    //   leftList: leftData,
    //   rightList: rightData
    // })
  }
})
