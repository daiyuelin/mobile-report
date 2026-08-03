<!--
 * @Description: 
 * @Version: 1.0
 * @Author: Edison Chen
 * @Date: 2021-05-18 15:32:57
 * @LastEditors: Dai YueLin
 * @LastEditTime: 2021-06-17 15:00:11
 * @FilePath: \JoyChat_Compinent\src\components\Collapse\Collapse.vue
 * Copyright (C) 2021 Edison Chen. All rights reserved.
-->
<template>
  <div class="demo-collapse">
    <demo-block :title="t('basicUsage')">
      <van-collapse v-model="active1">
        <van-collapse-item :title="t('title') + 1" name="1">
          {{ t("text") }}
        </van-collapse-item>
        <van-collapse-item :title="t('title') + 2" name="2">
          {{ t("text") }}
        </van-collapse-item>
        <van-collapse-item :title="t('title') + 3" name="3">
          {{ t("text") }}
        </van-collapse-item>
      </van-collapse>
    </demo-block>

    <demo-block :title="t('accordion')">
      <van-collapse v-model="active2" accordion>
        <van-collapse-item :title="t('title') + 1" name="1">
          {{ t("text") }}
        </van-collapse-item>
        <van-collapse-item :title="t('title') + 2" name="2">
          {{ t("text") }}
        </van-collapse-item>
        <van-collapse-item :title="t('title') + 3" name="3">
          {{ t("text") }}
        </van-collapse-item>
      </van-collapse>
    </demo-block>

    <demo-block :title="t('disabled')">
      <van-collapse v-model="active3">
        <van-collapse-item :title="t('title') + 1" name="1">
          {{ t("text") }}
        </van-collapse-item>
        <van-collapse-item :title="t('title') + 2" name="2" disabled>
          {{ t("text") }}
        </van-collapse-item>
        <van-collapse-item :title="t('title') + 3" name="3" disabled>
          {{ t("text") }}
        </van-collapse-item>
      </van-collapse>
    </demo-block>

    <demo-block :title="t('titleSlot')">
      <van-collapse v-model="active4">
        <van-collapse-item name="1">
          <template #title>
            {{ t("title") + 1 }}<van-icon name="question-o" />
          </template>
          {{ t("text") }}
        </van-collapse-item>
        <van-collapse-item
          :title="t('title') + 2"
          :value="t('content')"
          icon="shop-o"
          name="2"
        >
          {{ t("text") }}
        </van-collapse-item>
      </van-collapse>
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
import MdEn from "../../../docs/collapse/README.md";
import Md from "../../../docs/zh/collapse/README.md";
import DemoBlock from "../DemoBlock";
import { getLangFromUserAgent } from "../../utils/util";
export default {
  name: "Collapse",
  components: {
    DemoBlock,
    MdEn,
    Md,
  },
  data() {
    return {
      mdComponent: "Md",
      checked: false,
      i18n: {
        "zh-CN": {
          showCode: "显示源码",
          accordion: "手风琴",
          titleSlot: "自定义标题内容",
          text: "代码是写出来给人看的，附带能在机器上运行",
          basicUsage: "基础用法",
          title: "标题",
          disabled: "禁用状态",
          content: "内容",
        },
        "en-US": {
          showCode: "Show Code",
          accordion: "Accordion",
          titleSlot: "Custom title",
          text: "Content",
          basicUsage: "Basic Usage",
          title: "Title",
          disabled: "Disabled",
          content: "Content",
        },
      },
      active1: ["1"],
      active2: "1",
      active3: ["1"],
      active4: ["1"],
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
.markdown-body {
  background: @white;
  padding: 0px 10px 0px 10px;
}
.demo-collapse {
  text-align: left;
  .van-icon-question-o {
    margin-left: 5px;
    color: @blue;
    font-size: 15px;
    vertical-align: -3px;
  }
  /deep/.van-switch {
    margin-left: 16px;
  }
}
</style>
