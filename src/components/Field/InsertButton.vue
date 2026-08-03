<!--
 * @Description: 
 * @Autor: Dai YueLin
 * @Date: 2021-05-25 17:13:53
 * @LastEditors: Dai YueLin
 * @LastEditTime: 2021-05-25 17:26:21
-->
<template>
  <demo-block :title="t('insertButton')">
    <van-field
      v-model="sms"
      center
      clearable
      :label="t('sms')"
      :placeholder="t('smsPlaceholder')"
    >
      <template #button>
        <van-button size="small" type="primary">
          {{ t('sendSMS') }}
        </van-button>
      </template>
    </van-field>
  </demo-block>
</template>

<script>
import DemoBlock from ".././DemoBlock";
import { getLangFromUserAgent } from "../../utils/util";
export default {
  name: "InsertButton",
  components: {
    DemoBlock,
  },
  props: {
    msg: String,
  },
  data() {
    return {
      sms: "",
      i18n:  {
  'zh-CN': {
    sms: '短信验证码',
    sendSMS: '发送验证码',
    insertButton: '插入按钮',
    smsPlaceholder: '请输入短信验证码',
  },
  'en-US': {
    sms: 'SMS',
    sendSMS: 'Send SMS',
    insertButton: 'Insert Button',
    smsPlaceholder: 'SMS',
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
