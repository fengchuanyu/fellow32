<template>
  <div class="loading" v-if="isShow">
      <img src="../assets/timg.gif" alt="" srcset="">
    </div>
  <div class="hello" v-else>
    <aplayer ref="aplayer" :audio="audio" :lrcType="0"/>
    <table class="music-list">
      <thead>
        <tr>
          <th></th>
          <th>歌曲标题</th>
          <th>歌手</th>
        </tr>
      </thead>
      <tbody>
        <tr @click="listClick(item.id)" v-for="(item,index) in musicList" :key="index">
          <td>{{index+1}}</td>
          <td>{{item.name}}</td>
          <td>{{item.artist}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Vue from 'vue';
import APlayer from '@moefe/vue-aplayer';
Vue.use(APlayer, {
  defaultCover: 'https://github.com/u3u.png',
  productionTip: true,
});
export default {
  created() {
    this.getData()
  },
  methods: {
    listClick(id){
      console.log(id);
      axios.get("https://bird.ioliu.cn/netease/song?id="+id)
      .then((res)=>{
        console.log(res);
        let thisObj = {
          name: res.data.data.name,
          artist: res.data.data.ar[0].name,
          url: res.data.data.mp3.url,
          cover: res.data.data.al.picUrl
        }
        Vue.set(this.audio,0,thisObj);
        this.$refs.aplayer.play();
      })
    },
    getData(){
      let thisArr = [];
      axios.get("https://bird.ioliu.cn/netease/playlist?id=79156709")
      .then((res)=>{
        let resArr = res.data.playlist.tracks
        console.log(resArr);
        
        thisArr = resArr.map((item)=>{
          return {
            name:item.name,
            artist:item.ar[0].name,
            album:item.al.name,
            id:item.id
          }
        })
        console.log(thisArr)
        this.musicList = thisArr;
        this.isShow = false;
      })
    }
  },
  data() {
    return {
      isShow:true,
      musicList:[],
      audio: [
        {
          name: '东西（Cover：林俊呈）',
          artist: '纳豆',
          url: 'https://cdn.moefe.org/music/mp3/thing.mp3',
          cover: 'https://p1.music.126.net/5zs7IvmLv7KahY3BFzUmrg==/109951163635241613.jpg?param=300y300', // prettier-ignore
          lrc: 'https://cdn.moefe.org/music/lrc/thing.lrc',
        }
      ],
    }
  },
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<style scoped>
.loading,.loading img{
  width: 100vw;
}
.music-list {
  width: 100%;
}
.music-list th{
  text-align: left
}

.music-list td{
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  font-size: 14px;
  padding:5px 0;
}
table{
  border-collapse: collapse;
  border:0;

}

.music-list tbody tr:nth-child(odd){
  background-color: rgb(247, 247, 247);
}
</style>
