//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    currentId: '0',
    sectionId: null,
    section1: [{
      name: '推荐',
      typeId: '0'
    }, {
      name: '全部',
      typeId: '1'
    }, {
      name: '试用',
      typeId: '2'
    }],
    imgUrls: [
      'http://file.mumayi.com/forum/201401/16/231735cfp4046206r4i705.jpg',
      'http://img.pconline.com.cn/images/upload/upc/tx/wallpaper/1308/17/c2/24561028_1376699679455.jpg',
      'http://a.hiphotos.baidu.com/lvpics/h=800/sign=747f907658df8db1a32e71643922dddb/d53f8794a4c27d1efa04aa2a1dd5ad6eddc43839.jpg',
      'http://01.minipic.eastday.com/20170103/20170103093528_ef77318800292fb915f29a6049b4a0db_15.jpeg'
    ],
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
    task_type: {
      "不限": "",
      "福田区": ["沙头", "南园", "园岭", "华富", "福田", "梅林", "香蜜湖", "莲花", "福保", "华强北"],
      "南山区": ["南头", "南山", "沙河", "西丽", "蛇口", "招商", "粤海", "桃园"],
      "龙岗区": ["平湖", "布吉", "坂田", "南湾", "横岗", "龙城", "龙岗", "坪地"],
      "宝安区": ["新安", "西乡", "福永", "沙井", "松岗", "石岩"],
      "罗湖区": ["黄贝", "桂圆", "东门", "翠竹", "东晓", "南湖", "笋岗", "东湖", "莲塘", "清水河"],
      "龙华新区": ["民治", "龙华", "大浪", "观湖", "福城", "观澜"],
      "盐田区": ["海山", "盐田", "海沙", "沙头角"],
      "光明新区": ["光明", "公明"],
      "坪山新区": ["坪山", "坑梓"],
      "大鹏新区": ["葵冲", "大鹏", "南澳"]
    },
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
    task_type1: "不限",
    task_type2: "",
    task_type_right_list: "",
    area1: "不限",
    area2: "",
    area_right_list: "",
    filter_bot_list: [],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 500,
  },
  //事件处理函数
  bindViewTap: function () {},
  more: function () {
    wx.navigateTo({
      url: '../rmrw/index',
      // success:function(res){
      //   wx.redirectTo({
      //     //目的页面地址
      //     url: "../index/index",
      //   })
      // }     
    })
    
  },
  details : function(e){
    console.log(e.currentTarget.dataset.title)
    wx.navigateTo({
      url: '../details/index?title='+e.currentTarget.dataset.title
    })
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
  task_type_left: function (e) {
    this.setData({
      task_type1: e.target.dataset.city,
      task_type_right_list: this.data.task_type[e.target.dataset.city]
    })
  },
  task_type_right: function (e) {
    this.setData({
      task_type2: this.data.task_type_right_list[e.target.dataset.city]
    })
    console.log("用户选择为", this.data.task_type1 + this.data.task_type2)
  },
  area_left: function (e) {
    this.setData({
      area1: e.target.dataset.city,
      area_right_list: this.data.task_type[e.target.dataset.city]
    })
  },
  area_right: function (e) {
    this.setData({
      area2: this.data.area_right_list[e.target.dataset.city]
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
  search: function () {
    wx.navigateTo({
      url: '../search/index',
      // success:function(res){
      //   wx.redirectTo({
      //     //目的页面地址
      //     url: "../index/index",
      //   })
      // }     
    })
  },
  onLoad: function () {

  },
  getUserInfo: function (e) {}
})