<template>
    <view class="booking box-border" :style="{ height: bookingHeight }">
        <view class="calendar-box">
            <scroll-view scroll-x show-scrollbar="false" class="weekday-list">
                <view class="weekdays flex">
                    <view v-for="(day, index) in weekDays" :key="index" class="days box-border"
                        :class="{ 'active': isSelected(day.date), 'today': isToday(day.date) }" @click="selectDay(day)">
                        <view class="day">{{ formatDay(day.date) }}</view>
                        <view class="week">{{ day.weekDay }}</view>
                    </view>
                </view>
            </scroll-view>
        </view>

        <view class="daily-schedule flex flex-col box-border">
            <view class="schedule-header">
                <view class="schedule-filter">全部课程</view>
                <view class="schedule-filter">全部教练</view>
                <view class="schedule-filter">全部时段</view>
            </view>

            <scroll-view scroll-y class="class-list box-border" v-if="filteredClasses.length > 0" show-scrollbar="false">
                <ClassItem class="mt-20" v-for="(classItem, index) in filteredClasses" :key="index" :class-info="classItem"
                    @book="bookClass(classItem)" />
            </scroll-view>
            <Empty v-else text="当前筛选条件下暂无课程" />
        </view>
    </view>
</template>

<script setup>
import { ref, computed } from 'vue'
import { onLoad } from '@dcloudio/uni-app'
import Empty from '@/components/Empty.vue'
import ClassItem from './components/ClassItem.vue'

const bookingHeight = ref('auto')
onLoad(() => {
    const sys = uni.getSystemInfoSync()
    bookingHeight.value = `${sys.windowHeight}px`
})

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
</script>

<style lang="scss" scoped>
.booking {
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
                    font-size: var(--size-32);
                    font-weight: bold;
                    color: var(--auxiliary-color-1);
                }

                .week {
                    font-size: var(--size-24);
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
        justify-content: space-between;
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
