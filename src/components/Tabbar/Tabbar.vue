<template>
  <div class="demo-tabbar">
    <demo-block :title="t('basicUsage')">
      <van-tabbar v-model="active">
        <van-tabbar-item icon="home-o">{{ t("tab") }}</van-tabbar-item>
        <van-tabbar-item icon="search">{{ t("tab") }}</van-tabbar-item>
        <van-tabbar-item icon="friends-o">{{ t("tab") }}</van-tabbar-item>
        <van-tabbar-item icon="setting-o">{{ t("tab") }}</van-tabbar-item>
      </van-tabbar>
    </demo-block>

    <demo-block :title="t('matchByName')">
      <van-tabbar v-model="activeName">
        <van-tabbar-item name="home" icon="home-o">
          {{ t("tab") }}
        </van-tabbar-item>
        <van-tabbar-item name="search" icon="search">
          {{ t("tab") }}
        </van-tabbar-item>
        <van-tabbar-item name="friends" icon="friends-o">
          {{ t("tab") }}
        </van-tabbar-item>
        <van-tabbar-item name="setting" icon="setting-o">
          {{ t("tab") }}
        </van-tabbar-item>
      </van-tabbar>
    </demo-block>

    <demo-block :title="t('badge')">
      <van-tabbar v-model="active2">
        <van-tabbar-item icon="home-o">{{ t("tab") }}</van-tabbar-item>
        <van-tabbar-item icon="search" dot>{{ t("tab") }}</van-tabbar-item>
        <van-tabbar-item icon="friends-o" badge="5">
          {{ t("tab") }}
        </van-tabbar-item>
        <van-tabbar-item icon="setting-o" badge="20">
          {{ t("tab") }}
        </van-tabbar-item>
      </van-tabbar>
    </demo-block>

    <demo-block :title="t('customColor')">
      <van-tabbar
        v-model="active4"
        active-color="#92A2BD"
        inactive-color="#000"
      >
        <van-tabbar-item icon="home-o">{{ t("tab") }}</van-tabbar-item>
        <van-tabbar-item icon="search">{{ t("tab") }}</van-tabbar-item>
        <van-tabbar-item icon="friends-o">{{ t("tab") }}</van-tabbar-item>
        <van-tabbar-item icon="setting-o">{{ t("tab") }}</van-tabbar-item>
      </van-tabbar>
    </demo-block>

    <demo-block :title="t('switchEvent')">
      <van-tabbar v-model="active5" @change="onChange">
        <van-tabbar-item icon="home-o">{{ `${t("tab")} 1` }}</van-tabbar-item>
        <van-tabbar-item icon="search">{{ `${t("tab")} 2` }}</van-tabbar-item>
        <van-tabbar-item icon="friends-o">{{
          `${t("tab")} 3`
        }}</van-tabbar-item>
        <van-tabbar-item icon="setting-o">{{
          `${t("tab")} 4`
        }}</van-tabbar-item>
      </van-tabbar>
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
import MdEn from "../../../docs/tabbar/README.md";
import Md from "../../../docs/zh/tabbar/README.md";
import { getLangFromUserAgent } from "../../utils/util";
export default {
  name: "Tabbar",
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
      active: 0,
      active2: 0,
      active3: 0,
      active4: 0,
      active5: 0,
      activeName: "home",
      icon: {
        active: "https://img.yzcdn.cn/vant/user-active.png",
        inactive: "https://img.yzcdn.cn/vant/user-inactive.png",
      },
      i18n: {
        "zh-CN": {
          showCode: "显示源码",
          badge: "徽标提示",
          customIcon: "自定义图标",
          customColor: "自定义颜色",
          matchByName: "通过名称匹配",
          switchEvent: "监听切换事件",
          basicUsage: "基础用法",
          tab: "标签",
          custom: "自定义",
        },
        "en-US": {
          showCode: "Show Code",
          badge: "Show Badge",
          customIcon: "Custom Icon",
          customColor: "Custom Color",
          matchByName: "Match by name",
          switchEvent: "Change Event",
          basicUsage: "Basic Usage",
          tab: "Tab",
          custom: "Custom",
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
      this.$toast(`${this.t("tab")} ${index + 1}`);
    },
  },
};
</script>


<style lang="less" scoped>
@import "../../assets/vant.less";
@import "./index.less";
.demo-tabbar {
  text-align: left;
  .van-tabbar {
    position: relative;
    padding-bottom: 0;
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
