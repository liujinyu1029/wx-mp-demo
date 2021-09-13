Page({
  data: {
    userInfo: {},
    canIUseGetUserProfile: false,
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
        console.log('wx.getUserProfile:',res)
        debugger
        return
        this.setData({
          userInfo: res.userInfo
        })
      }
    })
  },
  getUserInfo(e) {
    // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
    console.log('button.getUserInfo',e)
    // debugger
    this.setData({
      userInfo: e.detail.userInfo
    })
  },
  getNumberTap(){
    console.log('click button.getUserPhone')
    // debugger
  },
  getUserPhone(e){
    console.log('button.getUserPhone',e)
    // ======
    console.log(e.detail.errMsg)
    console.log(e.detail.iv)
    console.log(e.detail.encryptedData)
    // debugger
  },
  wxLogin(){
    wx.login({
      success (res) {
        console.log('wx.login获取code成功:',res)
        if (res.code) {
          //发起网络请求
          // wx.request({
          //   url: 'https://example.com/onLogin',
          //   data: {
          //     code: res.code
          //   }
          // })
        } else {
          console.log('登录失败！' + res.errMsg)
        }
      },
      faile(err){
        debugger
      }
    })
  },
  checkSession(){
    wx.checkSession({
      success (res) {
        //session_key 未过期，并且在本生命周期一直有效
        console.log('wx.checkSession success:',res)
      },
      fail (err) {
        // session_key 已经失效，需要重新执行登录流程
        console.log('wx.checkSession fail:',err)
        // wx.login() //重新登录
      }
    })
  }
})
