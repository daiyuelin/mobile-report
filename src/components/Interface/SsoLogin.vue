<!--
 * @Description:
 * @Autor: Dai YueLin
 * @Date: 2021-05-05 13:47:56
 * @LastEditors: Dai YueLin
 * @LastEditTime: 2022-04-01 12:25:47
-->
<template>
  <div class="demo-button">
    <demo-block :title="t('type')">
      <div class="demo-button-row">
        <van-button type="primary" @click="getUserTicket">{{
          t("primary")
        }}</van-button>
      </div>
      <div class="c">{{t("authentication_2")}}:</div>
      <div class="c" id="HtmlR"></div>
    </demo-block>
    <demo-block :title="t('showCode')"></demo-block>
    <div class="markdown-body">
      <section :is="mdComponent"></section>
    </div>
  </div>
</template>

<script type="text/javascript" src="applocal://www/cordova.js"></script>
<!-- 为了兼容HTTPS,需建一个名为cordova.min.js空白的js文件 -->
<script src="../../public/cordova.min.js"></script>
<script>
import "highlight.js/styles/github.css";
import "github-markdown-css";
import DemoBlock from ".././DemoBlock";
import { getLangFromUserAgent } from "../../utils/util";
import { login } from "@/api/user";
import { setToken } from "@/utils/system";
import MdSso from "./SSOREADME.md";
export default {
  name: "SsoLogin",
  components: {
    DemoBlock,
    MdSso,
  },
  props: {
    msg: String,
  },
  data() {
    return {
      mdComponent: "MdSso",
      checked: false,
      i18n: {
        "zh-CN": {
          type: "Sso登录",
          primary: "登录",
          showCode: "显示源码",
          authentication_2: '返回参数'
        },
        "en-US": {
          type: "Sso Login",
          primary: "Login",
          showCode: "Show Code",
          authentication_2: 'Return parameters'
        },
      },
    };
  },
  methods: {
    // 获取ticket
    getUserTicket() {
      let _this = this;
      cordova.exec(
        function (result) {
          // alert(JSON.stringify(result.user_ticket, null, 4));
          _this.login(result.user_ticket);
        },
        function (error) {},
        "WorkPlus_Auth",
        "getUserTicket",
        []
      );
    },
    // 获取token
    login(data) {
      login({
        ticket: data,
        orgId: "910a7983-9284-4eff-9a52-20eef75c558c",
      }).then((res) => {
        document.getElementById("HtmlR").innerHTML = (JSON.stringify(res.data, null, 4));
        setToken(res.data.token);
        this.$toast("登录成功");
      });
    },
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

<style lang="less" scoped>
@import "../../assets/vant.less";
@import "../Button/index.less";
.markdown-body {
  padding: 0px 10px 0px 10px;
}
.demo-button {
  text-align: left;
  background: @white;
  box-sizing: border-box;
  min-height: calc(100vh);
  padding-bottom: 20px;

  /deep/.van-button {
    &--large {
      margin-bottom: @padding-md !important;
    }

    &--small,
    &--normal:not(:last-child) {
      margin-right: @padding-md !important;
    }
  }

  /deep/.van-doc-demo-block {
    padding: 0 @padding-md !important;
  }

  /deep/.van-doc-demo-block__title {
    padding-left: 0 !important;
  }

  &-row {
    margin-bottom: @padding-sm !important;
  }
  .c {
    background-color:#f6f8fa;
    display: block;
    line-height: 26px;
    padding: 5px;
    /*margin-top: 10px;*/
    font-size: 14px;
    white-space: pre-line;
    word-wrap: break-word;
    white-space: pre-wrap;
    padding-left: 3%;
    padding-right: 3%;
    color: #24292E;
  }
}
</style>

