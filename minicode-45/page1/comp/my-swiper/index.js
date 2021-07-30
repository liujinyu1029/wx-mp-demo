
Component({
  data: {
    background: ['demo-text-1', 'demo-text-2', 'demo-text-3','demo-text-4','demo-text-5'],
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    circular: true,
    interval: 2000,
    duration: 500,
    previousMargin: 0,
    nextMargin: 0
  },
  created(){
    this.initMVRecord();
    this.emitMV()
  },
  methods:{
    sendMV(index){
      wx.showToast({
        title: '已曝光:'+index,
      })
      console.log("已曝光:",index)
    },
    initMVRecord(){
      this._data_mvRecordList = this.data.background.map(()=>false);
      this._data_index = 0
    },
    emitMV(){
      // 当前app是否在前台
      const {isAppInFront} = getApp().globalData;
      // 是否已经曝光过
      const currentIndex = this._data_index;
      const isAlreadyMV = this._data_mvRecordList[currentIndex];
      // 进入前台&未触发过MV
      if(isAppInFront && !isAlreadyMV){
        this.sendMV(currentIndex);
        this._data_mvRecordList[currentIndex] = true;
      }
    },
    onChange({detail:{current}}){
      this._data_index = current;
      this.emitMV()
    }
  }
})
