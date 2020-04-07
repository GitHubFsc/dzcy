// pages/takeLeave/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputValue: null,
    files: [],
    previewImage : false
  },
  //返回
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
  save: function () {
    wx.showModal({
      title: '申诉内容',
      content: this.data.inputValue,
    })
    console.log("files",this.data.files);
  },
  bindTextAreaBlur: function (e) {
    this.setData({
      inputValue: e.detail.value
    })
  },
  chooseImage(e) {
    var that = this;
    wx.chooseImage({
      count: 9,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: res => {
        that.setData({
          files : this.data.files.concat(res.tempFilePaths)
        })
      }
    })
  },
  /*缩略图展示*/
  previewImage: function (e) {
    // this.setData({
    //   previewImage: !this.data.previewImage
    // })

    let index = e.target.dataset.index;
    let files = this.data.files;
    console.log(index,files)
    wx.previewImage({
      current: files[index], // 当前显示图片的http链接
      urls: files,// 需要预览的图片http链接列表
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