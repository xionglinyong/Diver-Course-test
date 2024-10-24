<template>
    <view class="certificates-page">
        <view class="tabs">
            <view v-for="(tab, index) in tabs" :key="index" :class="['tab-item', { active: currentTab === index }]"
                @click="changeTab(index)">
                {{ tab }}
            </view>
        </view>
        <view class="certificate-list">
            <UserCard v-for="certificate in filteredCertificates" :key="certificate.id" :imageUrl="certificate.imageUrl"
                :title="certificate.title" :date="certificate.date" class="certificate-item" />
        </view>
    </view>
</template>

<script setup>
import { ref, computed } from 'vue'
import { onLoad } from '@dcloudio/uni-app'
import UserCard from '@/components/UserCard.vue'
import { request } from '@/utils/request'

const tabs = ['所有证书', '类型1', '类型2']
const currentTab = ref(0)
const certificates = ref([])

const fetchCertificates = async () => {
    try {
        const response = await request({ url: '/api/certificates' })
        certificates.value = response.data
    } catch (error) {
        console.error('获取证书列表失败:', error)
    }
}

const filteredCertificates = computed(() => {
    if (currentTab.value === 0) {
        return certificates.value
    } else {
        return certificates.value.filter(cert => cert.type === tabs[currentTab.value])
    }
})

const changeTab = (index) => {
    currentTab.value = index
}

onLoad(() => {
    fetchCertificates()
})
</script>

<style lang="scss" scoped>
.certificates-page {
    padding: 20rpx;
}

.tabs {
    display: flex;
    justify-content: space-around;
    margin-bottom: 20rpx;
}

.tab-item {
    padding: 10rpx 20rpx;
    font-size: 28rpx;
    color: #333;
    border-bottom: 4rpx solid transparent;

    &.active {
        color: #007AFF;
        border-bottom-color: #007AFF;
    }
}

.certificate-list {
    display: flex;
    flex-direction: column;
    gap: 20rpx;
}

.certificate-item {
    width: 100%;
}
</style>
