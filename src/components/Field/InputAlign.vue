<!--
 * @Description: 
 * @Autor: Dai YueLin
 * @Date: 2021-05-25 17:13:53
 * @LastEditors: Dai YueLin
 * @LastEditTime: 2021-05-25 17:25:33
-->
<template>
  <demo-block :title="t('inputAlign')">
    <van-field
      v-model="value"
      :label="t('text')"
      :placeholder="t('alignPlaceHolder')"
      input-align="right"
    />
  </demo-block>
</template>

<script>
import DemoBlock from ".././DemoBlock";
import { getLangFromUserAgent } from "../../utils/util";
export default {
  name: "InputAlign",
  components: {
    DemoBlock,
  },
  props: {
    msg: String,
  },
  data() {
    return {
      value: "",
      i18n: {
        "zh-CN": {
          text: "文本",
          inputAlign: "输入框内容对齐",
          alignPlaceHolder: "输入框内容右对齐",
        },
        "en-US": {
          text: "Text",
          inputAlign: "Input Align",
          alignPlaceHolder: "Input Align Right",
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
  },
};
</script>

