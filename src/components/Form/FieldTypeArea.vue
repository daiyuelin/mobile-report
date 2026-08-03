<!--
 * @Description: 
 * @Autor: Dai YueLin
 * @Date: 2021-05-24 13:22:11
 * @LastEditors: Dai YueLin
 * @LastEditTime: 2022-03-29 15:32:22
-->
<template>
  <div>
    <van-field
      v-model="value"
      readonly
      clickable
      name="area"
      :label="t('picker')"
      :placeholder="t('placeholder')"
      @click="showArea = true"
    />
    <van-popup v-model="showArea" round position="bottom" teleport="body">
      <van-area
        :area-list="t('areaList')"
        @confirm="onConfirm"
        @cancel="onCancel"
      />
    </van-popup>
  </div>
</template>

<script>
import AreaList from "./area";
import AreaListEn from "./area-en";
import { getLangFromUserAgent } from "../../utils/util";
export default {
  name: "FieldTypeArea",
  components: {
  },
  props: {
    msg: String,
    area: {
      type: String,
      default() {
        return "";
      },
    },
  },
  data() {
    return {
      value: "",
      showArea: false,
      i18n: {
        "zh-CN": {
          picker: "地区选择",
          areaList: AreaList,
          placeholder: "点击选择省市区",
        },
        "en-US": {
          picker: "Area Picker",
          areaList: AreaListEn,
          placeholder: "Select area",
        },
      },
    };
  },
  watch:{
    area(){
      this.value = this.area
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
      onConfirm(values){
      this.value = values
        .filter((item) => !!item)
        .map((item) => item.name)
        .join("/");
      this.showArea = false;
    },

   onCancel(){
      this.showArea = false;
    }
  },
};
</script>