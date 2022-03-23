// pages/index/index.js
const db = wx.cloud.database();
var app = getApp();

Page({
  /**
   * 页面的初始数据
   */
  data: {
    Garbage:"",
    sq:0,
    ans:"",
    status:false,
    CheckStatus:false,
    istrue:""
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
    var that = this;
    db.collection("GarbageClassification").get({
      success: function (res) {
       // console.log(res);
        var GarbageList=res.data;
        //保存数据
        app.globalData.GarbageList = GarbageList;
        //设置初始垃圾名和类型
        that.setData({ans:GarbageList[0].type ,
        Garbage:GarbageList[0].Garbage});

      }
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

  },
    /**
   * 
   */
  next: function () {
 
  var sq=(this.data.sq+1)%18;
   var GarbageList = app.globalData.GarbageList;
   var Garbage=GarbageList[sq].Garbage
   //设置下一个垃圾名、编号、类型
   this.setData({Garbage:Garbage ,sq:sq,ans:GarbageList[sq].type});

   //隐藏结果和下一题按钮
    this.setData({status:false})
    this.setData({CheckStatus:false})
   
  },
    /**
   * 
   */
  choise:function (res) {
    if (res.detail.value==this.data.ans){
      this.setData({istrue:"回答正确"})
      console.log(res.detail.value,this.data.ans)
    }else{
      this.setData({istrue:"回答错误"})
      console.log(res.detail.value,this.data.ans)
    }
    //打开结果和下一题按钮
    this.setData({status:true});
    //

  }
  // createArr: function (num) {
  //   let arr = [];
  //   for (let i = 0; i < num; i++) {
  //     arr.push(i + 1);
  //   }
  //   let result = [];
  //   for (let i = arr.length - 1; i > 0; i--) {
  //     let rand = Math.ceil(Math.random() * i);//根据arr数组长度，随机产生一个索引
  //     //从原数组arr把该索引的元素删除，并加入到result数组--便是随机产生啦
  //     result.push(arr.splice(rand, 1));
  //   }
  //   return result;
  // }
})