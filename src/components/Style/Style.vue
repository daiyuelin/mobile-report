<!--
 * @Descripttion: 
 * @version: 
 * @Author: Chen Wei/u0037443
 * @Date: 2021-05-18 14:59:02
 * @LastEditors: Dai YueLin
 * @LastEditTime: 2021-06-16 16:53:27
-->
<template>
  <div class="demo-style">
    <demo-block :title="t('ellipsis')">
      <div class="van-ellipsis">{{ t("text1") }}</div>
      <div class="van-multi-ellipsis--l2">{{ t("text2") }}</div>
    </demo-block>

    <demo-block card :title="t('hairline')">
      <div class="van-hairline--top" />
    </demo-block>

    <demo-block card :title="t('animation')">
      <van-cell is-link title="Fade" @click="animate('van-fade')" />
    </demo-block>

    <transition :name="transitionName">
      <div v-show="show" class="demo-animate-block" />
    </transition>

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
import MdEn from "../../../docs/style/README.md";
import Md from "../../../docs/zh/style/README.md";
import { getLangFromUserAgent } from "../../utils/util";

export default {
  name: "Style",
  components: {
    MdEn,
    Md,
  },
  props: {
    msg: String,
  },
  data() {
    return {
      mdComponent: "Md",
      checked: false,
      show: false,
      transitionName: "",
      i18n: {
        "zh-CN": {
          showCode: "显示源码",
          hairline: "1px 边框",
          ellipsis: "文字省略",
          animation: "动画",
          toggle: "切换动画",
          text1: "这是一段最多显示一行的文字，后面的内容会省略",
          text2:
            "这是一段最多显示两行的文字，后面的内容会省略。这是一段最多显示两行的文字，后面的内容会省略",
        },
        "en-US": {
          showCode: "Show Code",
          hairline: "Hairline",
          ellipsis: "Text Ellipsis",
          animation: "Animation",
          toggle: "Switch animation",
          text1:
            "This is a paragraph that displays up to one line of text, and the rest of the text will be omitted.",
          text2:
            "This is a paragraph that displays up to two lines of text, and the rest of the text will be omitted.",
        },
      },
    };
  },
  methods: {
    t(name) {
      // 根据手机语言环境对应显示中文还是英文
      let _lang = getLangFromUserAgent();
      if (_lang === "en") {
        this.mdComponent = "MdEn";
        return this.i18n["en-US"][name];
      } else {
        this.mdComponent = "Md";
        return this.i18n["zh-CN"][name];
      }
    },
    animate(transitionName) {
      this.show = true;
      this.transitionName = transitionName;
      setTimeout(() => {
        this.show = false;
      }, 500);
    },
  },
};
</script>

<style lang="less" scoped>
@import "../../assets/vant.less";
.markdown-body {
  background: @white;
  padding: 0px 10px 0px 10px;
}
.demo-style {
  text-align: left;

  .van-ellipsis,
  .van-multi-ellipsis--l2 {
    max-width: 300px;
    margin-left: @padding-md;
    font-size: 14px;
    line-height: 18px;
  }

  .van-ellipsis {
    margin-bottom: @padding-md;
  }

  .van-hairline--top {
    height: 30px;
    background-color: @white;

    &::after {
      top: 5px;
    }
  }

  .demo-animate-block {
    position: fixed;
    top: 50%;
    left: 50%;
    width: 100px;
    height: 100px;
    margin: -50px 0 0 -50px;
    background-color: @blue;
    border-radius: 8px;
  }

  /deep/.van-switch {
    margin-left: 16px;
  }
}
</style>

