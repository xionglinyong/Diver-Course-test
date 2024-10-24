<template>
    <view class="my-page">
        <!-- 顶部背景区域 -->
        <view class="top-background">
            <!-- 证书卡片 -->
            <view class="user-card-box">
                <UserCard
                    :imageUrl="certificateImageUrl"
                    :showEditIcon="true"
                    @update:imageUrl="updateCertificateImage"
                ></UserCard>
            </view>
        </view>

        <!-- 用户信息 -->
        <view class="user-info">
            <image class="avatar" :src="userInfo.avatar" mode="aspectFill"></image>
            <view class="user-details">
                <text class="username">{{ userInfo.username }}</text>
                <text class="level">等级: {{ userInfo.level }}</text>
            </view>
            <view class="member-code" @click="showQRCode">
                <image class="code-icon" src="/static/qr-code-icon.png" mode="aspectFit"></image>
                <text>会员码</text>
            </view>
        </view>
    </view>

    <!-- 金刚位入口 -->
    <view class="quick-entry">
        <view class="entry-item" v-for="(item, index) in entryList" :key="index" @click="navigateTo(item.path)">
            <image :src="item.icon" mode="aspectFit"></image>
            <text>{{ item.name }}</text>
        </view>
    </view>

    <!-- 商城订单 -->
    <view class="mall-orders">
        <view class="section-header">
            <text class="section-title">我的订单</text>
            <view class="all-orders" @click="navigateTo('/pages/orders/all')">
                <text>全部订单</text>
                <text class="arrow">></text>
            </view>
        </view>
        <view class="order-types">
            <view class="order-type" v-for="(type, index) in orderTypes" :key="index" @click="navigateTo(type.path)">
                <image :src="type.icon" mode="aspectFit"></image>
                <text>{{ type.name }}</text>
            </view>
        </view>
    </view>

    <QRCodeModal :show="showQR" :qrCodeUrl="userInfo.qrCode" @close="hideQRCode" />
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useUserStore } from '@/stores/user'
import QRCodeModal from '@/components/QRCodeModal.vue'
import UserCard from '@/components/UserCard.vue'

const userStore = useUserStore()
const userInfo = ref({
    avatar: '/static/default-avatar.png',
    username: '加载中...',
    level: 0,
    qrCode: '/static/qr-code.png'
})

const showQR = ref(false)

const entryList = ref([
    { icon: '/static/icon1.png', name: '我的证书', path: '/pages/certificates/certificates' },
    { icon: '/static/icon2.png', name: '我的课程', path: '/pages/my-courses/my-courses' },
    { icon: '/static/icon3.png', name: '学习记录', path: '/pages/learning-records/learning-records' },
    { icon: '/static/icon4.png', name: '设置', path: '/pages/settings/settings' },
])

const orderTypes = ref([
    { icon: '/static/order-icon1.png', name: '待付款', path: '/pages/orders/unpaid' },
    { icon: '/static/order-icon2.png', name: '待发货', path: '/pages/orders/unshipped' },
    { icon: '/static/order-icon3.png', name: '待收货', path: '/pages/orders/unreceived' },
    { icon: '/static/order-icon4.png', name: '退款/售后', path: '/pages/orders/refund' },
])

const showQRCode = () => {
    showQR.value = true
}

const hideQRCode = () => {
    showQR.value = false
}

const navigateTo = (path) => {
    uni.navigateTo({ url: path })
}

const certificateImageUrl = ref('/static/default-certificate.jpg')

const updateCertificateImage = (newImageUrl) => {
    certificateImageUrl.value = newImageUrl
    // 这里可以添加逻辑来保存更新后的证书图片到用户信息中
}

onMounted(async () => {
    if (userStore.userInfo) {
        userInfo.value = userStore.userInfo
        certificateImageUrl.value = userStore.userInfo.certificateImageUrl || '/static/default-certificate.jpg'
    } else {
        // 模拟数据，实际应该从API获取
        userInfo.value = {
            avatar: '/static/default-avatar.png',
            username: '张三',
            level: 5,
            qrCode: '/static/qr-code.png',
            certificateImageUrl: '/static/default-certificate.jpg'
        }
        certificateImageUrl.value = userInfo.value.certificateImageUrl
        userStore.setUserInfo(userInfo.value)
    }
})
</script>

<style lang="scss" scoped>
.my-page {
    padding: 0;
}

.top-background {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 24vh;
    padding: 20rpx;
    background-color: #f0f0f0;

    .user-card-box {
        display: contents;
    }
}

.user-info {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 20rpx;
    gap: 20rpx;
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: 16rpx;
    box-sizing: border-box;
}

.avatar {
    width: 120rpx;
    height: 120rpx;
    border-radius: 50%;
}

.user-details {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 8rpx;
}

.username {
    font-size: 36rpx;
    font-weight: bold;
}

.level {
    font-size: 28rpx;
    color: #666;
}

.member-code {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8rpx;
    cursor: pointer;
}

.code-icon {
    width: 60rpx;
    height: 60rpx;
}

.quick-entry {
    display: flex;
    justify-content: space-between;
    padding: 20rpx;
    margin-bottom: 20rpx;
    background-color: #ffffff;
    border-radius: 16rpx;
}

.entry-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 25%;
}

.entry-item image {
    width: 80rpx;
    height: 80rpx;
    margin-bottom: 10rpx;
}

.mall-orders {
    padding: 20rpx;
    background-color: #ffffff;
    border-radius: 16rpx;
}

.section-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20rpx;
}

.section-title {
    font-size: 28rpx;
    font-weight: bold;
}

.all-orders {
    display: flex;
    align-items: center;
    font-size: 24rpx;
    color: #666;
}

.arrow {
    margin-left: 6rpx;
}

.order-types {
    display: flex;
    justify-content: space-between;
}

.order-type {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 25%;
}

.order-type image {
    width: 60rpx;
    height: 60rpx;
    margin-bottom: 10rpx;
}
</style>
