<script>
export default {
    onLaunch: function () {
        console.log('App Launch')
    },
    onShow: function () {
        console.log('App Show')
    },
    onHide: function () {
        console.log('App Hide')
    },
}
</script>

<style lang="scss">
/* 每个页面公共css */
@mixin baseCss {
    font-family: PingFangSC, -apple-system, 'Microsoft YaHei';
    font-size: var(--size-28);
    color: var(--text-color);
    background-color: var(--primary-bg-color);
}

:root,
page {
    // 主题色
    --primary-color: #23ee7d;
    --primary-bg-color: #2e2f34;
    --auxiliary-color-1: #eef7f2; // 月白
    --auxiliary-color-2: #cdd1d3; // 银鱼白
    --auxiliary-color-3: #a8aab3;
    --auxiliary-color-4: #81838c;
    --auxiliary-color-5: #3b3c45;
    --auxiliary-opacity-color-5: rgba(59, 60, 69, 0.25);

    // 行为色
    --color-primary: #007aff;
    --color-success: #4cd964;
    --color-warning: #f0ad4e;
    --color-error: #dd524d;

    --mask-bg-color: rgba(0, 0, 0, 0.35);
    --opacity-disabled: 0.3;
    --text-color: var(--auxiliary-color-1); // 基本色
    --text-color-inverse: var(--primary-bg-color); // 反色
    --text-color-placeholder: #808080;
    --text-color-disable: #c0c0c0;
    --title-color: #2c405a; // 文章标题颜色
    --title-font-size: 20px;
    --subtitle-color: #555; // 二级标题颜色
    --subtitle-font-size: 18px;
    --paragraph-color: #3f536e; // 文章段落颜色
    --paragraph-font-size: 15px;

    --gradient-bg-color: linear-gradient(135deg, #23efbd, #23ee82);

    --blue-color-0: #baccd9; // 云水蓝
    --blue-color-1: #c6e6e8; // 海天蓝
    --blue-color-2: #b0d5df; // 湖水蓝
    --blue-color-3: #93d5dc; // 清水蓝
    --blue-color-4: #5cb3cc; // 碧青
    --blue-color-5: #22a2c3; // 海青
    --blue-color-6: #346c9c; // 海军蓝
    --size-40: 40rpx;
    --size-32: 32rpx;
    --size-28: 28rpx;
    --size-24: 24rpx;
    --size-20: 20rpx;
    --size-16: 16rpx;
    --size-12: 12rpx;
    --size-10: 10rpx;
    --size-8: 8rpx;
    --border-radius-round: 50%;

    /* #ifndef WEB */
    @include baseCss();
    /*  #endif  */

    @media (prefers-color-scheme: dark) {
        // 主题色
        --primary-color: #23ee7d;
        --primary-bg-color: #2e2f34;
        --auxiliary-color-1: #eef7f2; // 月白
        --auxiliary-color-2: #cdd1d3; // 银鱼白
        --auxiliary-color-3: #a8aab3;
        --auxiliary-color-4: #81838c;
        --auxiliary-color-5: #3b3c45;
        --auxiliary-opacity-color-5: rgba(59, 60, 69, 0.35);
    }

    /* #ifdef WEB */
    body {
        @include baseCss();
    }

    /*  #endif  */
}

.flex {
    display: flex;
}

.flex-col {
    flex-direction: column;
}

.flex-auto {
    flex: 1 1 auto;
}

.flex-none {
    flex: none;
}

.box-border {
    box-sizing: border-box;
}

.btn-gradient {
    color: var(--text-color-inverse);
    background: var(--gradient-bg-color);
}

.mt-20 {
    margin-top: 20rpx;
}
</style>
