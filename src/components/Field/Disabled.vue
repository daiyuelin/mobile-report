<!--
 * @Description: 
 * @Autor: Dai YueLin
 * @Date: 2021-05-25 17:13:53
 * @LastEditors: Dai YueLin
 * @LastEditTime: 2021-05-25 17:42:18
-->
<template>
  <demo-block :title="t('disabled')">
    <van-field :value="t('inputReadonly')" :label="t('text')" readonly />
    <van-field :value="t('inputDisabled')" :label="t('text')" disabled />
  </demo-block>
</template>

<script>
import DemoBlock from ".././DemoBlock";
import { getLangFromUserAgent } from "../../utils/util";
export default {
  name: "CustomType",
  components: {
    DemoBlock,
  },
  props: {
    msg: String,
  },
  data() {
    return {
      i18n: {
        "zh-CN": {
          text: "文本",
          disabled: "禁用输入框",
          inputReadonly: "输入框只读",
          inputDisabled: "输入框已禁用",
        },
        "en-US": {
          text: "Text",
          disabled: "Disabled",
          inputReadonly: "Input Readonly",
          inputDisabled: "Input Disabled",
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