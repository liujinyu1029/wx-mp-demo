App({
  onLaunch: function (options) {
    console.log('app onLaunch options:', options);
    let opt = wx.getLaunchOptionsSync();
    wx.showModal({
      title: 'App onLaunch options',
      content: JSON.stringify(opt),
      showCancel: true,
      cancelText: '取消',
      cancelColor: '#000000',
      confirmText: '确定',
      confirmColor: '#3CC51F'
    });

    console.log('app getLaunchOptionsSync:', opt);
    debugger;
  },
  onShow() {},
  onHide() {}
});
