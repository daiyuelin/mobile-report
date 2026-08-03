<template>
  <div class="demo-action-sheet">
    <demo-block card :title="t('basicUsage')">
      <van-cell is-link :title="t('basicUsage')" @click="show.basic = true" />
      <van-cell is-link :title="t('showCancel')" @click="show.cancel = true" />
      <van-cell
        is-link
        :title="t('showDescription')"
        @click="show.description = true"
      />
    </demo-block>

    <demo-block card :title="t('optionStatus')">
      <van-cell
        is-link
        :title="t('optionStatus')"
        @click="show.status = true"
      />
    </demo-block>

    <demo-block card :title="t('customPanel')">
      <van-cell is-link :title="t('customPanel')" @click="show.title = true" />
    </demo-block>

    <van-action-sheet
      v-model="show.basic"
      :actions="simpleActions"
      @select="onSelect"
    />

    <van-action-sheet
      v-model="show.cancel"
      :actions="simpleActions"
      close-on-click-action
      :cancel-text="t('cancel')"
      @cancel="onCancel"
    />

    <van-action-sheet
      v-model="show.description"
      :actions="actionsWithDescription"
      close-on-click-action
      :cancel-text="t('cancel')"
      :description="t('description')"
    />

    <van-action-sheet
      v-model="show.status"
      close-on-click-action
      :actions="statusActions"
      :cancel-text="t('cancel')"
    />

    <van-action-sheet v-model="show.title" :title="t('title')">
      <div class="demo-action-sheet-content">{{ t("content") }}</div>
    </van-action-sheet>

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
import MdEn from "../../../docs/action-sheet/README.md";
import Md from "../../../docs/zh/action-sheet/README.md";
import DemoBlock from ".././DemoBlock";
import { getLangFromUserAgent } from "../../utils/util";
export default {
  name: "ActionSheet",
  components: {
    DemoBlock,
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
      show: {
        basic: false,
        cancel: false,
        title: false,
        status: false,
        description: false,
      },
      i18n: {
        "zh-CN": {
          showCode: "显示源码",
          option1: "选项一",
          option2: "选项二",
          option3: "选项三",
          subname: "描述信息",
          showCancel: "展示取消按钮",
          buttonText: "弹出菜单",
          customPanel: "自定义面板",
          description: "这是一段描述信息",
          optionStatus: "选项状态",
          coloredOption: "着色选项",
          disabledOption: "禁用选项",
          showDescription: "展示描述信息",
          basicUsage: "基础用法",
          title: "标题",
          content: "内容",
        },
        "en-US": {
          showCode: "Show Code",
          option1: "Option 1",
          option2: "Option 2",
          option3: "Option 3",
          subname: "Description",
          showCancel: "Show Cancel Button",
          buttonText: "Show ActionSheet",
          customPanel: "Custom Panel",
          description: "Description",
          optionStatus: "Option Status",
          coloredOption: "Colored Option",
          disabledOption: "Disabled Option",
          showDescription: "Show Description",
          basicUsage: "Basic Usage",
          title: "Title",
          content: "Content",
        },
      },
    };
  },
  computed: {
    simpleActions() {
      return [
        { name: this.t("option1") },
        { name: this.t("option2") },
        { name: this.t("option3") },
      ];
    },
    statusActions() {
      return [
        { name: this.t("coloredOption"), color: "#92A2BD" },
        { name: this.t("disabledOption"), disabled: true },
        { loading: true },
      ];
    },
    actionsWithDescription() {
      return [
        { name: this.t("option1") },
        { name: this.t("option2") },
        { name: this.t("option3"), subname: this.t("subname") },
      ];
    },
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
    onSelect(item) {
      this.show.basic = false;
      this.$toast(item.name);
    },

    onCancel() {
      this.$toast(this.t("cancel"));
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
.demo-action-sheet {
  text-align: left;
  &-content {
    padding: @padding-md @padding-md @padding-md * 10;
  }

  /deep/.van-switch {
    margin-left: 16px;
  }
}
</style>
