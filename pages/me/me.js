Page({
  data: {
    tab: 'tomato',
    lists: {
      "本周一": [
        { time: "12:00", text: "今天吃饭了吗", id: "1-1" },
        { time: "13:00", text: "今天吃饭了吗", id: "1-2" },
        { time: "14:00", text: "今天吃饭了吗", id: "1-3" }
      ],
      "本周二": [
        { time: "06:00", text: "今天吃饭了吗", id: "2-1" },
        { time: "08:00", text: "今天吃饭了吗", id: "2-2" }
      ],
      "本周三": [
        { time: "18:00", text: "今天吃饭了吗", id: "3-1" },
        { time: "20:00", text: "今天吃饭了吗", id: "3-2" },
        { time: "22:00", text: "今天吃饭了吗", id: "3-3" }
      ],
      "本周四": [
        { time: "06:00", text: "今天吃饭了吗", id: "4-1" },
        { time: "08:00", text: "今天吃饭了吗", id: "4-2" }
      ],
    }
  },
  changeTab(event) {
    let name = event.target.dataset.name
    this.setData({tab: name})
  },
  onLoad: function (options) {

  }
})