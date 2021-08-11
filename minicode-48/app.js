App({
  // 监听小程序初始化
  onLaunch: function (options) {},
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
