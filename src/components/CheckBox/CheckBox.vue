<template>
  <div class="demo-checkbox">
    <demo-block :title="t('basicUsage')">
      <van-checkbox v-model="checkbox1">{{ t("checkbox") }}</van-checkbox>
    </demo-block>

    <demo-block :title="t('disabled')">
      <van-checkbox :model-value="false" disabled>
        {{ t("checkbox") }}
      </van-checkbox>
      <van-checkbox :model-value="true" disabled>
        {{ t("checkbox") }}
      </van-checkbox>
    </demo-block>

    <demo-block :title="t('customShape')">
      <van-checkbox v-model="checkboxShape" shape="square">
        {{ t("customShape") }}
      </van-checkbox>
    </demo-block>

    <demo-block :title="t('customColor')">
      <van-checkbox v-model="checkbox2" checked-color="#92A2BD">
        {{ t("customColor") }}
      </van-checkbox>
    </demo-block>

    <demo-block :title="t('disableLabel')">
      <van-checkbox v-model="checkboxLabel" label-disabled>
        {{ t("checkbox") }}
      </van-checkbox>
    </demo-block>

    <demo-block :title="t('title3')">
      <van-checkbox-group v-model="result">
        <van-checkbox name="a">{{ t("checkbox") }} a</van-checkbox>
        <van-checkbox name="b">{{ t("checkbox") }} b</van-checkbox>
      </van-checkbox-group>
    </demo-block>

    <demo-block :title="t('horizontal')">
      <van-checkbox-group v-model="horizontalResult" direction="horizontal">
        <van-checkbox name="a">{{ t("checkbox") }} a</van-checkbox>
        <van-checkbox name="b">{{ t("checkbox") }} b</van-checkbox>
      </van-checkbox-group>
    </demo-block>

    <demo-block :title="t('title4')">
      <van-checkbox-group v-model="result2" :max="2">
        <van-checkbox name="a">{{ t("checkbox") }} a</van-checkbox>
        <van-checkbox name="b">{{ t("checkbox") }} b</van-checkbox>
        <van-checkbox name="c">{{ t("checkbox") }} c</van-checkbox>
      </van-checkbox-group>
    </demo-block>

    <demo-block :title="t('toggleAll')">
      <van-checkbox-group v-model="checkAllResult" ref="checkboxGroup">
        <van-checkbox name="a">{{ t("checkbox") }} a</van-checkbox>
        <van-checkbox name="b">{{ t("checkbox") }} b</van-checkbox>
        <van-checkbox name="c">{{ t("checkbox") }} c</van-checkbox>
      </van-checkbox-group>

      <div class="demo-checkbox-buttons">
        <van-button type="primary" @click="checkAll">
          {{ t("checkAll") }}
        </van-button>
        <van-button type="primary" @click="toggleAll">
          {{ t("inverse") }}
        </van-button>
      </div>
    </demo-block>

    <demo-block :title="t('title5')">
      <van-checkbox-group v-model="result3">
        <van-cell-group>
          <van-cell
            v-for="(item, index) in list"
            clickable
            :key="index"
            :title="`${t('checkbox')} ${item}`"
            @click="toggle(index)"
          >
            <template #right-icon>
              <van-checkbox :name="item" ref="checkboxes" />
            </template>
          </van-cell>
        </van-cell-group>
      </van-checkbox-group>
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
import MdCheckboxEn from "../../../docs/checkbox/README.md";
import MdCheckbox from "../../../docs/zh/checkbox/README.md";
import DemoBlock from "../DemoBlock";
import { getLangFromUserAgent } from "../../utils/util";

export default {
  name: "CheckBox",
  components: {
    DemoBlock,
    MdCheckboxEn,
    MdCheckbox
  },
  data() {
    return {
      mdComponent: "MdCheckbox",
      checked: false,
      i18n: {
        "zh-CN": {
          checkbox: "复选框",
          customIcon: "自定义图标",
          customIconSize: "自定义大小",
          customColor: "自定义颜色",
          customShape: "自定义形状",
          title3: "复选框组",
          title4: "限制最大可选数",
          title5: "搭配单元格组件使用",
          toggleAll: "全选与反选",
          checkAll: "全选",
          inverse: "反选",
          horizontal: "水平排列",
          disableLabel: "禁用文本点击",
          basicUsage: "基础用法",
          disabled: "禁用状态",
          showCode: "显示源码",
        },
        "en-US": {
          checkbox: "Checkbox",
          customIcon: "Custom Icon",
          customIconSize: "Custom Icon Size",
          customColor: "Custom Color",
          customShape: "Custom Shape",
          title3: "Checkbox Group",
          title4: "Maximum amount of checked options",
          title5: "Inside a Cell",
          toggleAll: "Toggle All",
          checkAll: "Check All",
          inverse: "Inverse",
          horizontal: "Horizontal",
          disableLabel: "Disable label click",
          basicUsage: "Basic Usage",
          disabled: "Disabled",
          showCode: "Show Code",
        },
      },
      checkbox1: true,
      checkbox2: true,
      checkbox3: true,
      checkboxShape: true,
      checkboxLabel: true,
      checboxIcon: true,
      list: ["a", "b"],
      activeIcon: "https://img.yzcdn.cn/vant/user-active.png",
      inactiveIcon: "https://img.yzcdn.cn/vant/user-inactive.png",
      result: ["a", "b"],
      result2: [],
      result3: [],
      checkAllResult: [],
      horizontalResult: [],
    };
  },
  methods: {
    t(name) {
      // 根据手机语言环境对应显示中文还是英文
      let _lang = getLangFromUserAgent();
      if (_lang === "en") {
        this.mdComponent = "MdCheckboxEn";
        return this.i18n["en-US"][name];
      } else {
        this.mdComponent = "MdCheckbox";
        return this.i18n["zh-CN"][name];
      }
    },
    checkAll() {
      this.$refs.checkboxGroup.toggleAll(true);
    },
    toggleAll() {
      this.$refs.checkboxGroup.toggleAll();
    },
    toggle(index) {
      this.$refs.checkboxes[index].toggle();
    },
  },
};
</script>
<style lang="less" scoped>
@import "../../assets/vant.less";
@import "./index.less";
.markdown-body {
  padding: 0px 10px 0px 10px;
}
.demo-checkbox {
  background: @white;
  text-align: left;
  /deep/.van-doc-demo-block {
    padding: 0 @padding-md !important;
  }

  /deep/.van-doc-demo-block__title {
    padding-left: 0 !important;
  }
  /deep/.van-switch{
    margin-left: 16px;
  }
  &-row {
    margin-bottom: @padding-sm !important;
  }
  .van-checkbox {
    margin: 0 0 8px 20px;
  }

  .van-cell {
    .van-checkbox {
      margin: 0;
    }
  }

  img {
    height: 20px;
  }

  &-buttons {
    margin-top: @padding-md;

    .van-button {
      margin-left: @padding-md;
    }
  }

  .van-doc-demo-block__title {
    margin-top: -8px;
  }
}
</style>
