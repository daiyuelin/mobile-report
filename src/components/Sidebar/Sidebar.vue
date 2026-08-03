<!--
 * @Description: 
 * @Autor: Dai YueLin
 * @Date: 2021-05-21 13:44:13
 * @LastEditors: Dai YueLin
 * @LastEditTime: 2021-06-21 13:37:44
-->
<template>
  <div class="demo-sidebar">
    <van-grid :column-num="2" :border="false">
      <van-grid-item>
        <h3 class="demo-sidebar-title">{{ t("basicUsage") }}</h3>
        <van-sidebar v-model="active1">
          <van-sidebar-item :title="t('title')" />
          <van-sidebar-item :title="t('title')" />
          <van-sidebar-item :title="t('title')" />
        </van-sidebar>
      </van-grid-item>

      <van-grid-item>
        <h3 class="demo-sidebar-title">{{ t("showBadge") }}</h3>
        <van-sidebar v-model="active2">
          <van-sidebar-item :title="t('title')" dot />
          <van-sidebar-item :title="t('title')" badge="5" />
          <van-sidebar-item :title="t('title')" badge="20" />
        </van-sidebar>
      </van-grid-item>

      <van-grid-item>
        <h3 class="demo-sidebar-title">{{ t("disabled") }}</h3>
        <van-sidebar v-model="active3">
          <van-sidebar-item :title="t('title')" />
          <van-sidebar-item :title="t('title')" disabled />
          <van-sidebar-item :title="t('title')" />
        </van-sidebar>
      </van-grid-item>

      <van-grid-item>
        <h3 class="demo-sidebar-title">{{ t("changeEvent") }}</h3>
        <van-sidebar v-model="active4" @change="onChange">
          <van-sidebar-item :title="`${t('title')} 1`" />
          <van-sidebar-item :title="`${t('title')} 2`" />
          <van-sidebar-item :title="`${t('title')} 3`" />
        </van-sidebar>
      </van-grid-item>
    </van-grid>

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
import MdEn from "../../../docs/sidebar/README.md";
import Md from "../../../docs/zh/sidebar/README.md";
import { getLangFromUserAgent } from "../../utils/util";
export default {
  name: "Sidebar",
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
      active1: 0,
      active2: 0,
      active3: 0,
      active4: 0,
      i18n: {
        "zh-CN": {
          showCode: "显示源码",
          title: "标签名",
          disabled: "禁用选项",
          showBadge: "徽标提示",
          changeEvent: "监听切换事件",
          basicUsage: "基础用法",
        },
        "en-US": {
          showCode: "Show Code",
          title: "Title",
          disabled: "Disabled",
          showBadge: "Show Badge",
          changeEvent: "Change Event",
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
    onChange(index) {
      this.$toast(`${this.t("title")} ${index + 1}`);
    },
  },
};
</script>

<style lang="less" scoped>
@import "../../assets/vant.less";
@import "./index.less";

.demo-sidebar {
  text-align: left;
  background-color: @white;
  box-sizing: border-box;
  min-height: calc(100vh - 56px);
  padding-bottom: 20px;

  .van-sidebar {
    margin-left: @padding-md;
  }

  &-title {
    margin-bottom: 16px;
    color: @gray-6;
    font-weight: normal;
    font-size: 14px;
  }

  .markdown-body {
    background: @white;
    padding: 0px 10px 0px 10px;
  }
  /deep/.van-switch {
    margin-left: 16px;
  }
}
</style>
