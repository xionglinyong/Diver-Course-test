<template>
  <view class="empty-container">
    <image class="empty-image" :src="image" mode="aspectFit"></image>
    <text class="empty-text">{{ text }}</text>
    <view v-if="buttonText" class="empty-button" @click="$emit('buttonClick')">
      {{ buttonText }}
    </view>
  </view>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  image: {
    type: String,
    default: '/static/empty-box.png' // 默认的空状态图片
  },
  text: {
    type: String,
    default: '暂无数据'
  },
  buttonText: {
    type: String,
    default: ''
  }
})

defineEmits(['buttonClick'])
</script>

<style lang="scss" scoped>
.empty-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 40rpx;
  box-sizing: border-box;
}

.empty-image {
  width: 200rpx;
  height: 200rpx;
  margin-bottom: 20rpx;
}

.empty-text {
  margin-bottom: 20rpx;
  font-size: var(--size-28);
  color: #999;
  text-align: center;
}

.empty-button {
  padding: 10rpx 20rpx;
  background-color: #007AFF;
  border-radius: var(--size-8);
  font-size: var(--size-28);
  color: #fff;
}
</style>
