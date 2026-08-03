<!--
 * @Description: 
 * @Version: 1.0
 * @Author: Edison Chen
 * @Date: 2021-05-24 10:13:24
 * @LastEditors: Edison Chen
 * @LastEditTime: 2021-05-27 15:19:19
 * @FilePath: \JoyChat_Compinent\src\components\Calendar\Calendar.vue
 * Copyright (C) 2021 Edison Chen. All rights reserved.
-->

<template>
  <div class="demo-calendar">
    <demo-block card :title="t('basicUsage')">
      <van-cell
        is-link
        :title="t('selectSingle')"
        :value="formatSingle(date.single)"
        @click="showCalendar('single')"
      />

      <van-cell
        is-link
        :title="t('selectMultiple')"
        :value="formatMultiple(date.multiple)"
        @click="showCalendar('multiple')"
      />

      <van-cell
        is-link
        :title="t('selectRange')"
        :value="formatRange(date.range)"
        @click="showCalendar('range')"
      />
    </demo-block>

    <demo-block card :title="t('quickSelect')">
      <van-cell
        is-link
        :title="t('selectSingle')"
        :value="formatSingle(date.quickSelect1)"
        @click="showCalendar('quickSelect1')"
      />

      <van-cell
        is-link
        :title="t('selectRange')"
        :value="formatRange(date.quickSelect2)"
        @click="showCalendar('quickSelect2')"
      />
    </demo-block>

    <demo-block card :title="t('customCalendar')">
      <van-cell
        is-link
        :title="t('customColor')"
        :value="formatRange(date.customColor)"
        @click="showCalendar('customColor')"
      />

      <van-cell
        is-link
        :title="t('customRange')"
        :value="formatSingle(date.customRange)"
        @click="showCalendar('customRange')"
      />

      <van-cell
        is-link
        :title="t('customConfirm')"
        :value="formatRange(date.customConfirm)"
        @click="showCalendar('customConfirm')"
      />

      <van-cell
        is-link
        :title="t('customDayText')"
        :value="formatRange(date.customDayText)"
        @click="showCalendar('customDayText')"
      />

      <van-cell
        is-link
        :title="t('customPosition')"
        :value="formatSingle(date.customPosition)"
        @click="showCalendar('customPosition')"
      />

      <van-cell
        is-link
        :title="t('maxRange')"
        :value="formatRange(date.maxRange)"
        @click="showCalendar('maxRange')"
      />

      <van-cell
        is-link
        :title="t('firstDayOfWeek')"
        :value="formatSingle(date.firstDayOfWeek)"
        @click="showCalendar('firstDayOfWeek')"
      />
    </demo-block>

    <demo-block card :title="t('tiledDisplay')">
      <van-calendar
        :title="t('calendar')"
        :poppable="false"
        :show-confirm="false"
        :min-date="tiledMinDate"
        :max-date="tiledMaxDate"
        :default-date="tiledMinDate"
        :style="{ height: '500px' }"
      />
    </demo-block>

    <!-- 公用日历组件 -->
    <van-calendar
      :title="t('calendar')"
      v-model="show"
      @confirm="onConfirm"
      :type="type"
      :show-confirm="showConfirm"
      :color="customColor"
      :min-date="minDate"
      :max-date="maxDate"
      :confirm-text="confirmText"
      :confirm-disabled-text="confirmDisabledText"
      :formatter="formatter"
      :round="round"
      :position="position"
      :max-range="maxRange"
      :first-day-of-week="firstDayOfWeek"
    />
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
import MdCalendarEn from "../../../docs/calendar/README.md";
import MdCalendar from "../../../docs/zh/calendar/README.md";
import DemoBlock from "../DemoBlock";
import { getLangFromUserAgent } from "../../utils/util";

export default {
  name: "Calendar",
  components: { DemoBlock,MdCalendarEn,MdCalendar },
  data() {
    return {
      mdComponent: "MdCalendar",
      checked: false,
      //   i18n国际化数据
      i18n: {
        "zh-CN": {
          in: "入店",
          out: "离店",
          today: "今天",
          laborDay: "劳动节",
          youthDay: "青年节",
          calendar: "日历",
          maxRange: "日期区间最大范围",
          selectSingle: "选择单个日期",
          selectMultiple: "选择多个日期",
          selectRange: "选择日期区间",
          quickSelect: "快捷选择",
          confirmText: "完成",
          customColor: "自定义颜色",
          customRange: "自定义日期范围",
          customConfirm: "自定义按钮文字",
          customDayText: "自定义日期文案",
          customPosition: "自定义弹出位置",
          customCalendar: "自定义日历",
          confirmDisabledText: "请选择结束时间",
          firstDayOfWeek: "自定义周起始日",
          tiledDisplay: "平铺展示",
          basicUsage: "基础用法",
          selectCount: (count) => `选择了 ${count} 个日期`,
          confirm: "确定",
          start: "开始",
          end: "结束",
          showCode: "显示源码",
        },
        "en-US": {
          in: "In",
          out: "Out",
          today: "Today",
          laborDay: "Labor day",
          youthDay: "Youth Day",
          calendar: "Calendar",
          maxRange: "Max Range",
          selectSingle: "Select Single Date",
          selectMultiple: "Select Multiple Date",
          selectRange: "Select Date Range",
          quickSelect: "Quick Select",
          confirmText: "OK",
          customColor: "Custom Color",
          customRange: "Custom Date Range",
          customConfirm: "Custom Confirm Text",
          customDayText: "Custom Day Text",
          customPosition: "Custom Position",
          customCalendar: "Custom Calendar",
          firstDayOfWeek: "Custom First Day Of Week",
          confirmDisabledText: "Select End Time",
          tiledDisplay: "Tiled display",
          basicUsage: "Basic Usage",
          selectCount: (count) => `${count} dates selected`,
          confirm: "Confirm",
          start: "Start",
          end: "End",
          showCode: "Show Code",

        },
      },
      //date日期数据
      date: {
        single: null,
        multiple: [],
        range: [],
        quickSelect1: null,
        quickSelect2: [],
        customColor: [],
        customRange: null,
        customConfirm: [],
        customDayText: [],
        customPosition: null,
        maxRange: [],
        firstDayOfWeek: null,
      },
      //日期选择器属性数据
      show: false,
      type: undefined,
      id: undefined,
      showConfirm: true,
      customColor: undefined,
      minDate: undefined,
      maxDate: undefined,
      confirmText: undefined,
      confirmDisabledText: undefined,
      formatter: undefined,
      customPosition: undefined,
      round: undefined,
      position: undefined,
      maxRange: undefined,
      firstDayOfWeek: undefined,
      tiledMinDate: new Date(2012, 0, 10),
      tiledMaxDate: new Date(2012, 2, 20),
    };
  },
  methods: {
    // t(...vars) {
    //   return useTranslate(this.i18n)(...vars);
    // },
    //重置日期选择器属性
    restSettings() {
      this.showConfirm = true;
      this.customColor = "";
      this.minDate = undefined;
      this.maxDate = undefined;
      this.round = undefined;
      this.position = undefined;
      this.maxRange = "";
      this.firstDayOfWeek = undefined;
    },
    showCalendar(a) {
      this.restSettings();
      this.show = true;
      this.confirmText = this.t("confirm");
      this.confirmDisabledText = this.t("confirm");
      this.formatter = (day) => {
        if (day.type === "start") {
          day.bottomInfo = this.t("start");
        } else if (day.type === "end") {
          day.bottomInfo = this.t("end");
        }
        return day;
      };
      switch (a) {
        case "single":
          this.type = this.id = "single";
          break;
        case "multiple":
          this.type = this.id = "multiple";
          break;
        case "range":
          this.type = this.id = "range";
          break;
        case "quickSelect1":
          this.type = "single";
          this.id = "quickSelect1";
          this.showConfirm = false;
          break;
        case "quickSelect2":
          this.type = "range";
          this.id = "quickSelect2";
          this.showConfirm = false;
          break;
        case "customColor":
          this.type = "range";
          this.id = "customColor";
          this.customColor = "#444444";
          break;
        case "customRange":
          this.type = "single";
          this.id = "customRange";
          this.minDate = new Date(2010, 0, 1);
          this.maxDate = new Date(2010, 0, 10);
          break;
        case "customConfirm":
          this.type = "range";
          this.id = "customConfirm";
          this.confirmText = this.t("confirmText");
          this.confirmDisabledText = this.t("confirmDisabledText");
          break;
        case "customDayText":
          this.type = "range";
          this.id = "customDayText";
          this.formatter = (day) => {
            {
              const month = day.date.getMonth() + 1;
              const date = day.date.getDate();

              if (month === 5) {
                if (date === 1) {
                  day.topInfo = this.t("laborDay");
                } else if (date === 4) {
                  day.topInfo = this.t("youthDay");
                } else if (date === 11) {
                  day.text = this.t("today");
                }
              }

              if (day.type === "start") {
                day.bottomInfo = this.t("in");
              } else if (day.type === "end") {
                day.bottomInfo = this.t("out");
              }

              return day;
            }
          };
          break;
        case "customPosition":
          this.type = "single";
          this.id = "customPosition";
          this.round = false;
          this.position = "right";
          break;
        case "maxRange":
          this.type = "range";
          this.id = "maxRange";
          this.maxRange = "3";
          break;
        case "firstDayOfWeek":
          this.type = "single";
          this.id = "firstDayOfWeek";
          this.firstDayOfWeek = 1;
          break;
      }
    },
    onConfirm(date) {
      this.date[this.id] = date;
      this.show = false;
    },
    formatSingle(date) {
      if (date) {
        return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
      }
    },
    formatMultiple(date) {
      if (date.length) {
        return this.t("selectCount", date.length);
      }
    },
    formatRange(date) {
      if (date.length) {
        return `${date[0].getFullYear()}/${
          date[0].getMonth() + 1
        }/${date[0].getDate()}-${date[1].getFullYear()}/${
          date[1].getMonth() + 1
        }/${date[1].getDate()}`;
      }
    },
    t(name) {
      // 根据手机语言环境对应显示中文还是英文
      let _lang = getLangFromUserAgent();
      if (_lang === "en") {
        // 使用英文的markdown
        this.mdComponent = "MdCalendarEn";
        return this.i18n["en-US"][name];
      } else {
        // 使用中文的markdown
        this.mdComponent = "MdCalendar";
        return this.i18n["zh-CN"][name];
      }
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
.demo-calendar {
  text-align: left;
  background: @white;
  box-sizing: border-box;
  min-height: calc(100vh - 56px);
  padding-bottom: 20px;

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
