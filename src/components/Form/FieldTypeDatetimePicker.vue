<!--
 * @Description: 
 * @Autor: Dai YueLin
 * @Date: 2021-05-24 13:22:11
 * @LastEditors: Dai YueLin
 * @LastEditTime: 2022-03-29 15:30:11
-->
<template>
<div>
  <van-field
    v-model="value"
    readonly
    clickable
    name="datetimePicker"
    :label="t('label')"
    :placeholder="t('placeholder')"
    @click="showPicker = true"
  />
  <van-popup v-model="showPicker" round position="bottom" teleport="body">
    <van-datetime-picker type="time" @confirm="onConfirm" @cancel="onCancel" />
  </van-popup>
</div>
</template>

<script>
import { getLangFromUserAgent } from "../../utils/util";
export default {
  name: "FieldTypeDatetimePicker",
  components: {

  },
  props: {
    msg: String,
     datetimePicker: {
      type: String,
      default() {
        return "";
      },
    },
  },
  data() {
    return {
      value: '',
      showPicker: false,
      i18n: {
  'zh-CN': {
    label: '时间选择',
    placeholder: '点击选择时间',
  },
  'en-US': {
    label: 'Datetime Picker',
    placeholder: 'Select time',
  },
},
    };
  },
  watch:{
    datetimePicker(){
      this.value = this.datetimePicker
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
   onConfirm (time){
      this.value = time;
      this.showPicker = false;
    },
    onCancel(){
     this.showPicker = false;
    },
  },
};
</script>