<template>
<div>
  <div style="overflow: hidden">
      <van-loading
        type="spinner"
        size="45px"
        style="
          height: 100vh;
          position: absolute;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          z-index: 10000;
        "
        v-if="loading"
      />
    </div>
  <demo-block :title="t('fieldType')">
    <van-form @submit="onSubmit">
      <van-field
        v-model="name"
        name="name"
        :label="t('name')"
        :placeholder="t('name')"
        required
        :rules="[{ required: true, message: t('requireName') }]"
      />
      <van-field name="switchFlag" :label="t('switch')">
        <template #input>
          <van-switch v-model="switchFlag" size="20" />
        </template>
      </van-field>

      <van-field name="checkbox" :label="t('checkbox')">
        <template #input>
          <van-checkbox v-model="checkbox" shape="square" />
        </template>
      </van-field>

      <van-field name="checkboxGroup" :label="t('checkboxGroup')">
        <template #input>
          <van-checkbox-group v-model="checkboxGroup" direction="horizontal">
            <van-checkbox name="1" shape="square">
              {{ t("checkbox") }} 1
            </van-checkbox>
            <van-checkbox name="2" shape="square">
              {{ t("checkbox") }} 2
            </van-checkbox>
          </van-checkbox-group>
        </template>
      </van-field>

      <van-field name="radio" :label="t('radio')">
        <template #input>
          <van-radio-group v-model="radio" direction="horizontal">
            <van-radio name="1">{{ t("radio") }} 1</van-radio>
            <van-radio name="2">{{ t("radio") }} 2</van-radio>
          </van-radio-group>
        </template>
      </van-field>

      <van-field name="stepper" :label="t('stepper')">
        <template #input>
          <van-stepper v-model="stepper" />
        </template>
      </van-field>

      <van-field name="rate" :label="t('rate')">
        <template #input>
          <van-rate v-model="rate" />
        </template>
      </van-field>

      <van-field name="slider" :label="t('slider')">
        <template #input>
          <van-slider v-model="slider" />
        </template>
      </van-field>
      <field-type-picker :picker="picker" />
      <field-type-datetime-picker :datetimePicker="datetimePicker" />
      <field-type-area :area="area" />
      <field-type-calendar :calendar="calendar" />

      <div style="margin: 16px 16px 0">
        <van-button round block type="primary" native-type="submit">
          {{ t("submit") }}
        </van-button>
      </div>
    </van-form>
  </demo-block>
</div>
</template>

<script>
import DemoBlock from ".././DemoBlock.vue";
import { getLangFromUserAgent } from "../../utils/util";
import FieldTypeArea from "../Form/FieldTypeArea";
import FieldTypePicker from "../Form/FieldTypePicker";
import FieldTypeCalendar from "../Form/FieldTypeCalendar";
import FieldTypeDatetimePicker from "../Form/FieldTypeDatetimePicker.vue";
import { addForm, queryForm, updateForm } from "../../api/user";

export default {
  name: "Form",
  components: {
    DemoBlock,
    FieldTypeArea,
    FieldTypePicker,
    FieldTypeCalendar,
    FieldTypeDatetimePicker,
  },
  props: {
    msg: String,
  },
  data() {
    return {
      loading: false,
      area: "",
      calendar: "",
      datetimePicker: "",
      picker: "",
      id: "",
      name: "",
      rate: 3,
      radio: "1",
      slider: 50,
      stepper: 1,
      uploader: [{ url: "https://img.yzcdn.cn/vant/leaf.jpg" }],
      checkbox: false,
      checkboxGroup: [],
      switchFlag: false,
      i18n: {
        "zh-CN": {
          rate: "评分",
          radio: "单选框",
          submit: "提交",
          switch: "开关",
          slider: "滑块",
          picker: "选择器",
          stepper: "步进器",
          checkbox: "复选框",
          uploader: "文件上传",
          fieldType: "表单项类型",
          checkboxGroup: "复选框组",
          requireCheckbox: "请勾选复选框",
          requireName: "名称必填",
          name: "名称",
        },
        "en-US": {
          rate: "Rate",
          radio: "Radio",
          submit: "Submit",
          switch: "Switch",
          slider: "Slider",
          picker: "Picker",
          stepper: "Stepper",
          checkbox: "Checkbox",
          uploader: "Uploader",
          fieldType: "Field Type",
          checkboxGroup: "Checkbox Group",
          requireCheckbox: "Checkbox is required",
          requireName: "Name is required",
          name: "Name",
        },
      },
    };
  },
  mounted() {
    if (this.$route.query.id) {
      this.id = this.$route.query.id;
      this.loading = true
      this.queryForm();
    }
  },
  methods: {
    //初始化查询
    queryForm() {
      queryForm().then((res) => {
        this.list = res.data;
        let data = this.list.find((res) => {
          return res.id === this.id;
        });
        this.id = data.id;
        this.name = data.name;
        this.rate = data.rate;
        this.radio = data.radio;
        this.slider = data.slider;
        this.stepper = data.stepper;
        this.checkbox = data.checkbox;
        this.checkboxGroup = data.checkboxGroup;
        this.switchFlag = data.switchFlag;
        this.picker = data.picker;
        this.datetimePicker = data.datetimePicker;
        this.area = data.area;
        this.calendar = data.calendar;
      });
      this.loading = false
    },
    t(name) {
      // 根据手机语言环境对应显示中文还是英文
      let _lang = getLangFromUserAgent();
      if (_lang === "en") {
        return this.i18n["en-US"][name];
      } else {
        return this.i18n["zh-CN"][name];
      }
    },
    onSubmit(values) {
      this.loading = true
      console.log(values);
      let data = Object.assign({}, { id: this.id }, values);
      if (this.id !== "") {
        updateForm(data).then((res) => {
          this.id = res.data;
          this.loading = false
          this.$router.go(-1);
        });
      } else {
        addForm(data).then((res) => {
          this.id = res.data;
          this.$toast("提交成功！");
          this.loading = false
          this.$router.go(-1);
        });
      }
    },
  },
};
</script>
