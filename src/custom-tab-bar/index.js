Component({
  data: {
    selected: "",
    list: [
      {
        pagePath: "/pages/index/index",
        iconPath: "/static/tabbar/home.png",
        selectedIconPath: "/static/tabbar/home-active.png",
        text: "首页",
      },
      {
        pagePath: "/pages/booking/booking",
        iconPath: "/static/tabbar/booking.png",
        selectedIconPath: "/static/tabbar/booking-active.png",
        text: "课程预约",
      },
      {
        pagePath: "/pages/my/my",
        iconPath: "/static/tabbar/my.png",
        selectedIconPath: "/static/tabbar/my-active.png",
        text: "我的",
      },
    ],
  },
  created() {
    console.log("created");
  },
  ready() {
    console.log("ready");
  },
  attached() {
    const app = getApp();
    const index = app.getGlobalData("tabActive");
    console.log(this);
    this.setData({ selected: index });
  },
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset;
      const url = data.path;

      const app = getApp();

      wx.switchTab({ url });
      this.setData({ selected: data.index });
      app.setGlobalData("tabActive", data.index);
    },
  },
});
