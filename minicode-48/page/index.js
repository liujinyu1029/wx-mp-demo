Page({
  data: {},
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
  onShareTimeline() {
    return {
      title: '自定义转发标题',
      query: 'name=liujinyu'
      // imageUrl
    };
  },
  // 监听页面加载
  onLoad() {
    // "shareAppMessage"表示“发送给朋友”按钮，"shareTimeline"表示“分享到朋友圈”按钮
    // 显示“分享到朋友圈”按钮时必须同时显示“发送给朋友”按钮，显示“发送给朋友”按钮时则允许不显示“分享到朋友圈”按钮
    // 设置 withShareTicket 为 true ，当用户将小程序转发到任一群聊之后，此转发卡片在群聊中被其他用户打开时，可以在 App.onLaunch 或 App.onShow 获取到一个 shareTicket。通过调用 wx.getShareInfo 接口传入此 shareTicket 可以获取到转发信息
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
