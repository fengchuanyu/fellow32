// pages/test1/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    sum:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  subHandle(){
    console.log("com")
    wx.cloud.callFunction({
      // 要调用的云函数名称
      name: 'sum',
      // 传递给云函数的event参数
      data: {
        a: 1,
        b: 2,
      }
    }).then(res => {
      console.log(res);
    }).catch(err => {
      // handle error
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