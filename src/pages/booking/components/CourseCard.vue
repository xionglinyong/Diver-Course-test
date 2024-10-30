<template>
    <view class="course-card flex box-border">
        <view class="course-image-box flex-none">
            <image class="course-image" src="/static/course-bg.png" mode="aspectFill"></image>
            <view class="course-time">{{ data.time }}</view>
        </view>

        <view class="course-info flex flex-col flex-auto">
            <view class="course-details flex flex-col">
                <text class="course-name fs-16" @click="handleJumpDetail">
                    {{ data.name }} · {{ data.coach.name }}
                </text>
                <view class="course-labels flex">
                    <text class="course-label fs-12 box-border" v-for="item in labels" :key="item">
                        {{ item }}
                    </text>
                </view>
            </view>
            <view class="course-foot flex">
                <view class="course-join flex fs-10">
                    <view class="user-avatars" v-if="userAvatats.length">
                        <image v-for="(item, i) in userAvatats" :key="i" :src="item.avatarUrl" mode="aspectFill">
                        </image>
                    </view>
                    <text>{{ joinCount }} 人已预约</text>
                </view>
                <view class="prebook-btn btn-gradient" @click="handlePreBook">预 约</view>
            </view>
        </view>
    </view>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
    data: {
        type: Object,
        default: () => ({}),
        required: true
    },
})

const emit = defineEmits(['prebook'])

const labels = computed(() => (props.data.labels || []).slice(0, 3))

const joinCount = computed(() => {
    return (props.data.joinUsers || []).length
})

const userAvatats = computed(() => (props.data.joinUsers || []).slice(0, 3))

const handleJumpDetail = () => {
    const url = '/pages/course-detail/course-detail'
    uni.navigateTo({
        url: `${url}?id=${props.data.id}`,
        success: (res) => {
            // res.eventChannel.emit('')
        }
    })
}

const handlePreBook = () => {
    emit('prebook')
}
</script>

<style lang="scss" scoped>
.course-card {
    justify-content: space-between;
    align-items: center;
    gap: var(--size-20);
    min-height: 180rpx;
    padding: 20rpx;
    background-color: var(--auxiliary-opacity-color-5);
    border-radius: var(--size-16);
}


.course-image-box {
    position: relative;
    border-radius: var(--size-8);
    overflow: hidden;

    .course-image {
        display: block;
        width: 30vw;
        height: auto;
        aspect-ratio: 1.25;
    }

    .course-time {
        position: absolute;
        width: 100%;
        bottom: 0;
        z-index: 1;
        padding: 6rpx 0;
        text-align: center;
        background-color: var(--mask-bg-color);
    }
}

.course-info {
    justify-content: space-between;
    min-height: inherit;

    .course-details {
        gap: var(--size-12);

        .course-name {
            font-weight: bold;
        }

        .course-labels {
            gap: var(--size-10)
        }

        .course-label {
            padding: 6rpx 10rpx;
            text-align: center;
            background-color: var(--auxiliary-opacity-color-3);
            border-radius: var(--size-8);
        }
    }

    .course-foot {
        justify-content: space-between;

        .course-join {
            align-items: center;
            gap: var(--size-12);
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

    .prebook-btn {
        padding: 16rpx 32rpx;
        background-color: #007AFF;
        border-radius: var(--size-12);
        font-size: 24rpx;
        font-weight: bold;
    }
}
</style> 