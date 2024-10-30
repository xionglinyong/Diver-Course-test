<template>
    <view class="coach-card flex box-border">
        <view class="coach-avatar">
            <image class="avatar-image box-border" :src="coachInfo.avatar" mode="aspectFill" />
        </view>

        <view class="coach-info flex flex-col flex-auto">
            <view class="class-details flex flex-col">
                <text class="coach-name" @click="">
                    {{ coachInfo.name }}
                </text>

                <text class="coach-title box-border">{{ titles }}</text>

                <view class="coach-labels flex">
                    <text class="coach-label classes box-border" v-for="item in classes" :key="item">
                        {{ item }}
                    </text>
                </view>
            </view>
        </view>

        <view class="class-foot flex-none">
            <view class="prebook-btn btn-gradient" @click="handlePreBook">预 约</view>
        </view>
    </view>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
    coachInfo: {
        type: Object,
        required: true,
        default: () => ({})
    },
})

const emit = defineEmits(['prebook'])

const titles = computed(() => (props.coachInfo.titles || []).join('、'))

const classes = computed(() => (props.coachInfo.classes || []).map(item => item.name))

const handlePreBook = () => {
    emit('prebook')
}
</script>

<style lang="scss" scoped>
.coach-card {
    justify-content: space-between;
    align-items: center;
    gap: var(--size-20);
    min-height: 180rpx;
    padding: 20rpx;
    background-color: var(--auxiliary-opacity-color-5);
    border-radius: var(--size-16);

    .coach-avatar {
        width: 17vw;

        .avatar-image {
            display: block;
            width: 100%;
            height: auto;
            aspect-ratio: 1;
            border-radius: var(--border-radius-round);
            border: 4rpx solid var(--auxiliary-color-4);
        }
    }

    .coach-info {

        .class-details {
            gap: var(--size-12);
        }

        .coach-name {
            font-size: var(--size-32);
            font-weight: bold;
        }

        .coach-title {
            font-size: var(--size-24);
            color: var(--auxiliary-color-4);
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .coach-labels {
            gap: var(--size-10)
        }

        .coach-label {
            padding: 6rpx 10rpx;
            text-align: center;
            font-size: var(--size-24);
            text-wrap: nowrap;
            background-color: var(--auxiliary-opacity-color-3);
            border-radius: var(--size-8);
        }
    }

    .prebook-btn {
        padding: 16rpx 32rpx;
        background-color: #007AFF;
        border-radius: var(--size-12);
        font-size: 24rpx;
        font-weight: bold;
    }
}
</style> 