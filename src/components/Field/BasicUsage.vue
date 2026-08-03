<!--
 * @Description: 
 * @Autor: Dai YueLin
 * @Date: 2021-05-25 17:13:53
 * @LastEditors: Dai YueLin
 * @LastEditTime: 2021-05-25 17:31:49
-->
<template>
  <demo-block :title="t('basicUsage')">
    <van-cell-group>
      <van-field
        v-model="value"
        :label="t('label')"
        :placeholder="t('placeholder')"
      />
    </van-cell-group>
  </demo-block>
</template>

<script>
import DemoBlock from ".././DemoBlock";
import { getLangFromUserAgent } from "../../utils/util";
export default {
  name: "BasicUsage",
  components: {
    DemoBlock,
  },
  props: {
    msg: String,
  },
  data() {
    return {
      value: "",
      i18n: {
        "zh-CN": {
          label: "文本",
          placeholder: "请输入文本",
          basicUsage: "基础用法"
        },
        "en-US": {
          label: "Label",
          placeholder: "Text",
          basicUsage: "Basic Usage"
        },
      },
    };
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
  },
};
</script>