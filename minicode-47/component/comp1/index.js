Component({
  data: {
    age: 18
  },
  properties: {
    myName: {
      type: String,
      value: 'xxxxx',
      observer() {}
    }
  },
  // 组件生命周期函数-在组件实例刚刚被创建时执行，
  // 注意此时不能调用 setData (server层 数据已更改，但不会触发view层 渲染)
  created() {
    console.log('comp created setData:', this.setData({ age: 30 }));
    console.log('comp created data:', this.data);
    debugger;
  },
  // 组件生命周期函数-在组件实例进入页面节点树时执行)
  attached() {
    console.log('comp created setData:', this.setData);
    debugger;
  },
  // 组件生命周期函数-在组件布局完成后执行)
  ready() {
    debugger;
  },
  // 组件生命周期函数-在组件实例被移动到节点树另一个位置时执行)
  moved() {
    wx.showModal({
      title: 'page moved'
    });
    debugger;
  },
  // 组件生命周期函数-在组件实例被从页面节点树移除时执行)
  detached() {
    wx.showModal({
      title: 'page detached'
    });
    debugger;
  }
});
