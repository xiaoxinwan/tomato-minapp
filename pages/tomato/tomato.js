// pages/tomato/tomato.js
Page({
  timer: null, // 先初始化timer 
  data: {
    defaultSecond: 1500, // 相当于25分钟
    time: '',            // 番茄中显示的时间
    timerStatus: 'stop', // 定时器状态
    confirmVisible: false,
    againButtonVisible: false
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.startTimer()
  },
  startTimer(){
    // 首先改变定时器状态
    this.setData({timerStatus: 'start'})
    this.changeTime()
    this.timer = setInterval(() => {
      this.data.defaultSecond = this.data.defaultSecond - 1
      this.changeTime()
      if(this.data.defaultSecond === 0){
        this.setData({againButtonVisible: true})
        return this.clearTimer()
      }   
    },1000)
  },
  againTimer() {
    this.data.defaultSecond = 1500
    this.setData({ againButtonVisible: false })
    this.startTimer()
  },
  clearTimer() {
    clearInterval(this.timer)
    this.timer = null
    this.setData({timerStatus: 'stop'})
  },
  changeTime() {
    let minute = Math.floor(this.data.defaultSecond/60)
    let second = Math.floor(this.data.defaultSecond%60)
    if(second === 0){
      second === '00'
    }
    if((second+"").length === 1){
      second = '0' + second
    }
    if ((minute+"").length === 1) {
      minute = '0' + minute
    }
    this.setData({time: `${minute}:${second}`})
  },
  showConfirm() {
    this.setData({ confirmVisible: true})
    this.clearTimer()
  },
  hideConfirm() {
    this.setData({confirmVisible: false})
    this.startTimer()
  },
  confirmAbandon(event){
    let content = event.detail
    wx.navigateBack({
      to: -1
    })
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