<!--
 * @Description: 
 * @Version: 1.0
 * @Author: Edison Chen
 * @Date: 2021-05-18 10:28:05
 * @LastEditors: Dai YueLin
 * @LastEditTime: 2021-06-22 10:36:58
 * @FilePath: \JoyChat_Compinent\src\components\Search\Search.vue
 * Copyright (C) 2021 Edison Chen. All rights reserved.
-->
<template>
  <div class="demo-search">
    <demo-block :title="t('basicUsage')">
      <van-search v-model="value1" :placeholder="t('placeholder')" />
    </demo-block>

    <demo-block :title="t('listenToEvents')">
      <form action="/">
        <van-search
          v-model="value5"
          :placeholder="t('placeholder')"
          show-action
          :action-text="t('cancel')"
          @search="onSearch"
          @cancel="onCancel"
        />
      </form>
    </demo-block>

    <demo-block :title="t('inputAlign')">
      <van-search
        v-model="value4"
        :placeholder="t('placeholder')"
        input-align="center"
      />
    </demo-block>

    <demo-block :title="t('disabled')">
      <van-search v-model="value3" :placeholder="t('placeholder')" disabled />
    </demo-block>

    <demo-block :title="t('background')">
      <van-search
        v-model="value2"
        :placeholder="t('placeholder')"
        shape="round"
        background="#323233"
      />
    </demo-block>

    <demo-block :title="t('customButton')">
      <van-search
        v-model="value6"
        show-action
        :label="t('label')"
        :placeholder="t('placeholder')"
        @search="onSearch"
      >
        <template #action>
          <div @click="onSearch">{{ t("search") }}</div>
        </template>
      </van-search>
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
import MdSearchEn from "../../../docs/search/README.md";
import MdSearch from "../../../docs/zh/search/README.md";
import DemoBlock from "../DemoBlock";
import { getLangFromUserAgent } from "../../utils/util";
import { Toast } from "vant";

export default {
  name: "Search",
  components: { DemoBlock, MdSearchEn, MdSearch },
  data() {
    return {
      mdComponent: "MdSearchEn",
      checked: false,
      i18n: {
        "zh-CN": {
          label: "地址",
          disabled: "禁用搜索框",
          inputAlign: "搜索框内容对齐",
          background: "自定义背景色",
          placeholder: "请输入搜索关键词",
          customButton: "自定义按钮",
          listenToEvents: "事件监听",
          basicUsage: "基础用法",
          search: "搜索",
          cancel: "取消",
          showCode: "显示源码",
        },
        "en-US": {
          label: "Address",
          disabled: "Disabled",
          inputAlign: "Input Align",
          background: "Custom Background Color",
          placeholder: "Placeholder",
          customButton: "Custom Action Button",
          listenToEvents: "Listen to Events",
          basicUsage: "Basic Usage",
          search: "Search",
          cancel: "Cancel",
          showCode: "Show Code",
        },
      },
      value1: "",
      value2: "",
      value3: "",
      value4: "",
      value5: "",
      value6: "",
    };
  },
  methods: {
    t(name) {
      // 根据手机语言环境对应显示中文还是英文
      let _lang = getLangFromUserAgent();
      if (_lang === "en") {
        this.mdComponent = "MdSearchEn";
        return this.i18n["en-US"][name];
      } else {
        this.mdComponent = "MdSearch";
        return this.i18n["zh-CN"][name];
      }
    },
    onSearch() {
      Toast(this.value6);
    },
    onCancel() {
      Toast(this.t("cancel"));
    },
  },
};
</script>
<style lang="less" scoped>
.markdown-body {
  padding: 0px 10px 0px 10px;
}
.demo-search {
  text-align: left;
  background-color: #f7f8fa;

  /deep/.van-doc-demo-block {
    padding: 0 @padding-md !important;
  }

  /deep/.van-doc-demo-block__title {
    padding-left: 0 !important;
  }

  &-row {
    margin-bottom: @padding-sm !important;
  }

  .markdown-body {
    background: @white;
    padding: 0px 10px 0px 10px;
  }
}
</style>