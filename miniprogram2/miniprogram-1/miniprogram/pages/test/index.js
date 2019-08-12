// miniprogram/pages/test/index.js
const db = wx.cloud.database({
  env: "release-a38306"
})
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataList:[],
    username:"",
    phone:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getData()
  },
  subHandle(aa){
    // const db = wx.cloud.database({
    //   env:"release-a38306"
    // })

    // console.log(this.data.username,this.data.phone)

    db.collection('test_user').add({
      data: {
        username: this.data.username,
        phone: this.data.phone,
        key:false
      }
    })
      .then(res => {
        console.log(res)
        this.getData()
      })
      .catch(console.error)

  },
  inpHandle(e){
    this.setData({
      [e.target.dataset.name]:e.detail
    })
  },
  getData(){
    db.collection('test_user').get().then((res)=>{
      this.setData({
        dataList:res.data
      })
    })
  },
  userUpdate(e){

    console.log(e.target.dataset.id)
    db.collection('test_user').doc(e.target.dataset.id).update({
      // data 传入需要局部更新的数据
      data: {
        // 表示将 done 字段置为 true
        phone: '000000'
      }
    })
      .then(()=>{
        this.getData()
      })
      .catch(console.error)
  },
  //删除数据
  userRemove(e){
    wx.showLoading({
      title: '删除数据...',
    })
    db.collection('test_user').doc(e.target.dataset.id).remove()
      .then(()=>{
        this.getData();
        wx.hideLoading()
      })
      .catch(console.error)
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})