<template>
  <div class="demo-count-down">
    <demo-block :title="t('basicUsage')">
      <van-count-down :time="time" />
    </demo-block>

    <demo-block :title="t('customFormat')">
      <van-count-down :time="time" :format="t('formatWithDay')" />
    </demo-block>

    <demo-block :title="t('millisecond')">
      <van-count-down millisecond :time="time" format="HH:mm:ss:SS" />
    </demo-block>

    <demo-block :title="t('customStyle')">
      <van-count-down :time="time">
        <template #default="currentTime">
          <span class="block">{{ currentTime.hours }}</span>
          <span class="colon">:</span>
          <span class="block">{{ currentTime.minutes }}</span>
          <span class="colon">:</span>
          <span class="block">{{ currentTime.seconds }}</span>
        </template>
      </van-count-down>
    </demo-block>

    <demo-block :title="t('manualControl')">
      <van-count-down
        ref="countDown"
        millisecond
        :time="3000"
        :auto-start="false"
        format="ss:SSS"
        @finish="onFinish"
      />
      <van-grid clickable :column-num="3">
        <van-grid-item icon="play-circle-o" :text="t('start')" @click="start" />
        <van-grid-item
          icon="pause-circle-o"
          :text="t('pause')"
          @click="pause"
        />
        <van-grid-item icon="replay" :text="t('reset')" @click="reset" />
      </van-grid>
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
import MdEn from "../../../docs/count-down/README.md";
import Md from "../../../docs/zh/count-down/README.md";
import DemoBlock from ".././DemoBlock";
import { getLangFromUserAgent } from "../../utils/util";
export default {
  name: "CountDown",
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
      time: 30 * 60 * 60 * 1000,
      i18n: {
        "zh-CN": {
          showCode: "显示源码",
          reset: "重置",
          pause: "暂停",
          start: "开始",
          finished: "倒计时结束",
          millisecond: "毫秒级渲染",
          customStyle: "自定义样式",
          customFormat: "自定义格式",
          manualControl: "手动控制",
          formatWithDay: "DD 天 HH 时 mm 分 ss 秒",
          basicUsage: "基础用法",
        },
        "en-US": {
          showCode: "Show Code",
          reset: "Reset",
          pause: "Pause",
          start: "Start",
          finished: "Finished",
          millisecond: "Millisecond",
          customStyle: "Custom Style",
          customFormat: "Custom Format",
          manualControl: "Manual Control",
          formatWithDay: "DD Day, HH:mm:ss",
          basicUsage: "Basic Usage",
        },
      },
    };
  },
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
    start() {
      this.$refs.countDown.start();
    },
    pause() {
      this.$refs.countDown.pause();
    },
    reset() {
      this.$refs.countDown.reset();
    },
    onFinish() {
      this.$toast(this.t("finished"));
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
.demo-count-down {
  background-color: @white;
  text-align: left;
  box-sizing: border-box;
  min-height: calc(100vh - 56px);
  padding-bottom: 20px;

  .van-count-down {
    margin-left: @padding-md;
  }

  .colon {
    display: inline-block;
    margin: 0 4px;
    color: @red;
  }

  .block {
    display: inline-block;
    width: 22px;
    color: #fff;
    font-size: 12px;
    text-align: center;
    background-color: @red;
    border-radius: 4px;
  }

  .van-grid {
    margin-top: 10px;
  }

  /deep/.van-switch {
    margin-left: 16px;
  }
}
</style>
