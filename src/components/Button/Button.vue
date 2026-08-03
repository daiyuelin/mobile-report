<!--
 * @Description:
 * @Autor: Dai YueLin
 * @Date: 2021-05-05 13:47:56
 * @LastEditors: Edison Chen
 * @LastEditTime: 2021-06-03 14:28:15
-->
<template>
  <div class="demo-button">
    <demo-block :title="t('type')">
      <div class="demo-button-row">
        <van-button type="primary">{{ t("primary") }}</van-button>
        <van-button type="success">{{ t("success") }}</van-button>
        <van-button type="default">{{ t("default") }}</van-button>
      </div>
      <van-button type="danger">{{ t("danger") }}</van-button>
      <van-button type="warning">{{ t("warning") }}</van-button>
    </demo-block>

    <demo-block :title="t('plain')">
      <van-button plain type="primary" :text="t('plain')" />
      <van-button plain type="success" :text="t('plain')" />
    </demo-block>

    <demo-block :title="t('disabled')">
      <van-button disabled type="primary" :text="t('disabled')" />
      <van-button disabled type="success" :text="t('disabled')" />
    </demo-block>

    <demo-block :title="t('loadingStatus')">
      <van-button loading type="primary" />
      <van-button loading :loading-text="t('loadingText')" type="success" />
    </demo-block>

    <demo-block :title="t('shape')">
      <van-button type="primary" square :text="t('square')" />
      <van-button type="success" round :text="t('round')" />
    </demo-block>

    <demo-block :title="t('icon')">
      <van-button type="primary" icon="plus" />
      <van-button type="primary" icon="plus" :text="t('button')" />
    </demo-block>

    <demo-block :title="t('size')">
      <van-button type="primary" size="large">{{ t("large") }}</van-button>
      <van-button type="primary" size="normal">{{ t("normal") }}</van-button>
      <van-button type="primary" size="small">{{ t("small") }}</van-button>
      <van-button type="primary" size="mini">{{ t("mini") }}</van-button>
    </demo-block>

    <demo-block :title="t('blockElement')">
      <van-button type="primary" block>{{ t("blockElement") }}</van-button>
    </demo-block>

    <demo-block :title="t('router')">
      <van-button :text="t('urlRoute')" type="primary" url="/" />
      <van-button :text="t('vueRoute')" type="primary" to="/" />
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
import MdButtonEn from "../../../docs/button/README.md";
import MdButton from "../../../docs/zh/button/README.md";
import DemoBlock from ".././DemoBlock";
import { getLangFromUserAgent } from "../../utils/util";
export default {
  name: "Button",
  components: {
    DemoBlock,
    MdButton,
    MdButtonEn,
  },
  props: {
    msg: String,
  },
  data() {
    return {
      mdComponent: "MdButton",
      checked: false,
      i18n: {
        "zh-CN": {
          type: "按钮类型",
          size: "按钮尺寸",
          icon: "图标按钮",
          loading: "加载状态",
          shape: "按钮形状",
          default: "默认按钮",
          primary: "主要按钮",
          success: "成功按钮",
          danger: "危险按钮",
          warning: "警告按钮",
          large: "大号按钮",
          normal: "普通按钮",
          small: "小型按钮",
          mini: "迷你按钮",
          plain: "朴素按钮",
          square: "方形按钮",
          round: "圆形按钮",
          hairline: "细边框",
          hairlineButton: "细边框按钮",
          loadingText: "加载中...",
          router: "页面导航",
          urlRoute: "URL 跳转",
          vueRoute: "路由跳转",
          customColor: "自定义颜色",
          pure: "单色按钮",
          gradient: "渐变色按钮",
          blockElement: "块级元素",
          disabled: "禁用状态",
          loadingStatus: "加载状态",
          button: "按钮",
          showCode: "显示源码",
        },
        "en-US": {
          type: "Type",
          size: "Size",
          icon: "Icon",
          loading: "Loading",
          shape: "Shape",
          default: "Default",
          primary: "Primary",
          success: "Success",
          danger: "Danger",
          warning: "Warning",
          large: "Large",
          normal: "Normal",
          small: "Small",
          mini: "Mini",
          plain: "Plain",
          square: "Square",
          round: "Round",
          hairline: "Hairline",
          hairlineButton: "Hairline",
          loadingText: "Loading...",
          router: "Router",
          urlRoute: "URL",
          vueRoute: "Vue Router",
          customColor: "Custom Color",
          pure: "Pure",
          gradient: "Gradient",
          blockElement: "Block Element",
          disabled: "Disabled",
          loadingStatus: "Loading",
          button: "Button",
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
        // 使用英文的markdown
        this.mdComponent = "MdButtonEn";
        return this.i18n["en-US"][name];
      } else {
        // 使用中文的markdown
        this.mdComponent = "MdButton";
        return this.i18n["zh-CN"][name];
      }
    },
  },
};
</script>

<style lang="less" scoped>
@import "../../assets/vant.less";
@import "./index.less";
.markdown-body {
  padding: 0px 10px 0px 10px;
}
.demo-button {
  text-align: left;
  background: @white;
  box-sizing: border-box;
  min-height: calc(100vh - 56px);
  padding-bottom: 20px;

  /deep/.van-button {
    &--large {
      margin-bottom: @padding-md !important;
    }

    &--small,
    &--normal:not(:last-child) {
      margin-right: @padding-md !important;
    }
  }

  /deep/.van-doc-demo-block {
    padding: 0 @padding-md !important;
  }

  /deep/.van-doc-demo-block__title {
    padding-left: 0 !important;
  }

  &-row {
    margin-bottom: @padding-sm !important;
  }
}
</style>

