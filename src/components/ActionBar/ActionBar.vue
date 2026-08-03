<template>
  <div class="demo-action-bar">
    <demo-block :title="t('basicUsage')">
      <van-goods-action>
        <van-goods-action-icon
          icon="chat-o"
          :text="t('icon1')"
          @click="onClickIcon"
        />
        <van-goods-action-icon
          icon="cart-o"
          :text="t('icon2')"
          @click="onClickIcon"
        />
        <van-goods-action-icon
          icon="shop-o"
          :text="t('icon3')"
          @click="onClickIcon"
        />
        <van-goods-action-button
          color="#444"
          :text="t('button2')"
          @click="onClickButton"
        />
      </van-goods-action>
    </demo-block>

    <demo-block :title="t('iconBadge')">
      <van-goods-action>
        <van-goods-action-icon icon="chat-o" dot :text="t('icon1')" />
        <van-goods-action-icon icon="cart-o" badge="5" :text="t('icon2')" />
        <van-goods-action-icon icon="shop-o" badge="12" :text="t('icon3')" />
        <van-goods-action-button color="#A3A3A3" :text="t('button1')" />
        <van-goods-action-button color="#444" :text="t('button2')" />
      </van-goods-action>
    </demo-block>

    <demo-block :title="t('customIconColor')">
      <van-goods-action>
        <van-goods-action-icon
          icon="chat-o"
          :text="t('icon1')"
          color="#92A2BD"
        />
        <van-goods-action-icon icon="cart-o" :text="t('icon2')" />
        <van-goods-action-icon
          icon="star"
          :text="t('collected')"
          color="#ff5000"
        />
        <van-goods-action-button color="#A3A3A3" :text="t('button1')" />
        <van-goods-action-button color="#444" :text="t('button2')" />
      </van-goods-action>
    </demo-block>

    <demo-block :title="t('customButtonColor')">
      <van-goods-action>
        <van-goods-action-icon icon="chat-o" :text="t('icon1')" />
        <van-goods-action-icon icon="cart-o" :text="t('icon2')" />
        <van-goods-action-button color="#A3A3A3" :text="t('button1')" />
        <van-goods-action-button color="#444" :text="t('button2')" />
      </van-goods-action>
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
import MdEn from "../../../docs/action-bar/README.md";
import Md from "../../../docs/zh/action-bar/README.md";
import DemoBlock from ".././DemoBlock";
import { getLangFromUserAgent } from "../../utils/util";
export default {
  name: "ActionBar",
  components: {
    DemoBlock,
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
      i18n: {
        "zh-CN": {
           showCode: "显示源码",
          icon1: "客服",
          icon2: "购物车",
          icon3: "店铺",
          button1: "加入购物车",
          button2: "立即购买",
          iconBadge: "徽标提示",
          collected: "已收藏",
          clickIcon: "点击图标",
          clickButton: "点击按钮",
          customIconColor: "自定义图标颜色",
          customButtonColor: "自定义按钮颜色",
          basicUsage: "基础用法",
        },
        "en-US": {
           showCode: "Show Code",
          icon1: "Icon1",
          icon2: "Icon2",
          icon3: "Icon3",
          button1: "Button",
          button2: "Button",
          iconBadge: "Icon Badge",
          collected: "Collected",
          clickIcon: "Click Icon",
          clickButton: "Click Button",
          customIconColor: "Custom Icon Color",
          customButtonColor: "Custom Button Color",
          basicUsage: "Basic Usage",
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
    onClickIcon() {
      this.$toast(this.t("clickIcon"));
    },
    onClickButton() {
      this.$toast(this.t("clickButton"));
    },
  },
};
</script>


<style lang="less" scoped>
@import "../../assets/vant.less";
@import "./index.less";
.markdown-body {
  background: @white;
  padding: 0px 10px 0px 10px;
}
/deep/.van-switch {
  margin-left: 16px;
}
.demo-action-bar {
  text-align: left;
  .van-goods-action {
    position: relative;
    padding-bottom: 0;
  }
}
</style>
