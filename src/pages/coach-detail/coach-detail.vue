<template>
    <view class="coach-detail-page box-border">
        <view class="coach-header">
            <image class="coach-avatar" :src="coachInfo.avatar" mode="aspectFill" />
            <text class="coach-name">{{ coachInfo.name }}</text>
            <view class="coach-titles">
                <text v-for="(title, index) in coachInfo.titles" :key="index" class="title-text fs-12">{{ title }}</text>
            </view>
        </view>

        <view class="coach-stats flex">
            <view class="stat-item">
                <text class="stat-value">{{ coachInfo.experience || '3年' }}</text>
                <text class="stat-label">教龄</text>
            </view>
            <view class="stat-item">
                <text class="stat-value">{{ coachInfo.studentCount || '108' }}</text>
                <text class="stat-label">学员</text>
            </view>
            <view class="stat-item">
                <text class="stat-value">{{ coachInfo.rating || '4.9' }}</text>
                <text class="stat-label">评分</text>
            </view>
        </view>

        <view class="coach-classes">
            <view class="section-title">开课安排</view>
            <view class="class-list">
                <view v-for="course in coachInfo.classes" :key="course.id" class="class-item flex"
                    @click="navigateToCourse(course)">
                    <view class="class-info flex flex-col">
                        <text class="class-name">{{ course.name }}</text>
                        <text class="class-time">{{ course.time }}</text>
                        <view class="class-tags flex" v-if="course.labels?.length">
                            <text v-for="label in course.labels" :key="label" class="class-tag">{{ label }}</text>
                        </view>
                    </view>
                    <view class="class-status">
                        <text class="status-text">可预约</text>
                    </view>
                </view>
            </view>
        </view>

        <view class="coach-intro">
            <view class="section-title">教练简介</view>
            <text class="intro-text">{{ coachInfo.introduction || '暂无简介' }}</text>
        </view>

        <view class="coach-certificates" v-if="coachInfo.certificates?.length">
            <view class="section-title">持有证书</view>
            <view class="certificate-list">
                <view v-for="cert in coachInfo.certificates" :key="cert.id" class="certificate-item">
                    <image class="cert-image" :src="cert.image" mode="aspectFit" />
                    <text class="cert-name">{{ cert.name }}</text>
                </view>
            </view>
        </view>
    </view>
</template>

<script setup>
import { ref } from 'vue'
import { onLoad } from '@dcloudio/uni-app'
import { getEventChannel } from "@/utils/common"
import { coachList } from '@/mock'

const coachInfo = ref({})

onLoad(() => {
    const eventChannel = getEventChannel()
    eventChannel.on('data', (data) => {
        coachInfo.value = data
    })
})

const navigateToCourse = (course) => {
    // uni.navigateTo({
    //     url: '/pages/course-detail/course-detail',
    //     success: (res) => {
    //         res.eventChannel.emit('courseData', {
    //             ...course,
    //             coach: coachInfo.value
    //         })
    //     }
    // })
}
</script>

<style lang="scss" scoped>
.coach-detail-page {
    min-height: 100vh;
    padding: 30rpx;
    background-color: var(--primary-bg-color);
}

.coach-header {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 40rpx;

    .coach-avatar {
        width: 200rpx;
        height: 200rpx;
        border-radius: 50%;
        margin-bottom: 20rpx;
        border: 4rpx solid var(--auxiliary-color-4);
    }

    .coach-name {
        font-size: 40rpx;
        font-weight: bold;
        margin-bottom: 16rpx;
    }

    .coach-titles {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 16rpx;

        .title-text {
            color: var(--auxiliary-color-3);
        }
    }
}

.coach-stats {
    justify-content: space-around;
    margin-bottom: 40rpx;
    padding: 30rpx;
    background-color: var(--auxiliary-opacity-color-5);
    border-radius: var(--size-16);

    .stat-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 8rpx;

        .stat-value {
            font-size: var(--size-32);
            font-weight: bold;
            color: var(--primary-color);
        }

        .stat-label {
            font-size: var(--size-24);
            color: var(--auxiliary-color-3);
        }
    }
}

.section-title {
    font-size: var(--size-32);
    font-weight: bold;
    margin-bottom: 20rpx;
}

.coach-classes {
    margin-bottom: 40rpx;

    .class-item {
        justify-content: space-between;
        align-items: center;
        padding: 20rpx;
        margin-bottom: 20rpx;
        background-color: var(--auxiliary-opacity-color-5);
        border-radius: var(--size-16);

        .class-info {
            gap: 8rpx;

            .class-name {
                font-size: var(--size-28);
                font-weight: bold;
            }

            .class-time {
                font-size: var(--size-24);
                color: var(--auxiliary-color-3);
            }

            .class-tags {
                gap: 12rpx;

                .class-tag {
                    padding: 4rpx 16rpx;
                    background-color: var(--auxiliary-opacity-color-3);
                    border-radius: var(--size-8);
                    font-size: var(--size-24);
                }
            }
        }

        .class-status {
            .status-text {
                padding: 8rpx 24rpx;
                background-color: var(--primary-opacity-color);
                color: var(--primary-color);
                border-radius: var(--size-8);
                font-size: var(--size-24);
            }
        }
    }
}

.coach-intro {
    margin-bottom: 40rpx;

    .intro-text {
        font-size: var(--size-28);
        color: var(--auxiliary-color-2);
        line-height: 1.6;
    }
}

.coach-certificates {
    .certificate-list {
        display: flex;
        flex-wrap: wrap;
        gap: 20rpx;

        .certificate-item {
            width: 200rpx;
            text-align: center;

            .cert-image {
                width: 160rpx;
                height: 160rpx;
                margin-bottom: 10rpx;
            }

            .cert-name {
                font-size: var(--size-24);
                color: var(--auxiliary-color-2);
            }
        }
    }
}
</style> 