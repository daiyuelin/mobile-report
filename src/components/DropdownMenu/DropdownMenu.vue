<template>
  <div class="demo-dropdown-menu">
    <demo-block :title="t('basicUsage')">
      <van-dropdown-menu>
        <van-dropdown-item v-model="value1" :options="option1" />
        <van-dropdown-item v-model="value2" :options="option2" />
      </van-dropdown-menu>
    </demo-block>

    <demo-block :title="t('customContent')">
      <van-dropdown-menu>
        <van-dropdown-item v-model="value1" :options="option1" />
        <van-dropdown-item :title="t('itemTitle')" ref="item">
          <van-cell center :title="t('switchTitle1')">
            <template #right-icon>
              <van-switch v-model="switch1" size="24" :active-color="RED" />
            </template>
          </van-cell>
          <van-cell center :title="t('switchTitle2')">
            <template #right-icon>
              <van-switch v-model="switch2" size="24" :active-color="RED" />
            </template>
          </van-cell>
          <div style="padding: 5px 16px">
            <van-button
              type="danger"
              block
              round
              style="height: 40px"
              @click="onConfirm"
            >
              {{ t("confirm") }}
            </van-button>
          </div>
        </van-dropdown-item>
      </van-dropdown-menu>
    </demo-block>

    <demo-block :title="t('customActiveColor')">
      <van-dropdown-menu active-color="#444444">
        <van-dropdown-item v-model="value1" :options="option1" />
        <van-dropdown-item v-model="value2" :options="option2" />
      </van-dropdown-menu>
    </demo-block>

    <demo-block :title="t('expandDirection')">
      <van-dropdown-menu direction="up">
        <van-dropdown-item v-model="value1" :options="option1" />
        <van-dropdown-item v-model="value2" :options="option2" />
      </van-dropdown-menu>
    </demo-block>

    <demo-block :title="t('disableMenu')">
      <van-dropdown-menu>
        <van-dropdown-item v-model="value1" disabled :options="option1" />
        <van-dropdown-item v-model="value2" disabled :options="option2" />
      </van-dropdown-menu>
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
import MdEn from "../../../docs/dropdown-menu/README.md";
import Md from "../../../docs/zh/dropdown-menu/README.md";
import { getLangFromUserAgent } from "../../utils/util";
export default {
  name: "DropdownMenu",
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
      switch1: true,
      switch2: false,
      value1: 0,
      value2: "a",
      RED: "#92A2BD",
      i18n: {
        "zh-CN": {
          showCode: "显示源码",
          disableMenu: "禁用菜单",
          switchTitle1: "包邮",
          switchTitle2: "团购",
          itemTitle: "筛选",
          expandDirection: "向上展开",
          customContent: "自定义菜单内容",
          customActiveColor: "自定义选中态颜色",
          basicUsage: "基础用法",
          confirm: "确认",
          option1: [
            { text: "全部商品", value: 0 },
            { text: "新款商品", value: 1 },
            { text: "活动商品", value: 2 },
          ],
          option2: [
            { text: "默认排序", value: "a" },
            { text: "好评排序", value: "b" },
            { text: "销量排序", value: "c" },
          ],
        },
        "en-US": {
          showCode: "Show Code",
          disableMenu: "Disable Menu",
          switchTitle1: "Title",
          switchTitle2: "Title",
          itemTitle: "Title",
          expandDirection: "Expand Direction",
          customContent: "Custom Content",
          customActiveColor: "Custom Active Color",
          basicUsage: "Basic Usage",
          confirm: "Confirm",
          option1: [
            { text: "Option1", value: 0 },
            { text: "Option2", value: 1 },
            { text: "Option3", value: 2 },
          ],
          option2: [
            { text: "Option A", value: "a" },
            { text: "Option B", value: "b" },
            { text: "Option C", value: "c" },
          ],
        },
      },
    };
  },
  computed: {
    option1() {
      return this.t("option1");
    },
    option2() {
      return this.t("option2");
    },
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
    onConfirm() {
      this.$refs.item.toggle();
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
.demo-dropdown-menu {
  text-align: left;
  background-color: #f7f8fa;
   /deep/.van-switch {
    margin-left: 16px;
  }
}
</style>