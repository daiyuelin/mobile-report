<template>
  <div class="demo-swipe">
    <demo-block :title="t('basicUsage')">
      <van-swipe :autoplay="3000" indicator-color="white">
        <van-swipe-item>1</van-swipe-item>
        <van-swipe-item>2</van-swipe-item>
        <van-swipe-item>3</van-swipe-item>
        <van-swipe-item>4</van-swipe-item>
      </van-swipe>
    </demo-block>

    <demo-block :title="t('title2')">
      <van-swipe :autoplay="3000" lazy-render>
        <van-swipe-item v-for="image in images" :key="image">
          <img :src="image" />
        </van-swipe-item>
      </van-swipe>
    </demo-block>

    <demo-block :title="t('title3')">
      <van-swipe indicator-color="white" @change="onChange1">
        <van-swipe-item>1</van-swipe-item>
        <van-swipe-item>2</van-swipe-item>
        <van-swipe-item>3</van-swipe-item>
        <van-swipe-item>4</van-swipe-item>
      </van-swipe>
    </demo-block>

    <demo-block :title="t('title4')">
      <van-swipe
        vertical
        :autoplay="3000"
        indicator-color="white"
        style="height: 200px"
        class="demo-swipe--vertical"
      >
        <van-swipe-item>1</van-swipe-item>
        <van-swipe-item>2</van-swipe-item>
        <van-swipe-item>3</van-swipe-item>
        <van-swipe-item>4</van-swipe-item>
      </van-swipe>
    </demo-block>

    <demo-block :title="t('title5')">
      <van-swipe :width="300" :loop="false" indicator-color="white">
        <van-swipe-item>1</van-swipe-item>
        <van-swipe-item>2</van-swipe-item>
        <van-swipe-item>3</van-swipe-item>
        <van-swipe-item>4</van-swipe-item>
      </van-swipe>
    </demo-block>

    <demo-block :title="t('title6')">
      <van-swipe @change="onChange2">
        <van-swipe-item>1</van-swipe-item>
        <van-swipe-item>2</van-swipe-item>
        <van-swipe-item>3</van-swipe-item>
        <van-swipe-item>4</van-swipe-item>

        <template #indicator>
          <div class="custom-indicator">{{ current + 1 }}/4</div>
        </template>
      </van-swipe>
    </demo-block>

    <demo-block :title="t('showCode')"
      ><van-switch v-model="checked"
    /></demo-block>
    <div class="markdown-body" v-if="checked">
      <section :is="mdComponent"></section>
    </div>
  </div>
</template>

<script>
import "highlight.js/styles/github.css";
import "github-markdown-css";
import MdEn from "../../../docs/swipe/README.md";
import Md from "../../../docs/zh/swipe/README.md";
import DemoBlock from ".././DemoBlock";
import { getLangFromUserAgent } from "../../utils/util";
export default {
  name: "Swipe",
  components: {
    DemoBlock,
    MdEn,
    Md,
  },
  props: {
    msg: String,
  },
  data() {
    return {
      mdComponent: "Md",
      checked: false,
      current: 0,
      images: [
        "https://img.yzcdn.cn/vant/apple-1.jpg",
        "https://img.yzcdn.cn/vant/apple-2.jpg",
        "https://img.yzcdn.cn/vant/apple-3.jpg",
        "https://img.yzcdn.cn/vant/apple-4.jpg",
      ],
      i18n: {
        "zh-CN": {
          showCode: "显示源码",
          title2: "懒加载",
          title3: "监听 change 事件",
          title4: "纵向滚动",
          title5: "自定义滑块大小",
          title6: "自定义指示器",
          message: "当前 Swipe 索引：",
          basicUsage: "基础用法",
        },
        "en-US": {
          showCode: "Show Code",
          title2: "Lazy Render",
          title3: "Change Event",
          title4: "Vertical Scrolling",
          title5: "Set SwipeItem Size",
          title6: "Custom indicator",
          message: "Current Swipe index:",
          basicUsage: "Basic Usage",
        },
      },
    };
  },
  mounted() {},
  methods: {
    t(name) {
      // 根据手机语言环境对应显示中文还是英文
      let _lang = getLangFromUserAgent();
      if (_lang === "en") {
        this.mdComponent = "MdEn";
        return this.i18n["en-US"][name];
      } else {
        this.mdComponent = "Md";
        return this.i18n["zh-CN"][name];
      }
    },
    onChange1(index) {
      this.$toast(this.t("message") + index);
    },
    onChange2(index) {
      this.current = index;
    },
  },
};
</script>

<style lang="less" scoped>
@import "../../assets/vant.less";
@import "./index.less";
.markdown-body {
  background: @white;
  padding: 0px 10px 0px 10px;
}
.demo-swipe {
  text-align: left;
  padding-bottom: 30px;

  .van-swipe {
    &-item {
      color: @white;
      font-size: 20px;
      line-height: 150px;
      text-align: center;

      &:nth-child(even) {
        background-color: #92a2bd;
      }

      &:nth-child(odd) {
        background-color: #92a2bd;
      }
    }

    img {
      display: block;
      box-sizing: border-box;
      width: 100%;
      height: 240px;
      padding: 30px 60px;
      background-color: @white;
      pointer-events: none;
    }
  }

  &--vertical {
    .van-swipe-item {
      line-height: 200px;
    }
  }

  .custom-indicator {
    position: absolute;
    right: 5px;
    bottom: 5px;
    padding: 2px 5px;
    color: @white;
    font-size: 12px;
    background: rgba(0, 0, 0, 0.1);
  }
  /deep/.van-switch {
    margin-left: 16px;
  }
}
</style>
