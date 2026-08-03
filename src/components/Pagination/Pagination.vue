<!--
 * @Description: 
 * @Version: 1.0
 * @Author: Edison Chen
 * @Date: 2021-05-21 17:26:19
 * @LastEditors: Dai YueLin
 * @LastEditTime: 2021-06-21 13:31:15
 * @FilePath: \JoyChat_Compinent\src\components\Pagination\Pagination.vue
 * Copyright (C) 2021 Edison Chen. All rights reserved.
-->
<template>
  <div class="demo-pagination">
    <demo-block :title="t('basicUsage')">
      <van-pagination
        v-model="currentPage1"
        :total-items="24"
        :items-per-page="5"
        :prev-text="t('prevText')"
        :next-text="t('nextText')"
      />
    </demo-block>

    <demo-block :title="t('title2')">
      <van-pagination
        v-model="currentPage2"
        :page-count="12"
        :prev-text="t('prevText')"
        :next-text="t('nextText')"
        mode="simple"
        size="small"
      />
    </demo-block>

    <demo-block :title="t('title3')">
      <van-pagination
        v-model="currentPage3"
        force-ellipses
        :total-items="125"
        :show-page-size="3"
        :prev-text="t('prevText')"
        :next-text="t('nextText')"
      />
    </demo-block>

    <demo-block :title="t('title4')">
      <van-pagination
        v-model="currentPage4"
        :total-items="125"
        :show-page-size="5"
      >
        <template #prev-text>
          <van-icon name="arrow-left" />
        </template>
        <template #next-text>
          <van-icon name="arrow" />
        </template>
        <template #page="{ text }">{{ text }}</template>
      </van-pagination>
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
import MdEn from "../../../docs/pagination/README.md";
import Md from "../../../docs/zh/pagination/README.md";
import DemoBlock from "../DemoBlock";
import { getLangFromUserAgent } from "../../utils/util";
export default {
  name: "Pagination",
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
          title2: "简单模式",
          title3: "显示省略号",
          title4: "自定义按钮",
          prevText: "上一页",
          nextText: "下一页",
          basicUsage: "基础用法",
        },
        "en-US": {
          showCode: "Show Code",
          title2: "Simple Mode",
          title3: "Show ellipses",
          title4: "Custom Button",
          prevText: "Prev",
          nextText: "Next",
          basicUsage: "Basic Usage",
        },
      },
      currentPage1: 1,
      currentPage2: 1,
      currentPage3: 1,
      currentPage4: 1,
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
/deep/.van-switch {
  margin-left: 16px;
}
.demo-pagination {
  .van-pagination {
    width: 100%;
    margin: 5px 0;
  }

  .van-doc-demo-block {
    padding: 0 @padding-md;
  }

  .van-doc-demo-block__title {
    padding-left: 0;
  }
}
</style>
