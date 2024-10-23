<template>
    <view class="qr-code-modal" :class="{ 'show': show }" @click="$emit('close')">
        <view class="qr-code-content" :class="{ 'show': show }" @click.stop>
            <view class="qr-code-header">
                <text>会员码</text>
                <text class="close-btn" @click="$emit('close')">×</text>
            </view>
            <image class="qr-code" :src="qrCodeUrl" mode="aspectFit"></image>
            <text>扫描二维码</text>
        </view>
    </view>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

defineProps({
    show: Boolean,
    qrCodeUrl: String
})

defineEmits(['close'])
</script>

<style lang="scss" scoped>
.qr-code-modal {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: flex-end;
    opacity: 0;
    transition: opacity 0.3s ease;
    pointer-events: none;

    &.show {
        opacity: 1;
        pointer-events: auto;
    }
}

.qr-code-content {
    background-color: #ffffff;
    border-radius: 16rpx 16rpx 0 0;
    padding: 40rpx;
    width: 100%;
    height: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    transform: translateY(100%);
    transition: transform 0.3s ease;

    &.show {
        transform: translateY(0);
    }
}

.qr-code-header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20rpx;
}

.close-btn {
    font-size: 40rpx;
    color: #999;
    cursor: pointer;
}

.qr-code {
    width: 400rpx;
    height: 400rpx;
    margin-bottom: 20rpx;
}
</style>
