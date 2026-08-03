<!--
 * @Description: 
 * @Autor: Dai YueLin
 * @Date: 2021-05-25 17:13:53
 * @LastEditors: Dai YueLin
 * @LastEditTime: 2021-05-25 17:45:09
-->
<template>
  <demo-block :title="t('errorInfo')">
    <van-field
      v-model="username"
      error
      required
      :label="t('username')"
      :placeholder="t('usernamePlaceholder')"
    />
    <van-field
      v-model="phone"
      required
      :label="t('phone')"
      :placeholder="t('phonePlaceholder')"
      :error-message="t('phoneError')"
    />
  </demo-block>
</template>

<script>
import DemoBlock from ".././DemoBlock";
import { getLangFromUserAgent } from "../../utils/util";
export default {
  name: "ErrorInfo",
  components: {
    DemoBlock,
  },
  props: {
    msg: String,
  },
  data() {
    return {
      phone: "123",
      username: "",
      i18n: {
        "zh-CN": {
          phone: "手机号",
          errorInfo: "错误提示",
          phoneError: "手机号格式错误",
          phonePlaceholder: "请输入手机号",
          username:"用户名",
          usernamePlaceholder:"请输入用户名"
        },
        "en-US": {
          phone: "Phone",
          errorInfo: "Error Info",
          phoneError: "Invalid phone",
          phonePlaceholder: "Phone",
          username:"UserName",
          usernamePlaceholder:"UserName"
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

