<!--
 * @Description: 
 * @Autor: Dai YueLin
 * @Date: 2021-05-24 13:22:11
 * @LastEditors: Dai YueLin
 * @LastEditTime: 2022-03-29 15:30:55
-->
<template>
  <div>
    <van-field
      v-model="value"
      readonly
      clickable
      name="calendar"
      :label="t('calendar')"
      :placeholder="t('placeholder')"
      @click="showCalendar = true"
    />
    <van-calendar
      v-model="showCalendar"
      round
      teleport="body"
      @confirm="onConfirm"
    />
  </div>
</template>

<script>

import { getLangFromUserAgent } from "../../utils/util";
export default {
  name: "FieldTypeCalendar",
  components: {
   
  },
  props: {
    msg: String,
    calendar: {
      type: String,
      default() {
        return "";
      },
    },
  },
  data() {
    return {
      value: '',
      showCalendar: false,
      i18n: {
        "zh-CN": {
          calendar: "日历",
          placeholder: "点击选择日期",
        },
        "en-US": {
          calendar: "Calendar",
          placeholder: "Select date",
        },
      },
    };
  },
  watch:{
    calendar(){
      this.value = this.calendar
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

    formatDate(date) { return `${date.getMonth() + 1}/${date.getDate()}`},

    onConfirm(date){
      this.value = this.formatDate(date);
      this.showCalendar = false;
    },
  },
};
</script>