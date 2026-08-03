<!--
 * @Description: 
 * @Version: 1.0
 * @Author: Edison Chen
 * @Date: 2021-05-18 13:03:00
 * @LastEditors: Edison Chen
 * @LastEditTime: 2021-05-18 15:11:06
 * @FilePath: \JoyChat_Compinent\src\components\PasswordInput\PasswordInput.vue
 * Copyright (C) 2021 Edison Chen. All rights reserved.
-->
<template>
  <div class="demo-password-input">
    <demo-block :title="t('basicUsage')">
      <van-password-input
        :value="value1"
        :focused="showKeyboard1"
        @focus="showKeyboard1 = true"
      />

      <van-number-keyboard
        v-model="value1"
        :show="showKeyboard1"
        @blur="showKeyboard1 = false"
      />
    </demo-block>

    <demo-block :title="t('customLength')">
      <van-password-input
        :value="value2"
        :length="4"
        :focused="showKeyboard2"
        @focus="showKeyboard2 = true"
      />
      <van-number-keyboard
        v-model="value2"
        :show="showKeyboard2"
        @blur="showKeyboard2 = false"
      />
    </demo-block>

    <demo-block :title="t('addGutter')">
      <van-password-input
        :value="value3"
        :gutter="10"
        :focused="showKeyboard3"
        @focus="showKeyboard3 = true"
      />
      <van-number-keyboard
        v-model="value3"
        :show="showKeyboard3"
        @blur="showKeyboard3 = false"
      />
    </demo-block>

    <demo-block :title="t('removeMask')">
      <van-password-input
        :mask="false"
        :value="value4"
        :focused="showKeyboard4"
        @focus="showKeyboard4 = true"
      />
      <van-number-keyboard
        v-model="value4"
        :show="showKeyboard4"
        @blur="showKeyboard4 = false"
      />
    </demo-block>

    <demo-block :title="t('showInfo')">
      <van-password-input
        :value="value5"
        info="密码为 6 位数字"
        :error-info="errorInfo"
        :focused="showKeyboard5"
        @focus="showKeyboard5 = true"
      />
      <van-number-keyboard
        v-model="value5"
        :show="showKeyboard5"
        @blur="showKeyboard5 = false"
      />
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
import MdPasswordInputEn from "../../../docs/password-input/README.md";
import MdPasswordInput from "../../../docs/zh/password-input/README.md";
import DemoBlock from "../DemoBlock";
import { getLangFromUserAgent } from "../../utils/util";
export default {
  name: "PasswordInput",
  components: { DemoBlock,MdPasswordInputEn,MdPasswordInput},
  data() {
    return {
      mdComponent: "MdPasswordInputEn",
      checked: false,
      i18n: {
        "zh-CN": {
          info: "密码为 6 位数字",
          showInfo: "提示信息",
          addGutter: "格子间距",
          errorInfo: "密码错误",
          removeMask: "明文展示",
          customLength: "自定义长度",
          basicUsage: "基础用法",
          showCode: "显示源码",
        },
        "en-US": {
          info: "Some tips",
          showInfo: "Show Info",
          addGutter: "Add Gutter",
          errorInfo: "Password Mistake",
          removeMask: "Remove Mask",
          customLength: "Custom Length",
          basicUsage: "Basic Usage",
          showCode: "Show Code",
        },
      },
      value1: "123",
      showKeyboard1: false,
      value2: "123",
      showKeyboard2: false,
      value3: "123",
      showKeyboard3: false,
      value4: "123",
      showKeyboard4: false,
      value5: "123",
      showKeyboard5: false,
      errorInfo: "",
    };
  },
  methods: {
    t(name) {
      // 根据手机语言环境对应显示中文还是英文
      let _lang = getLangFromUserAgent();
      if (_lang === "en") {
        this.mdComponent = "MdPasswordInputEn";
        return this.i18n["en-US"][name];
      } else {
        this.mdComponent = "MdPasswordInput";
        return this.i18n["zh-CN"][name];
      }
    },
  },
  watch: {
    value5(value) {
      if (value.length === 6 && value !== "123456") {
        this.errorInfo = "密码错误";
      } else {
        this.errorInfo = "";
      }
    },
  },
};
</script>

<style lang="less" scoped>
.markdown-body {
  padding: 0px 10px 0px 10px;
}
.demo-password-input {
  min-height: 150vh;
  background-color: #f7f8fa;
  text-align: left;

  /deep/.van-doc-demo-block {
    padding: 0 @padding-md !important;
  }
  /deep/.van-switch{
    margin-left: 16px;
  }
  /deep/.van-doc-demo-block__title {
    padding-left: 0 !important;
  }

  &-row {
    margin-bottom: @padding-sm !important;
  }
}
</style>
