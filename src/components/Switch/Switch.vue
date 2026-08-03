<template>
  <div class="demo-switch">
    <demo-block :title="t('basicUsage')">
      <van-switch v-model="checked" />
    </demo-block>

    <demo-block :title="t('disabled')">
      <van-switch v-model="checked" disabled />
    </demo-block>

    <demo-block :title="t('loadingStatus')">
      <van-switch v-model="checked" loading />
    </demo-block>

    <demo-block :title="t('customSize')">
      <van-switch v-model="checked2" size="24px" />
    </demo-block>

    <demo-block :title="t('customColor')">
      <van-switch
        v-model="checked3"
        active-color="#92A2BD"
        inactive-color="#dcdee0"
      />
    </demo-block>

    <demo-block :title="t('asyncControl')">
      <van-switch v-model="checked4" @input="onUpdateValue" />
    </demo-block>

    <demo-block :title="t('withCell')">
      <van-cell center :title="t('title')">
        <template #right-icon>
          <van-switch v-model="checked5" size="24" />
        </template>
      </van-cell>
    </demo-block>

    <demo-block :title="t('showCode')"
      ><van-switch v-model="codechecked"
    /></demo-block>
    <div class="markdown-body" v-if="codechecked">
      <section :is="mdComponent"></section>
    </div>
  </div>
</template>

<script>
import "highlight.js/styles/github.css";
import "github-markdown-css";
import MdSwitchEn from "../../../docs/switch/README.md";
import MdSwitch from "../../../docs/zh/switch/README.md";
import DemoBlock from "../DemoBlock";
import { getLangFromUserAgent } from "../../utils/util";
export default {
  name: "Switch",
  components: {
    MdSwitchEn,
    MdSwitch,
    DemoBlock
  },
  props: {
    msg: String,
  },
  data() {
    return {
      mdComponent: "MdSwitchEn",
      codechecked: false,
      checked: true,
      checked2: true,
      checked3: true,
      checked4: true,
      checked5: true,
      checked6: false,
      i18n: {
        "zh-CN": {
          title: "标题",
          confirm: "提醒",
          message: "是否切换开关？",
          withCell: "搭配单元格使用",
          customSize: "自定义大小",
          customColor: "自定义颜色",
          asyncControl: "异步控制",
          basicUsage: "基础用法",
          loadingStatus:"加载状态",
          disabled: "禁用状态",
          showCode: "显示源码",
        },
        "en-US": {
          title: "Title",
          confirm: "Confirm",
          message: "Are you sure to toggle switch?",
          withCell: "Inside a Cell",
          customSize: "Custom Size",
          customColor: "Custom Color",
          asyncControl: "Async Control",
          basicUsage: "Basic Usage",
          loadingStatus:"Loading",
          disabled: "Disabled",
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
        this.mdComponent = "MdSwitchEn";
         return this.i18n["en-US"][name];
      } else {
        this.mdComponent = "MdSwitch";
        return this.i18n["zh-CN"][name];
      }
    },
    onUpdateValue(checked){
      this.$dialog.confirm({
        title: this.t('title'),
        message: this.t('message'),
      }).then(() => {
        this.checked4 = checked;
      });
    }
  },
};
</script>

<style lang="less" scoped>
@import "../../assets/vant.less";
@import "./index.less";
.markdown-body {
  padding: 0px 10px 0px 10px;
}
.demo-switch {
  text-align: left;
  background-color: #f7f8fa;

  /deep/.van-doc-demo-block {
    padding: 0 @padding-md !important;
  }

  /deep/.van-doc-demo-block__title {
    padding-left: 0 !important;
  }
  /deep/.van-switch{
    margin-left: 16px;
  }
  &-row {
    margin-bottom: @padding-sm !important;
  }

  .van-switch {
    margin-left: @padding-md;
  }
}
</style>