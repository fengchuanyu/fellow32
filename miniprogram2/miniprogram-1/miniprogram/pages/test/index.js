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
    console.log(options.id);
  },
  subHandle(){
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