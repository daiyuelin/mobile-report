<!--
 * @Description: 
 * @Autor: Dai YueLin
 * @Date: 2021-05-24 13:22:11
 * @LastEditors: Dai YueLin
 * @LastEditTime: 2022-04-01 12:38:47
-->
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
    <div class="demo-form">
      <van-radio-group v-model="radio">
        <div v-for="(item, index) in list" :key="index">
          <div class="row-item">
            <van-icon name="edit" size="18" @click="edit(item.id)" />
            <div>{{ item.name }}</div>
            <van-radio
              :name="item.id"
              checked-color="#ee0a24"
              icon-size="18px"
            ></van-radio>
          </div>
          <van-divider />
        </div>
        <div class="bottom">
          <van-button
            round
            block
            type="primary"
            style="margin: 5px 0"
            color="#1989fa"
            @click="add"
          >
            {{ t("data") }}
          </van-button>
          <van-button
            round
            block
            type="primary"
            style="margin: 5px 0"
            color="#ee0a24"
            @click="chooseDelete"
          >
            {{ t("data1") }}
          </van-button>
        </div>
      </van-radio-group>

      <!-- <demo-block :title="t('showCode')"
    ><van-switch v-model="checked"
  /></demo-block> -->
      <!-- <div class="markdown-body" v-if="checked">
    <section :is="mdComponent"></section>
  </div> -->
    </div>
  </div>
</template>

<script>
import "highlight.js/styles/github.css";
import "github-markdown-css";
import { getLangFromUserAgent } from "../../utils/util";
import { queryForm, deleteForm } from "../../api/user";

export default {
  name: "FormList",
  components: {},
  data() {
    return {
      loading: false,
      radio: "",
      list: [],
      mdComponent: "MdFormEn",
      checked: false,
      i18n: {
        "zh-CN": {
          showCode: "显示源码",
          data: "新建表单",
          data1: "删除表单",
        },
        "en-US": {
          showCode: "Show Code",
          data: "Create",
          data1: "Delete",
        },
      },
    };
  },
  mounted() {
    this.loading = true
    this.queryForm();
  },
  methods: {
    //初始化查询
    queryForm() {
      queryForm().then((res) => {
        this.list = res.data;
        this.loading = false 
      });
    },
    t(name) {
      // 根据手机语言环境对应显示中文还是英文
      let _lang = getLangFromUserAgent();
      if (_lang === "en") {
        this.mdComponent = "MdFormEn";
        return this.i18n["en-US"][name];
      } else {
        this.mdComponent = "MdForm";
        return this.i18n["zh-CN"][name];
      }
    },
    //新建
    add() {
      this.$router.push({
        path: "/formNew",
      });
    },
    //编辑
    edit(id) {
      this.$router.push({
        path: "/formNew",
        query: { id: id },
      });
    },
    chooseDelete() {
      if (this.radio === "") {
        this.$toast({ message: "请选择删除项" });
      } else {
        for (var i = 0; i < this.list.length; i++) {
          if (this.list[i].id == this.radio) {
            this.list.splice(i, 1);
            deleteForm(this.radio).then(() => {
              this.$toast("删除成功！");
              this.queryForm();
            });
          }
        }
      }
    },
  },
};
</script>

<style lang="less" scoped>
.markdown-body {
  padding: 0px 10px 0px 10px;
}
.demo-form {
  margin-top: 15px;
  text-align: left;
  padding-bottom: 20px;
  .van-icon.van-icon-edit {
    margin-left: 10px;
  }
  .van-radio {
    margin-right: 10px;
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
  .row-item {
    display: flex;
    justify-content: space-between;
  }
  .bottom {
    position: fixed;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 999;
    padding: 0 16px;
    padding-bottom: constant(safe-area-inset-bottom);
    padding-bottom: env(safe-area-inset-bottom);
    background-color: #fff;
  }
}
</style>
