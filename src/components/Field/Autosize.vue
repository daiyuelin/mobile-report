<!--
 * @Description: 
 * @Autor: Dai YueLin
 * @Date: 2021-05-25 17:13:53
 * @LastEditors: Dai YueLin
 * @LastEditTime: 2021-05-25 17:48:23
-->
<template>
  <demo-block :title="t('autosize')">
    <van-field
      v-model="value"
      autosize
      rows="1"
      type="textarea"
      :label="t('message')"
      :placeholder="t('placeholder')"
    />
  </demo-block>
</template>

<script>
import DemoBlock from ".././DemoBlock";
import { getLangFromUserAgent } from "../../utils/util";
export default {
  name: "Autosize",
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
          sms: "SMS",
          message: "留言",
          autosize: "高度自适应",
          placeholder: "请输入留言",
        },
        "en-US": {
          sms: "SMS",
          message: "Message",
          autosize: "Auto Resize",
          placeholder: "Message",
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