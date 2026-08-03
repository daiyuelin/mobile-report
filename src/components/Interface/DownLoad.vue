<!--
 * @Description:
 * @Autor: Dai YueLin
 * @Date: 2021-05-05 13:47:56
 * @LastEditors: Dai YueLin
 * @LastEditTime: 2022-03-30 15:41:39
-->
<template>
  <div class="demo-button">
    <demo-block :title="t('type')">
      <div class="demo-button-row">
        <van-button type="primary" @click="download">{{
          t("primary")
        }}</van-button>
      </div>
    </demo-block>
    <!-- <demo-block :title="t('showCode')"
      ><van-switch v-model="checked"
    /></demo-block>
    <div class="markdown-body" v-if="checked">
      <section :is="mdComponent"></section>
    </div> -->
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
import { download } from "../../api/user";
export default {
  name: "Download",
  components: {
    DemoBlock,
  },
  props: {
    msg: String,
  },
  data() {
    return {
      mdComponent: "MdButton",
      checked: false,
      i18n: {
        "zh-CN": {
          type: "文件下载",
          primary: "文件下载",
        },
        "en-US": {
          type: "File Download",
          primary: "File Download",
        },
      },
    };
  },
  methods: {
    // 下载
    download() {
      download().then(() => {
        // const aEle = document.createElement("a");
        // aEle.href = window.URL.createObjectURL(res.data);
        // let filename = res.headers["content-disposition"].split("filename=")[1];
        // filename = decodeURIComponent(filename || "");
        // aEle.download = filename;
        // aEle.click();
        // window.URL.revokeObjectURL(aEle.href);
        cordova.exec(
          function (result) {
            // alert(JSON.stringify(result, null, 4));
          },
          function (error) {
            console.log(error);
          },
          "WorkPlus_Files",
          "showFile",
          [
            {
              fileName: "ceshi.jpg",
              filePath: "https://iosos.cn/bba/upload/21--11--19-20-39-39.jpg",
              fileSize: 53977,
              isImage: false,
            },
          ]
        );
      });
    },
    t(name) {
      // 根据手机语言环境对应显示中文还是英文
      let _lang = getLangFromUserAgent();
      if (_lang === "en") {
        // 使用英文的markdown
        this.mdComponent = "MdButtonEn";
        return this.i18n["en-US"][name];
      } else {
        // 使用中文的markdown
        this.mdComponent = "MdButton";
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
}
</style>

