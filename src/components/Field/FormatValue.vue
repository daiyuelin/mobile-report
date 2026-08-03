<!--
 * @Description: 
 * @Autor: Dai YueLin
 * @Date: 2021-05-25 17:13:53
 * @LastEditors: Dai YueLin
 * @LastEditTime: 2021-05-25 17:30:40
-->
<template>
  <demo-block :title="t('formatValue')">
    <van-field
      v-model="value1"
      :label="t('text')"
      :formatter="formatter"
      :placeholder="t('formatOnChange')"
    />
    <van-field
      v-model="value2"
      :label="t('text')"
      :formatter="formatter"
      format-trigger="onBlur"
      :placeholder="t('formatOnBlur')"
    />
  </demo-block>
</template>

<script>
import DemoBlock from ".././DemoBlock";
import { getLangFromUserAgent } from "../../utils/util";
export default {
  name: "FormatValue",
  components: {
    DemoBlock,
  },
  props: {
    msg: String,
  },
  data() {
    return {
      value1: "",
      value2: "",
      i18n: {
        "zh-CN": {
          text: "文本",
          formatValue: "格式化输入内容",
          formatOnBlur: "在失焦时执行格式化",
          formatOnChange: "在输入时执行格式化",
        },
        "en-US": {
          text: "Text",
          formatValue: "Format Value",
          formatOnBlur: "Format On Blur",
          formatOnChange: "Format On Change",
        },
      },
    };
  },
  methods: {
    t(name) {
      // 根据手机语言环境对应显示中文还是英文
      let _lang = getLangFromUserAgent();
      if (_lang === "en") {
        return this.i18n["en-US"][name];
      } else {
        return this.i18n["zh-CN"][name];
      }
    },
    formatter(value) {
      return value.replace(/\d/g, "");
    },
  },
};
</script>

