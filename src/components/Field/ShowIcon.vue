<!--
 * @Description: 
 * @Autor: Dai YueLin
 * @Date: 2021-05-25 17:13:53
 * @LastEditors: Dai YueLin
 * @LastEditTime: 2021-05-25 17:27:13
-->
<template>
  <demo-block :title="t('showIcon')">
    <van-field
      v-model="icon1"
      :label="t('text')"
      left-icon="smile-o"
      right-icon="warning-o"
      :placeholder="t('showIcon')"
    />
    <van-field
      v-model="icon2"
      clearable
      :label="t('text')"
      left-icon="music-o"
      :placeholder="t('showClearIcon')"
    />
  </demo-block>
</template>

<script>
import DemoBlock from ".././DemoBlock";
import { getLangFromUserAgent } from "../../utils/util";
export default {
  name: "ShowIcon",
  components: {
    DemoBlock,
  },
  props: {
    msg: String,
  },
  data() {
    return {
      icon1: "",
      icon2: "123",
      i18n: {
        "zh-CN": {
          text: "文本",
          showIcon: "显示图标",
          showClearIcon: "显示清除图标",
        },
        "en-US": {
          text: "Text",
          showIcon: "Show Icon",
          showClearIcon: "Show Clear Icon",
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

