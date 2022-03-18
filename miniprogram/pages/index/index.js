// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    message: "这是一个绑定信息",
    name:"",
    path:"cloud://garbage-classificati-9b61bfdf794.6761-garbage-classificati-9b61bfdf794-1310185794/static/tabbar/图片 2.png",
    imageList:["cloud://garbage-classificati-9b61bfdf794.6761-garbage-classificati-9b61bfdf794-1310185794/static/tabbar/图片 2.png","cloud://garbage-classificati-9b61bfdf794.6761-garbage-classificati-9b61bfdf794-1310185794/static/tabbar/图片 2.png","cloud://garbage-classificati-9b61bfdf794.6761-garbage-classificati-9b61bfdf794-1310185794/static/tabbar/图片 2.png"]
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

  },
  /*
  */
  getUserName: function () {
    var that = this;
    wx.getUserInfo({
      success: function (res) {
        console.log(res)
        that.setData({message:"已经点击",name:res.userInfo.nickName,path:"cloud://garbage-classificati-9b61bfdf794.6761-garbage-classificati-9b61bfdf794-1310185794/static/tabbar/图片 3.png"})
      },
      fail: function (res) {

      }
    })
  },
  /**
   * 
   */
  imageLoad:function(){
    var that=this;
    wx.chooseImage({
      sizeType:['original', 'compressed'],
      sourceType:['album', 'camera'],
     success:function(res){
       that.setData({imageList:that.data.imageList.concat(res.tempFilePaths)});
     }
    })
  }
})