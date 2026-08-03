<template>
  <div class="demo-rate">
    <demo-block :title="t('basicUsage')">
      <van-rate v-model="value1" />
    </demo-block>

    <demo-block :title="t('customIcon')">
      <van-rate v-model="value2" icon="like" void-icon="like-o" />
    </demo-block>

    <demo-block :title="t('customStyle')">
      <van-rate
        v-model="value3"
        :size="25"
        color="#ffd21e"
        void-icon="star"
        void-color="#eee"
      />
    </demo-block>

    <demo-block :title="t('halfStar')">
      <van-rate
        v-model="value4"
        :size="25"
        allow-half
        void-icon="star"
        void-color="#eee"
      />
    </demo-block>

    <demo-block :title="t('customCount')">
      <van-rate v-model="value5" :count="6" />
    </demo-block>

    <demo-block :title="t('disabled')">
      <van-rate v-model="value6" disabled />
    </demo-block>

    <demo-block :title="t('readonly')">
      <van-rate v-model="value6" readonly />
    </demo-block>

    <demo-block :title="t('changeEvent')">
      <van-rate v-model="value7" @change="onChange" />
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
import MdRateEn from "../../../docs/rate/README.md";
import MdRate from "../../../docs/zh/rate/README.md";
import DemoBlock from "../DemoBlock";
import { getLangFromUserAgent } from "../../utils/util";
export default {
  name: "Rate",
  components: {
    MdRateEn,
    MdRate,
    DemoBlock
  },
  props: {
    msg: String,
  },
  data() {
    return {
      mdComponent: "MdRateEn",
      checked: false,
      value1: 3,
      value2: 3,
      value3: 3,
      value4: 2.5,
      value5: 4,
      value6: 3,
      value7: 2,
      i18n: {
        "zh-CN": {
          halfStar: "半星",
          disabled: "禁用状态",
          customIcon: "自定义图标",
          customStyle: "自定义样式",
          customCount: "自定义数量",
          readonly: "只读状态",
          changeEvent: "监听 change 事件",
          basicUsage: "基础用法",
          toastContent: `当前值：`,
          showCode: "显示源码",
        },
        "en-US": {
          halfStar: "Half Star",
          disabled: "Disabled",
          customIcon: "Custom Icon",
          customStyle: "Custom Style",
          customCount: "Custom Count",
          readonly: "Readonly",
          changeEvent: "Change Event",
          basicUsage: "Basic Usage",
          toastContent: `current value：`,
          showCode: "Show Code",
        },
      },
    };
  },
  methods: {
    t(name) {
      // 根据手机语言环境对应显示中文还是英文
      let _lang = getLangFromUserAgent();
      if (_lang === "en") {
        this.mdComponent = "MdRateEn";
        return this.i18n["en-US"][name];
      } else {
        this.mdComponent = "MdRate";
        return this.i18n["zh-CN"][name];
      }
    },
    onChange(value){
      this.$toast(this.t('toastContent')+value);
    }
  },
};
</script>

<style lang="less" scoped>
@import "../../assets/vant.less";
@import "./index.less";
.markdown-body {
  padding: 0px 10px 0px 10px;
}
.demo-rate {
  text-align: left;
  padding-bottom: 20px;
  background-color: #fff;


  /deep/.van-doc-demo-block {
    padding: 0 @padding-md !important;
  }

  /deep/.van-doc-demo-block__title {
    padding-left: 0 !important;
  }

  &-row {
    margin-bottom: @padding-sm !important;
  }
  .van-rate {
    margin-left: @padding-md;
  }
}
</style>