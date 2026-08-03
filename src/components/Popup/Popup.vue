<!--
 * @Descripttion: 
 * @version: 
 * @Author: Chen Wei/u0037443
 * @Date: 2021-05-18 14:59:02
 * @LastEditors: Dai YueLin
 * @LastEditTime: 2021-06-16 16:53:02
-->
<template>
  <div class="demo-popup">
    <demo-block card :title="t('basicUsage')">
      <van-cell :title="t('buttonBasic')" is-link @click="showBasic = true" />
      <van-popup v-model="showBasic" :style="{ padding: '30px 50px' }">
        {{ t("content") }}
      </van-popup>
    </demo-block>

    <demo-block card :title="t('position')">
      <van-cell :title="t('buttonTop')" is-link @click="showTop = true" />
      <van-cell :title="t('buttonBottom')" is-link @click="showBottom = true" />
      <van-cell :title="t('buttonLeft')" is-link @click="showLeft = true" />

      <van-popup v-model="showTop" position="top" :style="{ height: '30%' }" />
      <van-popup
        v-model="showBottom"
        position="bottom"
        :style="{ height: '30%' }"
      />
      <van-popup
        v-model="showLeft"
        position="left"
        :style="{ width: '30%', height: '100%' }"
      />
    </demo-block>

    <demo-block card :title="t('closeIcon')">
      <van-cell :title="t('closeIcon')" is-link @click="showCloseIcon = true" />
      <van-cell
        :title="t('customIconPosition')"
        is-link
        @click="showCustomIconPosition = true"
      />
      <van-popup
        v-model="showCloseIcon"
        closeable
        position="bottom"
        :style="{ height: '30%' }"
      />
      <van-popup
        v-model="showCustomIconPosition"
        closeable
        close-icon-position="top-left"
        position="bottom"
        :style="{ height: '30%' }"
      />
    </demo-block>

    <demo-block card :title="t('teleport')">
      <van-cell
        :title="t('teleport')"
        is-link
        @click="showGetContainer = true"
      />
      <van-popup
        v-model="showGetContainer"
        teleport="body"
        :style="{ padding: '30px 50px' }"
      />
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
import MdEn from "../../../docs/popup/README.md";
import Md from "../../../docs/zh/popup/README.md";
import { getLangFromUserAgent } from "../../utils/util";

export default {
  name: "Popup",
  components: {
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
      showBasic: false,
      showTop: false,
      showBottom: false,
      showLeft: false,
      showRight: false,
      showCloseIcon: false,
      showGetContainer: false,
      showCustomIconPosition: false,
      i18n: {
        "zh-CN": {
          basicUsage: "基础用法",
          position: "弹出位置",
          buttonBasic: "展示弹出层",
          buttonTop: "顶部弹出",
          buttonBottom: "底部弹出",
          buttonLeft: "左侧弹出",
          teleport: "指定挂载节点",
          closeIcon: "关闭图标",
          customIconPosition: "图标位置",
          content: "内容",
          showCode: "显示源码",
        },
        "en-US": {
          basicUsage: "Basic Usage",
          position: "Position",
          buttonBasic: "Show Popup",
          buttonTop: "From Top",
          buttonBottom: "From Bottom",
          buttonLeft: "From Left",
          teleport: "Get Container",
          closeIcon: "Close Icon",
          customIconPosition: "Icon Position",
          content: "Content",
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
        this.mdComponent = "MdEn";
        return this.i18n["en-US"][name];
      } else {
        this.mdComponent = "Md";
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
  background: @white;
  padding: 0px 10px 0px 10px;
}
.demo-popup {
  text-align: left;

  .van-row {
    margin-bottom: @padding-md;
  }

  .van-button {
    margin-left: @padding-md;
  }

  /deep/.van-switch{
    margin-left: 16px;
  }
}
</style>

