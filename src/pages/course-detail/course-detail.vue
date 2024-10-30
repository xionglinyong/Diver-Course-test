<template>
    <view class="course-detail-page box-border">
        <!-- 需要变更布局-开始 -->

        <view class="course-body box-border">
            <image class="course-cover" :src="'/static/banner.png'" mode="aspectFill" />

            <view class="course-content">
                <view class="title-info flex flex-col fs-16 box-border">
                    <view>瑜伽导师</view>
                    <view class="title-info-status fs-10 flex">
                        <view>等级：</view>
                        <view>0 人已预约</view>
                    </view>
                    <view class="course-introduction fs-12">{{ 'nguie ahgiearigh eriag hiuearh giaer hgi' }}</view>
                </view>
                <view class="section-content">
                    <view class="">共济失调9儿啊通过儿啊还要 让哈尔换个</view>
                    <view class="">共济失调9儿啊通过儿啊还要 让哈尔换个</view>
                    <view class="">共济失调9儿啊通过儿啊还要 让哈尔换个</view>
                </view>
            </view>
        </view>

        <view class="course-info-section">
            <view class="info-item">
                <text class="icon">🕒</text>
                <view class="info-content">
                    <text class="label">时间</text>
                    <text class="value">{{ courseInfo.time }}</text>
                </view>
            </view>
            <view class="info-item">
                <text class="icon">📍</text>
                <view class="info-content">
                    <text class="label">场馆</text>
                    <text class="value">{{ courseInfo.location }}</text>
                    <text class="address">{{ courseInfo.address }}</text>
                </view>
            </view>
        </view>

        <view class="coach-section">
            <text class="section-title">教练详情</text>
            <view class="coach-card" @click="navigateToCoach">
                <image class="coach-avatar" :src="courseInfo.coach?.avatar" mode="aspectFill" />
                <view class="coach-info">
                    <text class="coach-name">{{ courseInfo.coach?.name }}</text>
                    <text class="coach-desc">从业8年 | 私教认证</text>
                </view>
                <button class="contact-btn">联系</button>
            </view>
        </view>

        <view class="venue-section">
            <text class="section-title">场馆介绍</text>
            <scroll-view class="venue-images" scroll-x>
                <image v-for="(img, index) in courseInfo.venueImages" :key="index" :src="img" mode="aspectFill"
                    class="venue-image" />
            </scroll-view>
        </view>
        <!-- 需要变更布局-结束 -->

        <view class="bottom-action">
            <button class="book-btn btn-gradient" @click="handleBook">立即预约</button>
        </view>
    </view>
</template>

<script setup>
import { ref } from 'vue'
import { onLoad } from '@dcloudio/uni-app'
import { getEventChannel } from "@/utils/common"

const courseInfo = ref({})

onLoad(() => {
    const eventChannel = getEventChannel()
    eventChannel.on('data', (data) => {
        coachInfo.value = data
    })
})

const navigateToCoach = () => {
    // uni.navigateTo({
    //     url: '/pages/coach-detail/coach-detail',
    //     success: (res) => {
    //         res.eventChannel.emit('coachData', courseInfo.value.coach)
    //     }
    // })
}

const handleBook = () => {
    // 处理预约逻辑
    uni.showToast({
        title: '预约成功',
        icon: 'success'
    })
}
</script>

<style lang="scss" scoped>
.course-detail-page {
    min-height: 100vh;
    background-color: var(--primary-bg-color);
}

.bottom-action {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 20rpx 40rpx calc(20rpx + env(safe-area-inset-bottom));
    background: var(--primary-opacity-bg-color-2);
    backdrop-filter: blur(6px);

    .book-btn {
        width: 100%;
        height: 88rpx;
        line-height: 88rpx;
        text-align: center;
        border-radius: var(--size-12);
        font-size: var(--size-32);
        font-weight: bold;
    }
}

.course-body {
    position: relative;
    padding-top: 18vh;

    .course-cover {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        display: block;
        width: 100%;
        height: 25vh;
        object-fit: cover;
        z-index: 0;
    }

    .title-info {
        justify-content: space-between;
        min-height: 9.5vh;
        padding: var(--size-24) var(--size-24) 0;
        background-color: var(--primary-opacity-bg-color-3);
        border-radius: var(--size-20) var(--size-20) 0 0;
        backdrop-filter: blur(6px);

        .title-info-status {
            justify-content: space-between;
        }

        .course-introduction {}
    }

    .course-content {
        position: relative;
        padding-bottom: var(--size-24);
        z-index: 1;
    }

    .section-content {
        padding: var(--size-20) var(--size-24) 0;
    }
}

.course-header {
    position: relative;
    margin: -30rpx -30rpx 40rpx;

    .course-basic-info {
        padding: 30rpx;
        background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        color: #fff;

        .difficulty-level {
            margin-bottom: 20rpx;

            .stars {
                color: #00ff00;
                margin-right: 10rpx;
            }

            .level-text {
                font-size: 24rpx;
            }
        }

        .course-name {
            font-size: 40rpx;
            font-weight: bold;
            margin-bottom: 10rpx;
        }

        .course-desc {
            font-size: 26rpx;
            opacity: 0.8;
        }
    }
}

.course-info-section {
    background: #1a1a1a;
    border-radius: 16rpx;
    padding: 30rpx;
    margin-bottom: 40rpx;

    .info-item {
        display: flex;
        align-items: flex-start;
        margin-bottom: 20rpx;

        &:last-child {
            margin-bottom: 0;
        }

        .icon {
            margin-right: 20rpx;
            font-size: 36rpx;
        }

        .info-content {
            .label {
                font-size: 24rpx;
                color: #999;
                margin-bottom: 6rpx;
            }

            .value {
                font-size: 28rpx;
                color: #fff;
            }

            .address {
                font-size: 24rpx;
                color: #666;
                margin-top: 4rpx;
            }
        }
    }
}

.coach-section {
    margin-bottom: 40rpx;

    .section-title {
        color: #fff;
        margin-bottom: 20rpx;
    }

    .coach-card {
        background: #1a1a1a;
        border-radius: 16rpx;
        padding: 20rpx;
        display: flex;
        align-items: center;

        .coach-avatar {
            width: 100rpx;
            height: 100rpx;
            border-radius: 50%;
            margin-right: 20rpx;
        }

        .coach-info {
            flex: 1;

            .coach-name {
                font-size: 32rpx;
                color: #fff;
                margin-bottom: 6rpx;
            }

            .coach-desc {
                font-size: 24rpx;
                color: #666;
            }
        }

        .contact-btn {
            padding: 10rpx 30rpx;
            background: #00ff00;
            border-radius: 30rpx;
            font-size: 26rpx;
            color: #000;
        }
    }
}

.venue-section {
    .section-title {
        color: #fff;
        margin-bottom: 20rpx;
    }

    .venue-images {
        white-space: nowrap;

        .venue-image {
            display: inline-block;
            width: 280rpx;
            height: 180rpx;
            margin-right: 20rpx;
            border-radius: 12rpx;

            &:last-child {
                margin-right: 0;
            }
        }
    }
}
</style> 