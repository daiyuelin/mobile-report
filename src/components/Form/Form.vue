<!--
 * @Description: 
 * @Autor: Dai YueLin
 * @Date: 2021-05-24 13:22:11
 * @LastEditors: Dai YueLin
 * @LastEditTime: 2021-05-24 14:06:16
-->
<template>
<div class="demo-form">
  <basic-usage />
  <validate-rules />
  <field-type />

  <demo-block :title="t('showCode')"
    ><van-switch v-model="checked"
  /></demo-block>
  <div class="markdown-body" v-if="checked">
    <section :is="mdComponent"></section>
  </div>
</div>
</template>

<script>
import BasicUsage from './BasicUsage';
import ValidateRules from './ValidateRules';
import FieldType from './FieldType';
import "highlight.js/styles/github.css";
import "github-markdown-css";
import MdFormEn from "../../../docs/form/README.md";
import MdForm from "../../../docs/zh/form/README.md";
import DemoBlock from "../DemoBlock";
import { getLangFromUserAgent } from "../../utils/util";

export default {
  components: {
    BasicUsage,
    FieldType,
    ValidateRules,
    MdFormEn,
    MdForm,
    DemoBlock
  },
  data(){
    return{
      mdComponent: "MdFormEn",
      checked: false,
      i18n: {
        "zh-CN": {
          showCode: "显示源码",
        },
        "en-US": {
          showCode: "Show Code",
        }
      }
    }
  },
  methods:{
    t(name) {
      // 根据手机语言环境对应显示中文还是英文
      let _lang = getLangFromUserAgent();
      if (_lang === "en") {
        this.mdComponent = "MdFormEn";
        return this.i18n["en-US"][name];
      } else {
        this.mdComponent = "MdForm";
        return this.i18n["zh-CN"][name];
      }
    },
  }
};
</script>

<style lang="less" scoped>
.markdown-body {
  padding: 0px 10px 0px 10px;
}
.demo-form{
  text-align: left;
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
