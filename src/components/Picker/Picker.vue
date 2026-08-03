<!--
 * @Description: 
 * @Autor: Dai YueLin
 * @Date: 2021-05-24 14:08:05
 * @LastEditors: Dai YueLin
 * @LastEditTime: 2021-05-27 13:58:20
-->
<template>
  <div class="van-picker picker">
    <demo-block card :title="t('basicUsage')">
      <van-picker
        show-toolbar
        :title="t('title')"
        :columns="t('textColumns')"
        @change="onChange1"
        @confirm="onConfirm"
        @cancel="onCancel"
        :confirm-button-text="t('confirmButtonText')"
        :cancel-button-text="t('cancelButtonText')"
      />
    </demo-block>

    <demo-block card :title="t('defaultIndex')">
      <van-picker
        show-toolbar
        :title="t('title')"
        :columns="t('textColumns')"
        :default-index="2"
        @change="onChange1"
        :confirm-button-text="t('confirmButtonText')"
        :cancel-button-text="t('cancelButtonText')"
      />
    </demo-block>

    <demo-block card :title="t('multipleColumns')">
      <van-picker
        show-toolbar
        :title="t('title')"
        :columns="t('dateColumns')"
        @cancel="onCancel"
        @confirm="onConfirm"
        :confirm-button-text="t('confirmButtonText')"
        :cancel-button-text="t('cancelButtonText')"
      />
    </demo-block>

    <demo-block card :title="t('cascade')">
      <van-picker
        show-toolbar
        :title="t('title')"
        :columns="t('cascadeColumns')"
        :confirm-button-text="t('confirmButtonText')"
        :cancel-button-text="t('cancelButtonText')"
      />
    </demo-block>

    <demo-block card :title="t('disableOption')">
      <van-picker
        show-toolbar
        :title="t('title')"
        :columns="t('disabledColumns')"
        :confirm-button-text="t('confirmButtonText')"
        :cancel-button-text="t('cancelButtonText')"
      />
    </demo-block>

    <demo-block card :title="t('setColumnValues')">
      <van-picker
        show-toolbar
        ref="picker"
        :title="t('title')"
        :columns="columns"
        @change="onChange2"
        :confirm-button-text="t('confirmButtonText')"
        :cancel-button-text="t('cancelButtonText')"
      />
    </demo-block>

    <demo-block card :title="t('loadingStatus')">
      <van-picker
        show-toolbar
        loading
        :title="t('title')"
        :columns="columns"
        :confirm-button-text="t('confirmButtonText')"
        :cancel-button-text="t('cancelButtonText')"
      />
    </demo-block>

    <demo-block card :title="t('withPopup')">
      <van-field
        v-model="fieldValue"
        readonly
        clickable
        :label="t('city')"
        :placeholder="t('chooseCity')"
        @click="onClickField"
      />
      <van-popup v-model="showPicker" round position="bottom">
        <van-picker
          show-toolbar
          :title="t('title')"
          :columns="t('textColumns')"
          @cancel="onCancel2"
          @confirm="onConfirm2"
          :confirm-button-text="t('confirmButtonText')"
          :cancel-button-text="t('cancelButtonText')"
        />
      </van-popup>
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
import MdPickerEn from "../../../docs/picker/README.md";
import MdPicker from "../../../docs/zh/picker/README.md";
import DemoBlock from ".././DemoBlock";
import { getLangFromUserAgent } from "../../utils/util";
import { dateColumns, cascadeColumns, cascadeColumnsCustomKey } from "./data";
export default {
  name: "Picker",
  components: {
    DemoBlock,
    MdPickerEn,
    MdPicker
    
  },
  props: {
    msg: String,
  },
  data() {
    return {
      showPicker: false,
      fieldValue: "",
      customFieldName: {
        text: "cityName",
        children: "cities",
      },
      mdComponent: "MdPickerEn",
      checked: false,
      i18n: {
        "zh-CN": {
          showCode: "显示源码",
          confirmButtonText: "确认",
          cancelButtonText: "取消",
          title: "标题",
          basicUsage: "基础用法",
          city: "城市",
          cascade: "级联选择",
          withPopup: "搭配弹出层使用",
          chooseCity: "选择城市",
          showToolbar: "展示顶部栏",
          dateColumns: dateColumns["zh-CN"],
          defaultIndex: "默认选中项",
          disableOption: "禁用选项",
          cascadeColumns: cascadeColumns["zh-CN"],
          multipleColumns: "多列选择",
          setColumnValues: "动态设置选项",
          customChildrenKey: "自定义Columns字段",
          customChildrenColumns: cascadeColumnsCustomKey["zh-CN"],
          textColumns: [
            "杭州",
            "宁波",
            "温州",
            "绍兴",
            "湖州",
            "嘉兴",
            "金华",
            "衢州",
          ],
          disabledColumns: [
            { text: "杭州", disabled: true },
            { text: "宁波" },
            { text: "温州" },
          ],
          column3: {
            浙江: ["杭州", "宁波", "温州", "嘉兴", "湖州"],
            福建: ["福州", "厦门", "莆田", "三明", "泉州"],
          },
          toastContent: (value, index) =>
            `当前值：${value}, 当前索引：${index}`,
        },
        "en-US": {
          showCode: "Show Code",
          confirmButtonText: "Confirm",
          cancelButtonText: "Cancel",
          title: "Title",
          basicUsage: "Basic Usage",
          city: "City",
          cascade: "Cascade",
          withPopup: "With Popup",
          chooseCity: "Choose City",
          showToolbar: "Show Toolbar",
          dateColumns: dateColumns["en-US"],
          defaultIndex: "Default Index",
          disableOption: "Disable Option",
          cascadeColumns: cascadeColumns["en-US"],
          multipleColumns: "Multiple Columns",
          setColumnValues: "Set Column Values",
          customChildrenKey: "Custom Columns Fields",
          customChildrenColumns: cascadeColumnsCustomKey["en-US"],
          textColumns: ["Delaware", "Florida", "Georqia", "Indiana", "Maine"],
          disabledColumns: [
            { text: "Delaware", disabled: true },
            { text: "Florida" },
            { text: "Georqia" },
          ],
          column3: {
            Group1: ["Delaware", "Florida", "Georqia", "Indiana", "Maine"],
            Group2: ["Alabama", "Kansas", "Louisiana", "Texas"],
          },
          toastContent: (value, index) => `Value: ${value}, Index：${index}`,
        },
      },
    };
  },
  computed: {
    columns() {
      const column = this.t("column3");
      return [
        {
          values: Object.keys(column),
          className: "column1",
        },
        {
          values: column[Object.keys(column)[0]],
          className: "column2",
          defaultIndex: 2,
        },
      ];
    },
  },
  methods: {
    t(name) {
      // 根据手机语言环境对应显示中文还是英文
      let _lang = getLangFromUserAgent();
      if (_lang === "en") {
        this.mdComponent = "MdPickerEn";
        return this.i18n["en-US"][name];
      } else {
        this.mdComponent = "MdPicker";
        return this.i18n["zh-CN"][name];
      }
    },
    onChange1(value, index) {
      this.$toast(this.t("toastContent")(value, index));
    },

    onChange2(values) {
      this.$refs.picker.value.setColumnValues(1, this.t("column3")[values[0]]);
    },

    onConfirm(value, index) {
      this.$toast(this.t("toastContent")(value, index));
    },

    onCancel() {
      this.$toast(this.t("cancel"));
    },

    onCancel2() {
      this.showPicker = false;
    },

    onClickField() {
      this.showPicker = true;
    },

    onConfirm2(value) {
      this.showPicker = false;
      this.fieldValue = value;
    },
  },
};
</script>


<style lang="less" scoped>
.markdown-body {
  padding: 0px 10px 0px 10px;
}
.van-picker {
  &.picker {
    text-align: left;
    background: #f7f8fa;
    padding-bottom: 20px;
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