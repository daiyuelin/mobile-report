<!--
 * @Description:
 * @Autor: Dai YueLin
 * @Date: 2021-05-05 13:47:56
 * @LastEditors: Dai YueLin
 * @LastEditTime: 2022-04-20 15:39:52
-->
<template>
  <div class="demo-button">
    <demo-block :title="t('type')">
      <div class="demo-button-row">
        <van-form @submit="send1">
          <van-field
            v-model="accounts"
            name="accounts"
            disabled
            :label="t('name')"
            :placeholder="t('name')"
            :rules="[{ required: true, message: '请填写工号' }]"
          />
          <van-field
            v-model="content"
            name="content"
            :label="t('name1')"
            :placeholder="t('name1')"
            :rules="[{ required: true, message: '请填写内容' }]"
          />
          <div style="margin: 16px">
            <van-button round block type="success" native-type="submit">{{
              t("primary")
            }}</van-button>
          </div>
        </van-form>
      </div>
    </demo-block>
    <demo-block :title="t('type1')">
      <div class="demo-button-row">
        <div class="demo-button-row">
          <van-form @submit="send2">
            <van-field
              v-model="account1"
              name="accounts"
              disabled
              :label="t('name')"
              :placeholder="t('name')"
              :rules="[{ required: true, message: '请填写工号' }]"
            />
            <van-field
              name="uploader"
              :label="t('name2')"
              :rules="[{ required: true, message: '请上传图片' }]"
            >
              <template #input>
                <van-uploader v-model="uploader" max-count="1" />
              </template>
            </van-field>
            <div style="margin: 16px">
              <van-button round block type="success" native-type="submit">{{
                t("primary")
              }}</van-button>
            </div>
          </van-form>
        </div>
      </div>
    </demo-block>
    <!-- <demo-block :title="t('type2')">
      <div class="demo-button-row">
        <van-button type="success" @click="Send3">{{
          t("primary")
        }}</van-button>
      </div>
    </demo-block> -->
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
import { pushText, pushImage } from "../../api/user";
export default {
  name: "SendInfo",
  components: {
    DemoBlock,
  },
  props: {
    msg: String,
  },
  data() {
    return {
      content: "",
      accounts: "",
      account1: "",
      uploader: [],
      mdComponent: "MdButton",
      checked: false,
      i18n: {
        "zh-CN": {
          type: "文本消息推送",
          type1: "图片消息推送",
          type2: "图文消息推送",
          primary: "推送",
          name:"工号",
          name1:"内容",
          name2:"文件上传"
        },
        "en-US": {
          type: "Send text message",
          type1: "Send image message",
          type2: "Send Image & Text message",
          primary: "Send",
          name:"Account",
          name1:"Content",
          name2:"File Upload"
        },
      },
    };
  },
  mounted(){
    this.getUserInfo()
  },
  methods: {
   // 获取用户信息
    getUserInfo() {
      let _this = this;
      cordova.exec(
        function (result) {
          _this.accounts = result.username
          _this.account1 = result.username
        },
        function (error) {},
        "WorkPlus_Contact",
        "getCurrentUserInfo",
        []
      );
    },
    send1(values) {
      let data = {}
      data.accounts = [values.accounts];
      data.content = values.content;
      pushText(data).then(() => {
        this.$toast("消息发送成功！");
      });
    },
    send2(values) {
      let formData = new FormData();
      formData.append("accounts", [values.accounts]);
      formData.append("file", values.uploader[0].file);
      pushImage(formData).then(() => {
        this.$toast("消息发送成功！");
      });
    },
    Send3() {},

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

