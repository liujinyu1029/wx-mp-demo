App({
  // 监听小程序初始化
  onLaunch: function (options) {
    debugger;
  },
  // 监听小程序启动或切前台。
  onShow() {
    debugger;
  },
  // 监听小程序切后台。
  onHide() {
    wx.showModal({
      title: 'App onHide'
    });
    debugger;
  },
  onError() {}
});
