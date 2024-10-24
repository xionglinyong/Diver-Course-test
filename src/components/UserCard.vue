<template>
    <view class="user-card">
        <image :src="imageUrl" mode="aspectFill"></image>
        <view v-if="showEditIcon" class="edit-icon" @click="showCertificateStyles">
            <image src="/static/edit-icon.png" mode="aspectFit"></image>
        </view>
    </view>
    <DrawerDialog :show="showStylesDialog" title="选择展示卡面" height="75%" @close="showStylesDialog = false">
        <scroll-view scroll-y class="styles-scroll-view">
            <view class="styles-grid">
                <view v-for="style in certificateStyles" :key="style.id" class="style-item" @click="selectStyle(style)">
                    <image :src="style.imageUrl" mode="aspectFill"></image>
                    <text>{{ style.name }}</text>
                </view>
            </view>
        </scroll-view>
    </DrawerDialog>
</template>

<script setup>
import { ref, defineProps, defineEmits } from 'vue'
import DrawerDialog from './DrawerDialog.vue'
import { request } from '@/utils/request'

const props = defineProps({
    imageUrl: {
        type: String,
        default: '',
    },
    showEditIcon: {
        type: Boolean,
        default: false,
    },
})

const emit = defineEmits(['update:imageUrl'])

const showStylesDialog = ref(false)
const certificateStyles = ref([
    { id: 1, name: '初级瑜伽证书', imageUrl: '/static/certificate-style1.jpg' },
    { id: 2, name: '中级瑜伽证书', imageUrl: '/static/certificate-style2.jpg' },
    { id: 3, name: '高级瑜伽证书', imageUrl: '/static/certificate-style3.jpg' },
    { id: 4, name: '瑜伽教练证书', imageUrl: '/static/certificate-style4.jpg' },
    { id: 5, name: '瑜伽冥想证书', imageUrl: '/static/certificate-style5.jpg' },
])

const showCertificateStyles = async () => {
    // 注释掉原来的 API 请求，直接使用模拟数据
    // try {
    //     const response = await request({ url: '/api/user/certificates' })
    //     certificateStyles.value = response.data
    //     showStylesDialog.value = true
    // } catch (error) {
    //     console.error('获取证书样式失败:', error)
    // }

    // 直接显示对话框，使用模拟数据
    showStylesDialog.value = true
}

const selectStyle = (newStyle) => {
    emit('update:imageUrl', newStyle.imageUrl)
    showStylesDialog.value = false
}
</script>

<style lang="scss" scoped>
.user-card {
    position: relative;
    width: 100%;
    aspect-ratio: 1.685 / 1;
    background-color: #ffffff;
    border-radius: 32rpx;
    box-shadow: 0 2rpx 10rpx rgba(0, 0, 0, 0.1);
    overflow: hidden;

    image {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}

.edit-icon {
    position: absolute;
    right: 20rpx;
    bottom: 20rpx;
    width: 60rpx;
    height: 60rpx;
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    image {
        width: 36rpx;
        height: 36rpx;
    }
}

.styles-scroll-view {
    height: 100%;
}

.styles-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20rpx;
    padding: 20rpx;
}

.style-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;

    image {
        width: 100%;
        height: unset;
        aspect-ratio: 1.685 / 1;
        object-fit: cover;
        border-radius: 16rpx;
        margin-bottom: 10rpx;
    }

    text {
        font-size: 28rpx;
        text-align: center;
    }
}
</style>
