import { useUserStore } from "@/stores/user";

// 缓存配置
const CACHE_TIME = 3600000; // 1小时

// 获取服务器时间
const getServerTime = (headers) => {
  const serverDate = headers["date"] || headers["Date"];
  return serverDate ? new Date(serverDate).getTime() : Date.now();
};

// 请求函数
export const request = async (options) => {
  const {
    url,
    method = "GET",
    data,
    params,
    headers = {},
    cache = false,
    cacheKey,
    cacheTime = CACHE_TIME,
  } = options;

  // 如果启用缓存,先尝试从缓存中获取数据
  if (cache && cacheKey) {
    const cachedData = uni.getStorageSync(cacheKey);
    const cacheTimestamp = uni.getStorageSync(`${cacheKey}_timestamp`);
    const serverTime = getServerTime(headers);

    if (
      cachedData &&
      cacheTimestamp &&
      serverTime - cacheTimestamp < cacheTime
    ) {
      return JSON.parse(cachedData);
    }
  }

  // 构建完整的URL
  const fullUrl = params ? `${url}?${new URLSearchParams(params)}` : url;

  try {
    const userStore = useUserStore();
    const token = userStore.token;

    // 添加授权头
    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }

    const response = await uni.request({
      url: fullUrl,
      method,
      data,
      header: headers,
    });

    if (response.statusCode >= 200 && response.statusCode < 300) {
      const serverTime = getServerTime(response.header);

      // 如果启用缓存,将数据存入缓存
      if (cache && cacheKey) {
        uni.setStorageSync(cacheKey, JSON.stringify(response.data));
        uni.setStorageSync(`${cacheKey}_timestamp`, serverTime);
      }
      return response.data;
    } else {
      throw new Error(`请求失败: ${response.statusCode}`);
    }
  } catch (error) {
    console.error("请求错误:", error);
    throw error;
  }
};

// // 获取服务器时间的辅助函数
// const getServerTime = async () => {
//   try {
//     const response = await uni.request({
//       url: 'https://api.example.com/time', // 替换为您的服务器时间API
//       method: 'HEAD',
//     });
//     return getServerTime(response.header);
//   } catch (error) {
//     console.error('获取服务器时间失败:', error);
//     return Date.now(); // 如果获取失败，退回到使用本地时间
//   }
// };
