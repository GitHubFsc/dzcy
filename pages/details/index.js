// pages/detail/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: null,
    currentId: null,
    latitude: 31.20998,
    longitude: 121.429729,
    description_block: true,
    collect: false, //收藏
    bottom_btn_flag: true,
    bottom_btn_lm: false,
    order_agreement_btn_flag: false,
    private: false, //是否私包
    details_publish_val: "", //留言
    leave_Can: true, //能否请假
  },
  handlerGobackClick() {
    const pages = getCurrentPages();
    if (pages.length >= 2) {
      wx.navigateBack({
        delta: 1
      });
    } else {
      wx.navigateTo({
        url: '/pages/index/index'
      });
    }
  },
  collect: function () {
    this.setData({
      collect: !this.data.collect,
    })
    wx.showToast({
      title: this.data.collect ? "收藏" : "取消收藏",
      icon: 'success',
      duration: 2000,
      mask: true
    })
    // wx.showActionSheet({
    //   itemList: ['A', 'B', 'C'],
    //   success (res) {
    //     console.log(res.tapIndex)
    //   },
    //   fail (res) {
    //     console.log(res.errMsg)
    //   }
    // })
  },
  map: function () {
    wx.showModal({
      title: '搜索内容',
      content: "前往地图",
      success: function (res) {
        if (res.confirm) {
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },
  description_block: function () {
    this.setData({
      description_block: !this.data.description_block,
    })
  },
  description_ci: function (e) {
    if (this.data.currentId) {
      wx.showModal({
        // title: e.currentTarget.dataset,
        content: "联系TA"
      })
    } else {
      wx.showModal({
        // title: e.currentTarget.dataset,
        content: "接单查看联系方式"
      })
    }

  },
  bottom_btn_lm: function () {
    // wx.showModal({
    //   // title: e.currentTarget.dataset,
    //   content: "留言"
    // })
    this.setData({
      bottom_btn_lm: !this.data.bottom_btn_lm,
    })
  },
  bottom_btn_confirm: function () {
    // wx.showModal({
    //   // title: e.currentTarget.dataset,
    //   content: this.data.bottom_btn_flag?"立即接单":"等待任务完成"
    // })
    this.setData({
      order_agreement_btn_flag: true
    })
  },
  bottom_btn_confirmation: function () {
    wx.showModal({
      // title: e.currentTarget.dataset,
      content: "是否取消订单"
    })
  },
  order_agreement_btn_left: function () {
    this.setData({
      bottom_btn_flag: true,
      order_agreement_btn_flag: false
    })
  },
  order_agreement_btn_right: function () {
    this.setData({
      bottom_btn_flag: false,
      order_agreement_btn_flag: false
    })
  },
  bindKeyInput: function (e) {
    this.setData({
      details_publish_val: e.detail.value
    })
  },
  //发表留言
  details_publish: function () {
    wx.showModal({
      title: "留言",
      content: this.data.details_publish_val
    })
    this.setData({
      bottom_btn_lm: !this.data.bottom_btn_lm,
    })
  },
  //我要请假
  bottom_btn_leave: function () {
    if (this.data.leave_Can) {
      wx.navigateTo({
        url: '../leave/index'
      })
    }else{
      wx.showModal({
        content: "当前状态无法请假"
      })
    }
  },
  //上传任务凭证
  taskVoucher : function(){
    wx.navigateTo({
      url: '../taskVoucher/index'
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options); //
    this.setData({
      title: options.title,
      currentId: options.currentId,
      private: options.private
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {},

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