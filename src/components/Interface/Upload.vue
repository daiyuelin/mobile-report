<!--
 * @Description: 
 * @Version: 1.0
 * @Author: Edison Chen
 * @Date: 2022-03-25 09:13:17
 * @LastEditors: Dai YueLin
 * @LastEditTime: 2025-07-28 18:31:07
 * @FilePath: \JoyChat_Compinent\src\components\Uploader\Uploader.vue
 * Copyright (C) 2021 Edison Chen. All rights reserved.
-->
<template>
  <div class="demo-uploader">
    <demo-block :title="t('basicUsage')">
      <van-uploader v-model="fileList1" :after-read="afterRead1" max-count="1" />
    </demo-block>


    <demo-block :title="t('customUpload')">
      <van-uploader v-model="fileList2" accept=".doc, .docx, .xml, .xlsx, .pdf,video/*,image/*" :after-read="afterRead2" max-count="1" >
        <van-button type="primary" icon="plus">
          {{ t("Upload") }}
        </van-button>
      </van-uploader>
    </demo-block>
    <!-- <demo-block :title="t('showCode')"
      ><van-switch v-model="checked"
    /></demo-block>
    <div class="markdown-body" v-if="checked">
      <section :is="mdComponent"></section>
    </div>-->
  </div> 
</template>

<script>
import "highlight.js/styles/github.css";
import "github-markdown-css";

import DemoBlock from "../DemoBlock";
import { getLangFromUserAgent } from "../../utils/util";
import { uploadImageBase64, upload } from "../../api/user";

export default {
  name: "Upload",
  components: { 
    DemoBlock,
   },
  data() {
    let i18n = {
      "zh-CN": {
        customUpload: "文件流上传",
        basicUsage: "Base64 图片上传",
        Upload:"File 上传"
      },
      "en-US": {
        customUpload: "File stream upload",
        basicUsage: "Base64 image Upload",
        Upload:"File upload"
      },
    };
    // function lt(name) {
    //   // 根据手机语言环境对应显示中文还是英文
    //   let _lang = getLangFromUserAgent();
    //   if (_lang === "en") {
    //     if (i18n) {
    //       return i18n["en-US"][name];
    //     }
    //   } else {
    //     if (i18n) {
    //       return i18n["zh-CN"][name];
    //     }
    //   }
    // }
    return {
      mdComponent: "MdUploadEn",
      checked: false,
      i18n: i18n,
      fileList1: [
      ],
      fileList2: [
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
    afterRead1(file, detail) {
      let data = {}
      data.fileName =  file.file.name
      data.content = file.content
     uploadImageBase64(data).then(()=>{
       this.$toast("上传成功！");
     })
      console.log(file, detail);
    },
    afterRead2() {
        let formData = new FormData();
        this.fileList2.map((item, index) => {
          formData.append("files", this.fileList2[index].file);
        });
        upload(formData).then(()=>{
          this.$toast("上传成功！");
        })
    },
  },
};
</script>

<style lang="less" scoped>
@import "../../assets/vant.less";
@import "../Uploader/index.less";
.markdown-body {
  padding: 0px 10px 0px 10px;
}
.demo-uploader {
  background-color: @white;
  text-align: left;
  height: 100vh;


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