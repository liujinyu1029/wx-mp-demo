App({
  globalData:{
    // 小程序正在前台显示
    isAppInFront:false
  },
  onLaunch: function () {

  },
  onShow(){
    this.globalData.isAppInFront = true
  },
  onHide(){
    this.globalData.isAppInFront = false
  },
})
