<!--
 * @Descripttion: 
 * @version: 
 * @Author: Chen Wei/u0037443
 * @Date: 2021-05-21 15:22:02
 * @LastEditors: Chen Wei/u0037443
 * @LastEditTime: 2021-05-27 16:36:59
-->
<template>
  <div class="demo-radio">
    <demo-block :title="t('basicUsage')">
      <van-radio-group v-model="radio1" class="demo-radio-group">
        <van-radio name="1">{{ t("radio") }} 1</van-radio>
        <van-radio name="2">{{ t("radio") }} 2</van-radio>
      </van-radio-group>
    </demo-block>

    <demo-block :title="t('horizontal')">
      <van-radio-group
        v-model="radioHorizontal"
        class="demo-radio-group"
        direction="horizontal"
      >
        <van-radio name="1">{{ t("radio") }} 1</van-radio>
        <van-radio name="2">{{ t("radio") }} 2</van-radio>
      </van-radio-group>
    </demo-block>

    <demo-block :title="t('disabled')">
      <van-radio-group v-model="radio2" class="demo-radio-group" disabled>
        <van-radio name="1">{{ t("radio") }} 1</van-radio>
        <van-radio name="2">{{ t("radio") }} 2</van-radio>
      </van-radio-group>
    </demo-block>

    <demo-block :title="t('customShape')">
      <van-radio-group v-model="radioShape" class="demo-radio-group">
        <van-radio name="1" shape="square">{{ t("radio") }} 1</van-radio>
        <van-radio name="2" shape="square">{{ t("radio") }} 2</van-radio>
      </van-radio-group>
    </demo-block>

    <demo-block :title="t('customColor')">
      <van-radio-group v-model="radio3" class="demo-radio-group">
        <van-radio name="1" checked-color="#92A2BD">
          {{ t("radio") }} 1
        </van-radio>
        <van-radio name="2" checked-color="#92A2BD">
          {{ t("radio") }} 2
        </van-radio>
      </van-radio-group>
    </demo-block>

    <demo-block :title="t('disableLabel')">
      <van-radio-group v-model="radioLabel" class="demo-radio-group">
        <van-radio name="1" label-disabled>{{ t("radio") }} 1</van-radio>
        <van-radio name="2" label-disabled>{{ t("radio") }} 2</van-radio>
      </van-radio-group>
    </demo-block>

    <demo-block :title="t('withCell')">
      <van-radio-group v-model="radio5">
        <van-cell-group>
          <van-cell clickable :title="t('radio') + 1" @click="radio5 = '1'">
            <template #right-icon>
              <van-radio name="1" />
            </template>
          </van-cell>
          <van-cell clickable :title="t('radio') + 2" @click="radio5 = '2'">
            <template #right-icon>
              <van-radio name="2" />
            </template>
          </van-cell>
        </van-cell-group>
      </van-radio-group>
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
import MdRadioEn from "../../../docs/radio/README.md";
import MdRadio from "../../../docs/zh/radio/README.md";
import DemoBlock from "../DemoBlock";
import { getLangFromUserAgent } from "../../utils/util";

export default {
  name: "Radio",
  components: {
    MdRadioEn,
    MdRadio,
    DemoBlock
  },
  props: {
    msg: String,
  },
  data() {
    return {
      mdComponent: "MdRadioEn",
      checked: false,
      radio1: "1",
      radio2: "2",
      radio3: "1",
      radio4: "1",
      radio5: "1",
      radioLabel: "1",
      radioShape: "1",
      radioIconSize: "1",
      radioHorizontal: "1",
      activeIcon: "https://img.yzcdn.cn/vant/user-active.png",
      inactiveIcon: "https://img.yzcdn.cn/vant/user-inactive.png",
      i18n: {
        "zh-CN": {
          basicUsage: "基础用法",
          radio: "单选框",
          text1: "未选中禁用",
          text2: "选中且禁用",
          withCell: "与 Cell 组件一起使用",
          disabled: "禁用状态",
          horizontal: "水平排列",
          customColor: "自定义颜色",
          customShape: "自定义形状",
          disableLabel: "禁用文本点击",
          showCode: "显示源码",
        },
        "en-US": {
          basicUsage: "Basic Usage",
          radio: "Radio",
          text1: "Disabled",
          text2: "Disabled and checked",
          withCell: "Inside a Cell",
          disabled: "Disabled state",
          horizontal: "Hrizontal",
          customColor: "Custom Color",
          customShape: "Custom Shape",
          disableLabel: "Disable label click",
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
        this.mdComponent = "MdRadioEn";
        return this.i18n["en-US"][name];
      } else {
        this.mdComponent = "MdRadio";
        return this.i18n["zh-CN"][name];
      }
    },
  },
};
</script>

<style lang="less" scoped>
@import "./index.less";
.markdown-body {
  padding: 0px 10px 0px 10px;
}
.demo-radio {
  text-align: left;
  background: @white;


  /deep/.van-doc-demo-block {
    padding: 0 @padding-md !important;
  }

  /deep/.van-doc-demo-block__title {
    padding-left: 0 !important;
  }

  &-row {
    margin-bottom: @padding-sm !important;
  }
  
  &-group {
    padding: 0 16px;

    .van-radio {
      margin-bottom: 8px;
    }
  }

  img {
    height: 20px;
  }

  .van-doc-demo-block__title {
    margin-top: -8px;
  }
}
</style>

