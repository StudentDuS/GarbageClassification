// pages/scan/scan.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {

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
   * 绑定点击事件，
   *打开摄像头
  */

  takePhoto: function () {
    var that = this;
    wx.chooseMedia({
      count: 9,
      mediaType: ['image'],
      sourceType: ['album', 'camera'],
      camera: 'back',
      sizeType: ['compressed'],
      success:function(res) {
        //console.log(res.tempFiles.tempFilePath)
        //console.log(res);
        that.setData({ src: res.tempFiles[0].tempFilePath });
        app.globalData.tempFilePath = res.tempFiles[0].tempFilePath;
        //图片缓存地址存储到全局的app的globalData中
        //console.log(app.globalData.tempFilePath);
        //判断图片大小是否大于2M
        if (res.tempFiles[0].size > 2097152) {
          //console.log("图片过大")
          app.globalData.msg = "失败图片过大";
          wx.navigateTo({ url: 'result/result' });
        }
        else {
          wx.getFileSystemManager().readFile({
            filePath: app.globalData.tempFilePath,
            encoding: "base64",
            success: function (res) {
              wx.request({
                url: 'https://api.tianapi.com/imglajifenlei/index',
                method: 'POST',
                header: {
                  'content-type': 'application/x-www-form-urlencoded'
                },
                data: {
                  key: '87a5d76f51ced4bb8de7d773631998ad', img: res.data
                },
                success: function (msg) {
                  if (msg.data.code == 200) {
                    app.globalData.result = msg.data.newslist;
                    app.globalData.msg = "识别成功";
                    // wx.setStorageSync('result', msg.data.newslist);
                    //console.log("写缓存成功");
                    wx.navigateTo({ url: 'result/result' });
                  } else {
                    app.globalData.msg = "识别失败";
                    wx.navigateTo({ url: 'result/result' });
                  }
                },
                fail: function (err) {
                  console.log(err)
                  app.globalData.msg = "识别失败";

                }
              })
            },
            fail: function () {
              app.globalData.msg = "失败";
              wx.navigateTo({ url: 'result/result', });
            }
          });
        }
      },
      fail: function () {

      }
    });
  }
})