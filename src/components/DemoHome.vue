<!--
 * @Description: 
 * @Autor: Dai YueLin
 * @Date: 2021-05-17 13:54:21
 * @LastEditors: Dai YueLin
 * @LastEditTime: 2022-03-30 10:03:50
-->
<template>
  <div class="demo-home">
    <h1 class="demo-home__title">
      <img src="../../log.png" />
      <span>JoyChat4.0</span>
    </h1>
    <h2 class="demo-home__desc">{{ lang === "en" ? descEn : desc }}</h2>
    <div
      class="demo-home-nav"
      v-for="(group, index) in lang === 'en' ? configEn : config"
      :key="index"
    >
      <div class="demo-home-nav__title">{{ group.title }}</div>
      <div
        class="demo-home-nav__group"
        v-for="(item, index) in group.nav"
        :key="index"
      >
        <router-link class="demo-home-nav__block" :to="item.url">
          {{ item.name }}
          <arrow-right class="demo-home-nav__icon" />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { getLangFromUserAgent } from "../utils/util";
import ArrowRight from "./ArrowRight";
export default {
  components: {
    ArrowRight,
  },
  data() {
    return {
      lang: "en",
      desc: "轻量、可靠的移动端 Vue 组件库",
      descEn: "Mobile UI Components built on Vue",
      config: [
        {
          title: "基础组件",
          nav: [
            { name: "Button 按钮", url: "/button" },
            { name: "Cell 单元格", url: "/cell" },
            { name: "Image 图片", url: "/image" },
            { name: "Layout 布局", url: "/col" },
            { name: "Popup 弹出层 ", url: "/popup" },
            { name: "Style 内置样式 ", url: "/style" },
            { name: "Toast 轻提示 ", url: "/toast" },
          ],
        },
        {
          title: "表单组件",
          nav: [
            { name: "Calendar 日历", url: "/calendar" },
            { name: "Cascader 级联选择", url: "/cascader" },
            { name: "Checkbox 复选框", url: "/checkbox" },
            { name: "DatetimePicker 时间选择", url: "/datetimePicker" },
            { name: "Field 输入框", url: "/field" },
            { name: "Form 表单", url: "/form" },
            { name: "NumberKeyboard 数字键盘", url: "/number-keyboard" },
            { name: "PasswordInput 密码输入框", url: "/passwordinput" },
            { name: "Picker 选择器", url: "/picker" },
            { name: "Radio 单选框", url: "/radio" },
            { name: "Rate 评分", url: "/rate" },
            { name: "Search 搜索", url: "/search" },
            { name: "Slider 滑块", url: "/slider" },
            { name: "Stepper 步进器", url: "/stepper" },
            { name: "Switch 开关", url: "/switch" },
            { name: "Uploader 文件上传", url: "/uploader" },
          ],
        },
        {
          title: "反馈组件",
          nav: [
            { name: "ActionSheet 动作面板", url: "/actionSheet" },
            { name: "Dialog 弹出窗", url: "/dialog" },
            { name: "DropdownMenu 下拉菜单", url: "/dropdownMenu" },
            { name: "Loading 加载", url: "/loading" },
            { name: "Notify 消息通知", url: "/notify" },
            { name: "Overlay 遮罩层", url: "/overlay" },
            { name: "PullRefresh 下拉刷新", url: "/pullRefresh" },
            { name: "ShareSheet 分享面板", url: "/sharesheet" },
            { name: "SwipeCell 滑动单元格", url: "/swipeCell" },
          ],
        },
        {
          title: "展示组件",
          nav: [
            { name: "Badge 徽标", url: "/badge" },
            { name: "Circle 环形进度条", url: "/circle" },
            { name: "Collapse 折叠面板", url: "/collapse" },
            { name: "CountDown 倒计时", url: "/countDown" },
            { name: "Divider 分割线", url: "/divider" },
            { name: "Empty 空状态", url: "/empty" },
            { name: "ImagePreview 图片预览", url: "/imagepreview" },
            { name: "Lazyload 懒加载", url: "/lazyload" },
            { name: "List 列表", url: "/list" },
            { name: "NoticeBar 通知栏", url: "/noticeBar" },
            { name: "Popover 气泡弹出框", url: "/popover" },
            { name: "Progress 进度条", url: "/progress" },
            { name: "Skeleton 骨架屏", url: "/skeleton" },
            { name: "Steps 步骤条", url: "/steps" },
            { name: "Sticky 粘性布局", url: "/sticky" },
            { name: "Swipe 轮播", url: "/swipe" },
            { name: "Tag 标签", url: "/tag" },
          ],
        },
        {
          title: "导航组件",
          nav: [
            { name: "ActionBar 动作栏", url: "/actionBar" },
            { name: "Grid 宫格", url: "/grid" },
            { name: "IndexBar 索引栏", url: "/indexbar" },
            { name: "NavBar 导航栏", url: "/navbar" },
            { name: "Pagination 分页", url: "/pagination" },
            { name: "Sidebar 侧边导航", url: "/sidebar" },
            { name: "Tab 标签页", url: "/tab" },
            { name: "Tabbar 标签栏", url: "/tabbar" },
            { name: "TreeSelect 分类选择", url: "/treeSelect" },
          ],
        },
        {
          title: "接口样例",
          nav: [
            { name: "Sso 登录", url: "/ssoLogin" },
            { name: "FormList 接口", url: "/formList" },
            { name: "上传", url: "/upload" },
            { name: "下载", url: "/download" },
            { name: "消息推送", url: "/send" },
          ],
        },
      ],
      configEn: [
        {
          title: "Basic Components",
          nav: [
            { name: "Button", url: "/button" },
            { name: "Cell", url: "/cell" },
            { name: "Image", url: "/image" },
            { name: "Layout", url: "/col" },
            { name: "Popup", url: "/popup" },
            { name: "Built-in style", url: "/style" },
            { name: "Toast", url: "/toast" },
          ],
        },
        {
          title: "Form Components",
          nav: [
            { name: "Calendar", url: "/calendar" },
            { name: "Cascader", url: "/cascader" },
            { name: "Checkbox", url: "/checkbox" },
            { name: "DatetimePicker", url: "/datetimePicker" },
            { name: "Field", url: "/field" },
            { name: "Form", url: "/form" },
            { name: "NumberKeyboard", url: "/number-keyboard" },
            { name: "PasswordInput", url: "/passwordinput" },
            { name: "Picker", url: "/picker" },
            { name: "Radio", url: "/radio" },
            { name: "Rate", url: "/rate" },
            { name: "Search", url: "/search" },
            { name: "Slider", url: "/slider" },
            { name: "Stepper", url: "/stepper" },
            { name: "Switch", url: "/switch" },
            { name: "Uploader", url: "/uploader" },
          ],
        },
        {
          title: "Action Components",
          nav: [
            { name: "ActionSheet", url: "/actionSheet" },
            { name: "Dialog", url: "/dialog" },
            { name: "DropdownMenu", url: "/dropdownMenu" },
            { name: "Loading", url: "/loading" },
            { name: "Notify", url: "/notify" },
            { name: "Overlay", url: "/overlay" },
            { name: "PullRefresh", url: "/pullRefresh" },
            { name: "ShareSheet", url: "/sharesheet" },
            { name: "SwipeCell", url: "/swipeCell" },
          ],
        },
        {
          title: "Display Components",
          nav: [
            { name: "Badge", url: "/badge" },
            { name: "Circle", url: "/circle" },
            { name: "Collapse", url: "/collapse" },
            { name: "CountDown", url: "/countDown" },
            { name: "Divider", url: "/divider" },
            { name: "Empty", url: "/empty" },
            { name: "ImagePreview", url: "/imagepreview" },
            { name: "Lazyload", url: "/lazyload" },
            { name: "List", url: "/list" },
            { name: "NoticeBar", url: "/noticeBar" },
            { name: "Popover", url: "/popover" },
            { name: "Progress", url: "/progress" },
            { name: "Skeleton", url: "/skeleton" },
            { name: "Steps", url: "/steps" },
            { name: "Sticky", url: "/sticky" },
            { name: "Swipe", url: "/swipe" },
            { name: "Tag", url: "/tag" },
          ],
        },
        {
          title: "Navigation Components",
          nav: [
            { name: "ActionBar", url: "/actionBar" },
            { name: "Grid", url: "/grid" },
            { name: "IndexBar", url: "/indexbar" },
            { name: "NavBar", url: "/navbar" },
            { name: "Pagination", url: "/pagination" },
            { name: "Sidebar", url: "/sidebar" },
            { name: "Tab", url: "/tab" },
            { name: "Tabbar", url: "/tabbar" },
            { name: "TreeSelect", url: "/treeSelect" },
          ],
        },
        {
          title: "Interface example",
          nav: [
            { name: "Sso Login", url: "/ssoLogin" },
            { name: "FormList Interface", url: "/formList" },
            { name: "Upload", url: "/upload" },
            { name: "Download", url: "/download" },
            { name: "Send message", url: "/send" },
          ],
        },
      ],
    };
  },
  created() {
    // 根据机型当前语言显示中文还是英文
    let _lang = getLangFromUserAgent();
    this.lang = _lang;
  },
  computed: {},
};
</script>

<style lang="less">
@import "../assets/var.less";
.demo-home {
  text-align: left;
  box-sizing: border-box;
  width: 100%;
  min-height: 100vh;
  padding: 46px 20px 20px;
  background: #fff;

  &__title,
  &__desc {
    padding-left: 16px;
    font-weight: normal;
    line-height: 1;
    user-select: none;
  }

  &__title {
    margin: 0 0 16px;
    font-size: 32px;

    img,
    span {
      display: inline-block;
      vertical-align: middle;
    }

    img {
      width: 32px;
    }

    span {
      margin-left: 16px;
    }

    &--small {
      font-size: 24px;
    }
  }

  &__desc {
    margin: 0 0 40px;
    color: rgba(69, 90, 100, 0.6);
    font-size: 14px;
  }
}
.demo-home-nav {
  &__title {
    margin: 24px 0 8px 16px;
    color: rgba(69, 90, 100, 0.6);
    font-size: 14px;
  }

  &__block {
    position: relative;
    display: flex;
    margin: 0 0 12px;
    padding-left: 20px;
    color: #323233;
    font-weight: 600;
    font-size: 14px;
    line-height: 40px;
    background: #f7f8fa;
    border-radius: 99px;
    transition: background 0.3s;

    &:hover {
      background: darken(#f7f8fa, 3%);
    }

    &:active {
      background: darken(#f7f8fa, 6%);
    }
  }

  &__icon {
    position: absolute;
    top: 50%;
    right: 16px;
    width: 16px;
    height: 16px;
    margin-top: -8px;
  }
}
</style>
