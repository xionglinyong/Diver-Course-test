<template>
    <view class="user-card">
        <image :src="imageUrl" mode="aspectFill"></image>
        <view v-if="showEditIcon" class="edit-icon" @click="showMyCertificates">
            <image src="/static/edit-icon.png" mode="aspectFit"></image>
        </view>
    </view>
    <DrawerDialog :show="showStylesDialog" title="选择展示卡面" height="75%" @close="showStylesDialog = false">
        <scroll-view scroll-y class="styles-scroll-view">
            <view v-if="certificateList.length > 0" class="styles-grid">
                <view v-for="style in certificateList" :key="style.id" class="style-item" @click="selectStyle(style)">
                    <image :src="style.imageUrl" mode="aspectFill"></image>
                    <text>{{ style.name }}</text>
                </view>
            </view>
            <Empty v-else text="暂无可用的证书" buttonText="刷新" @buttonClick="showMyCertificates" />
        </scroll-view>
    </DrawerDialog>
</template>

<script setup>
import { ref, defineProps, defineEmits } from 'vue'
import DrawerDialog from './DrawerDialog.vue'
import Empty from './Empty.vue'
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
const certificateList = ref([])

const showMyCertificates = async () => {
    try {
        const response = await request({ url: '/api/user/certificates' })
        certificateList.value = response.data
    } catch (error) {
        console.error('获取证书样式失败:', error)
        certificateList.value = [] // 确保在失败时清空列表
    }
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
    border-radius: var(--size-32);
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
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60rpx;
    height: 60rpx;
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: var(--border-radius-round);
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
        aspect-ratio: 1.685 / 1;
        margin-bottom: 10rpx;
        border-radius: var(--size-16);
        object-fit: cover;
    }

    text {
        font-size: 28rpx;
        text-align: center;
    }
}
</style>
