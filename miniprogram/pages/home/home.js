Page({
  
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUseGetUserProfile: false,
    openid:" ",
    queryResult:" ",
    points: 0
  },
  onLoad() {
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
  },
  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认
    // 开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '用于完善会员资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res);
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
        //this.getOpenid()
        
        // this.onQuery(openid);
      }
    })
  },
  shibie:function (){
    wx.navigateTo({
      url: '/pages/home/shibie/shibie',
    })
  },

  jifen:function (){
    wx.navigateTo({
      url: '/pages/home/jifen/jifen',
    })
  },

  dingdan:function (){
    wx.navigateTo({
      url: '/pages/home/dingdan/dingdan',
    })
  },

  //获取当前用户openid
  getOpenid(){
    let that = this;
    wx.cloud.callFunction({
      name:'getopenid',
      complete:res=>{
        console.log('云函数获取到的openid:',res.result.openid)
        var openid = res.result.openid;
        that.setData({
          openid:openid
        })

        this.onQuery(openid)
      }
    })
  },

  //查询
  onQuery(openid) {
    const db = wx.cloud.database()
    db.collection('user').where({
      _openid: openid
    }).get({
      success: res => {
        this.setData({
          queryResult: JSON.stringify(res.data, null, 2),
          points: res.data[0]['points']
        })   
        //查看搜索的结果返回的data中的length 如果==0则没有该用户openid，需要添加一个记录到表内，相当于注册
        if(res.data['length']==0){
          db.collection("user").add({
          data: {
            points: 0
          }
          })
        }
        //库中存在当前openid的记录
        else{
          console.log('[数据库] [查询记录] 成功: ', res.data[0]['points'])
        }
      },
      fail: err => {
        wx.showToast({
          icon: 'none',
          title: '查询记录失败'
        })
        console.error('[数据库] [查询记录] 失败：', err)
      }
    })
  },



})