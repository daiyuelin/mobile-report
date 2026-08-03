<!--
 * @Description: 
 * @Autor: Dai YueLin
 * @Date: 2021-05-24 13:22:11
 * @LastEditors: Dai YueLin
 * @LastEditTime: 2022-03-29 15:28:16
-->
<template>
  <div>
    <van-field
      v-model="value"
      readonly
      clickable
      name="picker"
      :label="t('picker')"
      :placeholder="t('placeholder')"
      @click="showPicker = true"
    />
    <van-popup v-model="showPicker" round position="bottom" teleport="body">
      <van-picker
        :columns="t('textColumns')"
        @confirm="onConfirm"
        @cancel="onCancel"
        show-toolbar
        :confirm-button-text="t('confirmButtonText')"
        :cancel-button-text="t('cancelButtonText')"
      />
    </van-popup>
  </div>
</template>

<script>
import { getLangFromUserAgent } from "../../utils/util";
export default {
  name: "FieldTypePicker",
  components: {},
   model: {
    prop:"searchText",
    event: 'change'
  },
  props: {
    msg: String,
    picker: {
      type: String,
      default() {
        return "";
      },
    },
  },
  data() {
    return {
      value: "",
      showPicker: false,
      i18n: {
        "zh-CN": {
          picker: "选择器",
          placeholder: "点击选择城市",
          textColumns: ["杭州", "宁波", "温州", "嘉兴", "湖州"],
        },
        "en-US": {
          picker: "Picker",
          placeholder: "Select city",
          textColumns: ["Delaware", "Florida", "Georqia", "Indiana", "Maine"],
        },
      },
    };
  },
  watch:{
    picker(){
      this.value = this.picker
    }
  },
  methods: {
    t(name) {
      // 根据手机语言环境对应显示中文还是英文
      let _lang = getLangFromUserAgent();
      if (_lang === "en") {
        return this.i18n["en-US"][name];
      } else {
        return this.i18n["zh-CN"][name];
      }
    },
    onConfirm(value) {
      this.value = value;
      this.showPicker = false;
    },

    onCancel() {
      this.showPicker = false;
    },
  },
};
</script>