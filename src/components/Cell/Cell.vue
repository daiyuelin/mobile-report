<!--
 * @Description:
 * @Autor: Dai YueLin
 * @Date: 2021-05-05 13:47:56
 * @LastEditors: Dai YueLin
 * @LastEditTime: 2021-06-16 14:59:47
-->
<template>
  <div class="demo-cell">
    <demo-block :title="t('basicUsage')">
      <van-cell-group>
        <van-cell :title="t('cell')" :value="t('content')" />
        <van-cell :title="t('cell')" :value="t('content')" :label="t('desc')" />
      </van-cell-group>
    </demo-block>

    <demo-block :title="t('largeSize')">
      <van-cell :title="t('cell')" :value="t('content')" size="large" />
      <van-cell
        :title="t('cell')"
        :value="t('content')"
        size="large"
        :label="t('desc')"
      />
    </demo-block>

    <demo-block :title="t('showIcon')">
      <van-cell :title="t('cell')" :value="t('content')" icon="location-o" />
    </demo-block>

    <demo-block :title="t('valueOnly')">
      <van-cell :value="t('content')" />
    </demo-block>

    <demo-block :title="t('showArrow')">
      <van-cell :title="t('cell')" is-link />
      <van-cell :title="t('cell')" is-link :value="t('content')" />
      <van-cell
        :title="t('cell')"
        is-link
        arrow-direction="down"
        :value="t('content')"
      />
    </demo-block>

    <demo-block :title="t('router')">
      <van-cell :title="t('urlRoute')" is-link url="/" />
      <van-cell :title="t('vueRoute')" is-link to="/" />
    </demo-block>

    <demo-block :title="t('groupTitle')">
      <van-cell-group :title="`${t('group')} 1`">
        <van-cell :title="t('cell')" :value="t('content')" />
      </van-cell-group>
      <van-cell-group :title="`${t('group')} 2`">
        <van-cell :title="t('cell')" :value="t('content')" />
      </van-cell-group>
    </demo-block>

    <demo-block :title="t('useSlots')">
      <van-cell :value="t('content')" is-link>
        <template #title>
          <span class="custom-title">{{ t("cell") }}</span>
          <van-tag type="danger">{{ "tag" }}</van-tag>
        </template>
      </van-cell>

      <van-cell icon="shop-o" :title="t('cell')">
        <template #right-icon>
          <van-icon name="search" class="search-icon" />
        </template>
      </van-cell>
    </demo-block>

    <demo-block :title="t('verticalCenter')">
      <van-cell
        center
        :title="t('cell')"
        :value="t('content')"
        :label="t('desc')"
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
import MdEn from "../../../docs/cell/README.md";
import Md from "../../../docs/zh/cell/README.md";
import DemoBlock from ".././DemoBlock";
import { getLangFromUserAgent } from "../../utils/util";
export default {
  name: "Cell",
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
          cell: "单元格",
          valueOnly: "只设置 value",
          showIcon: "展示图标",
          showArrow: "展示箭头",
          largeSize: "单元格大小",
          group: "分组",
          groupTitle: "分组标题",
          router: "页面导航",
          urlRoute: "URL 跳转",
          vueRoute: "路由跳转",
          useSlots: "使用插槽",
          verticalCenter: "垂直居中",
          content: "内容",
          desc: "描述信息",
          basicUsage: "基础用法",
          showCode: "显示源码",
        },
        "en-US": {
          cell: "Cell title",
          valueOnly: "Value only",
          showIcon: "Left Icon",
          showArrow: "Link",
          largeSize: "Size",
          group: "Group",
          groupTitle: "Group Title",
          router: "Router",
          urlRoute: "URL",
          vueRoute: "Vue Router",
          useSlots: "Use Slots",
          verticalCenter: "Vertical center",
          content: "Content",
          desc: "Desc",
          basicUsage: "Basic Usage",
          showCode: "Show Code",
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
  },
};
</script>

<style lang="less" scoped>
@import "../../assets/vant.less";
.markdown-body {
  background: @white;
  padding: 0px 10px 0px 10px;
}
.demo-cell {
  text-align: left;
  background-color: #f7f8fa;
  box-sizing: border-box;
  min-height: calc(100vh - 56px);
  padding-bottom: 20px;
  /deep/.van-doc-demo-block__title {
    margin: 0;
    padding: 32px 16px 16px;
    color: rgba(69, 90, 100, 0.6) !important;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
  }
  /deep/.custom-title {
    margin-right: 4px !important;
    vertical-align: middle !important;
  }

  .search-icon {
    font-size: 16px;
    line-height: inherit;
  }

  /deep/.van-doc-demo-block:first-of-type .van-doc-demo-block__title {
    padding-top: 20px !important;
  }

  /deep/.van-switch{
    margin-left: 16px;
  }
}
</style>

