const dataDomList = [{
  id:0,
  data:11
},{
  id:1,
  data:22
},{
  id:2,
  data:33
},{
  id:3,
  data:44
},{
  id:4,
  data:55
},{
  id:5,
  data:66
}]

Page({
  data: {
  },
  // server层使用的数据，不用于dom渲染
  _data:{},
  isBaoGuang(res){
    console.log('已曝光：',res.dataset)
  },
  onPageScroll(){
    this.queryExec()
  },
  queryExec(){
    this._query.exec(([domList,screen])=>{      
      domList.forEach((dom,index)=>{
        if(!this._data.mvDoneList[index] && (dom.top < screen.height && dom.bottom > 0)) {
          this._data.mvDoneList[index] = true;
          this.isBaoGuang(dom)
        }
      })
    })
  },
  initSelectorQuery(){
    let query = this.createSelectorQuery();
    query.selectAll('.scroll-item').boundingClientRect();
    query.selectViewport().fields({
      size:true,
    });
    this._query = query
  },
  onLoad(){
    this.initSelectorQuery()
    this.setData({domList:dataDomList},this.queryExec)
    // 创建dom曝光mv事件任务列表
    this._data.mvDoneList = dataDomList.map(()=>false)
  },
  doneTask(){
    return 
  },
})
