<template>
  <div class="demo-number-keyboard">
    <van-cell is-link  @touchstart.native.stop="keyboard = 'default'">
      {{ t("button1") }}
    </van-cell>
    <van-cell is-link @touchstart.native.stop="keyboard = 'custom'">
      {{ t("button2") }}
    </van-cell>
    <van-cell is-link @touchstart.native.stop="keyboard = 'extraKey'">
      {{ t("button3") }}
    </van-cell>
    <van-cell is-link @touchstart.native.stop="keyboard = 'title'">
      {{ t("button4") }}
    </van-cell>
    <van-cell is-link @touchstart.native.stop="keyboard = 'multiExtraKey'">
      {{ t("button5") }}
    </van-cell>
    <van-cell is-link @touchstart.native.stop="keyboard = 'randomKeyOrder'">
      {{ t("button6") }}
    </van-cell>
    <van-field
      v-model="value"
      readonly
      clickable
      :label="t('bindValue')"
      :placeholder="t('clickToInput')"
      @touchstart.native.stop="keyboard = 'bindValue'"
    />

    <van-number-keyboard
      :show="keyboard === 'default'"
      @blur="keyboard = ''"
      @input="onInput"
      @delete="onDelete"
    />

    <van-number-keyboard
      :show="keyboard === 'custom'"
      :close-button-text="t('close')"
      theme="custom"
      extra-key="."
      @blur="keyboard = ''"
      @input="onInput"
      @delete="onDelete"
    />

    <van-number-keyboard
      :show="keyboard === 'extraKey'"
      :close-button-text="t('close')"
      extra-key="X"
      @blur="keyboard = ''"
      @input="onInput"
      @delete="onDelete"
    />

    <van-number-keyboard
      :show="keyboard === 'title'"
      :close-button-text="t('close')"
      :title="t('title')"
      extra-key="."
      @blur="keyboard = ''"
      @input="onInput"
      @delete="onDelete"
    />

    <van-number-keyboard
      :show="keyboard === 'multiExtraKey'"
      :close-button-text="t('close')"
      theme="custom"
      :extra-key="['00', '.']"
      @blur="keyboard = ''"
      @input="onInput"
      @delete="onDelete"
    />

    <van-number-keyboard
      :show="keyboard === 'randomKeyOrder'"
      random-key-order
      @blur="keyboard = ''"
      @input="onInput"
      @delete="onDelete"
    />

    <van-number-keyboard
      v-model="value"
      :show="keyboard === 'bindValue'"
      maxlength="6"
      @blur="keyboard = ''"
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
import MdNumberKeyboardEn from "../../../docs/number-keyboard/README.md";
import MdNumberKeyboard from "../../../docs/zh/number-keyboard/README.md";
import DemoBlock from "../DemoBlock";
import { Toast } from 'vant';
import { getLangFromUserAgent } from "../../utils/util";
export default {
  name: "NumberKeyboard",
  components: {
    MdNumberKeyboardEn,
    MdNumberKeyboard,
    DemoBlock
  },
  props: {
    msg: String,
  },
  data() {
    return {
      value: '',
      show: true,
      keyboard: 'default',
      mdComponent: "MdNumberKeyboardEn",
      checked: false,
      i18n: {
        "zh-CN": {
          close: "完成",
          input: "输入",
          title: "键盘标题",
          button1: "弹出默认键盘",
          button2: "弹出带右侧栏的键盘",
          button3: "弹出身份证号键盘",
          button4: "弹出带标题的键盘",
          button5: "弹出配置多个按键的键盘",
          button6: "弹出配置随机数字的键盘",
          bindValue: "双向绑定",
          clickToInput: "点此输入",
          extraKey: "左下角按键内容",
          multiExtraKey: "配置多个按键",
          randomKeyOrder: "随机数字键盘",
          showCode: "显示源码",
        },
        "en-US": {
          close: "Close",
          input: "Input",
          title: "Keyboard Title",
          button1: "Show Default Keyboard",
          button2: "Show Keyboard With Sidebar",
          button3: "Show IdNumber Keyboard",
          button4: "Show Keyboard With Title",
          button5: "Show Keyboard With Multiple ExtraKey",
          button6: "Show Keyboard With Random Key Order",
          bindValue: "Bind Value",
          clickToInput: "Click To Input",
          extraKey: "IdNumber Keyboard",
          multiExtraKey: "Multiple ExtraKey",
          randomKeyOrder: "Random Key Order",
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
        this.mdComponent = "MdNumberKeyboardEn";
        return this.i18n["en-US"][name];
      } else {
        this.mdComponent = "MdNumberKeyboard";
        return this.i18n["zh-CN"][name];
      }
    },
    onInput(value){
      this.$toast(`${this.t('input')}: ${value}`);
    },
    onDelete() {
       Toast(this.t('delete'));
    }
  },
};
</script>

<style lang="less" scoped>
@import "../../assets/vant.less";
@import "./index.less";
.markdown-body {
  padding: 0px 10px 0px 10px;
}
.demo-number-keyboard {
  padding-bottom: 300px;

  .van-button {
    margin-left: @padding-md;
  }

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