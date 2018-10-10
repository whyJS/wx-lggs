//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 1000,
    xinwenlist: [
      "王汉炎王汉炎王汉炎王汉炎王汉炎王汉炎",
      "王汉炎王汉炎王汉炎王汉炎王汉炎王汉炎",
      "王汉炎王汉炎王汉炎王汉炎王汉炎王汉炎",
      "王汉炎王汉炎王汉炎王汉炎王汉炎王汉炎"
    ],
    list:[{'xx':1},2,3,4,5,6,7,8,9,0,14,15],
    hasMore:true,
    page:1
  },
  // 页面加载
  onLoad: function () {
    console.log('asas')
      var res = wx.getStorageSync('mine',[])
      console.log(res)
      // console.log('xcxc')
      // if(!res){
      //   res=[]
      // }
      // console.log(res)
    
  },
// 下拉刷新
  onPullDownRefresh: function () {
    console.log('正在请求')
    setTimeout(()=>{
      console.log('请求完成')
      wx.stopPullDownRefresh()
    },1000)
  },
  // 上拉加载
  onReachBottom: function () {
    console.log('分页')
    if(this.data.page>3){
      return
    }
    let newpage = this.data.page+1
    this.setData({
      page: newpage
    })
    setTimeout(() => {
      let newlist = this.data.list.concat(this.data.list)
      console.log(this.data.page)
      if (this.data.page<3){
        this.setData({
          list: newlist,
          hasMore:true
        })
      }else{
        this.setData({
          list: newlist,
          hasMore: false
        })
      }
      
    }, 1000)
   
  },

  tapName(e){
    console.log(e)
  },
  // 跳转到趣养鸡
  qyj(){
    wx.navigateTo({
      url: '/pages/qyj/qyj'
    })
  }


})
