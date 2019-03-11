// pages/home/home.js
Page({
    data: {
      lists: [
        { id: 1, text: "单向数据流和双向数据绑定的区别", finished: false },
        { id: 2, text: "手写ajax", finished: false },
        { id: 3, text: "什么是跨域，跨域的方法有几种", finished: true },
        { id: 4, text: "promise的用法是什么，能手写一下", finished: false },
        { id: 5, text: "let,const,vard的区别", finished: true },
        { id: 6, text: "闭包是什么", finished: true }

      ],
      visibleConfirm: false
    },
    hideConfirm() {
      this.setData({ visibleConfirm: false})
    },
    showConfirm() {
      this.setData({ visibleConfirm: true })
    },
    createConfirm(event) {
      let content = event.detail
      if(content) {
        let todo = [{id: this.data.lists.length+1, text: content, finished: false}]
        this.data.lists = todo.concat(this.data.lists)
        this.setData({ lists: this.data.lists})
        this.hideConfirm()
      }
    },
    completeTodo(event) {
      let index = event.currentTarget.dataset.index
      this.data.lists[index].finished = true
      this.setData({ lists: this.data.lists})
    },


    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

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