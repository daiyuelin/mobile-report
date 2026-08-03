<template>
  <div class="demo-cascader">
    <demo-block card :title="t('basicUsage')">
      <van-field
        v-model="base.result"
        is-link
        readonly
        :label="t('area')"
        :placeholder="t('selectArea')"
        @click="base.show = true"
      />
      <van-popup v-model="base.show" round position="bottom">
        <van-cascader
          v-model="base.value"
          :title="t('selectArea')"
           :placeholder="t('select')"
          :options="t('options')"
          @close="base.show = false"
          @finish="onFinish('base', $event)"
        />
      </van-popup>
    </demo-block>

    <demo-block card :title="t('customColor')">
      <van-field
        v-model="customColor.result"
        is-link
        readonly
        :label="t('area')"
        :placeholder="t('selectArea')"
        @click="customColor.show = true"
      />
      <van-popup v-model="customColor.show" round position="bottom">
        <van-cascader
          v-model="customColor.value"
          :title="t('selectArea')"
          :options="t('options')"
           :placeholder="t('select')"
          active-color="#444444"
          @close="customColor.show = false"
          @finish="onFinish('customColor', $event)"
        />
      </van-popup>
    </demo-block>

    <demo-block card :title="t('asyncOptions')">
      <van-field
        v-model="async.result"
        is-link
        readonly
        :label="t('area')"
        :placeholder="t('selectArea')"
        @click="async.show = true"
      />
      <van-popup v-model="async.show" round position="bottom">
        <van-cascader
          v-model="async.value"
          :title="t('selectArea')"
          :options="async.options"
          :placeholder="t('select')"
          @close="async.show = false"
          @change="loadDynamicOptions"
          @finish="onFinish('async', $event)"
        />
      </van-popup>
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
import MdCascaderEn from "../../../docs/cascader/README.md";
import MdCascader from "../../../docs/zh/cascader/README.md";
import zhCNOptions from "./area-zh-CN";
import enUSOptions from "./area-en-US";
import DemoBlock from ".././DemoBlock";
import { getLangFromUserAgent } from "../../utils/util";
export default {
  name: "Cascader",
  components: {
    DemoBlock,
    MdCascaderEn,
    MdCascader
  },
  props: {
    msg: String,
  },
  data() {
    let i18n = {
        "zh-CN": {
          select:"请选择",
          basicUsage: "基础用法",
          area: "地区",
          options: zhCNOptions,
          selectArea: "请选择地区",
          customColor: "自定义颜色",
          asyncOptions: "异步加载选项",
          asyncOptions1: [
            {
              text: "浙江省",
              value: "330000",
              children: [],
            },
          ],
          asyncOptions2: [
            { text: "杭州市", value: "330100" },
            { text: "宁波市", value: "330200" },
          ],
          showCode: "显示源码",

        },
        "en-US": {
          select:"Select",
          basicUsage: "Basic Usage",
          area: "Area",
          options: enUSOptions,
          selectArea: "Select Area",
          customColor: "Custom Color",
          asyncOptions: "Async Options",
          asyncOptions1: [
            {
              text: "Zhejiang",
              value: "330000",
              children: [],
            },
          ],
          asyncOptions2: [
            { text: "Hangzhou", value: "330100" },
            { text: "Ningbo", value: "330200" },
          ],
          showCode: "Show Code",
        },
      }
    function t(name) {
      // 根据手机语言环境对应显示中文还是英文
      let _lang = getLangFromUserAgent();
      if (_lang === "en") {
        return i18n["en-US"][name];
      } else {
        return i18n["zh-CN"][name];
      }
    }
    return {
      mdComponent: "MdCalendar",
      checked: false,
      base: {
        show: false,
        value: "",
        result: "",
      },
      customColor: {
        show: false,
        value: null,
        result: "",
      },
      async: {
        show: false,
        value: null,
        result: "",
        options: t("asyncOptions1"),
      },
      i18n: i18n,
    };
  },
  methods: {
    t(name) {
      // 根据手机语言环境对应显示中文还是英文
      let _lang = getLangFromUserAgent();
      if (_lang === "en") {
        this.mdComponent = "MdCascaderEn";
        return this.i18n["en-US"][name];
      } else {
        this.mdComponent = "MdCascader";
        return this.i18n["zh-CN"][name];
      }
    },
    loadDynamicOptions({ value }) {
      let _this = this;
      if (value === "330000") {
        setTimeout(() => {
          this.async.options[0].children = _this.t("asyncOptions2");
        }, 500);
      }
    },

    onFinish(type, { value, selectedOptions }) {
      const result = selectedOptions.map((option) => option.text).join("/");
      this[type] = {
        ...this[type],
        show: false,
        value,
        result,
      };
    },
  },
};
</script>

<style lang="less" scoped>
@import "../../assets/vant.less";
@import "./index.less";
.markdown-body {
  padding: 0px 10px 0px 10px;
}
.demo-cascader {
  text-align: left;
  background: @white;
  box-sizing: border-box;
  min-height: calc(100vh - 56px);
  padding-bottom: 20px;

  /deep/.van-doc-demo-block {
    padding: 0 @padding-md !important;
  }

  /deep/.van-doc-demo-block__title {
    padding-left: 0 !important;
  }

  &-row {
    margin-bottom: @padding-sm !important;
  }
}
</style>