Page({
  data: {},
  // 监听页面加载
  onLoad() {
    debugger;
  },
  // 监听页面显示
  onShow() {
    debugger;
  },
  // 监听页面初次渲染完成
  onReady() {
    debugger;
  },
  // 监听页面隐藏
  onHide() {
    wx.showModal({
      title: 'page onHide'
    });
    debugger;
  },
  // 监听页面卸载
  onUnload() {
    wx.showModal({
      title: 'page onUnload'
    });
    debugger;
  }
});
