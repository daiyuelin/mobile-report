<template>
  <div class="demo-icon">
    <van-tabs v-model="tab" sticky>
      <van-tab :title="t('demo')">
        <demo-block :title="t('basicUsage')">
          <van-row>
            <van-col span="6" @click="copy(demoIcon)">
              <van-icon :name="demoIcon" />
            </van-col>
            <van-col span="6" @click="copy(demoImage)">
              <van-icon :name="demoImage" />
            </van-col>
          </van-row>
        </demo-block>

        <demo-block :title="t('badge')">
          <van-row>
            <van-col span="6" @click="copy(demoIcon, { dot: true })">
              <van-icon :name="demoIcon" dot />
            </van-col>
            <van-col span="6" @click="copy(demoIcon, { badge: '9' })">
              <van-icon :name="demoIcon" badge="9" />
            </van-col>
            <van-col span="6" @click="copy(demoIcon, { badge: '99+' })">
              <van-icon :name="demoIcon" badge="99+" />
            </van-col>
          </van-row>
        </demo-block>

        <demo-block :title="t('color')">
          <van-row>
            <van-col span="6" @click="copy(demoIcon, { color: '#444444' })">
              <van-icon name="cart-o" color="#444444" />
            </van-col>
            <van-col span="6" @click="copy(demoIcon, { color: RED })">
              <van-icon name="fire-o" :color="RED" />
            </van-col>
          </van-row>
        </demo-block>

        <demo-block :title="t('size')">
          <van-row>
            <van-col span="6" @click="copy(demoIcon, { size: '40' })">
              <van-icon :name="demoIcon" size="40" />
            </van-col>
            <van-col span="6" @click="copy(demoIcon, { size: '3rem' })">
              <van-icon :name="demoIcon" size="3rem" />
            </van-col>
          </van-row>
        </demo-block>
      </van-tab>

      <van-tab :title="t('basic')">
        <van-row>
          <van-col
            v-for="icon in icons.basic"
            :key="icon"
            span="6"
            @click="copy(icon)"
          >
            <van-icon :name="icon" />
            <span>{{ icon }}</span>
          </van-col>
        </van-row>
      </van-tab>

      <van-tab :title="t('outline')">
        <van-row>
          <van-col
            v-for="icon in icons.outline"
            :key="icon"
            span="6"
            @click="copy(icon)"
          >
            <van-icon :name="icon" />
            <span>{{ icon }}</span>
          </van-col>
        </van-row>
      </van-tab>

      <van-tab :title="t('filled')">
        <van-row>
          <van-col
            v-for="icon in icons.filled"
            :key="icon"
            span="6"
            @click="copy(icon)"
          >
            <van-icon :name="icon" />
            <span>{{ icon }}</span>
          </van-col>
        </van-row>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import DemoBlock from "../DemoBlock";
import icons from './config';
import { getLangFromUserAgent } from "../../utils/util";
export default {
  name: "Icon",
  components: { DemoBlock },
  data() {
    return {
      tab: 0,
      icons:icons,
      RED : '#92A2BD',
      demoIcon: 'chat-o',
      demoImage: 'https://b.yzcdn.cn/vant/icon-demo-1126.png',
      i18n: {
        "zh-CN": {
          title: "图标列表",
          badge: "徽标提示",
          basic: "基础图标",
          copied: "复制成功",
          outline: "线框风格",
          filled: "实底风格",
          demo: "用法示例",
          color: "图标颜色",
          size: "图标大小",
          basicUsage: "基础用法"
        },
        "en-US": {
          title: "Icon List",
          badge: "Show Badge",
          basic: "Basic",
          copied: "Copied",
          outline: "Outline",
          filled: "Filled",
          demo: "Demo",
          color: "Icon Color",
          size: "Icon Size",
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
    copyToClipboard(str) {
      const el = document.createElement("textarea");
      el.value = str;
      el.setAttribute("readonly", "");
      el.style.position = "absolute";
      el.style.left = "-9999px";
      document.body.appendChild(el);

      const selected =
        document.getSelection().rangeCount > 0
          ? document.getSelection().getRangeAt(0)
          : false;

      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);

      if (selected) {
        document.getSelection().removeAllRanges();
        document.getSelection().addRange(selected);
      }
    },
    copy(icon, option = {}){
      let tag = `<van-icon name="${icon}"`;
      if ('dot' in option) {
        tag = `${tag} ${option.dot ? 'dot' : ''}`;
      }
      if ('badge' in option) {
        tag = `${tag} badge="${option.badge}"`;
      }
      if ('color' in option) {
        tag = `${tag} color="${option.color}"`;
      }
      if ('size' in option) {
        tag = `${tag} size="${option.size}"`;
      }
      tag = `${tag} />`;
      this.copyToClipboard(tag);

      this.$notify({
        type: 'success',
        duration: 1500,
        className: 'demo-icon-notify',
        message: `${this.t('copied')}：${tag}`,
      });
    }
  },
};
</script>

<style lang="less">
@import "../../assets/vant.less";

.demo-icon {
  font-size: 0;
  text-align: left;

  &-list {
    box-sizing: border-box;
    min-height: calc(100vh - 65px);
    padding-top: 10px;
  }

  &-notify {
    font-size: 13px;
  }

  .van-col {
    display: inline-block;
    float: none;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;

    span {
      display: block;
      height: 36px;
      margin: -4px 0 4px;
      padding: 0 5px;
      color: @gray-7;
      font-size: 12px;
      line-height: 18px;
    }

    &:active {
      background-color: @active-color;
    }
  }

  .van-icon {
    margin: 16px 0 16px;
    color: @text-color;
    font-size: 32px;
  }

  .van-tab__pane {
    width: auto;
    margin: 20px;
    background-color: #fff;
    border-radius: 12px;
  }
}
</style>
