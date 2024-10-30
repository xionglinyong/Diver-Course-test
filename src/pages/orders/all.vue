<template>
  <view class="header">
    <input v-model="searchQuery" class="search-input" placeholder="搜索订单..."/>
    <view class="tab-container">
      <view
        v-for="tab in tabs"
        :key="tab.status"
        :class="['tab', { active: currentTab === tab.status }]"
        @click="currentTab=tab.status"
      >
        {{ tab.label }}
      </view>
    </view>
  </view>
  <view class="order-list">
    <view v-for="order in filteredOrders" :key="order.id" class="order-item">
      <image :src="Cover" class="cover" mode="aspectFit"></image>
      <view class="description">
        <span class="name">{{ order.description }}</span>
        <span class="time">{{ order.purchaseTime }}</span>
      </view>
      <span class="price">￥{{ order.price }}</span>
    </view>
    <view v-if="filteredOrders.length === 0" class="empty">暂无订单</view>
  </view>
</template>

<script setup>
import Cover from '@/static/class-cover.jpeg'
import {computed, ref} from 'vue'


const STATUS = {
  All: 0,
  PendingPayment: 1,
  PendingShipment: 2,
  PendingReceipt: 3,
  Completed: 4
}

const tabs = [
  {label: '所有订单', status: STATUS.All},
  {label: '待付款', status: STATUS.PendingPayment},
  {label: '待发货', status: STATUS.PendingShipment},
  {label: '待收货', status: STATUS.PendingReceipt},
  {label: '已完成', status: STATUS.Completed}
]

// Mock数据
const allOrders = [
  {id: 1, description: '跑步课程', status: STATUS.PendingPayment, purchaseTime: '2023-10-01 10:00', price: 199.99},
  {id: 2, description: '游泳课程', status: STATUS.PendingShipment, purchaseTime: '2023-10-02 11:00', price: 249.99},
  {id: 3, description: '自行车课程', status: STATUS.PendingReceipt, purchaseTime: '2023-10-03 12:00', price: 299.99},
  {id: 4, description: '跳绳课程', status: STATUS.Completed, purchaseTime: '2023-10-04 13:00', price: 349.99},
  {id: 5, description: '有氧操课程', status: STATUS.PendingPayment, purchaseTime: '2023-10-05 14:00', price: 399.99},
  {id: 6, description: '哑铃训练课程', status: STATUS.PendingShipment, purchaseTime: '2023-10-06 15:00', price: 449.99},
  {id: 7, description: '杠铃训练课程', status: STATUS.PendingReceipt, purchaseTime: '2023-10-07 16:00', price: 499.99},
  {id: 8, description: '自重训练课程', status: STATUS.Completed, purchaseTime: '2023-10-08 17:00', price: 549.99},
  {
    id: 9,
    description: '力量训练器械课程',
    status: STATUS.PendingPayment,
    purchaseTime: '2023-10-09 18:00',
    price: 599.99
  },
  {id: 10, description: '瑜伽课程', status: STATUS.PendingShipment, purchaseTime: '2023-10-10 19:00', price: 649.99},
  {id: 11, description: '普拉提课程', status: STATUS.PendingReceipt, purchaseTime: '2023-10-11 20:00', price: 699.99},
  {id: 12, description: '拉伸课程', status: STATUS.Completed, purchaseTime: '2023-10-12 21:00', price: 749.99},
  {id: 13, description: '平板支撑课程', status: STATUS.PendingPayment, purchaseTime: '2023-10-13 22:00', price: 799.99},
  {
    id: 14,
    description: '仰卧起坐课程',
    status: STATUS.PendingShipment,
    purchaseTime: '2023-10-14 23:00',
    price: 849.99
  },
  {
    id: 15,
    description: '俄罗斯转体课程',
    status: STATUS.PendingReceipt,
    purchaseTime: '2023-10-15 00:00',
    price: 899.99
  },
  {id: 16, description: '侧桥课程', status: STATUS.Completed, purchaseTime: '2023-10-16 01:00', price: 949.99},
  {id: 17, description: '蹲跳课程', status: STATUS.PendingPayment, purchaseTime: '2023-10-17 02:00', price: 999.99},
  {id: 18, description: '高抬腿课程', status: STATUS.PendingShipment, purchaseTime: '2023-10-18 03:00', price: 1049.99},
  {
    id: 19,
    description: '冲刺训练课程',
    status: STATUS.PendingReceipt,
    purchaseTime: '2023-10-19 04:00',
    price: 1099.99
  },
  {id: 20, description: '波比跳课程', status: STATUS.Completed, purchaseTime: '2023-10-20 05:00', price: 1149.99},
]
const searchQuery = ref('')
const currentTab = ref(STATUS.All)

const filteredOrders = computed(() => {
  let arr = searchQuery.value ? allOrders.filter(order => order.description.includes(searchQuery.value)) : allOrders
  if (currentTab.value === STATUS.All) {
    return arr
  }

  return arr.filter(order => order.status === currentTab.value)
})
</script>

<style lang="scss" scoped>
.header {
  position: sticky;
  top: 77rpx;
  left: 0;
  background: var(--primary-bg-color);
  padding: var(--size-20);
  z-index: 9;

  .search-input {
    width: 100%;
    padding: 10rpx 24rpx;
    border: 1px solid var(--auxiliary-color-2);
    border-radius: 50rpx;
    margin-bottom: 20rpx;
    box-sizing: border-box;
    height: 64rpx;
  }

  .tab-container {
    display: flex;
    justify-content: space-around;
    margin-bottom: 20rpx;
  }

  .tab {
    padding: 10rpx 20rpx;
    cursor: pointer;
  }
}

.tab.active {
  font-weight: bold;
  border-bottom: 2px solid var(--primary-color);
}

.order-list {
  padding: var(--size-20);
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  gap: 10rpx;
  flex-direction: column;
}

.order-item {
  height: 200rpx;
  display: flex;
  gap: var(--size-20);
  align-items: center;
  padding: 0 20rpx;
  width: 100%;
  background: var(--auxiliary-color-5);
  box-sizing: border-box;
  border-radius: 10rpx;
  color: var(--auxiliary-color-1);

  .cover {
    width: 180rpx;
    height: 120rpx;
    border-radius: var(--size-10);
    background: #999999;
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

.empty {
  text-align: center;
}
</style>