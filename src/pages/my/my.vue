<template>
    <view class="my-page">
        <!-- 用户卡片 -->
        <view class="user-card">
            <view class="user-info">
                <image class="avatar" :src="userInfo.avatar" mode="aspectFill"></image>
                <view class="user-details">
                    <text class="username">{{ userInfo.username }}</text>
                    <text class="level">等级: {{ userInfo.level }}</text>
                </view>
            </view>
            <view class="member-code" @click="showQRCode">
                <image class="code-icon" src="/static/qr-code-icon.png" mode="aspectFit"></image>
                <text>会员码</text>
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
            <view class="section-title">商城订单</view>
            <view class="order-types">
                <view class="order-type" v-for="(type, index) in orderTypes" :key="index"
                    @click="navigateToOrder(type.path)">
                    <image :src="type.icon" mode="aspectFit"></image>
                    <text>{{ type.name }}</text>
                </view>
            </view>
        </view>
    </view>

    <QRCodeModal :show="showQR" :qrCodeUrl="userInfo.qrCode" @close="hideQRCode" />
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useUserStore } from '@/stores/user'
import QRCodeModal from '@/components/QRCodeModal.vue'

const userStore = useUserStore()
const userInfo = ref({
    avatar: '/static/default-avatar.png',
    username: '加载中...',
    level: 0,
    qrCode: '/static/qr-code.png'
})

const showQR = ref(false)

const entryList = ref([
    { icon: '/static/icon1.png', name: '我的课程', path: '/pages/my-courses/my-courses' },
    { icon: '/static/icon2.png', name: '我的收藏', path: '/pages/my-favorites/my-favorites' },
    { icon: '/static/icon3.png', name: '学习记录', path: '/pages/learning-records/learning-records' },
    { icon: '/static/icon4.png', name: '设置', path: '/pages/settings/settings' },
])

const orderTypes = ref([
    { icon: '/static/order-icon1.png', name: '待付款', path: '/pages/orders/unpaid' },
    { icon: '/static/order-icon2.png', name: '待发货', path: '/pages/orders/unshipped' },
    { icon: '/static/order-icon3.png', name: '待收货', path: '/pages/orders/unreceived' },
    { icon: '/static/order-icon4.png', name: '已完成', path: '/pages/orders/completed' },
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

const navigateToOrder = (path) => {
    uni.navigateTo({ url: path })
}

onMounted(async () => {
    if (userStore.userInfo) {
        userInfo.value = userStore.userInfo
    } else {
        // 模拟数据，实际应该从API获取
        userInfo.value = {
            avatar: '/static/default-avatar.png',
            username: '张三',
            level: 5,
            qrCode: '/static/qr-code.png'
        }
        userStore.setUserInfo(userInfo.value)
    }
})
</script>

<style lang="scss" scoped>
.my-page {
    padding: 20rpx;
}

.user-card {
    background-color: #ffffff;
    border-radius: 16rpx;
    padding: 30rpx;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 2rpx 10rpx rgba(0, 0, 0, 0.1);
    margin-bottom: 20rpx;
}

.user-info {
    display: flex;
    align-items: center;
}

.avatar {
    width: 120rpx;
    height: 120rpx;
    border-radius: 60rpx;
    margin-right: 20rpx;
}

.user-details {
    display: flex;
    flex-direction: column;
}

.username {
    font-size: 40rpx;
    font-weight: bold;
    margin-bottom: 10rpx;
}

.level {
    font-size: 32rpx;
    color: #666;
}

.member-code {
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
}

.code-icon {
    width: 60rpx;
    height: 60rpx;
    margin-bottom: 10rpx;
}

.quick-entry {
    display: flex;
    justify-content: space-between;
    background-color: #ffffff;
    border-radius: 16rpx;
    padding: 20rpx;
    margin-bottom: 20rpx;
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
    background-color: #ffffff;
    border-radius: 16rpx;
    padding: 20rpx;
}

.section-title {
    font-size: 28rpx;
    font-weight: bold;
    margin-bottom: 20rpx;
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
