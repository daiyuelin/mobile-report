<!--
 * @Description: 
 * @Autor: Dai YueLin
 * @Date: 2021-05-24 13:22:11
 * @LastEditors: Dai YueLin
 * @LastEditTime: 2021-05-24 13:36:51
-->
<template>
  <demo-block :title="t('basicUsage')">
    <van-form @submit="onSubmit" @failed="onFailed">
      <van-field
        v-model="username"
        name="username"
        :label="t('username')"
        :rules="[{ required: true, message: t('requireUsername') }]"
        :placeholder="t('username')"
      />
      <van-field
        v-model="password"
        type="password"
        name="password"
        :label="t('password')"
        :rules="[{ required: true, message: t('requirePassword') }]"
        :placeholder="t('password')"
      />
      <div style="margin: 16px 16px 0">
        <van-button round block type="primary" native-type="submit">
          {{ t("submit") }}
        </van-button>
      </div>
    </van-form>
  </demo-block>
</template>

<script>
import DemoBlock from ".././DemoBlock";
import { getLangFromUserAgent } from "../../utils/util";
export default {
  name: "BasicUsage",
  components: {
    DemoBlock,
  },
  props: {
    msg: String,
  },
  data() {
    return {
      username: "",
      password: "",
      i18n: {
        "zh-CN": {
          submit: "提交",
          username: "用户名",
          password: "密码",
          requireUsername: "请填写用户名",
          requirePassword: "请填写密码",
          basicUsage: "基础用法"
        },
        "en-US": {
          submit: "Submit",
          username: "Username",
          password: "Password",
          requireUsername: "Username is required",
          requirePassword: "Password is required",
          basicUsage: "Basic Usage"
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
   onSubmit(values){
      console.log("submit", values);
    },
    onFailed(errorInfo){
      console.log("failed", errorInfo);
    }
  },
};
</script>
