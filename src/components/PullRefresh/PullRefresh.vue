<template>
  <div class="demo-pull-refresh">
    <van-tabs>
      <van-tab :title="t('basicUsage')">
        <van-pull-refresh
          v-model="loading"
          @refresh="onRefresh(true)"
          :pulling-text="t('pullingText')"
          :loosing-text="t('loosingText')"
          :loading-text="t('loadingtext')"
        >
          <p>{{ tips }}</p>
        </van-pull-refresh>
      </van-tab>

      <van-tab :title="t('successTip')">
        <van-pull-refresh
          v-model="loading"
          :success-text="t('success')"
          :pulling-text="t('pullingText')"
          :loosing-text="t('loosingText')"
          :loading-text="t('loadingtext')"
          @refresh="onRefresh(false)"
        >
          <p>{{ tips }}</p>
        </van-pull-refresh>
      </van-tab>

      <van-tab :title="t('customTips')">
        <van-pull-refresh
          v-model="loading"
          head-height="80"
          @refresh="onRefresh(true)"
        >
          <template #pulling="{ distance }">
            <img
              class="doge"
              src="https://b.yzcdn.cn/vant/doge.png"
              :style="{ transform: `scale(${distance / 80})` }"
            />
          </template>
          <template #loosing>
            <img src="https://b.yzcdn.cn/vant/doge.png" class="doge" />
          </template>
          <template #loading>
            <img src="https://b.yzcdn.cn/vant/doge-fire.jpg" class="doge" />
          </template>
          <p>{{ tips }}</p>
        </van-pull-refresh>
      </van-tab>
    </van-tabs>

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
import MdEn from "../../../docs/pull-refresh/README.md";
import Md from "../../../docs/zh/pull-refresh/README.md";
import { getLangFromUserAgent } from "../../utils/util";
export default {
  name: "PullRefresh",
  components: {
    MdEn,
    Md,
  },
  props: {
    msg: String,
  },
  data() {
    return {
      mdComponent: "Md",
      checked: false,
      count: 0,
      loading: false,
      i18n: {
        "zh-CN": {
          showCode: "显示源码",
          pullingText: "下拉即可刷新...",
          loosingText: "释放即可刷新...",
          loadingtext: "加载中...",
          try: "下拉试试",
          text: "刷新次数",
          success: "刷新成功",
          successTip: "成功提示",
          customTips: "自定义提示",
          basicUsage: "基础用法",
        },
        "en-US": {
          showCode: "Show Code",
          try: "Try it down",
          text: "Refresh Count",
          success: "Refresh success",
          successTip: "Success Tip",
          customTips: "Custom Tips",
          basicUsage: "Basic Usage",
          pullingText: "Pull to refresh...",
          loosingText: "Loose to refresh...",
          loadingtext: "Loading...",
        },
      },
    };
  },
  computed: {
    tips() {
      if (this.count) {
        return `${this.t("text")}: ${this.count}`;
      }
      return this.t("try");
    },
  },
  mounted() {
    this.preloadImage();
  },
  methods: {
    t(name) {
      // 根据手机语言环境对应显示中文还是英文
      let _lang = getLangFromUserAgent();
      if (_lang === "en") {
        this.mdComponent = "MdEn";
        return this.i18n["en-US"][name];
      } else {
        this.mdComponent = "Md";
        return this.i18n["zh-CN"][name];
      }
    },
    onRefresh(showToast) {
      setTimeout(() => {
        if (showToast) {
          this.$toast(this.t("success"));
        }
        this.loading = false;
        this.count++;
      }, 1000);
    },
    preloadImage() {
      const doge = new Image();
      const dogeFire = new Image();

      doge.src = "https://b.yzcdn.cn/vant/doge.png";
      dogeFire.src = "https://b.yzcdn.cn/vant/doge-fire.jpg";
    },
  },
};
</script>

<style lang="less" scoped>
@import "../../assets/vant.less";
@import "./index.less";
.markdown-body {
  background: @white;
  padding: 0px 10px 0px 10px;
}
.demo-pull-refresh {
  text-align: left;
  background-color: @white;

  .van-pull-refresh {
    height: calc(100vh - 150px);
  }

  .doge {
    width: 140px;
    height: 72px;
    margin-top: 8px;
    border-radius: 4px;
  }

  p {
    margin: 0;
    padding: @padding-md 0 0 @padding-md;
  }

  /deep/.van-switch {
    margin-left: 16px;
  }
}
</style>