<!--
 * @Description: 
 * @Autor: Dai YueLin
 * @Date: 2021-04-23 13:33:50
 * @LastEditors: Dai YueLin
 * @LastEditTime: 2022-03-30 17:40:42
-->

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### 代码目录结构文档：
```
JOYCHAT_MOBILE_COMPONENTS
|—docs // 文档管理
|—public
|    |—index.html //访问入口
|—src
|    |—assets    //样式库
|    |—components    //组件
|    |—store    //vuex 全局变量
|    |—utils    //工具库
|    |—App.vue    // vue入口
|    |—main.js    // 主方法入口（挂载app.vue）
|    |—router.js    // 路由配置
|—package.json // 环境配置
|—README.md // 说明
|—vue.config.js // vue配置
```

### JOYCHAT_MOBILE_COMPONENTS 2.0 框架内容：
```
1.语言的切换展示
2.组件的展示用例：
  基础组件
    Button 按钮
    Cell 单元格
    Image 图片
    Layout 布局
    Popup 弹出层
    Style 内置样式
    Toast 轻提示
  表单组件
    Calendar 日历
    Cascader 级联选择
    Checkbox 复选框
    DatetimePicker 时间选择
    Field 输入框
    Form 表单
    NumberKeyboard 数字键盘
    PasswordInput 密码输入框
    Picker 选择器
    Radio 单选框
    Rate 评分
    Search 搜索
    Slider 滑块
    Stepper 步进器
    Switch 开关
    Uploader 文件上传
  反馈组件
    ActionSheet 动作面板
    Dialog 弹出框
    DropdownMenu 下拉菜单
    Loading 加载
    Notify 消息通知
    Overlay 遮罩层
    PullRefresh 下拉刷新
    ShareSheet 分享面板
    SwipeCell 滑动单元格
  展示组件
    Badge 徽标
    Circle 环形进度条
    Collapse 折叠面板
    CountDown 倒计时
    Divider 分割线
    Empty 空状态
    ImagePreview 图片预览
    Lazyload 懒加载
    List 列表
    NoticeBar 通知栏
    Popover 气泡弹出框
    Progress 进度条
    Skeleton 骨架屏
    Steps 步骤条
    Sticky 粘性布局
    Swipe 轮播
    Tag 标签
  导航组件
    Grid 宫格
    IndexBar 索引栏
    NavBar 导航栏
    Pagination 分页
    Sidebar 侧边导航
    Tab 标签页
    Tabbar 标签栏
    TreeSelect 分类选择
3.主题的定制
4.样式的修改
5.文档管理系统架构集成
```
### JOYCHAT_MOBILE_COMPONENTS 3.0 框架内容：
```
1.移动端适配
2.缓存机制
3.请求接口封装
4.接口样例
  1)sso单点登录
  2)form表单
      增加
      删除
      查询
      修改
  3)upload上传
      base64上传
      form-data上传
  4)download下载
  5)消息推送
      文本推送
      图片推送
```