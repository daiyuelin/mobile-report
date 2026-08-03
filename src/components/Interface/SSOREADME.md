<!--
 * @Description: 
 * @Autor: Dai YueLin
 * @Date: 2022-04-01 12:00:41
 * @LastEditors: Dai YueLin
 * @LastEditTime: 2022-04-01 12:12:44
-->
```js
 // 获取ticket
    getUserTicket() {
      let _this = this;
      cordova.exec(
        function (result) {
          // alert(JSON.stringify(result.user_ticket, null, 4));
          _this.login(result.user_ticket);
        },
        function (error) {},
        "WorkPlus_Auth",
        "getUserTicket",
        []
      );
    },
    // 获取token
    login(data) {
      login({
        ticket: data,
        orgId: "*************",
      }).then((res) => {
        setToken(res.data.token);
        this.$toast("登录成功");
      });
    }
```