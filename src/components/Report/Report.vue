<!--
 * @Description: 
 * @Autor: Dai YueLin
 * @Date: 2023-08-24 10:40:38
 * @LastEditors: Dai YueLin
 * @LastEditTime: 2026-08-10 17:11:29
-->
<template>
  <div class="report">
    <div v-if="!Empty">
      <div>
        <div v-if="sfStatus">
          <div class="mm-top">
            <div
              style="
                font-family: SourceHanSansCN-Bold;
                font-size: 0.75rem;
                color: #ffffff;
                font-weight: 700;
                margin-top: 2.2rem;
              "
            >
              云影像胶片
            </div>
            <div
              style="
                font-family: SourceHanSansCN-Normal;
                font-size: 0.43rem;
                color: rgb(229, 229, 229);
                font-weight: 400;
                margin-top: 0.2rem;
              "
            >
              <span>随时随地</span>
              <span style="margin-left: 0.3rem">方便调阅</span>
            </div>
          </div>
          <div style="height: 100%; background-color: #1aa858">
            <div class="gradient">
              <div>
                <div
                  style="
                    font-family: SourceHanSansCN-Bold;
                    font-size: 0.6rem;
                    color: #305e4e;
                    font-weight: 700;
                  "
                >
                  密码登陆
                </div>
                <div
                  style="
                    font-family: SourceHanSansCN-Normal;
                    font-size: 0.32rem;
                    color: #1aa858;
                    font-weight: 400;
                    margin-top: 0.32rem;
                  "
                >
                  该分享链接开启了密码保护功能，请在下方输入密码进行验证！
                </div>
              </div>
              <div style="margin-top: 1.28rem">
                <van-form @submit="onSubmitYhmm">
                  <van-field
                    v-model="passwordYh"
                    name="密码"
                    type="digit"
                    placeholder="请输入密码"
                    :rules="[{ required: true }]"
                  />
                  <div style="margin-top: 0.85rem">
                    <van-button
                      block
                      color="#1aa858"
                      type="info"
                      native-type="submit"
                      >提交</van-button
                    >
                  </div>
                </van-form>
              </div>
            </div>
          </div>
        </div>
        <div v-if="yyStatus">
          <div class="mm-top">
            <div
              style="
                font-family: SourceHanSansCN-Bold;
                font-size: 0.75rem;
                color: #ffffff;
                font-weight: 700;
                margin-top: 2.2rem;
              "
            >
              云影像胶片
            </div>
            <div
              style="
                font-family: SourceHanSansCN-Normal;
                font-size: 0.43rem;
                color: rgb(229, 229, 229);
                font-weight: 400;
                margin-top: 0.2rem;
              "
            >
              <span>随时随地</span>
              <span style="margin-left: 0.3rem">方便调阅</span>
            </div>
          </div>
          <div style="height: 100%; background-color: #1aa858">
            <div class="gradient">
              <div>
                <div
                  style="
                    font-family: SourceHanSansCN-Bold;
                    font-size: 0.6rem;
                    color: #305e4e;
                    font-weight: 700;
                  "
                >
                  身份证号登陆
                </div>
                <div
                  style="
                    font-family: SourceHanSansCN-Normal;
                    font-size: 0.32rem;
                    color: #1aa858;
                    font-weight: 400;
                    margin-top: 0.32rem;
                  "
                >
                  请输入身份证号后6位数字进行验证！
                </div>
              </div>
              <div style="margin-top: 1.28rem">
                <van-form @submit="checkyhsfz">
                  <van-password-input
                    ref="targetInput"
                    :value="passwordSFZ"
                    :gutter="6"
                    :focused="showKeyboard"
                    :length="6"
                    placeholder="请输入后6位身份证号"
                    :rules="[{ required: true }]"
                    @focus="showKeyboard = true"
                  />
                  <!-- 数字键盘 -->
                  <van-number-keyboard
                    v-model="passwordSFZ"
                    extra-key="X"
                    :show="showKeyboard"
                    @blur="showKeyboard = false"
                  />
                  <div style="margin-top: 0.85rem">
                    <van-button
                      block
                      color="#1aa858"
                      type="info"
                      native-type="submit"
                      >提交</van-button
                    >
                  </div>
                </van-form>
              </div>
            </div>
          </div>
        </div>
        <div class="content" v-if="!sfStatus && !yyStatus">
          <!-- <iframe :src="report.viewer_url" width="500" height="400" frameborder="0"></iframe> -->
          <div class="top">
            <div>
              <div class="tittle-one">检查报告</div>
              <div class="tittle-two">
                本结果仅反应检查者当时的情况及仅供临床医生参考
              </div>
            </div>
            <img src="../../assets/yiyuan.png" class="img" />
          </div>
          <div class="info">
            <div class="card">
              <img
                src="../../assets/nvtouxiang.png"
                class="img"
                v-if="report.sex == '女'"
              />
              <img src="../../assets/nantouxiang.png" class="img" v-else />
              <div>
                <div>
                  <span class="name">{{ report.name }}</span>
                  <span class="sex">{{ report.sex }}</span>
                  <span class="age">{{ report.age }}</span>
                </div>
                <div style="margin-top: 0.15rem">
                  <span class="jzkh">就诊卡号</span>
                  <span class="hm">{{ report.cardno }}</span>
                </div>
              </div>
            </div>
          </div>
          <div class="jcxx">
            <div
              style="
                padding-top: 0.2rem;
                padding-left: 0.3rem;
                padding-bottom: 0.2rem;
              "
            >
              <img src="../../assets/yiyuan.png" class="img" />
              <span class="yy"> {{ report.organ_name }} </span>
            </div>
            <div class="card">
              <div
                style="
                  display: flex;
                  justify-content: left;
                  align-items: center;
                  margin-bottom: 0.2rem;
                "
              >
                <div class="line"></div>
                <div style="font-size: 0.45rem; color: #1aa858">检查信息</div>
              </div>
              <div>
                <div
                  style="
                    margin-bottom: 0.3rem;
                    display: flex;
                    justify-content: left;
                  "
                >
                  <div class="key">检查时间:</div>
                  <div class="value">{{ report.chk_dt }}</div>
                </div>
                <div
                  style="
                    margin-bottom: 0.3rem;
                    display: flex;
                    justify-content: left;
                  "
                >
                  <div class="key">患者来源:</div>
                  <div class="value">{{ mark }}</div>
                </div>
                <div
                  style="
                    margin-bottom: 0.3rem;
                    display: flex;
                    justify-content: left;
                  "
                >
                  <div class="key">检查编号:</div>
                  <div class="value">{{ report.ris_study_id }}</div>
                </div>
                <div
                  style="
                    margin-bottom: 0.3rem;
                    display: flex;
                    justify-content: left;
                  "
                >
                  <div class="key">检查类型:</div>
                  <div class="value">{{ report.chk_modality }}</div>
                </div>
                <div
                  style="
                    margin-bottom: 0.3rem;
                    display: flex;
                    justify-content: left;
                  "
                >
                  <div class="key">检查项目:</div>
                  <div class="value">
                    {{ report.proj_name }}
                  </div>
                </div>
                <div
                  style="
                    margin-bottom: 0.3rem;
                    display: flex;
                    justify-content: left;
                  "
                >
                  <div class="key">检查部位:</div>
                  <div class="value">
                    {{ report.ckpt_name }}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="jcsj">
            <div class="card" style="">
              <div
                style="
                  display: flex;
                  justify-content: left;
                  align-items: center;
                  margin-bottom: 0.2rem;
                "
              >
                <div class="line"></div>
                <div style="font-size: 0.45rem; color: #1aa858">检查所见</div>
              </div>
              <div class="describ">{{ report.rpt_seeing }}</div>
            </div>
          </div>
          <div class="jcsj">
            <div class="card" style="">
              <div
                style="
                  display: flex;
                  justify-content: left;
                  align-items: center;
                  margin-bottom: 0.2rem;
                "
              >
                <div class="line"></div>
                <div style="font-size: 0.45rem; color: #1aa858">检查描述</div>
              </div>
              <div class="describ">
                {{ report.rpt_descrip }}
              </div>
            </div>
          </div>
          <div class="jcsj">
            <div class="card" style="">
              <div class="menu">
                <!-- <div @click="openView" style="margin-right: 0.5rem">
                  <div>
                    <img src="../../assets/yixueyingxiang.png" class="icon" />
                  </div>
                  <div class="tittle">查看影像</div>
                </div>
                <div @click="openShare">
                  <div>
                    <img src="../../assets/fenxiang.png" class="icon" />
                  </div>
                  <div class="tittle">分享报告</div>
                </div> -->
                <div
                  @click="openView"
                  style="
                    width: 4.3rem;
                    height: 1.07rem;
                    background-color: rgb(26, 168, 88);
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding-left: 32px;
                    padding-right: 32px;
                    border-radius: 8px;
                    box-sizing: border-box;
                    flex-grow: 0;
                  "
                >
                  <img
                    src="../../assets/image-fill.png"
                    style="height: 0.48rem"
                  />
                  <div
                    style="
                      font-family: SourceHanSansCN-Regular;
                      font-size: 0.45rem;
                      color: #ffffff;
                      text-align: center;
                      font-weight: 400;
                    "
                  >
                    查看影像
                  </div>
                </div>
                <div
                  @click="openShare"
                  style="
                    width: 4.3rem;
                    height: 1.07rem;
                    background-color: rgb(26, 168, 88);
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding-left: 32px;
                    padding-right: 32px;
                    border-radius: 8px;
                    box-sizing: border-box;
                    flex-grow: 0;
                  "
                >
                  <img src="../../assets/share.png" style="height: 0.48rem" />
                  <div
                    style="
                      font-family: SourceHanSansCN-Regular;
                      font-size: 0.45rem;
                      color: #ffffff;
                      text-align: center;
                      font-weight: 400;
                    "
                  >
                    分享报告
                  </div>
                </div>
              </div>
            </div>
          </div>

          <van-popup v-model="shareShow" closeable round position="bottom">
            <div class="fx">
              <div class="fxsz">分享设置</div>
              <div class="line"></div>
              <div class="fxsj">
                <div class="tittle">有效期</div>
                <div class="tip">有效期过后分享链接失效，无法继续查看</div>
                <van-radio-group
                  v-model="day"
                  icon-size="0.4rem"
                  direction="horizontal"
                  checked-color="#1aa858"
                >
                  <van-radio name="1"
                    ><span style="font-size: 0.4rem">1天内有效</span></van-radio
                  >
                  <van-radio name="3"
                    ><span style="font-size: 0.4rem">3天内有效</span></van-radio
                  >
                  <van-radio name="7"
                    ><span style="font-size: 0.4rem">7天内有效</span></van-radio
                  >
                </van-radio-group>
              </div>
              <div class="fxmm">
                <van-checkbox
                  name="a"
                  icon-size="0.4rem"
                  shape="square"
                  checked-color="#1aa858"
                  v-model="checked"
                  @change="changemm"
                  ><div class="tittle">密码保护</div>
                  <div class="mm-tip">
                    开启后需要输入下方设置的数字密码方可查看
                  </div></van-checkbox
                >
                <div style="margin-top: 0.1rem">
                  <van-form ref="myForm">
                    <van-field
                      v-if="checked"
                      v-model="password"
                      name="密码"
                      type="number"
                      placeholder="请输入6位数字密码"
                      maxlength="6"
                      :rules="[
                        { required: true, message: '请输入密码' },
                        { pattern: /^\d{6}$/, message: '请输入6位纯数字' },
                      ]"
                    />
                  </van-form>
                </div>
              </div>
              <div class="line"></div>
              <div class="qr" @click="onSubmit">
                <div
                  style="
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-direction: column;
                  "
                >
                  <div class="round">
                    <img src="../../assets/qrCode.png" class="code-icon" />
                  </div>
                  <div>二维码分享</div>
                </div>
              </div>
            </div>
          </van-popup>
          <van-dialog
            v-model="dialogShow"
            :title-style="{ color: '#1aa858' }"
            title="二维码分享"
            theme="round-button"
            confirm-button-text="返回"
            confirmButtonColor="#1aa858"
          >
            <div
              style="
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
              "
            >
              <div>
                <img
                  :src="`data:image/png;base64,${url_base64}`"
                  class="qr_style"
                />
              </div>
              <div>
                <span style="font-size: 0.35rem"
                  >微信中长按二维码保存或发送</span
                >
              </div>
              <div v-if="password !== ''">
                <span style="font-size: 0.4rem; color: grey">密码:</span
                ><span
                  style="font-size: 0.4rem; color: red; margin-left: 0.4rem"
                  >{{ password !== "" ? password : "未设置" }}</span
                >
              </div>
            </div>
          </van-dialog>
        </div>
      </div>
    </div>
    <div v-if="Empty">
      <van-empty
        :image="require('../../assets/empty.jpg')"
        description="暂无数据，请重新扫码或联系医院！"
      />
    </div>
  </div>
</template>

<script>
import { queryReport, verifypwd, shareUrl, getToken } from "@/api/user";
import { setToken, removeToken } from "@/utils/system";
import { storeGet } from "@/utils/localStorage";

const webConfig = window.webConfig;

export default {
  name: "Report",

  props: {},
  data() {
    return {
      //数据是否为空
      Empty: true,
      showKeyboard: false,
      //用户验证界面状态
      yyStatus: false,
      //身份证=验证界面状态
      sfStatus: false,
      //用户设置的密码
      passwordYh: "",
      //用户身份证号
      passwordSFZ: "",
      //是否打开二维码提示框
      dialogShow: false,
      //二维码
      url_base64: "",
      //是否选中密码框
      checked: false,
      //是否分享提示
      shareShow: false,
      day: "1",
      password: "",
      report: {
        organ_name: "",
        organ_code: "",
        name: "",
        cardno: "",
        sex: "",
        age: "",
        chk_modality: "",
        op_em_hp_ex_mark: "",
        proj_name: "",
        ris_study_id: "",
        ckpt_name: "",
        chk_dt: "",
        rpt_code: "",
        result_id: "",
        rpt_dt: "",
        rpt_name: "",
        rv_name: "",
        rpt_seeing: "",
        rpt_descrip: "",
        rpt_critical_value: "",
        viewer_url: "",
        api_status: "",
        is_report: 0,
        is_upload: 1,
      },
    };
  },
  computed: {
    mark() {
      if (this.report.op_em_hp_ex_mark == "1") {
        return "门诊";
      } else {
        return "其他";
      }
    },
  },
  watch: {
    showKeyboard: {
      handler(newValue) {
        if (newValue == true) {
          // 延迟执行，等待键盘弹出完成
          setTimeout(() => {
            this.$refs.targetInput.scrollIntoView({
              behavior: "smooth",
              block: "start", // 居中显示输入框
            });
          }, 300);
        }
      },
      immediate: true, // 立即执行监听
    },
  },
  created() {},
  mounted() {
    removeToken();
    getToken({
      client_id: webConfig.client_id,
      client_secret: webConfig.client_secret,
    })
      .then((res) => {
        setToken(res.access_token);
        //初始化查询
        if (
          this.$route.query.source == undefined ||
          this.$route.query.param == undefined
        ) {
          this.Empty = true;
        } else {
          this.Empty = false;
          if (this.$route.query.source == "fx") {
            if (this.$route.query.pwflag == "1") {
              this.sfStatus = true;
            } else {
              //免密分享
              this.sfStatus = false;
              this.queryReport();
            }
          } else {
            this.yyStatus = true;
          }
        }
      })
      .catch(() => {
        this.Empty = true;
        this.$toast.fail("网络问题请退出重新进入！");
      });
    // this.report = {
    //     organ_name: "南京市江宁区淳化街道方山社区卫生服务中心",
    //     name: "潘惠华",
    //     cardno: "320423196803251611",
    //     sex: "女",
    //     age: "57Y",
    //     chk_modality: "CT",
    //     op_em_hp_ex_mark: "1",
    //     proj_name: "胸部常规CT",
    //     ris_study_id: "888888888897250794377491",
    //     ckpt_name: "胸部",
    //     chk_dt: "2025-07-19 10:09:00",
    //     study_primary_id: "6b37e7667d7b0869e9ae5718a9d5acc2",
    //     rpt_code: "888888888897250794377491",
    //     result_id: "888888888897250794377491",
    //     rpt_dt: "2025-07-19 10:20:04",
    //     rpt_name: "张林岑",
    //     rv_name: "张俊",
    //     rpt_seeing: "1.两肺未见明显浸润性病变；2.冠状动脉壁钙化。",
    //     rpt_descrip:
    //       "胸廓对称，气管居中。双肺野清晰，纹理分布、走行自然，未见明显异常密度影。气管、支气管开口通畅。肺门及纵隔未见明显增大淋巴结。心脏形态、密度未见明显异常，冠状动脉管壁见钙化。两侧胸腔无积液，两侧胸膜无肥厚。",
    //     rpt_critical_value: "",
    //     viewer_url:
    //       "http://20.30.1.81/mtyw-viewer-for-nt/imaging/imageview/index.html?ThirdPartQueryID=tisS2sALtCSrql%2FzkpfzXSUh0Y3BFSX0em8QkmIkhcGICje18P7HuDp32WNyQzbauGbtho7cbYQBerJ8iBQ0xl%2Fnbj5nyMl%2FG9RyLUHEr1RXMfGA7MX%2FLsx1e3kPY%2BjJ6EhFEr7u%2BtpPyk3vEcaJtXQ9vI%2FG5pnJSL%2BRO1yuShKnnfNaxJQ7AJBmeSNHRpaKR7bI%2F%2F23hBb0xm7OnFQOa2uPCI0%2F5mJls%2Fv8umiz1vQ1mcUnv25IV1XIBGHTM9oHhX2Rjzi8LD7Yqenaizkziw2mEZ07RLhCzxQ5Z647NqGF7vLVZdu1s3uwoe6XFlGno3VhblrRw1pMpcZcqGJnhQ%3D%3D&ThirdPartType=JIANGSUC&sevToken=QYikiVs8m1ngh1WCqtYW3ArXEE6r4Fki9FyGjdP2QcU9WyQ1RcquBMgT6XqSH%2btBMbLiq%2f7ViPayT7heky6MoRMiQ3rD5IVbWVHVeKjes8FX6K0lWoVPQ7RSyZtA6rYRl2lvbC2eA8gzBvpQhwY1yIQp2oS1ovVPk52BUvtbtMQx5LD7%2b3GJFYXEAT898nV3YJgy52xjcwaC1rhVnxRIKIuRJBOFEkxzmgcAzIz%2fduxXvqSYGu6%2b9m1wgJY8S%2fnaofQnWYGC5YZz7r9Gu0RBoLCkbVIpcFh0z86jvz0rJwAr8qEylms%2f3azmV4WRrVpPhk2DQgUuewXHlXOxFukOvg%3d%3d",
    //     api_status: 200,
    //   };
    //   this.Empty = false;
    //   this.sfStatus = false;
    //   this.yyStatus = false;
  },
  methods: {
    openView() {
      if (this.report.is_upload == "1") {
        window.open(this.report.viewer_url);
      } else {
        this.$toast.fail("请联系医院上传影像！");
      }
    },
    queryReport() {
      if (storeGet("Admin-Token") != "" && storeGet("Admin-Token") != null) {
        queryReport({ encrypted: this.$route.query.param }).then((res) => {
          this.report = Object.assign({}, this.report, res);
          if (this.report.is_report == "1") {
            this.report = res;
            this.Empty = false;
            this.sfStatus = false;
            this.yyStatus = false;
            this.$toast("查询成功！");
          } else {
            this.Empty = true;
            this.$toast("未查询到相关数据！");
          }
        });
      } else {
        this.$toast.fail("网络问题请退出重新进入！");
      }
    },
    openShare() {
      if (this.$route.query.source == "fx") {
        this.$toast("禁止二次分享！");
      } else {
        this.shareShow = true;
      }
    },
    //
    onSubmit() {
      //this.shareShow=false;
      let data = {};
      data["name"] = this.report.name;
      data["cardno"] = this.report.cardno;
      data["organ_code"] = this.report.organ_code;
      data["ris_study_id"] = this.report.ris_study_id;
      data["chk_dt"] = this.report.chk_dt.substring(0, 10);
      data["source"] = "fx";
      data["share_days"] = this.day;
      if (this.password !== "") {
        data["password"] = this.password;
      }
      if (this.checked) {
        this.$refs.myForm
          .validate()
          .then(() => {
            shareUrl(data).then((res) => {
              if (res.api_status) {
                this.url_base64 = res.url_base64;
                this.shareShow = false;
                this.dialogShow = true;
              } else {
                this.$toast.fail(res.detail);
              }
            });
          })
          .catch(() => {
            this.$toast.fail("请输入密码");
          });
      } else {
        shareUrl(data).then((res) => {
          if (res.api_status) {
            this.url_base64 = res.url_base64;
            this.shareShow = false;
            this.dialogShow = true;
          } else {
            this.$toast.fail(res.detail);
          }
        });
      }
    },
    //校验用户密码
    onSubmitYhmm() {
      verifypwd({
        encrypted_params: this.$route.query.param,
        source: "fx",
        password: this.passwordYh,
      }).then((res) => {
        if (res.check_status) {
          //校验成功
          this.queryReport();
          // this.sfStatus = false;
          // this.yyStatus = false;
        } else {
          this.$toast.fail(res.detail);
        }
      });
    },
    //校验身份证号后6位
    checkyhsfz() {
      if (this.passwordSFZ.trim().length < 6) {
        // 去除空格后判断是否为空
        this.$toast("请输入身份证号后6位！"); // 提示用户
        return; // 阻止后续提交
      } else {
        verifypwd({
          encrypted_params: this.$route.query.param,
          source: "bg",
          password: this.passwordSFZ,
        }).then((res) => {
          if (res.check_status) {
            //校验成功
            this.queryReport();
            // this.sfStatus = false;
            // this.yyStatus = false;
          } else {
            this.$toast.fail(res.detail);
          }
        });
      }
    },
    changemm() {
      this.password = "";
      // if (this.checked) {
      //   this.password = "";
      // }
    },
  },
};
</script>


<style lang="less" scoped>
@primary-color: #1aa858;
.report {
  .gradient {
    background-image: linear-gradient(180deg, #b5e7d8 0%, #ffffff 19%);
    border-radius: 30px 30px 0px 0px;
    height: 500px;
    padding: 1.44rem 0.64rem 0 0.64rem;
  }
  .mm-top {
    background-color: @primary-color;
    background: url("../../assets/image.png") no-repeat;
    background-size: 100% 100%;
    font-size: 0.4rem;
    height: 5rem;
    box-sizing: border-box;
    padding: 0.5rem 0.5rem 0.5rem 1rem;
    color: #ffffff;
  }
  /deep/.van-password-input {
    margin: 0;
    .van-password-input__item {
      background-color: #1aa85814;
    }
  }
  /deep/.van-form {
    .van-cell.van-field {
      border: 3px solid rgba(26, 168, 88, 1);
      border-radius: 8px;
    }
  }
  .content {
    min-height: 500px;
    background-image: linear-gradient(
      to bottom,
      @primary-color,
      transparent 300px
    );
    .top {
      margin-left: 10px;
      padding-top: 15px;
      display: flex;
      justify-content: space-between;
      align-items: end;
      .tittle-one {
        font-size: 20px;
        color: #f9f6ff;
        margin-bottom: 8px;
      }
      .tittle-two {
        font-size: 12px;
        color: #f9f6ff;
        width: 150px;
        line-height: 1.5;
      }
      .img {
        height: 50px;
        margin-right: 10px;
        margin-bottom: 3px;
      }
    }
    .info {
      margin-left: 10px;
      margin-top: 8px;
      .card {
        background-color: white;
        margin-right: 10px;
        min-height: 50px;
        border-radius: 5px;
        display: flex;
        justify-content: left;
        align-items: center;
        padding: 8px;
        .img {
          width: 40px;
          margin-right: 12px;
        }
        .name {
          font-size: 17px;
          font-weight: bold;
          margin-right: 8px;
          color: #2d3b46;
        }
        .sex {
          color: #0ad0d0;
          font-size: 13px;
          margin-right: 8px;
        }
        .age {
          color: #88888291;
          font-size: 13px;
          margin-right: 8px;
        }
        .jzkh {
          color: #2c2c2e;
          font-size: 13px;
          margin-right: 8px;
        }
        .hm {
          color: #616061;
          font-size: 13px;
        }
      }
    }
    .jcxx {
      .img {
        width: 15px;
        margin-right: 5px;
        vertical-align: middle;
      }
      background-color: #fbe3c7;
      margin: 10px;
      margin-top: 5px;
      border-radius: 5px;
      .yy {
        font-size: 14px;
        color: #eb9a06;
        vertical-align: middle;
      }
      .card {
        background-color: white;
        min-height: 200px;
        border-radius: 5px;
        padding: 15px 10px;
        .line {
          background-color: @primary-color;
          width: 3px;
          height: 15px;
          border-radius: 2px;
          margin-right: 5px;
        }
        .key {
          color: #33333a;
          margin-right: 10px;
          font-size: 15px;
          width: 75px;
          height: 22px;
          line-height: 22px;
        }
        .value {
          color: #585858;
          font-size: 14px;
          height: 22px;
          line-height: 22px;
        }
        .menu {
          display: flex;
          justify-content: space-between;
          align-items: center;
          .icon {
            width: 45px;
          }
          .tittle {
            color: #5c5c60;
            width: 50px;
            text-align: center;
          }
        }
      }
    }
    .jcsj {
      .menu {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .icon {
          width: 45px;
        }
        .tittle {
          color: #5c5c60;
          width: 50px;
          text-align: center;
        }
      }
      background-color: #fbe3c7;
      margin: 10px;
      margin-top: 5px;
      border-radius: 5px;

      .card {
        background-color: white;
        border-radius: 5px;
        padding: 15px 10px;
        .line {
          background-color: @primary-color;
          width: 3px;
          height: 15px;
          border-radius: 2px;
          margin-right: 5px;
        }
        .describ {
          color: #585858;
          font-size: 13px;
        }
      }
    }
  }
  .fx {
    padding: 15px;
    .fxsz {
      height: 20px;
      text-align: center;
      font-size: 15px;
      color: @primary-color;
    }
    .line {
      height: 1px;
      background-color: #eae9e9;
      margin: 15px 0 10px 0;
    }
    .tittle {
      font-weight: bold;
      font-size: 13px;
    }
    .tip {
      color: #9fa0a9;
      font-size: 11px;
      margin-top: 3px;
      margin-bottom: 5px;
    }
    .mm-tip {
      color: #9fa0a9;
      font-size: 11px;
    }
    .fxsj {
      background-color: #f3f4f6;
      padding: 8px 5px 8px 8px;
      border-radius: 5px;
    }
    .fxmm {
      margin-top: 8px;
      background-color: #f3f4f6;
      padding: 8px 8px 8px 8px;
      border-radius: 5px;
    }
    .qr {
      display: flex;
      justify-content: center;
      align-items: center;
      .round {
        width: 40px;
        height: 40px;
        background-color: #f3f4f6;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        .code-icon {
          width: 30px;
        }
      }
    }
  }
}
.qr_style {
  height: 200px;
  width: 200px;
}
</style>
