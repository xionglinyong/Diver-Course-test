<template>
  <DrawerDialog
    :show="show"
    title="会员码"
    @close="$emit('close')"
  >
    <view class="qr-code-content">
      <image
        class="qr-code"
        :src="qrCodeUrl"
        mode="aspectFit"
      ></image>
      <text>扫描二维码</text>
    </view>
  </DrawerDialog>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'
import DrawerDialog from './DrawerDialog.vue'

defineProps({
  show: Boolean,
  qrCodeUrl: String
})

defineEmits(['close'])
</script>

<style lang="scss" scoped>
.qr-code-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20rpx;
}

.qr-code {
  width: 400rpx;
  height: 400rpx;
  margin-bottom: 20rpx;
}
</style>
