<!--
 * @Description: 
 * @Version: 1.0
 * @Author: Edison Chen
 * @Date: 2021-05-18 16:52:04
 * @LastEditors: Dai YueLin
 * @LastEditTime: 2021-06-18 11:39:20
 * @FilePath: \JoyChat_Compinent\src\components\Popover\Popover.vue
 * Copyright (C) 2021 Edison Chen. All rights reserved.
-->
<template>
  <div class="demo-popover">
    <demo-block :title="t('basicUsage')">
      <van-popover
        v-model="showPopover1"
        :actions="t('actions')"
        trigger="click"
        @select="onSelect"
      >
        <template #reference>
          <van-button type="primary">
            {{ t("lightTheme") }}
          </van-button>
        </template>
      </van-popover>
      <van-popover
        v-model="showPopover2"
        theme="dark"
        :actions="t('actions')"
        trigger="click"
        @select="onSelect"
      >
        <template #reference>
          <van-button type="primary">
            {{ t("darkTheme") }}
          </van-button>
        </template>
      </van-popover>
    </demo-block>

    <demo-block :title="t('placement')">
      <van-field
        is-link
        readonly
        name="picker"
        :label="t('choosePlacement')"
        @click="showPicker = true"
      />

      <van-popup
        v-model="showPicker"
        round
        position="bottom"
        get-container="body"
      >
        <div class="demo-popover-box">
          <van-popover
            v-model="placementShow"
            theme="dark"
            :actions="t('shortActions')"
            :placement="currentPlacement"
            @select="onSelect"
          >
            <template #reference>
              <div class="demo-popover-refer" />
            </template>
          </van-popover>
        </div>
        <van-picker
          :columns="placements"
          :show-toolbar="false"
          @change="onPickerChange"
        />
      </van-popup>
    </demo-block>

    <demo-block :title="t('actionOptions')">
      <van-popover
        v-model="showPopover3"
        trigger="click"
        :actions="t('actionsWithIcon')"
        @select="onSelect"
      >
        <template #reference>
          <van-button type="primary">
            {{ t("showIcon") }}
          </van-button>
        </template>
      </van-popover>

      <van-popover
        v-model="showPopover4"
        trigger="click"
        :actions="t('actionsDisabled')"
        @select="onSelect"
      >
        <template #reference>
          <van-button type="primary">
            {{ t("disableAction") }}
          </van-button>
        </template>
      </van-popover>
    </demo-block>

    <demo-block :title="t('customContent')">
      <van-popover
        v-model="showPopover5"
        @select="onSelect"
        trigger="click"
        placement="top-start"
      >
        <van-grid
          square
          clickable
          :border="false"
          column-num="3"
          style="width: 240px"
        >
          <van-grid-item
            v-for="i in 6"
            :key="i"
            icon="photo-o"
            :text="t('option')"
            @click="showPopover5 = false"
          />
        </van-grid>
        <template #reference>
          <van-button type="primary">
            {{ t("customContent") }}
          </van-button>
        </template>
      </van-popover>
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
import MdEn from "../../../docs/popover/README.md";
import Md from "../../../docs/zh/popover/README.md";
import DemoBlock from "../DemoBlock";
import { getLangFromUserAgent } from "../../utils/util";
import { Toast } from "vant";

export default {
  name: "Popover",
  components: {
    DemoBlock,
    MdEn,
    Md,
  },
  data() {
    return {
      mdComponent: "Md",
      checked: false,
      i18n: {
        "zh-CN": {
          showCode: "显示源码",
          actions: [{ text: "选项一" }, { text: "选项二" }, { text: "选项三" }],
          shortActions: [{ text: "选项一" }, { text: "选项二" }],
          actionsWithIcon: [
            { text: "选项一", icon: "add-o" },
            { text: "选项二", icon: "music-o" },
            { text: "选项三", icon: "more-o" },
          ],
          actionsDisabled: [
            { text: "选项一", disabled: true },
            { text: "选项二", disabled: true },
            { text: "选项三" },
          ],
          showIcon: "展示图标",
          placement: "弹出位置",
          darkTheme: "深色风格",
          lightTheme: "浅色风格",
          showPopover: "点击弹出气泡",
          actionOptions: "选项配置",
          customContent: "自定义内容",
          disableAction: "禁用选项",
          choosePlacement: "选择弹出位置",
          basicUsage: "基础用法",
          option: "选项",
        },
        "en-US": {
          showCode: "Show Code",
          actions: [
            { text: "Option 1" },
            { text: "Option 2" },
            { text: "Option 3" },
          ],
          shortActions: [{ text: "Option 1" }, { text: "Option 2" }],
          actionsWithIcon: [
            { text: "Option 1", icon: "add-o" },
            { text: "Option 2", icon: "music-o" },
            { text: "Option 3", icon: "more-o" },
          ],
          actionsDisabled: [
            { text: "Option 1", disabled: true },
            { text: "Option 2", disabled: true },
            { text: "Option 3" },
          ],
          showIcon: "Show Icon",
          placement: "Placement",
          darkTheme: "Dark Theme",
          lightTheme: "Light Theme",
          showPopover: "Show Popover",
          actionOptions: "Action Options",
          customContent: "Custom Content",
          disableAction: "Disable Action",
          choosePlacement: "Placement",
          basicUsage: "Basic Usage",
          option: "Option",
        },
      },
      showPopover1: false,
      showPopover2: false,
      showPopover3: false,
      showPopover4: false,
      showPopover5: false,
      showPicker: false,
      placementShow: false,
      currentPlacement: "top",
      placements: [
        "top",
        "top-start",
        "top-end",
        "left",
        "left-start",
        "left-end",
        "right",
        "right-start",
        "right-end",
        "bottom",
        "bottom-start",
        "bottom-end",
      ],
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
    onSelect(action) {
      Toast(action.text);
    },
    onPickerChange(picker, value) {
      this.placementShow = true;
      this.currentPlacement = value;
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
.demo-popover {
  text-align: left;
  &-refer {
    width: 60px;
    height: 60px;
    background-color: @blue;
    border-radius: 8px;
  }

  .van-popover__wrapper {
    margin-left: @padding-md;
  }

  .van-field {
    width: auto;
    margin: 0 12px;
    overflow: hidden;
    border-radius: 8px;
  }

  &-box {
    display: flex;
    justify-content: center;
    margin: 110px 0;

    .van-popover__wrapper {
      margin-left: 0;
    }
  }
  /deep/.van-switch {
    margin-left: 16px;
  }
}
</style>
