App({
  // 监听小程序初始化
  onLaunch: function (options) {
    const {shareTicket} = options
    // 过调用 wx.getShareInfo 接口传入此 shareTicket 可以获取到转发信息。
    wx.getShareInfo({
      timeout:5000,
      success(res){
        console.log(res)
      },
      fail(err){
        console.log(err)
      },
      complete(res){
        console.log(res)
      }
    })
  },
  // 监听小程序启动或切前台。
  onShow() {},
  // 监听小程序切后台。
  onHide() {
    wx.showModal({
      title: 'App onHide'
    });
  },
  onError() {}
});
