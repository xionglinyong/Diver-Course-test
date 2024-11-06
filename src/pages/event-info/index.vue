<script setup>
import Cover from '../../static/class-cover.jpeg'
</script>

<template>
  <image :src="Cover" class="cover"/>
  <view class="sales">
    <view class="title mt-20">高级塑形课程</view>
    <view class="sale-desc flex mt-20">
      <text>￥699</text>
      <text class="original">￥999</text>
      <text class="flex-auto"></text>
      <text>已售 30</text>
    </view>
  </view>
  <view class="line"></view>
  <view class="desc">
    <view class="title">课程描述：</view>
    <view>
      本课程专为希望提升身体塑形和健康水平的学员设计。课程内容包括高强度间歇训练、核心力量训练和灵活性训练。通过本课程，学员将学会如何有效利用自身重量进行训练，提升肌肉力量和耐力，同时改善身体的灵活性和协调性。
    </view>
  </view>
  <view class="footer">
    <button class="btn">立即购买</button>
  </view>
</template>

<style lang="scss" scoped>
.cover {
  width: 100%;
}

.sales {
  padding: 0 var(--size-20);

  .title {
    font-size: var(--size-32);
    font-weight: bold;
  }

  .sale-desc {
    font-size: var(--size-24);
    align-items: flex-end;

    .original {
      font-size: var(--size-20);
      text-decoration: line-through;
      color: var(--auxiliary-color-4);
    }
  }
}

.line {
  background-color: var(--auxiliary-color-5);
  width: 100%;
  padding: var(--size-10) 0;
  margin: var(--size-20) 0;
}

.desc {
  padding: 0 var(--size-20);
  font-size: var(--size-24);

  .title {
    font-weight: bold;
    line-height: var(--size-40);
  }
}

.footer {
  height: 100rpx;
  position: fixed;
  bottom: 0;
  width: 100%;
  left: 0;
  padding: var(--size-10);
  box-sizing: border-box;
  background: var(--primary-bg-color);

  .btn {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: var(--size-28);
    font-weight: bold;
    color: var(--text-color);
    background: var(--primary-color);
    border-radius: 50rpx;
  }
}
</style>