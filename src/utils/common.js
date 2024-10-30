/**
 * 获取设备窗口信息（windows）
 * @returns
 */
export const getWindowInfo = () => {
  return wx.getWindowInfo ? wx.getWindowInfo() : uni.getSystemInfoSync();
};

/**
 * rpx 转换为 px
 * @param {number} rpx
 * @returns {number}
 */
export const rpxToPx = (rpx) => {
  const sys = getWindowInfo();
  const screenWidth = sys.screenWidth;
  return (screenWidth * Number.parseInt(rpx)) / 750;
};

/**
 * 获取当前页面可用高度（已计算 tabBar）
 * @returns {number}
 */
export const getPageHeight = () => {
  const sys = getWindowInfo();
  const tabBarHeight = (sys.screenWidth * Number.parseInt(110)) / 750;
  return sys.windowHeight - tabBarHeight;
};

/**
 * 更新 tab 的选中状态
 */
export const updateTabActive = () => {
  const app = getApp();
  const index = app.getGlobalData("tabActive");

  const pages = getCurrentPages();
  const page = pages[pages.length - 1];
  if (typeof page.getTabBar === "function") {
    page.getTabBar().setData({ selected: index });
  }
};

/**
 * 获取当前页的页面实例的事件通道
 * @returns
 */
export const getEventChannel = () => {
  const pages = getCurrentPages();
  const page = pages[pages.length - 1];
  const eventChannel = page.getOpenerEventChannel();

  return eventChannel;
};
