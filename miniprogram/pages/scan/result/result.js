// pages/scan/result/result.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    msg:"",
    result:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // var that = this;
    // this.setData({msg:app.globalData.msg});
    // this.setData({result:app.globalData.result});
    // console.log(app.globalData.result)
    console.log("result onLoad")
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    //console.log("result onReady")
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    //console.log("result onShow")
    // console.log(123111111111111111111111111111111)
     this.setData({msg:app.globalData.msg});
     this.setData({result:app.globalData.result});
    //this.setData({result:wx.getStorageSync('result')});
   //console.log("读缓存成功")
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    //console.log("result onHide")
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
  click:function(){
    wx.switchTab({
      url: '/pages/scan/scan',
    });
    console.log("跳转到scan")
  }
})