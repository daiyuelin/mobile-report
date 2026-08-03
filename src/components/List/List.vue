<!--
 * @Description: 
 * @Version: 1.0
 * @Author: Edison Chen
 * @Date: 2021-05-25 13:05:03
 * @LastEditors: Dai YueLin
 * @LastEditTime: 2021-06-17 15:46:28
 * @FilePath: \JoyChat_Compinent\src\components\List\List.vue
 * Copyright (C) 2021 Edison Chen. All rights reserved.
-->
<template>
  <div>
    <van-tabs class="demo-list">
      <van-tab :title="t('basicUsage')">
        <van-list
          v-model="loading1"
          :finished="finished1"
          :finished-text="t('finishedText')"
          @load="onLoad1"
        >
          <van-cell v-for="item in list1" :key="item" :title="item" />
        </van-list>
      </van-tab>

      <van-tab :title="t('errorInfo')">
        <van-list
          v-model="loading2"
          :error.sync="error2"
          :finished="finished2"
          :finished-text="t('finishedText')"
          :error-text="t('errorText')"
          @load="onLoad2"
        >
          <van-cell v-for="item in list2" :key="item" :title="item" />
        </van-list>
      </van-tab>

      <van-tab :title="t('pullRefresh')">
        <van-pull-refresh v-model="refreshing3" @refresh="onRefresh3">
          <van-list
            v-model="loading3"
            :finished="finished3"
            :finished-text="t('finishedText')"
            @load="onLoad3"
          >
            <van-cell v-for="item in list3" :key="item" :title="item" />
          </van-list>
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
import MdEn from "../../../docs/list/README.md";
import Md from "../../../docs/zh/list/README.md";
import { getLangFromUserAgent } from "../../utils/util";
export default {
  name: "List",
  components: {
    MdEn,
    Md,
  },
  data() {
    return {
      mdComponent: "Md",
      checked: false,
      i18n: {
        "zh-CN": {
          showCode: "显示源码",
          errorInfo: "错误提示",
          errorText: "请求失败，点击重新加载",
          pullRefresh: "下拉刷新",
          finishedText: "没有更多了",
          basicUsage: "基础用法",
        },
        "en-US": {
          showCode: "Show Code",
          errorInfo: "Error Info",
          errorText: "Request failed. Click to reload",
          pullRefresh: "PullRefresh",
          finishedText: "Finished",
          basicUsage: "Basic Usage",
        },
      },
      list1: [],
      loading1: false,
      finished1: false,
      list2: [],
      loading2: false,
      finished2: false,
      error2: false,
      list3: [],
      loading3: false,
      finished3: false,
      refreshing3: false,
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
    onLoad1() {
      this.loading1 = true;
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list1.push(this.list1.length + 1);
        }

        // 加载状态结束
        this.loading1 = false;

        // 数据全部加载完成
        if (this.list1.length >= 40) {
          this.finished1 = true;
        }
      }, 1000);
    },
    onLoad2() {
      this.loading2 = true;
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list2.push(this.list2.length + 1);
        }
        this.loading2 = false;
        if (this.list2.length === 10 && !this.error2) {
          this.error2 = true;
        }
        if (this.list2.length >= 40) {
          this.finished2 = true;
        }
      }, 1000);
    },
    onLoad3() {
      this.loading3 = true;
      setTimeout(() => {
        if (this.refreshing3) {
          this.list3 = [];
          this.refreshing3 = false;
        }
        for (let i = 0; i < 10; i++) {
          this.list3.push(this.list3.length + 1);
        }
        this.loading3 = false;
        if (this.list3.length >= 40) {
          this.finished3 = true;
        }
      }, 1000);
    },
    onRefresh3() {
      // 清空列表数据
      this.finished3 = false;

      // 重新加载数据
      // 将 loading 设置为 true，表示处于加载状态
      this.loading3 = true;
      this.onLoad3();
    },
  },
  mounted() {
    this.onLoad1();
  },
};
</script>

<style lang="less" scoped>
@import "../../assets/vant.less";
.markdown-body {
  background: @white;
  padding: 0px 10px 0px 10px;
}
.demo-list {
  .van-cell {
    text-align: center;
  }

  .page-desc {
    margin: 0;
    padding: 5px 0;
    color: @gray-7;
    font-size: 14px;
    text-align: center;

    &--text {
      margin: 0;
    }

    &--option {
      margin: 12px;
    }
  }

  .van-checkbox__label {
    color: @gray-7;
  }
}
/deep/.van-switch {
    margin-left: 16px;
  }
</style>
