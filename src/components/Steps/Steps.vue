<!--
 * @Description: 
 * @Autor: Dai YueLin
 * @Date: 2021-05-20 11:17:15
 * @LastEditors: Dai YueLin
 * @LastEditTime: 2021-06-18 11:52:36
-->
<template>
  <div class="demo-steps">
    <demo-block :title="t('basicUsage')">
      <van-steps :active="active">
        <van-step>{{ t("step1") }}</van-step>
        <van-step>{{ t("step2") }}</van-step>
        <van-step>{{ t("step3") }}</van-step>
        <van-step>{{ t("step4") }}</van-step>
      </van-steps>

      <van-button @click="nextStep">{{ t("nextStep") }}</van-button>
    </demo-block>

    <demo-block :title="t('customStyle')">
      <van-steps
        :active="active"
        active-icon="success"
        inactive-icon="arrow"
        active-color="#38f"
      >
        <van-step>{{ t("step1") }}</van-step>
        <van-step>{{ t("step2") }}</van-step>
        <van-step>{{ t("step3") }}</van-step>
        <van-step>{{ t("step4") }}</van-step>
      </van-steps>
    </demo-block>

    <demo-block :title="t('title3')">
      <van-steps :active="0" direction="vertical">
        <van-step>
          <h3>{{ t("status1") }}</h3>
          <p>2016-07-12 12:40</p>
        </van-step>
        <van-step>
          <h3>{{ t("status2") }}</h3>
          <p>2016-07-11 10:00</p>
        </van-step>
        <van-step>
          <h3>{{ t("status3") }}</h3>
          <p>2016-07-10 09:30</p>
        </van-step>
      </van-steps>
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
import MdEn from "../../../docs/steps/README.md";
import Md from "../../../docs/zh/steps/README.md";
import DemoBlock from ".././DemoBlock";
import { getLangFromUserAgent } from "../../utils/util";
export default {
  name: "Steps",
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
      active: 1,
      i18n: {
        "zh-CN": {
          showCode: "显示源码",
          nextStep: "下一步",
          step1: "买家下单",
          step2: "商家接单",
          step3: "买家提货",
          step4: "交易完成",
          title2: "描述信息",
          title3: "竖向步骤条",
          status1: "【城市】物流状态1",
          status2: "【城市】物流状态",
          status3: "快件已发货",
          customStyle: "自定义样式",
          basicUsage: "基础用法",
        },
        "en-US": {
          showCode: "Show Code",
          nextStep: "Next Step",
          step1: "Step1",
          step2: "Step2",
          step3: "Step3",
          step4: "Step4",
          title2: "Description",
          title3: "Vertical Steps",
          status1: "【City】Status1",
          status2: "【City】Status2",
          status3: "【City】Status3",
          customStyle: "Custom Style",
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
    nextStep() {
      this.active = ++this.active % 4;
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
.demo-steps {
  text-align: left;
  background-color: @white;
  box-sizing: border-box;
  min-height: calc(100vh - 56px);
  padding-bottom: 20px;
  .steps-success,
  .van-icon-location {
    color: @green;
  }

  .van-button {
    margin: @padding-md 0 0 @padding-md;
  }

  p,
  h3 {
    margin: 0;
    font-weight: normal;
    font-size: inherit;
  }

  .van-steps__message + p {
    margin-bottom: 10px;
  }

  /deep/.van-switch {
    margin-left: 16px;
  }
}
</style>
