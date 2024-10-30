<template>
    <view class="booking-page box-border" :style="{ height: bookingHeight }">
        <view class="calendar-box">
            <scroll-view scroll-x show-scrollbar="false" class="weekday-list">
                <view class="weekdays flex">
                    <view v-for="(day, index) in weekDays" :key="index" class="days box-border"
                        :class="{ 'active': isSelected(day.date), 'today': isToday(day.date) }" @click="selectDay(day)">
                        <view class="day fs-16">{{ formatDay(day.date) }}</view>
                        <view class="week fs-12">{{ day.weekDay }}</view>
                    </view>
                </view>
            </scroll-view>
        </view>

        <view class="daily-schedule flex flex-col box-border">
            <view class="schedule-header">
                <view class="schedule-filter" @click="handleSwitchSchedule(scheduleTypeEnum.classes)">全部课程</view>
                <view class="schedule-filter" @click="handleSwitchSchedule(scheduleTypeEnum.coaches)">全部教练</view>
                <!-- <view class="schedule-filter" @click="handleSwitchSchedule">全部时段</view> -->
            </view>

            <scroll-view scroll-y class="class-list box-border" v-if="filteredData.length > 0" show-scrollbar="false">
                <CourseCard class="mt-20" v-for="(dataItem, index) in filteredData"
                    v-if="scheduleType === scheduleTypeEnum.classes" :key="index" :data="dataItem"
                    @prebook="handlePreBook(dataItem)" />

                <CoachCard class="mt-20" v-for="(dataItem, index) in filteredData"
                    v-if="scheduleType === scheduleTypeEnum.coaches" :key="index" :data="dataItem"
                    @prebook="handlePreBook(dataItem)" />
            </scroll-view>
            <Empty v-else text="今日暂无课程安排" />
        </view>
    </view>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { onLoad, onShow } from '@dcloudio/uni-app'
import Empty from '@/components/Empty.vue'
import CoachCard from './components/CoachCard.vue'
import CourseCard from './components/CourseCard.vue'
import { getPageHeight, updateTabActive } from "@/utils/common"
import mock from "./mock.js";

const selectedDate = ref(new Date())
const weekDayNames = ['周日', '周一', '周二', '周三', '周四', '周五', '周六']

// 生成未来7天的日期数据
const weekDays = computed(() => {
    const days = []
    const today = new Date()

    for (let i = 0; i < 7; i++) {
        const date = new Date()
        date.setDate(today.getDate() + i)
        days.push({
            date: date,
            weekDay: weekDayNames[date.getDay()]
        })
    }
    return days
})

// 格式化日期显示
const formatDay = (date) => {
    return date.getDate()
}

// 判断是否是今天
const isToday = (date) => {
    const today = new Date()
    return date.getDate() === today.getDate() &&
        date.getMonth() === today.getMonth() &&
        date.getFullYear() === today.getFullYear()
}

// 判断是否被选中
const isSelected = (date) => {
    return date.getDate() === selectedDate.value.getDate() &&
        date.getMonth() === selectedDate.value.getMonth() &&
        date.getFullYear() === selectedDate.value.getFullYear()
}

// 选择日期
const selectDay = (day) => {
    selectedDate.value = day.date
}

// 模拟当天课程数据
const todayClasses = ref([])

// 修改 filteredData 计算属性
const filteredData = computed(() => {
    return todayClasses.value
    // .filter(classItem => {

    // })
})

const handlePreBook = (item) => {
    console.log('预约课程:', item)
    // 这里添加预约逻辑
}

const scheduleTypeEnum = {
    classes: 'classes',
    coaches: 'coaches'
}
const scheduleType = ref(scheduleTypeEnum.classes)
const handleSwitchSchedule = (val) => {
    scheduleType.value = val
}

const bookingHeight = ref('auto')
onLoad(() => {
    const h = getPageHeight()
    bookingHeight.value = `${h}px`

    // 初始加载数据
    fetchDailySchedule()
})

onShow(() => {
    updateTabActive()
})

// 获取当天课程数据
const fetchDailySchedule = async () => {
    try {
        const timestamp = selectedDate.value.getTime()
        const params = {
            date: timestamp,
            type: scheduleType.value
        }

        // 模拟API请求，实际开发时替换为真实的API调用
        // const res = await request('/api/schedule/daily', params)
        // todayClasses.value = res.data

        // 使用mock数据模拟不同type的返回结果
        if (scheduleType.value === scheduleTypeEnum.classes) {
            todayClasses.value = mock.classes
        } else {
            todayClasses.value = mock.coaches
        }
    } catch (error) {
        console.error('获取课程数据失败:', error)
    }
}

// 监听日期变化
watch(selectedDate, () => {
    fetchDailySchedule()
})

// 监听课程类型变化
watch(scheduleType, () => {
    fetchDailySchedule()
})
</script>

<style lang="scss" scoped>
.booking-page {
    display: flex;
    flex-direction: column;
    gap: var(--size-20);
    color: var(--text-color);
    background-color: var(--primary-bg-color);
}

.calendar-box {
    display: flex;
    flex-direction: column;
    gap: var(--size-20);

    .weekday-list {
        ::-webkit-scrollbar {
            display: none;
            width: 0;
            height: 0;
            color: transparent;
        }

        .weekdays {
            width: min-content;
            padding: var(--size-20);
            gap: var(--size-20);

            .days {
                flex: none;
                width: 12.5vw;
                padding: var(--size-20) 10rpx;
                background: var(--auxiliary-color-5);
                border-radius: var(--size-16);
                text-align: center;
                transition: all 0.3s ease;

                .day {
                    margin-bottom: 12rpx;
                    font-weight: bold;
                    color: var(--auxiliary-color-1);
                }

                .week {
                    color: var(--auxiliary-color-4);
                }

                &.today,
                &.active {
                    background: var(--gradient-bg-color);

                    .day {
                        color: var(--text-color-inverse);
                    }

                    .week {
                        color: var(--auxiliary-color-5);
                    }
                }

                &.today {
                    opacity: 0.5;
                }

                &.today.active {
                    opacity: 1;
                }
            }
        }
    }
}

.daily-schedule {
    flex: 1;

    .schedule-header {
        display: flex;
        justify-content: space-around;
        padding: var(--size-24) var(--size-32);
        border-top: 1rpx solid var(--auxiliary-color-4);
        font-size: var(--font-size-32);
        font-weight: bold;
    }

    .schedule-filter {}
}

.class-list {
    flex: 1 1 auto;
    height: 584rpx;
    padding: 0 20rpx 20rpx;
    background-color: var(--primary-bg-color);
    overflow-y: auto;

    ::-webkit-scrollbar {
        display: none;
        width: 0;
        height: 0;
        color: transparent;
    }
}
</style>
