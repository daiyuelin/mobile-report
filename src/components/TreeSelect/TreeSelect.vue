<template>
  <div class="van-doc-demo-section">
    <demo-block :title="t('radioMode')">
      <van-tree-select
        :active-id.sync="activeId"
        :main-active-index.sync="activeIndex"
        :items="items"
      />
    </demo-block>

    <demo-block :title="t('multipleMode')">
      <van-tree-select
        :active-id.sync="activeIds"
        :main-active-index.sync="activeIndex2"
        :items="items"
      />
    </demo-block>

    <demo-block :title="t('customContent')">
      <van-tree-select
        :main-active-index.sync="activeIndex3"
        height="55vw"
        :items="simpleItems"
      >
        <template #content>
          <van-image
            v-if="activeIndex3 === 0"
            :show-loading="false"
            src="https://img.yzcdn.cn/vant/apple-1.jpg"
          />
          <van-image
            v-if="activeIndex3 === 1"
            :show-loading="false"
            src="https://img.yzcdn.cn/vant/apple-2.jpg"
          />
        </template>
      </van-tree-select>
    </demo-block>

    <demo-block :title="t('showBadge')">
      <van-tree-select
        :active-id.sync="activeId2"
        :main-active-index.sync="activeIndex4"
        height="55vw"
        :items="badgeItems"
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
import MdEn from "../../../docs/tree-select/README.md";
import Md from "../../../docs/zh/tree-select/README.md";
import { zhCNData } from './data-zh';
import { enUSData } from './data-en';
import { getLangFromUserAgent } from "../../utils/util";
export default {
  name: "TreeSelect",
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
      activeId: 1,
      activeId2: 1,
      activeIds: [1, 2],
      activeIndex: 0,
      activeIndex2: 0,
      activeIndex3: 0,
      activeIndex4: 0,
      i18n: {
        "zh-CN": {
          showCode: "显示源码",
          showBadge: "徽标提示",
          radioMode: "单选模式",
          multipleMode: "多选模式",
          customContent: "自定义内容",
          data: zhCNData,
          dataSimple: [{ text: "分组 1" }, { text: "分组 2" }],
        },
        "en-US": {
          showCode: "Show Code",
          showBadge: "Show Badge",
          radioMode: "Radio Mode",
          multipleMode: "Multiple Mode",
          customContent: "Custom Content",
          data: enUSData,
          dataSimple: [{ text: "Group 1" }, { text: "Group 2" }],
        },
      },
    };
  },
  computed:{
    items(){
      return this.t('data')
    },

     simpleItems(){
       return this.t('dataSimple')
     },
    badgeItems() {
      const data = JSON.parse(JSON.stringify((this.t('data')).slice(0, 2)))
      data[0].dot = true;
      data[1].badge = 5;
      return data;
    }
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
.van-doc-demo-section {
  text-align: left;
  padding-bottom: 20px;
  display: block;

   .markdown-body {
    background: @white;
    padding: 0px 10px 0px 10px;
  }
  /deep/.van-switch {
    margin-left: 16px;
  }
}
</style>
