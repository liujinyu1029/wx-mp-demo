Page({
  data: {
    viewPath: 'https://page.meituan.net/html/1628478749783_0e1eec/index.html'
  },
  onShareAppMessage(shareOpt) {
    wx.showModal({
      title: 'onShareAppMessage opt',
      content: JSON.stringify(shareOpt)
    });
    const promise = new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          title: '这里是（延时）分享标题'
        });
      }, 3001); //如果三秒内不 resolve，分享会使用下面传入的默认参数
    });
    return {
      title: '这里是分享标题',
      path: '/page/index?id=123',
      imageUrl: 'https://p0.inf.test.sankuai.com/sourceposition/179b95ce5cb8442d7a4a480a888fc004161987.jpg',
      promise
    };
  },
  // ！！注意：webView不支持分享到朋友圈
  onShareTimeline() {
    return {
      title: '自定义转发标题',
      query: 'name=liujinyu'
      // imageUrl
    };
  },
  // 监听页面加载
  onLoad() {
    wx.showShareMenu({
      withShareTicket: true,
      menus: ['shareAppMessage', 'shareTimeline']
    });
  },
  // 监听页面显示
  onShow() {},
  // 监听页面初次渲染完成
  onReady() {},
  // 监听页面隐藏
  onHide() {
    wx.showModal({
      title: 'page onHide'
    });
  },
  // 监听页面卸载
  onUnload() {}
});
