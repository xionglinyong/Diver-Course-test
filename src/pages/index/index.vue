<template>
    <view class="index-page flex flex-col">
        <!-- 活动banner列表 -->
        <swiper class="banner-swiper" :indicator-dots="true" :autoplay="true" :interval="3500" :duration="1000"
            @change="onSwiperChange">
            <swiper-item v-for="(item, index) in bannerList" :key="index" @click="navigateToBanner(item)">
                <image :src="item.imageUrl" mode="aspectFill"></image>
            </swiper-item>
        </swiper>

        <!-- 金刚位入口 -->
        <view class="quick-entry box-border">
            <view class="entry-item" v-for="(item, index) in entryList" :key="index">
                <image :src="item.icon" mode="aspectFit"></image>
                <text>{{ item.name }}</text>
            </view>
        </view>

        <!-- 特色服务推荐 -->
        <view class="featured-services">
            <view class="service-list">
                <view class="service-item" v-for="(item, index) in serviceList" :key="index">
                    <image :src="item.imageUrl" mode="aspectFit"></image>
                    <text>{{ item.name }}</text>
                </view>
            </view>
        </view>

        <!-- 近期活动列表 -->
        <view class="recent-activities">
            <view class="activity-item" v-for="(item, index) in activityList" :key="index">
                <image :src="item.imageUrl" mode="aspectFit"></image>
                <view class="activity-info">
                    <text class="activity-title">{{ item.title }}</text>
                    <text class="activity-date">{{ item.date }}</text>
                </view>
            </view>
        </view>
    </view>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { onLoad, onShow } from "@dcloudio/uni-app"
import { request } from '@/utils/request'
import { updateTabActive } from "@/utils/common"

const defaultBanner = { imageUrl: '/static/default-banner.jpg', link: '' }
const bannerList = ref([defaultBanner])
const currentBannerIndex = ref(0)

const entryList = ref([
    { icon: '/static/icon1.png', name: '功能1' },
    { icon: '/static/icon2.png', name: '功能2' },
    { icon: '/static/icon3.png', name: '功能3' },
    { icon: '/static/icon4.png', name: '功能4' },
])

const serviceList = ref([
    { imageUrl: '/static/service1.jpg', name: '服务1' },
    { imageUrl: '/static/service2.jpg', name: '服务2' },
    { imageUrl: '/static/service3.jpg', name: '服务3' },
])

const activityList = ref([
    { imageUrl: '/static/activity1.jpg', title: '活动1', date: '2023-04-15' },
    { imageUrl: '/static/activity2.jpg', title: '活动2', date: '2023-04-20' },
    { imageUrl: '/static/activity3.jpg', title: '活动3', date: '2023-04-25' },
])

const fetchBanners = async () => {
    try {
        const data = await request({
            url: 'https://api.example.com/banners', // 替换为实际的API地址
            cache: true,
            cacheKey: 'homeBanners'
        })

        bannerList.value = [defaultBanner, ...data]
        currentBannerIndex.value = 0 // 切换到第一张图片
    } catch (error) {
        console.error('获取banner列表失败:', error)
    }
}

const navigateToBanner = (banner) => {
    if (banner.link) {
        uni.navigateTo({
            url: banner.link
        })
    }
}

const onSwiperChange = (e) => {
    currentBannerIndex.value = e.detail.current
}

onLoad(() => {
    console.log('页面加载完成')
    fetchBanners()
})

onShow(() => {
    updateTabActive()
})

onMounted(() => {
    console.log('组件挂载完成')
})
</script>

<style lang="scss" scoped>
.index-page {
    align-items: center;
    justify-content: center;

    ::-webkit-scrollbar {
        display: none;
        width: 0;
        height: 0;
        color: transparent;
    }
}

.banner-swiper {
    width: 100%;
    height: 30vh;

    image {
        width: 100%;
        height: 100%;
    }
}

.quick-entry {
    display: flex;
    justify-content: space-around;
    width: 100%;
    padding: 20rpx 16rpx;

    .entry-item {
        display: flex;
        flex-direction: column;
        align-items: center;

        image {
            width: 80rpx;
            height: 80rpx;
        }
    }
}

.featured-services,
.recent-activities {
    width: 100%;
    padding: 20rpx 0;
}

.service-list {
    display: flex;
    justify-content: space-between;
    padding: 0 20rpx;

    .service-item {
        width: 30%;
        text-align: center;

        image {
            width: 100%;
            height: 150rpx;
        }
    }
}

.activity-item {
    display: flex;
    margin-bottom: 20rpx;

    image {
        width: 200rpx;
        height: 150rpx;
        margin-right: 20rpx;
    }

    .activity-info {
        display: flex;
        flex-direction: column;
        justify-content: space-around;

        .activity-title {
            font-size: 28rpx;
            font-weight: bold;
        }

        .activity-date {
            font-size: 24rpx;
            color: #999;
        }
    }
}
</style>
