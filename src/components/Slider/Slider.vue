<!--
 * @Description: 
 * @Autor: Dai YueLin
 * @Date: 2021-05-24 16:14:11
 * @LastEditors: Dai YueLin
 * @LastEditTime: 2021-05-24 16:18:34
-->
<template>
  <div class="demo-slider">
    <demo-block :title="t('title1')">
      <van-slider v-model="value1" @change="onChange" />
    </demo-block>

    <demo-block v-if="!isWeapp" :title="t('title2')">
      <van-slider range v-model="value2" @change="onChange" />
    </demo-block>

    <demo-block :title="t('title3')">
      <van-slider v-model="value3" :min="-50" :max="50" @change="onChange" />
    </demo-block>

    <demo-block :title="t('title4')">
      <van-slider v-model="value4" disabled />
    </demo-block>

    <demo-block :title="t('title5')">
      <van-slider v-model="value5" :step="10" @change="onChange" />
    </demo-block>

    <demo-block :title="t('customStyle')">
      <van-slider
        v-model="value6"
        bar-height="4px"
        active-color="#92A2BD"
        @change="onChange"
      />
    </demo-block>

    <demo-block :title="t('customButton')">
      <van-slider v-model="value7" active-color="#92A2BD">
        <template #button>
          <div class="custom-button">{{ value7 }}</div>
        </template>
      </van-slider>
    </demo-block>

    <demo-block v-if="!isWeapp" :title="t('vertical')">
      <div :style="{ height: '150px', paddingLeft: '30px' }">
        <van-slider v-model="value8" vertical @change="onChange" />
        <van-slider
          v-model="value9"
          range
          vertical
          style="margin-left: 100px"
          @change="onChange"
        />
      </div>
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
import MdSliderEn from "../../../docs/slider/README.md";
import MdSlider from "../../../docs/zh/slider/README.md";
import DemoBlock from ".././DemoBlock";
import { getLangFromUserAgent } from "../../utils/util";
export default {
  name: "Slider",
  components: {
    DemoBlock,
    MdSliderEn,
    MdSlider
  },
  props: {
    msg: String,
  },
  data() {
    return {
      mdComponent: "MdSliderEn",
      checked: false,
      value1: 50,
      value2: [20, 60],
      value3: 0,
      value4: 50,
      value5: 50,
      value6: 50,
      value7: 50,
      value8: 50,
      value9: [20, 60],
      i18n: {
        "zh-CN": {
          text: "当前值：",
          title1: "基础用法",
          title2: "双滑块",
          title3: "指定选择范围",
          title4: "禁用",
          title5: "指定步长",
          vertical: "垂直方向",
          customStyle: "自定义样式",
          customButton: "自定义按钮",
          showCode: "显示源码",
        },
        "en-US": {
          text: "Current value: ",
          title1: "Basic Usage",
          title2: "Dual thumb mode",
          title3: "Range",
          title4: "Disabled",
          title5: "Step size",
          vertical: "Vertical",
          customStyle: "Custom Style",
          customButton: "Custom Button",
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
        this.mdComponent = "MdSliderEn";
        return this.i18n["en-US"][name];
      } else {
        this.mdComponent = "MdSlider";
        return this.i18n["zh-CN"][name];
      }
    },
    onChange(value) {
      this.$toast(this.t("text") + value);
    },
  },
};
</script>

<style lang="less">
@import "../../assets/vant.less";
@import "./index.less";
.markdown-body {
  padding: 0px 10px 0px 10px;
}
.demo-slider {
  background: @white;
  user-select: none;

  /deep/.van-doc-demo-block {
    padding: 0 @padding-md !important;
  }

  /deep/.van-doc-demo-block__title {
    padding-left: 0 !important;
  }

  &-row {
    margin-bottom: @padding-sm !important;
  }
  
  .van-doc-demo-block {
    padding: 0 @padding-md 20px;
  }

  .van-doc-demo-block__title {
    padding-left: 0;
  }

  .custom-button {
    width: 26px;
    color: #fff;
    font-size: 10px;
    line-height: 18px;
    text-align: center;
    background-color: @red;
    border-radius: 100px;
  }
}
</style>
