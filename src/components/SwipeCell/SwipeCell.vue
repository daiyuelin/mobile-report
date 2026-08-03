<!--
 * @Description: 
 * @Autor: Dai YueLin
 * @Date: 2021-05-25 09:56:51
 * @LastEditors: Dai YueLin
 * @LastEditTime: 2021-06-17 14:11:22
-->
<template>
  <div class="demo-swipe-cell">
    <demo-block :title="t('basicUsage')">
      <van-swipe-cell>
        <template #left>
          <van-button square type="primary" :text="t('select')" />
        </template>
        <van-cell :border="false" :title="t('title')" :value="t('content')" />
        <template #right>
          <van-button square type="danger" :text="t('delete')" />
          <van-button square type="primary" :text="t('collect')" />
        </template>
      </van-swipe-cell>
    </demo-block>

    <demo-block :title="t('customContent')">
      <van-swipe-cell>
        <van-card
          num="2"
          price="2.00"
          :desc="t('desc')"
          :title="t('cardTitle')"
          :thumb="imageURL"
        />
        <template #right>
          <van-button
            square
            type="danger"
            class="delete-button"
            :text="t('delete')"
          />
        </template>
      </van-swipe-cell>
    </demo-block>

    <demo-block :title="t('beforeClose')">
      <van-swipe-cell :before-close="beforeClose">
        <template #left>
          <van-button square type="primary" :text="t('select')" />
        </template>
        <van-cell :border="false" :title="t('title')" :value="t('content')" />
        <template #right>
          <van-button square type="danger" :text="t('delete')" />
        </template>
      </van-swipe-cell>
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
import MdEn from "../../../docs/swipe-cell/README.md";
import Md from "../../../docs/zh/swipe-cell/README.md";
import DemoBlock from ".././DemoBlock";
import { getLangFromUserAgent } from "../../utils/util";
export default {
  name: "SwipeCell",
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
      imageURL: "https://img.yzcdn.cn/vant/ipad.jpeg",
      i18n: {
        "zh-CN": {
          showCode: "显示源码",
          select: "选择",
          delete: "删除",
          collect: "收藏",
          title: "单元格",
          confirm: "确定删除吗？",
          cardTitle: "商品标题",
          beforeClose: "异步关闭",
          customContent: "自定义内容",
          basicUsage: "基础用法",
          content: "内容",
          desc: "描述信息",
        },
        "en-US": {
          showCode: "Show Code",
          select: "Select",
          delete: "Delete",
          collect: "Collect",
          title: "Cell",
          confirm: "Are you sure to delete?",
          cardTitle: "Title",
          beforeClose: "Before Close",
          customContent: "Custom Content",
          basicUsage: "Basic Usage",
          content: "Content",
          desc: "desc",
        },
      },
    };
  },
  mounted() {},
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
    beforeClose(position) {
      let _this = this;
      switch (position) {
        case "left":
        case "cell":
        case "outside":
          return true;
        case "right":
          return new Promise((resolve) => {
            _this.$dialog
              .confirm({
                title: _this.t("confirm"),
              })
              .then(resolve);
          });
      }
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
.demo-swipe-cell {
  text-align: left;
  user-select: none;

  .van-card {
    margin: 0;
    background-color: @white;
  }

  .delete-button {
    height: 100%;
  }
}
/deep/.van-switch {
  margin-left: 16px;
}
</style>
