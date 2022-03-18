// pages/mall/mall.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //商品图片列表
    goodsImageList:["cloud://garbage-classificati-9b61bfdf794.6761-garbage-classificati-9b61bfdf794-1310185794/static/img/goods/商品A.png","cloud://garbage-classificati-9b61bfdf794.6761-garbage-classificati-9b61bfdf794-1310185794/static/img/goods/商品B.png"],
    leftList:["cloud://garbage-classificati-9b61bfdf794.6761-garbage-classificati-9b61bfdf794-1310185794/static/img/goods/商品A.png","cloud://garbage-classificati-9b61bfdf794.6761-garbage-classificati-9b61bfdf794-1310185794/static/img/goods/商品B.png"],
    rightList:["cloud://garbage-classificati-9b61bfdf794.6761-garbage-classificati-9b61bfdf794-1310185794/static/img/goods/商品A.png","cloud://garbage-classificati-9b61bfdf794.6761-garbage-classificati-9b61bfdf794-1310185794/static/img/goods/商品B.png"]
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
  /**
  * 点击绑定的事件
  */
  clickMe: function (e) {

    var nid = e.currentTarget.dataset.nid;
    if (nid=="1"){
      wx.navigateTo({
        url: '/miniprogram/pages/redirect/mall1?id='+nid,
      });
    }
    else if (nid=="2")
    {
      wx.navigateTo({
        url: '/miniprogram/pages/redirect/mall2?id='+nid,
      });
    }
    //console.log(nid)
    //跳转
      
  }
})