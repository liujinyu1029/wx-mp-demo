Page({
  data: {
    name: 2
  },
  onLoad(options) {
    console.log('onload 主包：', options);
    wx.showModal({
      title: '主包：page onLoad options',
      content: JSON.stringify(options),
      showCancel: true,
      cancelText: '取消',
      cancelColor: '#000000',
      confirmText: '确定',
      confirmColor: '#3CC51F'
    });
    let opt = wx.getLaunchOptionsSync();
    wx.showModal({
      title: '主包：app onLaunch options',
      content: JSON.stringify(opt),
      showCancel: true,
      cancelText: '取消',
      cancelColor: '#000000',
      confirmText: '确定',
      confirmColor: '#3CC51F'
    });

    console.log('getLaunchOptionsSync:', opt);
    debugger;
  }
});
