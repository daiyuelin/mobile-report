<template>
  <div class="demo-tab">
    <demo-block :title="t('basicUsage')">
      <van-tabs v-model="active">
        <van-tab :title="t('tab') + index" v-for="index in tabs" :key="index">
          {{ t("content") }} {{ index }}
        </van-tab>
      </van-tabs>
    </demo-block>

    <demo-block :title="t('matchByName')">
      <van-tabs v-model="activeName">
        <van-tab name="a" :title="t('tab') + 1"> {{ t("content") }} 1 </van-tab>
        <van-tab name="b" :title="t('tab') + 2"> {{ t("content") }} 2 </van-tab>
        <van-tab name="c" :title="t('tab') + 3"> {{ t("content") }} 3 </van-tab>
      </van-tabs>
    </demo-block>

    <demo-block :title="t('title2')">
      <van-tabs>
        <van-tab v-for="index in 8" :title="t('tab') + index" :key="index">
          {{ t("content") }} {{ index }}
        </van-tab>
      </van-tabs>
    </demo-block>

    <demo-block :title="t('title3')">
      <van-tabs @disabled="onClickDisabled">
        <van-tab
          v-for="index in 3"
          :title="t('tab') + index"
          :disabled="index === 2"
          :key="index"
        >
          {{ t("content") }} {{ index }}
        </van-tab>
      </van-tabs>
    </demo-block>

    <demo-block :title="t('title4')">
      <van-tabs type="card">
        <van-tab v-for="index in 3" :title="t('tab') + index" :key="index">
          {{ t("content") }} {{ index }}
        </van-tab>
      </van-tabs>
    </demo-block>

    <demo-block :title="t('title5')">
      <van-tabs @click="onClick">
        <van-tab v-for="index in 2" :title="t('tab') + index" :key="index">
          {{ t("content") }} {{ index }}
        </van-tab>
      </van-tabs>
    </demo-block>

    <demo-block :title="t('title6')">
      <van-tabs :active="active" sticky>
        <van-tab :title="t('tab') + index" v-for="index in tabs" :key="index">
          {{ t("content") }} {{ index }}
        </van-tab>
      </van-tabs>
    </demo-block>

    <demo-block :title="t('title7')">
      <van-tabs :active="active">
        <van-tab v-for="index in 2" :key="index">
          <template #title> <van-icon name="more-o" />{{ t("tab") }} </template>
          {{ t("content") }} {{ index }}
        </van-tab>
      </van-tabs>
    </demo-block>

    <demo-block :title="t('title8')">
      <van-tabs animated>
        <van-tab :title="t('tab') + index" v-for="index in tabs" :key="index">
          {{ t("content") }} {{ index }}
        </van-tab>
      </van-tabs>
    </demo-block>

    <demo-block :title="t('title9')">
      <van-tabs :active="active" swipeable>
        <van-tab :title="t('tab') + index" v-for="index in tabs" :key="index">
          {{ t("content") }} {{ index }}
        </van-tab>
      </van-tabs>
    </demo-block>

    <demo-block :title="t('title10')">
      <van-tabs scrollspy sticky>
        <van-tab :title="t('tab') + index" v-for="index in 8" :key="index">
          {{ t("content") }} {{ index }}
        </van-tab>
      </van-tabs>
    </demo-block>

    <demo-block :title="t('beforeChange')">
      <van-tabs :before-change="beforeChange">
        <van-tab :title="t('tab') + index" v-for="index in 4" :key="index">
          {{ t("content") }} {{ index }}
        </van-tab>
      </van-tabs>
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
import MdEn from "../../../docs/tab/README.md";
import Md from "../../../docs/zh/tab/README.md";
import { getLangFromUserAgent } from "../../utils/util";
export default {
  name: "Tab",
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
      active: 2,
      activeName: "b",
      tabs: [1, 2, 3, 4],
      i18n: {
        "zh-CN": {
          showCode: "显示源码",
          tab: "标签 ",
          title2: "标签栏滚动",
          title3: "禁用标签",
          title4: "样式风格",
          title5: "点击事件",
          title6: "粘性布局",
          title7: "自定义标签",
          title8: "切换动画",
          title9: "滑动切换",
          title10: "滚动导航",
          disabled: " 已被禁用",
          matchByName: "通过名称匹配",
          beforeChange: "异步切换",
          basicUsage: "基础用法",
        },
        "en-US": {
          showCode: "Show Code",
          tab: "Tab ",
          content: "content of tab",
          title2: "Swipe Tabs",
          title3: "Disabled Tab",
          title4: "Card Style",
          title5: "Click Event",
          title6: "Sticky",
          title7: "Custom Tab",
          title8: "Switch Animation",
          title9: "Swipeable",
          title10: "Scrollspy",
          disabled: " is disabled",
          matchByName: "Match By Name",
          beforeChange: "Before Change",
          basicUsage: "Basic Usage",
        },
      },
    };
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
    onClick(index, title) {
      this.$toast(title);
    },

    onClickDisabled(index, title) {
      this.$toast(title + this.t("disabled"));
    },

    beforeChange(name) {
      if (name === 1) {
        return false;
      }
      return new Promise((resolve) => {
        resolve(name !== 3);
      });
    },
  },
};
</script>


<style lang="less" scoped>
@import "../../assets/vant.less";
@import "./index.less";

.demo-tab {
  text-align: left;
  margin-bottom: 80vh;

  .van-tab .van-icon {
    margin-right: 5px;
    vertical-align: -2px;
  }

  .van-tab__pane {
    padding: 24px 20px;
    background-color: @white;
  }

  .van-tabs--card .van-tab__pane {
    background-color: transparent;
  }

  .markdown-body {
    background: @white;
    padding: 0px 10px 0px 10px;
  }
  /deep/.van-switch {
    margin-left: 16px;
  }
}
</style>
