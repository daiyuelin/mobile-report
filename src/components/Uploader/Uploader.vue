<!--
 * @Description: 
 * @Version: 1.0
 * @Author: Edison Chen
 * @Date: 2021-05-19 09:13:17
 * @LastEditors: Dai YueLin
 * @LastEditTime: 2022-03-24 14:51:27
 * @FilePath: \JoyChat_Compinent\src\components\Uploader\Uploader.vue
 * Copyright (C) 2021 Edison Chen. All rights reserved.
-->
<template>
  <div class="demo-uploader">
    <demo-block :title="t('basicUsage')">
      <van-uploader :after-read="afterRead" multiple/>
    </demo-block>

    <demo-block :title="t('preview')">
      <van-uploader v-model="fileList1" multiple />
    </demo-block>

    <demo-block :title="t('status')">
      <van-uploader v-model="fileList2" :after-read="afterReadFailed" />
    </demo-block>

    <demo-block :title="t('maxCount')">
      <van-uploader v-model="fileList3" multiple :max-count="2" />
    </demo-block>

    <demo-block :title="t('maxSize')">
      <van-uploader
        v-model="fileList4"
        multiple
        :max-size="500 * 1024"
        @oversize="onOversize"
      />
    </demo-block>

    <demo-block :title="t('customUpload')">
      <van-uploader>
        <van-button type="primary" icon="plus">
          {{ t("upload") }}
        </van-button>
      </van-uploader>
    </demo-block>

    <demo-block :title="t('previewCover')">
      <van-uploader v-model="fileList5">
        <template #preview-cover="{ file }">
          <div class="preview-cover van-ellipsis">{{ file.name }}</div>
        </template>
      </van-uploader>
    </demo-block>

    <demo-block :title="t('beforeRead')">
      <van-uploader v-model="fileList6" :before-read="beforeRead" />
    </demo-block>

    <demo-block :title="t('disabled')">
      <van-uploader disabled />
    </demo-block>

    <demo-block :title="t('customPreviewImage')">
      <van-uploader
        v-model="fileList7"
        multiple
        accept="*"
        :deletable="false"
      />
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
import MdUploadEn from "../../../docs/uploader/README.md";
import MdUpload from "../../../docs/zh/uploader/README.md";
import DemoBlock from "../DemoBlock";
import { getLangFromUserAgent } from "../../utils/util";
import Toast from "vant";

export default {
  name: "Upload",
  components: { 
    DemoBlock,
    MdUploadEn,
    MdUpload
   },
  data() {
    let i18n = {
      "zh-CN": {
        status: "上传状态",
        failed: "上传失败",
        upload: "上传文件",
        preview: "文件预览",
        maxSize: "限制上传大小",
        disabled: "禁用文件上传",
        maxCount: "限制上传数量",
        uploading: "上传中...",
        imageName: "图片名称",
        beforeRead: "上传前置处理",
        overSizeTip: "文件大小不能超过 500kb",
        invalidType: "请上传 jpg 格式图片",
        customUpload: "自定义上传样式",
        previewCover: "自定义预览样式",
        customPreviewImage: "自定义单个图片预览",
        deleteMessage: "删除前置处理",
        basicUsage: "基础用法",
        showCode: "显示源码",
      },
      "en-US": {
        status: "Upload Status",
        failed: "Failed",
        upload: "Upload File",
        preview: "Preview File",
        maxSize: "Max Size",
        disabled: "Disable Uploader",
        maxCount: "Max Count",
        uploading: "Uploading...",
        imageName: "Image Name",
        beforeRead: "Before Read",
        overSizeTip: "File size cannot exceed 500kb",
        invalidType: "Please upload an image in jpg format",
        customUpload: "Custom Upload Area",
        previewCover: "Preview Cover",
        customPreviewImage: "Custom single prevew image",
        deleteMessage: "Before Delete",
        basicUsage: "Basic Usage",
        showCode: "Show Code",
      },
    };
    function lt(name) {
      // 根据手机语言环境对应显示中文还是英文
      let _lang = getLangFromUserAgent();
      if (_lang === "en") {
        if (i18n) {
          return i18n["en-US"][name];
        }
      } else {
        if (i18n) {
          return i18n["zh-CN"][name];
        }
      }
    }
    return {
      mdComponent: "MdUploadEn",
      checked: false,
      i18n: i18n,
      fileList1: [
        { url: "https://img.yzcdn.cn/vant/leaf.jpg" },
        { url: "https://img.yzcdn.cn/vant/tree.jpg" },
      ],
      fileList2: [
        {
          url: "https://img01.yzcdn.cn/vant/leaf.jpg",
          status: "uploading",
          message: lt("uploading"),
        },
        {
          url: "https://img01.yzcdn.cn/vant/tree.jpg",
          status: "failed",
          message: lt("failed"),
        },
      ],
      fileList3: [{ url: "https://img.yzcdn.cn/vant/sand.jpg" }],
      fileList4: [{ url: "https://img.yzcdn.cn/vant/sand.jpg" }],
      fileList5: [
        {
          url: "https://img.yzcdn.cn/vant/leaf.jpg",
          file: {
            name: lt("imageName"),
          },
        },
      ],
      fileList6: [],
      fileList7: [
        { url: "https://img.yzcdn.cn/vant/leaf.jpg" },
        {
          url: "https://img.yzcdn.cn/vant/sand.jpg",
          deletable: true,
          beforeDelete: () => {
            this.$toast(this.t("deleteMessage"));
          },
        },
        {
          url: "https://img.yzcdn.cn/vant/tree.jpg",
          deletable: true,
          imageFit: "contain",
          previewSize: 120,
        },
      ],
    };
  },
  methods: {
    t(name) {
      // 根据手机语言环境对应显示中文还是英文
      let _lang = getLangFromUserAgent();
      if (_lang === "en") {
        if (this.i18n) {
          this.mdComponent = "MdUploadEn";
          return this.i18n["en-US"][name];
        }
      } else {
        if (this.i18n) {
          this.mdComponent = "MdUpload";
          return this.i18n["zh-CN"][name];
        }
      }
    },
    afterRead(file, detail) {
      console.log(file, detail);
    },
    afterReadFailed(file) {
      file.status = "uploading";
      file.message = this.t("uploading");

      setTimeout(() => {
        file.status = "failed";
        file.message = this.t("failed");
      }, 1000);
    },
    onOversize(file) {
      console.log(file);
      Toast("文件超过限制大小");
    },
    beforeRead(file) {
      if (file.type !== "image/jpeg") {
        Toast(this.t("invalidType"));
        return false;
      }
      return true;
    },
  },
};
</script>

<style lang="less" scoped>
@import "../../assets/vant.less";
@import "./index.less";
.markdown-body {
  padding: 0px 10px 0px 10px;
}
.demo-uploader {
  background-color: @white;
  text-align: left;


  /deep/.van-doc-demo-block {
    padding: 0 @padding-md !important;
  }

  /deep/.van-doc-demo-block__title {
    padding-left: 0 !important;
  }


  /deep/.van-switch{
    margin-left: 16px;
  }

  &-row {
    margin-bottom: @padding-sm !important;
  }

  
  .van-uploader {
    margin-left: @padding-md;
  }

  .preview-cover {
    position: absolute;
    bottom: 0;
    box-sizing: border-box;
    width: 100%;
    padding: 4px;
    color: #fff;
    font-size: 12px;
    text-align: center;
    background: rgba(0, 0, 0, 0.3);
  }
}
</style>