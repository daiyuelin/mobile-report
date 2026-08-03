<!--
 * @Description: 
 * @Autor: Dai YueLin
 * @Date: 2021-05-25 17:13:53
 * @LastEditors: Dai YueLin
 * @LastEditTime: 2021-05-25 17:30:58
-->
<template>
  <demo-block :title="t('showWordLimit')">
    <van-field
      v-model="value"
      autosize
      show-word-limit
      rows="2"
      type="textarea"
      maxlength="50"
      :label="t('message')"
      :placeholder="t('placeholder')"
    />
  </demo-block>
</template>

<script>
import DemoBlock from ".././DemoBlock";
import { getLangFromUserAgent } from "../../utils/util";
export default {
  name: "ShowWordLimit",
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
          message: "留言",
          placeholder: "请输入留言",
          showWordLimit: "显示字数统计",
        },
        "en-US": {
          message: "Message",
          placeholder: "Message",
          showWordLimit: "Show Word Limit",
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

