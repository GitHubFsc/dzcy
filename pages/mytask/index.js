//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    currentId: '0',
    section1: [{
      name: '待确认',
      typeId: '0'
    }, {
      name: '待完成',
      typeId: '1'
    }, {
      name: '已完成',
      typeId: '2'
    }, {
      name: '已取消',
      typeId: '3'
    }],
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
    private : null,
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({})
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
  details: function (e) {
    let name = this.data.section1.filter(x => {
      if (x.typeId == this.data.currentId) {
        return x.name;
      }
    })
    let title = e.currentTarget.dataset.title;
    console.log("title", name[0].name + "   " + title);
    wx.navigateTo({
      url: '../details/index?title=' + e.currentTarget.dataset.title + '&currentId=' + this.data.currentId+ '&private=' + this.data.private
    })
  },
  //申诉
  appeal: function(){
    wx.navigateTo({
      url: '../appeal/index' 
    })
  },
  onLoad: function () {
    let sun = Math.ceil(Math.random() * 10);
    console.log("sun", sun);
    console.log("this.data.private", this.data.private);
    if (sun < 5) {
      this.setData({
        private: true
      })
    }else{
      this.setData({
        private: false
      })
    }
  },
  getUserInfo: function (e) {}
})