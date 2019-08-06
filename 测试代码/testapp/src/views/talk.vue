<template>
  <div>
    <input type="text" v-model="talktext" />
    <button @click="send">send</button>
  </div>
</template>
<script>
import md5 from "blueimp-md5";
export default {
  created() {
    
  },
  data() {
    return {
      talktext: ""
    };
  },
  methods: {
    getTimeStemp() {
      let dateStr = Date.parse(new Date());
      dateStr = dateStr.toString().substr(0, 10);
      return dateStr;
    },
    getNonceStr() {
      let str = Math.random()
        .toString(36)
        .substr(2);
      return str;
    },
    getReqSign(params,appkey) {
      let arr = [];
      let obj = {};
      let str = "";
      // 1、对象排序
      arr = Object.keys(params).sort();
      arr.forEach((item, index, arr) => {
        obj[item] = params[item];
      });

      // 2、参数对按URL键值对的格式拼接成字符串
      for (let item in obj) {
        if (obj[item] != "") {
          str += item + "=" + encodeURI(obj[item]) + "&";
        }
      }
      //3将应用密钥以app_key为键名，组成URL键值拼接到字符串末尾
      str += "app_key=" + appkey;
        console.log(str)
      // 4对字符串S进行MD5运算，将得到的MD5值所有字符转换成大写
      str = md5(str).toUpperCase();

      return str;
    },
    send() {
        let API_PROXY = 'https://bird.ioliu.cn/v2?url=';
      let apiUrl = "https://api.ai.qq.com/fcgi-bin/nlp/nlp_textchat";
      let params = {
        app_id: "2111901624",
        time_stamp: this.getTimeStemp(),
        nonce_str: this.getNonceStr(),
        session: "10000",
        question: this.talktext
      };
      let appkey = "ijS7lw3tX4KmI3Kf";
      params.sign = this.getReqSign(params, appkey);
      axios.get(API_PROXY+apiUrl,{
          params:{
              ...params
          }
      }).then((res)=>{
          console.log(res)
      })
    //   axios({
    //       url:API_PROXY+apiUrl,
    //     method: 'post',
    //     data: {...params},
    //   })
    //     .then(res => {
    //       console.log(res);
    //     });
    }
  }
};
</script>
<style scoped>
</style>
