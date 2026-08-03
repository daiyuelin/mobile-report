<!--
 * @Description: 
 * @Autor: Dai YueLin
 * @Date: 2021-05-25 17:13:53
 * @LastEditors: Dai YueLin
 * @LastEditTime: 2021-05-25 17:32:39
-->
<template>
  <div class="demo-field">
    <basic-usage />
    <custom-type />
    <disabled />
    <show-icon />
    <error-info />
    <insert-button />
    <format-value />
    <autosize />
    <show-word-limit />
    <input-align />
    <demo-block :title="t('showCode')"
      ><van-switch v-model="checked"
    /></demo-block>
    <div class="markdown-body" v-if="checked">
      <section :is="mdComponent"></section>
    </div>

  </div>
</template>

<script>
import BasicUsage from "./BasicUsage";
import CustomType from "./CustomType";
import Disabled from "./Disabled";
import ShowIcon from "./ShowIcon";
import ErrorInfo from "./ErrorInfo";
import InsertButton from "./InsertButton";
import FormatValue from "./FormatValue";
import Autosize from "./Autosize";
import ShowWordLimit from "./ShowWordLimit";
import InputAlign from "./InputAlign";
import "highlight.js/styles/github.css";
import "github-markdown-css";
import MdFieldEn from "../../../docs/field/README.md";
import MdField from "../../../docs/zh/field/README.md";
import DemoBlock from "../DemoBlock";
import { getLangFromUserAgent } from "../../utils/util";

export default {
  components: {
    BasicUsage,
    CustomType,
    Disabled,
    ShowIcon,
    ErrorInfo,
    InsertButton,
    FormatValue,
    Autosize,
    ShowWordLimit,
    InputAlign,
    MdFieldEn,
    MdField,
    DemoBlock
  },
  data(){
    return{
      mdComponent: "MdCheckbox",
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
        this.mdComponent = "MdFieldEn";
        return this.i18n["en-US"][name];
      } else {
        this.mdComponent = "MdField";
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
.demo-field {
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
