// pages/rmrw/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentId: '0',
    sectionId: null,
    arr: [{
      "imgUrls": "../images/img-01.png",
      "title": "幼儿小提琴老师 1课时",
      "condition": ["教师职业资格", "25-30岁", "女性"],
      "price": {
        'unit_type': '￥',
        'price': '800.0',
        'unit': '天'
      },
      "time": {
        "start": "2020/03/14",
        "end": "2020/12/14",
        "total": "270天"
      },
      "process": true
    }, {
      "imgUrls": "../images/img-01.png",
      "title": "幼儿小提琴老师 2课时",
      "condition": ["教师职业资格", "25-30岁", "女性"],
      "price": {
        'unit_type': '￥',
        'price': '900.0',
        'unit': '小时'
      },
      "time": {
        "start": "2020/03/31",
        "end": "2020/04/14",
        "total": "14天"
      },
      "process": false
    }, {
      "imgUrls": "../images/img-01.png",
      "title": "幼儿小提琴老师 3课时",
      "condition": ["教师职业资格", "25-30岁", "女性"],
      "price": {
        "unit_type": "￥",
        "price": "1000.0",
        "unit": "天"
      },
      "time": {
        "start": "2020/03/14",
        "end": "2020/12/14",
        "total": "270天"
      },
      "process": true
    }],
    section2: [{
      name: '任务类型',
      typeId: '0'
    }, {
      name: '上海',
      typeId: '1'
    }, {
      name: '离我最近',
      typeId: '2'
    }, {
      name: '筛选',
      typeId: '3'
    }],
    filter_list: [{
      title: '南山区',
      index: "0",
      list: [{
        value: '南头',
        selected: false
      }, {
        value: '南山',
        selected: false
      }, {
        value: '沙河',
        selected: false
      }, {
        value: '西丽',
        selected: false
      }, {
        value: '招商',
        selected: false
      }, {
        value: '蛇口',
        selected: false
      }, {
        value: '粤海',
        selected: false
      }, {
        value: '桃园',
        selected: false
      }]
    }, {
      title: '龙岗区',
      index: "1",
      list: [{
        value: '平湖',
        selected: false
      }, {
        value: '布吉',
        selected: false
      }, {
        value: '坂田',
        selected: false
      }, {
        value: '南湾',
        selected: false
      }, {
        value: '横岗',
        selected: false
      }, {
        value: '龙城',
        selected: false
      }, {
        value: '龙岗',
        selected: false
      }, {
        value: '坪地',
        selected: false
      }]
    }, {
      title: '宝安区',
      index: "2",
      list: [{
        value: '新安',
        selected: false
      }, {
        value: '西乡',
        selected: false
      }, {
        value: '福永',
        selected: false
      }, {
        value: '沙井',
        selected: false
      }, {
        value: '松岗',
        selected: false
      }, {
        value: '石岩',
        selected: false
      }]
    }],
    task_type1:null,
    task_type2:null,
    task_type_right_list:null,
    area1:null,
    area2:null,
    area_right_list:null
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
  section: function (e) {
    let id = e.currentTarget.id;
    if (id) {
      if (this.data.sectionId == id) {
        this.setData({
          sectionId: null
        })
      } else {
        this.setData({
          sectionId: id
        })
      }
    }
  },
  //点击每个导航的点击事件
  handleTap: function (e) {
    let id = e.currentTarget.id;
    if (id) {
      this.setData({
        currentId: id
      })
    }
  },
  details : function(e){
    console.log(e.currentTarget.dataset.title)
    wx.navigateTo({
      url: '../details/index?title='+e.currentTarget.dataset.title
    })
  },
  task_type_left: function (e) {
    this.setData({
      task_type1: this.data.filter_list[e.target.dataset.index].title,
      task_type_right_list: this.data.filter_list[e.target.dataset.index].list
    })
  },
  task_type_right: function (e) {
    this.setData({
      task_type2: this.data.task_type_right_list[e.target.dataset.index].value
    })
    console.log("用户选择为", this.data.task_type1 + this.data.task_type2)
  },
  area_left: function (e) {
    this.setData({
      area1 : this.data.filter_list[e.target.dataset.index].title,
      area_right_list: this.data.filter_list[e.target.dataset.index].list
    })
  },
  area_right: function (e) {
    this.setData({
      area2: this.data.task_type_right_list[e.target.dataset.index].value
    })
    console.log("用户选择为", this.data.area1 + this.data.area2)
  },
  filter_bot: function (e) {
    let val = e.currentTarget.dataset.value;
    let index = e.currentTarget.dataset.index;
    let idx = e.currentTarget.dataset.idx;
    let string = "filter_list["+index+"].list["+idx+"].selected";
    this.setData({
      [string] : !this.data.filter_list[index].list[idx].selected
    })
  },
  quyuEmpty : function(){
    let newfilter_list = [...this.data.filter_list];
    newfilter_list.map(item=>{
      item.list.map(x=>{
        if(x.selected == true){
          x.selected = false;
        }
      })
    })
    this.setData({
      filter_list : newfilter_list
    })
  },
  submitFilter: function(){
    this.data.filter_list.map(item=>{
      item.list.map(x=>{
        if(x.selected == true){
           console.log(item.title,x.value) 
        }
      })
    })
    this.setData({
      sectionId : null
    })
  },
  hidebg : function(){
    this.setData({
      sectionId : null
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