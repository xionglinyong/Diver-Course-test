<template>
    <view class="drawer-dialog" :class="{ 'show': show }" @click="$emit('close')">
        <view class="drawer-content" :style="{ height: height }" @click.stop>
            <view v-if="title" class="drawer-header">
                <text class="drawer-title">{{ title }}</text>
                <text class="close-btn" @click="$emit('close')">×</text>
            </view>
            <view class="drawer-body">
                <slot></slot>
            </view>
        </view>
    </view>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
    show: {
        type: Boolean,
        default: false
    },
    title: {
        type: String,
        default: ''
    },
    height: {
        type: String,
        default: '45vh'
    }
})

defineEmits(['close'])
</script>

<style lang="scss" scoped>
.drawer-dialog {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1200;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    background-color: var(--mask-bg-color);
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.3s ease;

    &.show {
        opacity: 1;
        pointer-events: auto;
    }
}

.drawer-content {
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: var(--primary-bg-color);
    border-radius: var(--size-16) var(--size-16) 0 0;
    transform: translateY(100%);
    transition: transform 0.3s ease;

    .show & {
        transform: translateY(0);
    }
}

.drawer-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20rpx;
    border-bottom: 1rpx solid #eee;
}

.drawer-title {
    font-size: 32rpx;
    font-weight: bold;
}

.close-btn {
    font-size: 40rpx;
    color: #999;
    cursor: pointer;
}

.drawer-body {
    flex: 1;
    overflow: hidden;
}
</style>
