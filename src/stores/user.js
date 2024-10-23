import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({
    token: null,
    userInfo: null,
  }),
  getters: {
    isLoggedIn: (state) => !!state.token,
  },
  actions: {
    setToken(token) {
      this.token = token;
      // 可以在这里将 token 保存到本地存储
      uni.setStorageSync("userToken", token);
    },
    setUserInfo(userInfo) {
      this.userInfo = userInfo;
    },
    logout() {
      this.token = null;
      this.userInfo = null;
      // 清除本地存储的 token
      uni.removeStorageSync("userToken");
    },
    // 从本地存储加载 token
    loadToken() {
      const token = uni.getStorageSync("userToken");
      if (token) {
        this.setToken(token);
      }
    },
  },
});
