<template>
    <view class="class-item flex box-border">
        <view class="class-img-box flex-none">
            <image class="class-img" src="/static/class-bg.png" mode="aspectFill"></image>
            <view class="class-time">{{ classInfo.time }}</view>
        </view>

        <view class="class-info flex flex-col flex-auto">
            <view class="class-details flex flex-col">
                <text class="class-name">{{ classInfo.name }}</text>
                <view class="class-labels flex">
                    <text class="class-label">
                        {{ classInfo.name }}
                    </text>
                </view>
            </view>
            <view class="class-foot flex">
                <view class="class-join flex">
                    <view class="user-avatars" v-if="userAvatats.length">
                        <image v-for="(item, i) in userAvatats" :key="i" :src="item.avatarUrl" mode="aspectFill">
                        </image>
                    </view>
                    <text>{{ joinCount }} 人已预约</text>
                </view>
                <view class="book-btn btn-gradient" @click="$emit('book')">预 约</view>
            </view>
        </view>
    </view>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
    classInfo: {
        type: Object,
        default: () => ({}),
        required: true
    },
})

defineEmits(['book'])

const joinCount = computed(() => {
    return (props.classInfo.joinUsers || []).length
})

const userAvatats = computed(() => (props.classInfo.joinUsers || []).slice(0, 3)
)
</script>

<style lang="scss" scoped>
.class-item {
    justify-content: space-between;
    align-items: center;
    gap: var(--size-20);
    min-height: 180rpx;
    padding: 20rpx;
    background-color: var(--auxiliary-opacity-color-5);
    border-radius: var(--size-16);
}


.class-img-box {
    position: relative;
    border-radius: var(--size-8);
    overflow: hidden;

    .class-img {
        display: block;
        width: 30vw;
        height: auto;
        aspect-ratio: 1.25;
    }

    .class-time {
        position: absolute;
        width: 100%;
        bottom: 0;
        z-index: 1;
        padding: 6rpx 0;
        text-align: center;
        background-color: var(--mask-bg-color);
    }
}

.class-info {
    justify-content: space-between;
    min-height: inherit;

    .class-details {
        gap: var(--size-10);

        .class-name {
            font-size: var(--size-32);
            font-weight: bold;
        }

        .class-labels {
            gap: var(--size-10)
        }

        .class-label {
            padding: 6rpx;
            text-align: center;
            font-size: var(--size-24);
            background-color: var(--auxiliary-color-5);
            border-radius: var(--size-8);
        }
    }

    .class-foot {
        justify-content: space-between;

        .class-join {
            align-items: center;
            gap: var(--size-12);
            font-size: var(--size-20);
            color: var(--auxiliary-color-4);

            .user-avatars {
                image {
                    width: var(--size-40);
                    height: var(--size-40);
                    border: 1rpx solid #000;
                    border-radius: var(--border-radius-round);
                }
            }
        }
    }

    .book-btn {
        padding: 16rpx 32rpx;
        background-color: #007AFF;
        border-radius: var(--size-12);
        font-size: 24rpx;
        font-weight: bold;
    }
}
</style> 