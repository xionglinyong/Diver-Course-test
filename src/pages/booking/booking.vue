<template>
    <view class="booking" :style="{ height: bookingHeight }">
        <view class="calendar-box">
            <view class="calendar">
                <view class="weekdays">
                    <text v-for="day in weekdays" :key="day">{{ day }}</text>
                </view>
                <view class="calendar-body" :class="{ 'expanded': isExpanded }">
                    <view v-for="(week, weekIndex) in displayedWeeks" :key="weekIndex" class="week">
                        <view v-for="day in week" :key="day.date" class="day"
                            :class="{ 'today': isToday(day.date), 'selected': isSelected(day.date) }"
                            @click="selectDay(day)">
                            <text>{{ day.date.getDate() }}</text>
                        </view>
                    </view>
                </view>
            </view>

            <view class="calendar-expand" @click="toggleCalendarExpand">
                {{ isExpanded ? '收起' : '展开' }}
            </view>
        </view>

        <view class="daily-schedule">
            <view class="schedule-header">
                <view class="schedule-filter">全部课程</view>
                <view class="schedule-filter">全部教练</view>
                <view class="schedule-filter">全部时段</view>
            </view>

            <scroll-view scroll-y class="class-list" stlye="" v-if="filteredClasses.length > 0">
                <view v-for="(classItem, index) in filteredClasses" :key="index" class="class-item">
                    <view class="class-info">
                        <image class="coach-avatar" :src="classItem.coachAvatar" mode="aspectFill"></image>
                        <text class="coach-name">{{ classItem.coach }}</text>
                        <view class="class-details">
                            <text class="class-name">{{ classItem.name }}</text>
                            <text class="class-time">{{ classItem.time }}</text>
                        </view>
                    </view>
                    <view class="book-btn" @click="bookClass(classItem)">预 约</view>
                </view>
            </scroll-view>
            <Empty v-else text="当前筛选条件下暂无课程" buttonText="刷新" @buttonClick="refreshClasses" />
        </view>
    </view>
</template>

<script setup>
import { ref, computed } from 'vue'
import { onLoad } from '@dcloudio/uni-app'
import Empty from '@/components/Empty.vue'

const bookingHeight = ref('auto')
onLoad(() => {
    const sys = uni.getSystemInfoSync()
    bookingHeight.value = `${sys.windowHeight}px`
})

const isExpanded = ref(false)
const selectedDate = ref(new Date())
const weekdays = ['周一', '周二', '周三', '周四', '周五', '周六', '周日']

const generateWeeks = (startDate, numWeeks) => {
    const weeks = []
    const start = new Date(startDate)
    start.setDate(start.getDate() - start.getDay() + 1) // 调整到本周一
    for (let i = 0; i < numWeeks; i++) {
        const week = []
        for (let j = 0; j < 7; j++) {
            const date = new Date(start)
            date.setDate(date.getDate() + i * 7 + j)
            week.push({
                date,
                hasClass: Math.random() > 0.5 // 模拟是否有课程
            })
        }
        weeks.push(week)
    }
    return weeks
}

const displayedWeeks = computed(() => {
    const today = new Date()
    const startOfWeek = new Date(today)
    startOfWeek.setDate(today.getDate() - today.getDay() + 1) // 调整到本周一
    return generateWeeks(startOfWeek, isExpanded.value ? 3 : 1)
})

const toggleCalendarExpand = () => {
    isExpanded.value = !isExpanded.value
}

const isToday = (date) => {
    const today = new Date()
    return date.getDate() === today.getDate() &&
        date.getMonth() === today.getMonth() &&
        date.getFullYear() === today.getFullYear()
}

const isSelected = (date) => {
    return date.getDate() === selectedDate.value.getDate() &&
        date.getMonth() === selectedDate.value.getMonth() &&
        date.getFullYear() === selectedDate.value.getFullYear()
}

const selectDay = (day) => {
    selectedDate.value = day.date
}

// 模拟当天课程数据
const todayClasses = ref([
    {
        time: '09:00-10:00',
        name: '瑜伽初级',
        coach: '张教练',
        coachAvatar: '/static/coach-avatar1.png'
    },
    {
        time: '14:00-15:30',
        name: '普拉提中级',
        coach: '李教练',
        coachAvatar: '/static/coach-avatar2.png'
    },
    {
        time: '19:00-20:00',
        name: '瑜伽进阶',
        coach: '王教练',
        coachAvatar: '/static/coach-avatar3.png'
    },
    // 添加更多课程以测试滚动效果
    {
        time: '20:30-21:30',
        name: '冥想课程',
        coach: '赵教练',
        coachAvatar: '/static/coach-avatar4.png'
    },
    {
        time: '20:30-21:30',
        name: '冥想课程',
        coach: '赵教练',
        coachAvatar: '/static/coach-avatar4.png'
    }, {
        time: '20:30-21:30',
        name: '冥想课程',
        coach: '赵教练',
        coachAvatar: '/static/coach-avatar4.png'
    }, {
        time: '20:30-21:30',
        name: '冥想课程',
        coach: '赵教练',
        coachAvatar: '/static/coach-avatar4.png'
    }, {
        time: '20:30-21:30',
        name: '冥想课程',
        coach: '赵教练',
        coachAvatar: '/static/coach-avatar4.png'
    }, {
        time: '20:30-21:30',
        name: '冥想课程',
        coach: '赵教练',
        coachAvatar: '/static/coach-avatar4.png'
    }, {
        time: '20:30-21:30',
        name: '冥想课程',
        coach: '赵教练',
        coachAvatar: '/static/coach-avatar4.png'
    }, {
        time: '20:30-21:30',
        name: '冥想课程',
        coach: '赵教练',
        coachAvatar: '/static/coach-avatar4.png'
    }, {
        time: '20:30-21:30',
        name: '冥想课程',
        coach: '赵教练',
        coachAvatar: '/static/coach-avatar4.png'
    }, {
        time: '20:30-21:30',
        name: '冥想课程',
        coach: '赵教练',
        coachAvatar: '/static/coach-avatar4.png'
    }, {
        time: '20:30-21:30',
        name: '冥想课程',
        coach: '赵教练',
        coachAvatar: '/static/coach-avatar4.png'
    }, {
        time: '20:30-21:30',
        name: '冥想课程',
        coach: '赵教练',
        coachAvatar: '/static/coach-avatar4.png'
    },
])

// 修改 filteredClasses 计算属性
const filteredClasses = computed(() => {
    return todayClasses.value
    // .filter(classItem => {

    // })
})

const bookClass = (classItem) => {
    console.log('预约课程:', classItem)
    // 这里添加预约逻辑
}

const refreshClasses = () => {
    // 这里添加刷新课程列表的逻辑
    console.log('刷新课程列表')
    // 例如：重新获取课程数据
    // fetchClasses()
}
</script>

<style lang="scss" scoped>
.booking {
    display: flex;
    flex-direction: column;
    gap: 20rpx;
}

.calendar-box {
    display: flex;
    flex-direction: column;
    gap: 20rpx;
    padding: 20rpx;
}

.calendar {
    overflow: hidden;
    background-color: #fff;
    border-radius: 10rpx;
    box-shadow: 0 2rpx 10rpx rgba(0, 0, 0, 0.1);

    .weekdays {
        display: flex;
        justify-content: space-around;
        gap: 12rpx;
        padding: 10rpx 0;
        background-color: #f0f0f0;

        text {
            width: 10%;
            text-align: center;
            font-size: 24rpx;
            color: #666;
        }
    }
}

.calendar-body {
    height: 72rpx;
    padding: 12rpx 0;
    transition: height 0.3s ease;

    &.expanded {
        height: 214rpx;
    }

    .week {
        display: flex;
        justify-content: space-around;
        gap: 12rpx;
    }

    .day {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 10%;
        height: unset;
        aspect-ratio: 1;
        border-radius: 50%;
        font-size: 28rpx;
        color: #333;

        &.today {
            background-color: #e6f7ff;
            font-weight: bold;
        }

        &.selected {
            background-color: #1890ff;
            color: #fff;
        }
    }
}

.calendar-expand {
    padding: 10rpx;
    border-radius: 10rpx;
    box-shadow: 0 2rpx 10rpx rgba(0, 0, 0, 0.1);
    font-size: 24rpx;
    color: #666;
    text-align: center;
}

.daily-schedule {
    display: flex;
    flex-direction: column;
    flex: 1 1 auto;
    padding: 20rpx 0;

    .schedule-header {
        display: flex;
        justify-content: space-between;
        padding: 24rpx;
        font-size: 32rpx;
        font-weight: bold;
        color: #333;
        border-bottom: 1rpx solid;
    }

    .schedule-filter {}
}

.class-list {
    flex: 1 1 auto;
    height: 584rpx; // 设置一个固定高度以启用滚动
    padding: 0 20rpx;
    overflow-y: auto;
    box-sizing: border-box;

    .class-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20rpx;
        margin-top: 20rpx;
        border-radius: 10rpx;
        background-color: rgba(0, 0, 0, 0.1);
    }
}

.class-info {
    display: flex;
    align-items: center;
    gap: 8px;

    .coach-avatar {
        width: 80rpx;
        height: 80rpx;
        border-radius: 50%;
        margin-right: 20rpx;
    }

    .coach-name {
        font-size: 32rpx;
        font-weight: bold;
        margin-top: 4rpx;
    }

    .class-details {
        display: flex;
        flex-direction: column;

        .class-name {
            font-size: 28rpx;
            font-weight: bold;
        }

        .class-time {
            font-size: 24rpx;
            color: #999;
            margin-top: 4rpx;
        }
    }
}

.book-btn {
    padding: 16rpx 28rpx;
    background-color: #007AFF;
    color: #fff;
    border-radius: 40rpx;
    font-size: 24rpx;
}

.schedule-nav-bar {
    display: flex;
    justify-content: space-around;
    padding: 20rpx 0;
    background-color: #f8f8f8;
    border-bottom: 1rpx solid #e0e0e0;
}

// 移除之前的 .picker 样式

// 可能需要添加一些样式来调整 uni-data-select 的外观
:deep(.uni-data-select) {
    width: 30%;
}
</style>
