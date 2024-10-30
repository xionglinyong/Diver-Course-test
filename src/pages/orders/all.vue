<template>
  <view class="header">
    <input
      v-model="searchQuery"
      class="search-input"
      placeholder="搜索订单..."
    />
    <view class="tab-container">
      <view
        v-for="tab in TABS"
        :key="tab.status"
        :class="['tab', { active: currentTab === tab.status }]"
        @click="currentTab = tab.status"
      >
        {{ tab.label }}
      </view>
    </view>
  </view>

  <view class="order-list">
    <view v-for="order in filteredOrders" :key="order.id" class="order-item">
      <image :src="'/static/class-cover.jpeg'" class="cover" mode="aspectFit" />
      <view class="description">
        <span class="name">{{ order.description }}</span>
        <span class="time">{{ order.purchaseTime }}</span>
      </view>
      <span class="price">￥{{ order.price }}</span>
    </view>
    <Empty v-if="filteredOrders.length === 0" />
  </view>
</template>

<script setup>
import { computed, ref } from "vue";
import { onLoad } from "@dcloudio/uni-app";
import Empty from "@/components/Empty.vue";
import { STATUS, TABS, fetchOrders } from "./mock.js";

// 状态管理
const searchQuery = ref("");
const currentTab = ref(STATUS.All);
const orders = ref([]);

// 获取订单数据
const loadOrders = async () => {
  try {
    orders.value = await fetchOrders();
  } catch (error) {
    console.error("Failed to fetch orders:", error);
    // 这里可以添加错误处理，比如显示错误提示
  } finally {
  }
};

// 过滤订单列表
const filteredOrders = computed(() => {
  let filtered = orders.value;

  // 搜索过滤
  if (searchQuery.value) {
    filtered = filtered.filter((order) =>
      order.description.toLowerCase().includes(searchQuery.value.toLowerCase())
    );
  }

  // 状态过滤
  if (currentTab.value !== STATUS.All) {
    filtered = filtered.filter((order) => order.status === currentTab.value);
  }

  return filtered;
});

// 页面加载时执行
onLoad(() => {
  loadOrders();
});
</script>

<style lang="scss" scoped>
.header {
  position: sticky;
  top: 77rpx;
  left: 0;
  z-index: 9;
  padding: var(--size-20);
  background: var(--primary-bg-color);

  .search-input {
    width: 100%;
    height: 64rpx;
    padding: 10rpx 24rpx;
    margin-bottom: 20rpx;
    box-sizing: border-box;
    border: 1px solid var(--auxiliary-color-2);
    border-radius: 50rpx;
  }

  .tab-container {
    display: flex;
    justify-content: space-around;
    margin-bottom: 20rpx;

    .tab {
      padding: 10rpx 20rpx;

      &.active {
        font-weight: bold;
        border-bottom: 2px solid var(--primary-color);
      }
    }
  }
}

.order-list {
  display: flex;
  flex-direction: column;
  gap: 10rpx;
  padding: var(--size-20);
  box-sizing: border-box;
}

.order-item {
  display: flex;
  align-items: center;
  gap: var(--size-20);
  height: 200rpx;
  padding: 0 20rpx;
  border-radius: 10rpx;
  background: var(--auxiliary-color-5);
  color: var(--auxiliary-color-1);
  box-sizing: border-box;

  .cover {
    width: 180rpx;
    height: 120rpx;
    border-radius: var(--size-10);
  }

  .description {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: var(--size-10);

    .name {
      font-size: var(--size-24);
      font-weight: 700;
    }

    .time {
      font-size: var(--size-20);
    }
  }

  .price {
    font-size: var(--size-32);
    font-weight: bold;
    color: var(--primary-color);
  }
}
</style>
