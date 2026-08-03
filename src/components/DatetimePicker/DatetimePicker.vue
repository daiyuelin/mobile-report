<template>
  <div class="demo-datetime-picker">
    <demo-block card :title="t('dateType')">
      <van-datetime-picker
        v-model="value.date"
        type="date"
        :title="t('dateType')"
        :min-date="minDate"
        :max-date="maxDate"
      />
    </demo-block>

    <demo-block card :title="t('yearMonthType')">
      <van-datetime-picker
        v-model="value.yearMonth"
        type="year-month"
        :title="t('yearMonthType')"
        :min-date="minDate"
        :max-date="maxDate"
        :formatter="formatter"
      />
    </demo-block>

    <demo-block  card :title="t('monthDayType')">
      <van-datetime-picker
        v-model="value.monthDayType"
        type="month-day"
        :title="t('monthDayType')"
        :min-date="minDate"
        :max-date="maxDate"
        :formatter="formatter"
      />
    </demo-block>

    <demo-block card :title="t('timeType')">
      <van-datetime-picker
        v-model="value.time"
        type="time"
        :title="t('timeType')"
        :min-hour="10"
        :max-hour="20"
      />
    </demo-block>

    <demo-block card :title="t('datetimeType')">
      <van-datetime-picker
        v-model="value.datetime"
        type="datetime"
        :title="t('datetimeType')"
        :min-date="minDate"
        :max-date="maxDate"
      />
    </demo-block>

    <demo-block  card :title="t('datehourType')">
      <van-datetime-picker
        v-model="value.datehour"
        type="datehour"
        :title="t('datehourType')"
        :min-date="minDate"
        :max-date="maxDate"
      />
    </demo-block>

    <demo-block card :title="t('optionFilter')">
      <van-datetime-picker
        v-model="value.optionFilter"
        type="time"
        :title="t('optionFilter')"
        :filter="filter"
      />
    </demo-block>

    <demo-block  card :title="t('sortColumns')">
      <van-datetime-picker
        v-model="value.sortColumnsDate"
        type="date"
        :title="t('sortColumns')"
        :columns-order="['month', 'day', 'year']"
        :min-date="minDate"
        :max-date="maxDate"
        :formatter="formatter"
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
import MdDatetimePickerEn from "../../../docs/datetime-picker/README.md";
import MdDatetimePicker from "../../../docs/zh/datetime-picker/README.md";
import DemoBlock from ".././DemoBlock";
import { getLangFromUserAgent } from "../../utils/util";
export default {
  name: "DatetimePicker",
  components: {
    DemoBlock,
    MdDatetimePickerEn,
    MdDatetimePicker
  },
  props: {
    msg: String,
  },
  data() {
    return {
      mdComponent: "MdDatetimePicker",
      checked: false,
      minDate: new Date(2020, 0, 1),
      maxDate: new Date(2025, 10, 1),
      value: {
        date: null,
        time: "12:00",
        datetime: new Date(2020, 0, 1),
        datehour: new Date(2020, 0, 1),
        monthDay: new Date(2020, 0, 1),
        yearMonth: new Date(2020, 0, 1),
        optionFilter: "12:00",
        sortColumnsDate: new Date(2020, 0, 1),
      },
      i18n: {
        "zh-CN": {
          day: "日",
          year: "年",
          month: "月",
          timeType: "选择时间",
          dateType: "选择年月日",
          datetimeType: "选择完整时间",
          datehourType: "选择年月日小时",
          monthDayType: "选择月日",
          yearMonthType: "选择年月",
          optionFilter: "选项过滤器",
          sortColumns: "自定义列排序",
          showCode: "显示源码",

        },
        "en-US": {
          day: " Day",
          year: " Year",
          month: " Month",
          timeType: "Choose Time",
          dateType: "Choose Date",
          datetimeType: "Choose DateTime",
          datehourType: "Choose DateHour",
          monthDayType: "Choose Month-Day",
          yearMonthType: "Choose Year-Month",
          optionFilter: "Option Filter",
          sortColumns: "Columns Order",
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
        this.mdComponent = "MdDatetimePickerEn";
        return this.i18n["en-US"][name];
      } else {
        this.mdComponent = "MdDatetimePicker";
        return this.i18n["zh-CN"][name];
      }
    },
    filter(type, values) {
      if (type === "minute") {
        return values.filter((value) => Number(value) % 5 === 0);
      }
      return values;
    },

    formatter(type, value) {
      if (type === "year") {
        return value + this.t("year");
      }
      if (type === "month") {
        return value + this.t("month");
      }
      if (type === "day") {
        return value + this.t("day");
      }
      return value;
    },
  },
};
</script>

<style lang="less" scoped>
.markdown-body {
  padding: 0px 10px 0px 10px;
}
.demo-datetime-picker {
  box-sizing: border-box;
  min-height: calc(100vh - 56px);
  padding-bottom: 20px;
  
  /deep/.van-doc-demo-block {
    padding: 0 @padding-md !important;
  }

  /deep/.van-doc-demo-block__title {
    padding-left: 0 !important;
  }

}
</style>