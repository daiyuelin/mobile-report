<!--
 * @Description: 
 * @Version: 1.0
 * @Author: Edison Chen
 * @Date: 2021-05-21 13:51:25
 * @LastEditors: Dai YueLin
 * @LastEditTime: 2021-06-17 13:50:04
 * @FilePath: \JoyChat_Compinent\src\components\ShareSheet\ShareSheet.vue
 * Copyright (C) 2021 Edison Chen. All rights reserved.
-->
<template>
  <div>
    <demo-block card :title="t('basicUsage')">
      <van-cell is-link :title="t('showSheet')" @click="basic = true" />
      <van-share-sheet
        v-model="basic"
        :title="t('title')"
        :options="options"
        @select="onSelect"
        :cancel-text="t('cancelText')"
      />
    </demo-block>

    <demo-block card :title="t('multiLine')">
      <van-cell is-link :title="t('showSheet')" @click="multiLine = true" />
      <van-share-sheet
        v-model="multiLine"
        :title="t('title')"
        :options="multiLineOptions"
        @select="onSelect"
        :cancel-text="t('cancelText')"
      />
    </demo-block>

    <demo-block card :title="t('customIcon')">
      <van-cell is-link :title="t('showSheet')" @click="customIcon = true" />
      <van-share-sheet
        v-model="customIcon"
        :options="customIconOptions"
        @select="onSelect"
        :cancel-text="t('cancelText')"
      />
    </demo-block>

    <demo-block card :title="t('withDesc')">
      <van-cell is-link :title="t('showSheet')" @click="withDesc = true" />
      <van-share-sheet
        v-model="withDesc"
        :title="t('title')"
        :options="optionsWithDesc"
        :description="t('description')"
        :cancel-text="t('cancelText')"
        @select="onSelect"
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
import MdEn from "../../../docs/share-sheet/README.md";
import Md from "../../../docs/zh/share-sheet/README.md";
import DemoBlock from "../DemoBlock";
import { getLangFromUserAgent } from "../../utils/util";
import { Toast } from "vant";
export default {
  name: "ShareSheet",
  components: {
    DemoBlock,
    MdEn,
    Md
  },
  data() {
    let i18n = {
      "zh-CN": {
        showCode: "显示源码",
        cancelText: "取消",
        qq: "QQ",
        name: "名称",
        link: "复制链接",
        title: "立即分享给好友",
        weibo: "微博",
        wechat: "微信",
        poster: "分享海报",
        qrcode: "二维码",
        multiLine: "展示多行选项",
        showSheet: "显示分享面板",
        withDesc: "展示描述信息",
        customIcon: "自定义图标",
        description: "描述信息",
        weappQrcode: "小程序码",
        basicUsage: "基础用法",
        wechatMoments: "朋友圈",
      },
      "en-US": {
        showCode: "Show Code",
        cancelText: "Cancel",
        qq: "QQ",
        name: "Name",
        link: "Link",
        title: "Share",
        weibo: "Weibo",
        wechat: "Wechat",
        poster: "Poster",
        qrcode: "Qrcode",
        multiLine: "Multi Line",
        showSheet: "Show ShareSheet",
        withDesc: "Show Description",
        customIcon: "Custom Icon",
        description: "Description",
        weappQrcode: "Weapp Qrcode",
        basicUsage: "Basic Usage",
        wechatMoments: "Wechat Moments",
      },
    };
    function translate(name) {
      let _lang = getLangFromUserAgent();
      if (_lang === "en") {
        return i18n["en-US"][name];
      } else {
        return i18n["zh-CN"][name];
      }
    }
    return {
      mdComponent: "Md",
      checked: false,
      i18n: i18n,
      basic: false,
      multiLine: false,
      customIcon: false,
      withDesc: false,
      options: [
        { name: translate("wechat"), icon: "wechat" },
        { name: translate("weibo"), icon: "weibo" },
        { name: translate("link"), icon: "link" },
        { name: translate("poster"), icon: "poster" },
        { name: translate("qrcode"), icon: "qrcode" },
      ],
      multiLineOptions: [
        [
          { name: translate("wechat"), icon: "wechat" },
          { name: translate("wechatMoments"), icon: "wechat-moments" },
          { name: translate("weibo"), icon: "weibo" },
          { name: translate("qq"), icon: "qq" },
        ],
        [
          { name: translate("link"), icon: "link" },
          { name: translate("poster"), icon: "poster" },
          { name: translate("qrcode"), icon: "qrcode" },
          { name: translate("weappQrcode"), icon: "weapp-qrcode" },
        ],
      ],
      customIconOptions: [
        {
          name: translate("name"),
          icon: "https://img.yzcdn.cn/vant/custom-icon-fire.png",
        },
        {
          name: translate("name"),
          icon: "https://img.yzcdn.cn/vant/custom-icon-light.png",
        },
        {
          name: translate("name"),
          icon: "https://img.yzcdn.cn/vant/custom-icon-water.png",
        },
      ],
      optionsWithDesc: [
        { name: translate("wechat"), icon: "wechat" },
        { name: translate("weibo"), icon: "weibo" },
        {
          name: translate("link"),
          icon: "link",
          description: translate("description"),
        },
        { name: translate("poster"), icon: "poster" },
        { name: translate("qrcode"), icon: "qrcode" },
      ],
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
    onSelect(option) {
      Toast(option.name);
      this.basic = false;
      this.withDesc = false;
      this.multiLine = false;
      this.customIcon = false;
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
/deep/.van-switch {
    margin-left: 16px;
  }
</style>
